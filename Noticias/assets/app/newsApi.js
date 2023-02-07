let noticias = [];
const apiDados = "https://newsapi.org/v2/top-headlines?country=br&language=pt&apiKey=ad5d7681e14d4da4992abd8f364f7736";

async function apiDeNoticias() {
    try{
        const consultaApi = await fetch(apiDados);
        const res = await consultaApi.json();
        noticias = res.articles;;
        ExibirNoticiasEtrocaNoHtml(noticias);
    }catch(error){
        console.error(error);
    }
}
apiDeNoticias();

const inputTitle = document.getElementById("title");
inputTitle.addEventListener("input", (e) => {
    inputValue = e.target.value;
    let noticiasFiltradas = noticias.filter(noticia => noticia.title.toLowerCase().includes(inputValue.toLowerCase()));

    ExibirNoticiasEtrocaNoHtml(noticiasFiltradas);
  });

