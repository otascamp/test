// start nav section
const nav = document.getElementById("nav");

window.addEventListener("scroll",()=>{
    const getscrollY = window.scrollY;
    // console.log(getscrollY);

    if(getscrollY > 160){
        nav.classList.add("active");
    }else {
        nav.classList.remove("active");
    }
})
// end nav section