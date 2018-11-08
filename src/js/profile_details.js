
window.addEventListener('load', function() {
    var url = new URL(window.location.href);
    var resumeId = url.searchParams.get("resume");

    var currentResume = Resume.getById(resumeId);
    console.log(currentResume);

    document.getElementById('user-name').innerText = currentResume.nome;
    document.getElementById('user-description').innerText = currentResume.descricao;
    document.getElementById('user-aboutme').innerText = currentResume.sobreMim;

    if(currentResume.foto) {
        document.getElementById('user-image').src = currentResume.foto;
    }

    renderSkills(currentResume);
});

function renderSkills(currentResume) {
    var skillsBlock = document.getElementById('skills-block');
    skillsBlock.innerHTML = currentResume.habilidades.map(function(hab, index) {
        return `
            <span class="label label-default skill">
                <span class="skill-label">${hab.nome}</span>
            </span>
        `
    }).join('');
}
