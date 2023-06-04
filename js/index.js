let paginaAtual = 1;
let paginas = 0;
const itensPorPagina = 7;
const botaoPorGrupo = 7;


async function agruparPaginas() {
    const response = await apiConfig.get('/character');
    paginas = response.data.info.pages;

    createFooter();

    pegarPaginas(paginaAtual);
}


agruparPaginas()

async function pegarPaginas(page) {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);

    characters = response.data.results;

    const main = document.getElementById('main');
    main.innerHTML = ''; 

    for (let i = 0; i < characters.length; i++) {
        createCard(i);
    }
}


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

function createFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = ''; 

    const div = document.createElement("div");
    footer.appendChild(div);
    div.classList.add("container2");

    const totalPaginas = Math.ceil(paginas / itensPorPagina);
    const grupoAtual = Math.ceil(paginaAtual / botaoPorGrupo);
    const grupoFinal = Math.ceil(totalPaginas / botaoPorGrupo);
    const inicioGrupo = (grupoAtual - 1) * botaoPorGrupo + 1;
    const fimGrupo = Math.min(grupoAtual * botaoPorGrupo, totalPaginas);

    for (let numero = inicioGrupo; numero <= fimGrupo; numero++) {
        const numerador = document.createElement("div");
        div.appendChild(numerador);
        numerador.classList.add("paginador");
        const botao = document.createElement("button");
        numerador.appendChild(botao);
        botao.innerHTML = `${numero}`;
        botao.addEventListener("click", () => {
            paginaAtual = numero;
            pegarPaginas(paginaAtual);
            createFooter();
        });
    }

    /*if (grupoFinal > grupoAtual) {
        const ellipsis = document.createElement("span");
        ellipsis.classList.add("paginador");
        ellipsis.innerHTML = "...";
        div.appendChild(ellipsis);

        const nextGroup = document.createElement("div");
        nextGroup.classList.add("paginador");

        const nextGroupButton = document.createElement("button");
        nextGroupButton.innerHTML = `${fimGrupo + 1}`;
        nextGroupButton.addEventListener("click", () => {
            paginaAtual = grupoAtual * botaoPorGrupo + 1;
            createFooter();
            pegarPaginas(paginaAtual);
        });
        nextGroup.appendChild(nextGroupButton);

        div.appendChild(nextGroup);
    }*/
}

agruparPaginas();