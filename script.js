    var button = document.querySelector("#filter-button");
    var hover = document.getElementById("primary-button");
    var story = document.getElementById("verhaal");
    var leeslijst = document.querySelector(".leeslijst");
    var hands = document.querySelector('.clap'),
        count = 55;
    var likes = document.getElementById("counter");



    //Functies
    function showFilter() {
        var filter = document.getElementById("filter-test").classList.toggle("filter");
        //        if (filter.style.display === "none") {
        //            filter.style.display = "block";
        //        } else {
        //            console.log("Button works")
        //            filter.style.display = "none";
        //        }
    }

    function mouseOver() {
        this.style.backgroundColor = "#CA2B55";
    }

    function mouseOut() {
        this.style.backgroundColor = "#FF3268";
    }

    function shadowOver() {
        this.style.boxShadow = "0 0.4em 1.2em 0 rgba(0, 0, 0, 0.20)";
    }

    function shadowOut() {
        this.style.boxShadow = "0 0 0 0";
    }


    function replaceImage() {
        leeslijst.src = "/assets/LeeslijstOn.svg";
    }

    function counter() {
        count += 1;
        likes.innerHTML = count;
    }


    //Alle event listeners

    hands.addEventListener('click', counter);
    leeslijst.addEventListener("click", replaceImage);
    button.addEventListener("click", showFilter);
    hover.addEventListener("mouseover", mouseOver);
    hover.addEventListener("mouseout", mouseOut);
    story.addEventListener("mouseover", shadowOver);
    story.addEventListener("mouseout", shadowOut);

    filterSelection("all")

    function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("filterDiv");
        if (c == "all") c = "";
        // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
        for (i = 0; i < x.length; i++) {
            w3RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
        }
    }

    // Show filtered elements
    function w3AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
                element.className += " " + arr2[i];
            }
        }
    }

    // Hide elements that are not selected
    function w3RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }

    // Add active class to the current button (highlight it)
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
