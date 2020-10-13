function explore() {
    document.getElementById('content5').style.transform = "translate(0vw, -100vh)"
}

function tohome() {
    document.getElementById('content5').style.transform = "translate(0vw, 0vh)"
}

function toeditors() {
    document.getElementById("content1").style.transform = "translate(-300vw, 0)";
    document.getElementById("content2").style.transform = "translate(-200vw, 0)";
    document.getElementById("modal").style.transform = "translate(-200vw, 0)";
    document.getElementById("content3").style.transform = "translate(-100vw, 0)";
    document.getElementById("content4").style.transform = "translate(0vw, 0)";
    document.getElementById('left').onclick = function () {
        toprinciples();
    }
    document.getElementById('left').innerHTML = "Principles"
    document.getElementById('right').style.display = 'none';
}

function toprinciples() {
    document.getElementById("content1").style.transform = "translate(-200vw, 0)";
    document.getElementById("content2").style.transform = "translate(-100vw, 0)";
    document.getElementById("modal").style.transform = "translate(-100vw, 0)";
    document.getElementById("content3").style.transform = "translate(0vw, 0)";
    document.getElementById("content4").style.transform = "translate(100vw, 0)";
    document.getElementById('right').onclick = function () {
        toeditors();
    }
    document.getElementById('right').innerHTML = "Editors"
    document.getElementById('left').onclick = function () {
        toindex();
    }
    document.getElementById('left').innerHTML = "Index"
    document.getElementById('right').style.display = 'initial';
}

function toindex() {
    document.getElementById("content1").style.transform = "translate(-100vw, 0)";
    document.getElementById("content2").style.transform = "translate(0vw, 0)";
    document.getElementById("modal").style.transform = "translate(0vw, 0)";
    document.getElementById("content3").style.transform = "translate(100vw, 0)";
    document.getElementById("content4").style.transform = "translate(200vw, 0)";
    document.getElementById('right').onclick = function () {
        toprinciples();
    }
    document.getElementById('right').innerHTML = "Principles"
    document.getElementById('left').onclick = function () {
        tonominate();
    }
    document.getElementById('left').innerHTML = "Nominate"
    document.getElementById('left').style.display = 'initial';
}

function tonominate() {
    document.getElementById("content1").style.transform = "translate(0vw, 0)";
    document.getElementById("content2").style.transform = "translate(100vw, 0)";
    document.getElementById("modal").style.transform = "translate(100vw, 0)";
    document.getElementById("content3").style.transform = "translate(200vw, 0)";
    document.getElementById("content4").style.transform = "translate(300vw, 0)";
    document.getElementById('right').onclick = function () {
        toindex();
    }
    document.getElementById('right').innerHTML = "Index"
    document.getElementById('left').style.display = 'none';
}

(function () {
    const classes = document.body.classList;
    let timer = 0;
    window.addEventListener('resize', function () {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        } else
            classes.add('stop-transitions');

        timer = setTimeout(() => {
            classes.remove('stop-transitions');
            timer = null;
        }, 100);
    });
})();

function openmodal() {
    document.getElementById('modal').style.display = 'flex';
}


window.onload = function() {
    filterSelection("all");
    buttonSelector();
  }
  
  // month filtering
  filterSelection("all");
  
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  
    // scroll to top of page when clicked
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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