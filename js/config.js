const tablet_screen= 992;
const phone_screen= 576;
var element = document.getElementById("navbarToggleExternalContent");
function  collapse(){
   
    //let gg = document.querySelectorAll("div.gg");
    if (getWidth() < tablet_screen)    {
        element.classList.add("collapse");
        document.getElementById("carousel_hidden").classList.remove("d-flex");
        document.getElementById("green_back").classList.add("green_back");
       // gg.classList.remove("d-flex");
    }
    else if (getWidth() < phone_screen) {
        //document.getElementById("header_mobile_dflex").classList.remove("d-flex");
    }
    else { 
        element.classList.remove("collapse");
        document.getElementById("carousel_hidden").classList.add("d-flex");
        document.getElementById("green_back").classList.remove("green_back");
        //gg.classList.add("d-flex");
        //document.getElementById("header_mobile_dflex").classList.add("d-flex");
}
}


function getWidth() {
    if (self.innerWidth) {
        return self.innerWidth;
    }
    else if (document.documentElement && document.documentElement.clientHeight) {
        return document.documentElement.clientWidth;
    }
    else if (document.body) {
        return document.body.clientWidth;
    }
    return 0;
}
collapse();
window.onresize = collapse;
//