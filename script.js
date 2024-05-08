let search =document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () =>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
}
let navbar =document.querySelector(".navbar");

document.querySelector("#menu-icon").onclick = () =>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

let header =document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
window.onscroll = () =>{
    navbar.classList.remove('active');
    search.classList.remove('active');
}
let hearts=document.querySelectorAll(".bx-heart")


hearts.forEach(heart =>
    {heart.addEventListener("click", ()=>{
        if(heart.classList.contains("bx-heart")){
            heart.classList.remove("bx-heart");
            heart.classList.add("bxs-heart");
            heart.style.color = "red";
        
        }else{
            heart.classList.add("bx-heart");
            heart.classList.remove("bxs-heart");
            heart.style.color = "";
        }

    })
    });



