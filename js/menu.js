const tenet = document.querySelector('.tenet');
const menu = document.querySelector('.menu-navegacion');

//console.log(menu)
//console.log(tenet)


tenet.addEventListener('click',()=>{
    menu.classList.toggle("spread")
})


window.addEventListener('click',e=>{
    if(menu.classList.contains('spread') && e.target !=menu && e.target !=tenet){
       
        menu.classList.toggle("spread")
    }

})