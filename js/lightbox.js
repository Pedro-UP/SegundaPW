/*Configuracion para el tema de desplegar o agrandar la imagen seleccionada de galeria*/
const imagenes = document.querySelectorAll('.img-galeria')
const imagenLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburguer1 = document.querySelector('.hamburguer');

/*Esto es para poder visualisarlo en la consola desde el navegador*/
// console.log(imagenes)
// console.log(imagenLight)
// console.log(contenedorLight)

/*Dentro del forech cada imagen tedra una accion que al darle click 
mandara a ejecutar el evento que se configurara.*/
imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        /*Se podria decir que con este comando la imagen que tenia el imagen-light
        cambia a ser la imagen que seleccionemos.*/
        apareceImagen(imagen.getAttribute('src'))
    })
})

/*Aqui se parece el codigo al anterior ademas de que al darle click al
recuadro de la x la imagen se cerrara.*/
contenedorLight.addEventListener('click', (e) => {
    if (e.target !== imagenLight) {
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('shadowImage')
        /*Esto es para que el icono que aparece debajo no se vea*/
        hamburguer1.style.opacity = '1'
    }
})

/*Creacion de funcion que se usara arriva*/
const apareceImagen = (imagen) => {
    imagenLight.src = imagen;
    /*Con este comando al darle click se abrira la instruccion show de CSS*/
    contenedorLight.classList.toggle('show')
    imagenLight.classList.toggle('shadowImage')
    hamburguer1.style.opacity = '0'
}