/*
*   jQuery.animate-progressbar
*   ----------------------
* 	source: http://stackoverflow.com/questions/5047498/how-do-you-animate-the-value-for-a-jquery-ui-progressbar
* 
*   usage: $('#progressbar').animate_progressbar(value [, duration] [, easing] [, complete] );
*
*/
(function ($) {

     $.fn.animate_progressbar = function(value,duration,easing,complete) {
        if (value == null)value = 0.1;
        if (duration == null)duration = 1000;
        if (easing == null)easing = 'linear';
        if (complete == null)complete = function(){};
        var progress = this.find('.ui-progressbar-value');
        progress.stop(true).animate({
            width: value + '%'
        },duration,easing,function(){
            if(value>=99.5){
                progress.addClass('ui-corner-right');
            } else {
                progress.removeClass('ui-corner-right');
            }
            complete();
        });
    };

})(jQuery);