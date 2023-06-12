let paginas = 0;
let characters = [];
let paginacao = 6;
let contador = 0;
let botao = 0;

async function pegarPersonagens(page) {
    try {
      const url = page ? `https://rickandmortyapi.com/api/character?page=${page}` : 'https://rickandmortyapi.com/api/character';
  
      const response = await apiConfig.get(url);
      characters = response.data.results;
      paginas = response.data.info.pages;
  
      const main = document.getElementById('main');
      main.innerHTML = '';
  
      for (let i = 0; i < characters.length; i++) {
        createCard(i);
      }

     
  
    selecionarRodape(page);
    } catch (error) {
      console.error('Erro ao buscar personagens:', error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    pegarPersonagens(1);
  });
  

function createCard(i){

    const main = document.getElementById('main');
    const div = document.createElement("div");
    main.appendChild(div);
    div.classList.add("container");

    const aside = document.createElement("aside");
    div.appendChild(aside);

    const img = document.createElement("img");
    aside.appendChild(img);
    aside.classList.add("aside");

    img.setAttribute("src", `${characters[i].image}`)
    img.classList.add("image");
    
    const section = document.createElement("section");
    div.appendChild(section); 

    section.classList.add("card");

    const h1 = document.createElement("h1");
    section.appendChild(h1);
    h1.innerHTML =`${characters[i].name}`;

    const h3 = document.createElement("h3");
    section.appendChild(h3);
    h3.innerHTML =`${characters[i].species}` + ` - ${characters[i].status}` ; 
    
}

function selecionarRodape(page) {
  const footer = document.getElementById('footer');
  footer.innerHTML = '';
  const div = document.createElement('div');
  footer.appendChild(div);
  div.classList.add('container2');

  if (page >= 1 && page <= 6) {
    contador = 1
  }

  if (page == 6) {
    contador = contador + 6;
    paginacao = paginacao + 6;
  }

  if (page == 7) {
    contador = contador - 6;
    paginacao = paginacao - 6;
  }

  if (page == 12) {
    contador = contador + 6;
    paginacao = paginacao + 6;
  }

  if (page == 13) {
    contador = contador - 6;
    paginacao = paginacao - 6;
  }

  if (page==18) {
    contador = contador + 6;
    paginacao = paginacao + 6;
  } 

  if (page == 19) {
    contador = contador - 6;
    paginacao = paginacao - 6;
  }

  if (page==24) {
    contador = contador + 6;
    paginacao = paginacao + 6;
  } 

  if (page == 25) {
    contador = contador - 6;
    paginacao = paginacao - 6;
  }

  if (page==30) {
    contador = contador + 6;
    paginacao = paginacao + 6;
  }

  if (page == 31) {
    contador = contador - 6;
    paginacao = paginacao - 6;
  }


  if (page==36) {
    contador = contador + 6;
    paginacao = paginacao + 6;
  }

  if (page==37) {
    contador = contador - 6;
    paginacao = paginacao - 6;
  }

  for (let numero = contador; numero <= paginacao; numero++) {
    (function (numero) {
      const numerador = document.createElement('div');
      div.appendChild(numerador);
      numerador.classList.add('paginador');
      botao = document.createElement('button');
      numerador.appendChild(botao);
      botao.innerHTML = `${numero}`;
      botao.addEventListener('click', function () {
        pegarPersonagens(numero); 
      });
    })(numero);
  }
  
}











