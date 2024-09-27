  

    window.addEventListener('scroll',
        function() {
            const navegacion = 
            document.querySelector('.navegacion-principal');
            if ( window.scrollY > 100) {
                navegacion.classList.add('hover-effect');
            }else {
                navegacion.classList.remove('hover-effect');;
            }       
        }
    );




 
