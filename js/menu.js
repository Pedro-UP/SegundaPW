/*Codificacion con el leguaje JavaScript*/

/*Esta configuracion es para el tema del menu desplegable*/
const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');

/*Se toman los elementos a los que se les accinara una accion o evento*/
//console.log(menu);
//console.log(hamburguer)

/*Cuando se le de click al icono se desplegara el menu*/
hamburguer.addEventListener('click', () => {
    //Cuando se le de click se añadira a la clase menu el spread 
    //Con sus intrucciones de CSS
    menu.classList.toggle("spread")
})
 /*Esta inruccion es para que cada vez que se haga click en cualquier parte de la pantalla
 si el menu esta abierto este se cierre*/
window.addEventListener('click', e=>{
    /*Se nesesitan 3 instrucciones en el if la primera para cada vez que este abierto el menu 
    se realize el if, la segunda es para que al darle click en el menu no se cierre y el 
    ultimo es para que al darle click al icono no se cierre automaticamente.*/
    if(menu.classList.contains('spread')
    && e.target != menu && e.target != hamburguer){
        menu.classList.toggle("spread")
    }
})