'use strict';

window.addEventListener('load', function() {
    var inputSearch = document.querySelector(".search input[type='text']");
    inputSearch.onkeypress = function(event) {
        if(event.keyCode == 13) {
            event.stopPropagation();
            event.preventDefault();
            search(event.target.value);
        }
    }
});

function search(searchText) {
    var searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i></div>';

    if(searchText) {
        var resumes = Resume.get(searchText);
        var resultHtml = resumes.map(getProfileComponent).join('');
        showAfter(resultHtml);
    } else {
        showAfter('');
    }

    function showAfter(elements) {
        setTimeout(function() {
            searchResult.innerHTML = elements;
        }, 500);
    }
}

function getProfileComponent(profissional) {
    var defaultUser = '../assets/image/defaultuser.png';

    return `
    <div class="col-sm-6 col-md-3 col-xs-12">
        <div class="thumbnail">
            <img src="${profissional.foto || defaultUser}" alt="${profissional.nome}">
            <div class="caption">
                <h3>
                    <a href="./pages/profile_details.html?resume=${profissional.id}">
                        ${profissional.nome}
                    </a>
                </h3>
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
            </div>
        </div>
    </div>`
}

function getHabilidadesComponent(habilidades) {
    var listaCores = ["primary", "success", "warning", "danger"];

    return habilidades.map(function(h) {
        var hab = h.nome;
        return `<span style="margin: 1px" class="label label-${listaCores[getRandomInt(3)]}">${hab}</span>`
    }).join('');
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}