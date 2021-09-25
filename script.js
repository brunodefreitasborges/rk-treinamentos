
function bannerEnter(obj) {

    obj.style.transition = "0.5s";
    obj.style.opacity = 1;
    obj.style.zIndex = 2;
   
}

function bannerLeave(obj) {

    obj.style.transition = "0s";
    
    if (obj.id != "banner3"){
        obj.style.zIndex = 0;
    }
    else if(obj.id = "banner3") {
        obj.style.zIndex = 1;
    }

    obj.style.opacity = 0.7;
    
    
}

function expandirCursos() {

   

    if (document.getElementsByClassName("card-curso").length < 9) {
    
    document.getElementById("cards-cursos").innerHTML += '<div class="card-curso"><h3>TREINAMENTO OPERADOR DE MÁQUINAS (NR11)</h3><img src="assets/nr11.jpg" alt="Imagem de uma empilhadeira"><p>Todos os equipamentos de força motriz própria empilhadeira, paleteiras, empilhadeira elétrica, ponte rolantes, talhas, monovias, guinchos, munck. devem ser manuseados por empregados habilitados pela empresa, sendo que a habilitação neste caso consiste em treinamento específico por empresa especializada em tal segmento. Esses cursos têm caráter obrigatório conforme NR11 do Ministério do Trabalho.</p></div><div class="card-curso"><h3>TREINAMENTO OPERADOR DE MÁQUINAS (NR11)</h3><img src="assets/nr11.jpg" alt="Imagem de uma empilhadeira"><p>Todos os equipamentos de força motriz própria empilhadeira, paleteiras, empilhadeira elétrica, ponte rolantes, talhas, monovias, guinchos, munck. devem ser manuseados por empregados habilitados pela empresa, sendo que a habilitação neste caso consiste em treinamento específico por empresa especializada em tal segmento. Esses cursos têm caráter obrigatório conforme NR11 do Ministério do Trabalho.</p></div><div class="card-curso"><h3>TREINAMENTO OPERADOR DE MÁQUINAS (NR11)</h3><img src="assets/nr11.jpg" alt="Imagem de uma empilhadeira"><p>Todos os equipamentos de força motriz própria empilhadeira, paleteiras, empilhadeira elétrica, ponte rolantes, talhas, monovias, guinchos, munck. devem ser manuseados por empregados habilitados pela empresa, sendo que a habilitação neste caso consiste em treinamento específico por empresa especializada em tal segmento. Esses cursos têm caráter obrigatório conforme NR11 do Ministério do Trabalho.</p></div>';

    document.getElementById("expand").scrollIntoView(false);

    if (document.getElementsByClassName("card-curso").length == 9) {

        document.getElementById("expand").style.display = "none";
        document.getElementById("cursos").style.paddingBottom = "5vw";
    }

    }

}