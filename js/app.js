const timeStamp = '1659118635';
const apiKey =  '4c176b5cb1e9075de902729deca6e330';
const md5 = '99ea4c984f0593dcf573dda598b79eee';

var offsett = 99

fetch(`http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`
).then((resposta) => {
    return resposta.json();
}).then((quadrinhos) => {
    console.log(quadrinhos.data.results)
})





function getCharacters(section, page, limit) {

    endpoint = "";


    if(page == 1){
        offset = 0;
    }else{
        page = page -1;
        offset = (limit * page);
    }
    
    switch(section){
        case "CH":
            endpoint = "characters";
        break;
        case "HQ":
            endpoint = "series";
        break;
        case "SQ":
            endpoint = "stories";
        break;
        case "EC":
            endpoint = "events";
        break;
        case "CR":
            endpoint = "creators";
        break;
        case "QU":
            endpoint = "comics";
        break;
    }

    fetch(`http://gateway.marvel.com/v1/public/${endpoint}?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&offset=${offset}&limit=${limit}`
    ).then((resposta) => {
        return resposta.json();
    }).then((jsonParsed) => {

        console.log(jsonParsed)
        jsonParsed.data.results.forEach(element => {
            if(section == "CH"){
                criarHero(element);
            }
            if(section == "HQ"){
                criarComics(element);
            }
            if(section == "QU"){
                criarComics(element);
            }
            if(section == "CR"){
                criarComics(element);
            }
            if(section == "EC"){
                criarComics(element);
            }
            if(section == "SQ"){
                criarComics(element);
            }
            
        });
    });

}


function criarHero(element ) {
                
    let linkImg = element.thumbnail.path +"."+ element.thumbnail.extension;
    let nameHero = element.name;
    let wikiHero = element.urls[1].url

    var divInserir = document.querySelector(".heroes")
    var divHero = document.createElement("div");
    var linkHero = document.createElement("a");
    var imgHero = document.createElement("img");
    var nomeHero = document.createElement("h3");

    divHero.classList.add('div-hero'); 
    imgHero.src = linkImg;
    linkHero.href = wikiHero;
    linkHero.setAttribute("target","_blank")
    imgHero.setAttribute("alt",nameHero )
    nomeHero.textContent = nameHero;

    linkHero.appendChild(imgHero);
    linkHero.appendChild(nomeHero);
    divHero.appendChild(linkHero);
    divInserir.appendChild(divHero)
   
}



function criarComics(element ) {
                
    let linkImg = element.thumbnail.path +"."+ element.thumbnail.extension;
    let nameHero = element.title;
    let wikiHero = element.urls[0].url

    var divInserir = document.querySelector(".heroes")
    var divHero = document.createElement("div");
    var linkHero = document.createElement("a");
    var imgHero = document.createElement("img");
    var nomeHero = document.createElement("h3");

    divHero.classList.add('div-hero'); 
    imgHero.src = linkImg;
    linkHero.href = wikiHero;
    linkHero.setAttribute("target","_blank")
    imgHero.setAttribute("alt",nameHero )
    nomeHero.textContent = nameHero;

    linkHero.appendChild(imgHero);
    linkHero.appendChild(nomeHero);
    divHero.appendChild(linkHero);
    divInserir.appendChild(divHero)
   
}





/*fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&offset=100&limit=100`*/



