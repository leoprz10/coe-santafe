import React from 'react';
import './historia.css'
import foto from '../../assets/Libro.jpg'
const Historia = () => {
    return(
        <div className='contenedorHistoria'>
           <h1>Tenemos historia...</h1> 
           <h1>Creemos en el futuro</h1>
           <p>Por eso, en la Casa del Obrero estudiante 
                estamos orgullosos de contar con más de 60 años de trayectoria brindando como 
                misión fundamental, una residencia para jóvenes obreros y estudiantes de diferentes 
                puntos del país que cuente con los servicios necesarios para una estadía cómoda y 
                agradable. </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/_NQddh8orSM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className='contenedor'>
                <img src={foto} alt="" />
                <h2>Libro</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus, corporis dolorem error porro rem, esse mollitia consequatur expedita explicabo delectus? Autem architecto corporis perferendis laborum rerum fugit error repudiandae.</p>
            </div>
        </div>
    )
}

export { Historia }