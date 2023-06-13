var menuList = document.getElementById("menuList");

console.log(menuList);

menuList.style.maxHeight =  "0px";

function toggleMenu(){
    if( menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "400px";
        menuList.style.marginTop = "20px"
    }else{
        menuList.style.maxHeight = "0px";
    }
}

Set-Cookie; widget_session=abc123; SameSite=None; Secure