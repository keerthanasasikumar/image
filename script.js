var sc=document.querySelector(".gallery");
var b=document.getElementById("backtn");
var n=document.getElementById("nexttn");
sc.addEventListener("wheel",(evt)=>{
    evt.preventDefault();
    sc.scrollLeft+=evt.deltaY;
    sc.style.scrollBehaviour="auto";
});
b.addEventListener("click",()=>{
    sc.scrollLeft-=100;
    sc.style.scrollBehaviour="smooth";
});
n.addEventListener("click",()=>{
    sc.scrollLeft+=100;
    sc.style.scrollBehaviour="smooth";
});

var contlink = document.getElementsByClassName("cont-link");
var tabcontent = document.getElementsByClassName("tab-content");
function opentab(tabname) {
    for (contlinks of contlink) {
        contlinks.classList.remove("active-link");
    }
    for (tabcontents of tabcontent) {
        tabcontents.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
