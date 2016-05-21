/**
 * Created by Tomer on 12/04/2016.
 */


$(function(){
    console.log("loaded");
    var slide = 0,
        boxes = $('.s_mini_box');
    $('.s_mini_boxs').on('click','.s_mini_box',function() {
        $('.s_mini_box').removeClass('actb');
        $(this).addClass('actb');
        slide = $(this).data('slide');
        $('.the_slides').css('margin-left',slide + 'vw');
    });

    var rotate = function(){
        $('.s_mini_box').removeClass('actb');
        if (slide === -300){
            slide = 0;
            $('.the_slides').css('margin-left',slide + 'vw');
            $(boxes[0]).addClass('actb');
        }
        else {
            slide -= 100;
            $('.the_slides').css('margin-left',slide + 'vw');
            $(boxes[Math.abs(slide/100)]).addClass('actb');
        }
        setTimeout(rotate,3000);

    }
    setTimeout(rotate,3000);
    //setInterval(rotate,3000);
});