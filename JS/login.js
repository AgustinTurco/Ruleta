const username = document.getElementById('username')
const pts = document.getElementById('textPuntos')
const button = document.getElementById('button')
const visible = document.getElementById('visible')
const elementPts = documen.getElementById('puntos')
const puntos = '150'
const nombre = 'juan'

/*/ conprobacion de login */
button.addEventListener('click', (e) =>{

    if(e.target === button){
        if(pts.value === puntos  && username.value === nombre){
            e.preventDefault();
            window.location.href = "ruleta.html";
            pts.textContent = 'a';
        }
        else{
            alert("los datos no son correctos")
        }
    }
});


