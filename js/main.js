/**
 * Created by Tomer on 12/04/2016.
 */

function slides() {
    var backgrounds = document.querySelectorAll('.bg'),
        faSquares = document.querySelectorAll('.fa-square');
    for (var i = 0; i < 4; i++) {
        faSquares[i].addEventListener('click',
            function () {
                for (var j = 0; j < 4; j++) {
                    faSquares[j].classList.remove("active-square");
                    backgrounds[j].classList.remove("active-slide");
                }
                var hrefValue = this.getAttribute("href");
                var target = document.querySelector(hrefValue);
                target.className += " active-slide";
                this.className += " active-square";
            });
    }
};
slides();