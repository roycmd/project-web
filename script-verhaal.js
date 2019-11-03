    var bar = document.querySelector(".bar");

    function progressIndicator() {

        var scroll = document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        percentage = (scroll / height) * 100;
        var progressbar = percentage;

        document.getElementById("bar").style.width = progressbar + "%";
    }
    window.addEventListener("scroll", progressIndicator);


    // bronnen:
    //Bron 1: Duckett, J. Javascript & JQuery.
// Bron 2 : Scroll indicator W3 Schools: https://www.w3schools.com/howto/howto_js_scroll_indicator.asp/
