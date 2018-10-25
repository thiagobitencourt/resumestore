
window.onload = function() {

    var inputSearch = document.querySelector("form input[type='text']");
    inputSearch.onkeypress = function(event) {
        if(event.keyCode == 13) {
            event.stopPropagation();
            event.preventDefault();
            search(event.target.value);
        }
    }
}

function search(text) {
    var searchResult = document.getElementById('search-result');

    var profissionais = getProfissionais(text);
    var profissionaisHtml = '';

    for(var i = 0; i < profissionais.length; i++) {
        profissionaisHtml += getProfileComponent(profissionais[i]);
    }
    searchResult.innerHTML = profissionaisHtml;
}

function getProfileComponent(profissional) {
    // {
    //     nome: "",
    //     descricao: "",
    //     foto: "",
    //     habilidades: [ "", ""]
    // }

    return `
    <div class="col-sm-6 col-md-3 col-xs-12">
        <div class="thumbnail">
            <img src="${profissional.foto}" alt="${profissional.nome}">
            <div class="caption">
                <h3>${profissional.nome}</h3>
                <p>${profissional.descricao}</p>

                <div class="progress">
                    <div class="progress-bar progress-bar-danger" style="width: 33%">
                        <span class="sr-only">10% Complete (danger)</span>
                    </div>
                    <div class="progress-bar progress-bar-warning progress-bar-striped" style="width: 33%">
                        <span class="sr-only">20% Complete (warning)</span>
                    </div>
                    <div class="progress-bar progress-bar-success" style="width: 15%">
                        <span class="sr-only">35% Complete (success)</span>
                    </div>
                </div>

                <div class="tags">
                    ${getHabilidadesComponent(profissional.habilidades)}
                </div>

                <p>
                    <a href="#" class="btn btn-default" role="button">
                        <span class="glyphicon glyphicon-star-empty"></span>
                    </a>
                    <a href="#" class="btn btn-default meu-btn-default" role="button">
                        <span class="glyphicon glyphicon-user"></span>
                    </a>
                </p>
            </div>
        </div>
    </div>`
}

function getHabilidadesComponent(habilidades) {
    // [ "", "" ]
    var habilidadeHtml = '';
    var listaCores = ["primary", "success", "warning", "danger"];

    habilidades.forEach(function(hab) {
        habilidadeHtml += `<span style="margin: 1px" class="label label-${listaCores[getRandomInt(3)]}">${hab.nome}</span>`
    });

    return habilidadeHtml;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}