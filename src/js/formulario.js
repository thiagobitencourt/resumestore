var currentResume = {
    habilidades: []
};

function addResume(event) {
    event.preventDefault();
    event.stopPropagation();
    var formulario = document.forms[0];

    currentResume.nome = formulario.nome.value;
    currentResume.descricao = formulario.descricao.value;
    currentResume.habilidades = currentResume.habilidades.map(function(h) { return { nome: h }});

    Resume.add(currentResume);
}

function changeUserImage(event) {
    event.stopPropagation();
    document.getElementById('user-input-image').click();
}

var inputSkills = document.getElementById("tags");
inputSkills.onkeypress = function(event) {
    if(event.keyCode == 13 && event.target.value) {
        event.stopPropagation();
        event.preventDefault();
        currentResume.habilidades.push(event.target.value);
        renderSkills();
        event.target.value = '';
    }
}

function renderSkills() {
    var skillsBlock = document.getElementById('skills-block');
    skillsBlock.innerHTML = currentResume.habilidades.map(function(hab, index) {
        return `
            <span class="label label-default skill">
                <span class="skill-label">${hab}</span>
                <i class="fas fa-times" onclick="removeSkill(${index})"></i>
            </span>
        `
    }).join('');
}

function removeSkill(index) {
    currentResume.habilidades.splice(index, 1);
    renderSkills();
}

document.getElementById('user-input-image').addEventListener('change', function(event) {
    if(event.target.files && event.target.files.length) {
        var file = event.target.files[0] || {};
        var reader = new FileReader();
        reader.onload = function(){
            var img = document.getElementById('user-image');
            img.src = reader.result;
            currentResume.foto = reader.result;
        };

        reader.readAsDataURL(file);
    }
});