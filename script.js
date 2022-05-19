
function avançar(){
    var nomereal = document.getElementById('nome')
    sessionStorage.setItem('nome', nomereal.value);

    var idadereal = document.getElementById('idade')
    var idadereal2 = Number(idadereal.value)
    sessionStorage.setItem('idade', idadereal2);

    var emailreal = document.getElementById('email')
    sessionStorage.setItem('email', emailreal.value);

    var numeroreal = document.getElementById('telefone')
    var numeroreal2 = Number(numeroreal.value)
    sessionStorage.setItem('telefone', numeroreal2)

    var estadocity  = document.getElementById('estado/city')
    sessionStorage.setItem('estado/city', estadocity.value);

    var primeirolink = document.getElementById('link1')
    sessionStorage.setItem('link1', primeirolink.value);

    var segundolink = document.getElementById('link2')
    sessionStorage.setItem('link2', segundolink.value);

    var trabalhoreal = document.getElementById('trabalho')
    sessionStorage.setItem('trabalho', trabalhoreal.value)

    var fotoreal = document.getElementById('picture')
   
    const reader = new FileReader();
    
    reader.addEventListener("load", () => {
        sessionStorage.setItem('imagem', reader.result);
    })

    reader.readAsDataURL(fotoreal.files[0]);
   
    


   
}









function avançar2(){

    var objetivo = document.getElementById('objpessoais')
    sessionStorage.setItem('objpessoais', objetivo.value)


    var experienciareal = document.getElementById('exp')
    sessionStorage.setItem('exp', experienciareal.value)
    
    var formaçao = document.getElementById('formacademica')
    sessionStorage.setItem('formacademica', formaçao.value)
    
    var formaçaoA = document.getElementById('formacademicaA')
    sessionStorage.setItem('formacademicaA', formaçaoA.value)
    
    var formaçaoB = document.getElementById('formacademicaB')
    sessionStorage.setItem('formacademicaB', formaçaoB.value)




}








function avançar3(){
    var curso = document.getElementById('cursosextras')
    sessionStorage.setItem('cursosextras', curso.value)
    
    var cursoA = document.getElementById('cursosextrasA')
    sessionStorage.setItem('cursosextrasA', cursoA.value)
    
    var cursoB = document.getElementById('cursosextrasB')
    sessionStorage.setItem('cursosextrasB', cursoB.value)
    
   

    var idiomasituação = document.getElementById('idioma')
    sessionStorage.setItem('idioma', idiomasituação.value)

    var idiomasituaçãoA = document.getElementById('idiomaA')
    sessionStorage.setItem('idiomaA', idiomasituaçãoA.value)

   

    var inforeal = document.getElementById('informaçoesadd')
    sessionStorage.setItem('informaçoesadd', inforeal.value)

    var inforealA = document.getElementById('informaçoesaddA')
    sessionStorage.setItem('informaçoesaddA', inforealA.value)
   
    var inforealB = document.getElementById('informaçoesaddB')
    sessionStorage.setItem('informaçoesaddB', inforealB.value)

}











function gerar(){
    var fotooficial = document.getElementById('foto')
    var resp = document.getElementById('res')
    var job = document.getElementById('jobposition')
    var cabeçareal = document.getElementById('cabeça')
    var botaoreal = document.getElementById('botao')
    var contatoreal = document.getElementById('contato')
    var idiomaforeal= document.getElementById('idiomareal')
    var experireal = document.getElementById('experi')
    var atributoreal = document.getElementById('atributo')
    var formaçaoreal= document.getElementById('formaçao')
    var cursoreal= document.getElementById('cursos')
    botaoreal.innerHTML = ""
    

 


    fotooficial.innerHTML = `<img  src=${sessionStorage.getItem('imagem')}>`
    



    cabeçareal.innerHTML += `<h1> ${sessionStorage.getItem('nome')} </h1> `
    
    job.innerHTML = ` <h3>  ${sessionStorage.getItem('trabalho')}   </h3> `
    
    resp.innerHTML += ` <br> <br>   <hr>`
    resp.innerHTML +=  `<h2> PERFIL PESSOAL </h2> `
    resp.innerHTML += ` <p> &#9679; <strong>${sessionStorage.getItem('idade')} anos </strong> </p>`
    resp.innerHTML += `<p> <strong>SOBRE MIM: </strong><br>  " ${sessionStorage.getItem('objpessoais')}  "</p>`
    

    contatoreal.innerHTML += ` <br> <br>   <hr>`
    contatoreal.innerHTML += `<h2> FALE CONOSCO  </h2>`
    contatoreal.innerHTML += `<p> &#128231;:${sessionStorage.getItem('email')} </p>`
    contatoreal.innerHTML += `<p> &#128222: ${sessionStorage.getItem('telefone')} </p>`
    contatoreal.innerHTML += `<p> &#128204;: ${sessionStorage.getItem('estado/city')} </p>`
    contatoreal.innerHTML += `<p> &#x1F517:<a target="_blank" href="${sessionStorage.getItem('link1')}">${sessionStorage.getItem('link1')}</a>  </p>`
    contatoreal.innerHTML += `<p> &#x1F517:<a target="_blank" href="${sessionStorage.getItem('link2')}">${sessionStorage.getItem('link2')}</a>  </p>`

    idiomaforeal.innerHTML += ` <br> <br>   <hr>`
    idiomaforeal.innerHTML += `<h2> IDIOMAS </h2>`
    idiomaforeal.innerHTML += `<p>  &#9642; ${sessionStorage.getItem('idioma')}    </p>`
    idiomaforeal.innerHTML += `<p>  ${sessionStorage.getItem('idiomaA')}    </p>`
    if (sessionStorage.getItem('idiomaA') == 0 ){ 
        idiomaforeal.innerHTML += `<p> ${sessionStorage.getItem('idiomaA')}   </p>`
    }
   else{ idiomaforeal.innerHTML += `<p> &#9642; ${sessionStorage.getItem('idiomaA')}   </p>`
 } 



    experireal.innerHTML += ` <br> <br>   <hr>`
    experireal.innerHTML += `<h2> EXPERIENCIA PROFISSIONAL </h2>`
    experireal.innerHTML += `<p> ${sessionStorage.getItem('exp')}    </p>`

    atributoreal.innerHTML += ` <br> <br>   <hr>`
    atributoreal.innerHTML += `<h2> ATRIBUTOS </h2>`
    atributoreal.innerHTML += `<p> &#9642; ${sessionStorage.getItem('informaçoesadd')}   </p>`
    atributoreal.innerHTML += `<p> &#9642; ${sessionStorage.getItem('informaçoesaddA')}   </p>`
    if (sessionStorage.getItem('informaçoesaddB') == 0 ){ 
        atributoreal.innerHTML += `<p> ${sessionStorage.getItem('informaçoesaddB')}   </p>`
    }
   else{ atributoreal.innerHTML += `<p> &#9642; ${sessionStorage.getItem('informaçoesaddB')}   </p>`
 } 



    formaçaoreal.innerHTML += ` <br> <br>   <hr>`
    formaçaoreal.innerHTML += `<h2> FORMAÇÃO ACADÊMICA </h2>`
    formaçaoreal.innerHTML +=`<p>  &#9642; ${sessionStorage.getItem('formacademica')} </p> `
    formaçaoreal.innerHTML +=`<p>  &#9642; ${sessionStorage.getItem('formacademicaA')} </p> `
    if (sessionStorage.getItem('formacademicaB') == 0) {
        formaçaoreal.innerHTML += `<p> ${sessionStorage.getItem('formacademicaB')} </p> `
    
    } else{formaçaoreal.innerHTML +=`<p> &#9642; ${sessionStorage.getItem('formacademicaB')} </p> `}
    

    cursoreal.innerHTML += ` <br> <br>   <hr>`
    cursoreal.innerHTML += `<h2> CURSOS EXTRAS </h2>`
    cursoreal.innerHTML += `<p> &#9642; ${sessionStorage.getItem('cursosextras')}    </p>`
    cursoreal.innerHTML += `<p> &#9642; ${sessionStorage.getItem('cursosextrasA')}    </p>`
    if (sessionStorage.getItem('cursosextrasB') == 0) {
        cursoreal.innerHTML += `<p> ${sessionStorage.getItem('cursosextrasB')} </p> `
    
    } else{cursoreal.innerHTML +=`<p> &#9642; ${sessionStorage.getItem('cursosextrasB')} </p> `}
    
    

   


    /*
   

    resp.innerHTML +=`<p> Atual situação da minha formaçao academica: ${sessionStorage.getItem('formacademica')} </p> `

    resp.innerHTML += `<p> Alêm da minha formação academica tambem ja realizei tais cursos específicos como: ${sessionStorage.getItem('cursosextras')}    </p>`

   

    */
}   




/*                <input type="text"  name="experiencias"   id="expprofissionais" size="30">  
                <br><br>
                <input type="text"  name="experienciasA"   id="expprofissionaisA" size="30">  
                <br><br>
                <input type="text"  name="experienciasB"   id="expprofissionaisB" size="30"> 
                
                <br><br><strong>Trabalhos ja realizados:</strong>
                experireal.innerHTML += `<p>  ${sessionStorage.getItem('expprofissionais')}  </p>`
    experireal.innerHTML += `<p>  ${sessionStorage.getItem('expprofissionaisA')}  </p>`
    experireal.innerHTML += `<p>  ${sessionStorage.getItem('expprofissionaisB')}  </p> */





















/*Graduação em Ciencia da computação na UFABC
Tornar me um programador full stack 
Poder ajudar os outros com o meu conhecimento



Trabalhei como barbeiro desde os 16 anos.
Estagio de auxiliar administrativo na empresa Viniport Servicos.



*/