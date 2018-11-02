
var senhaDoBanco = 'resumestore.profissionais';
var listaDeProfissionais = JSON.parse(localStorage.getItem(senhaDoBanco)) || [];

console.log(listaDeProfissionais);

function getProfissionais(searchTerm) {

    console.log(searchTerm);

    return listaDeProfissionais.filter(function(profissional) {
        return profissional.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
            profissional.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
            profissional.habilidades.some(function(h) {
                return h.nome.toLowerCase().includes(searchTerm)
            });
    });
}

function addProfissional(profissional) {
    listaDeProfissionais.push(profissional);
    localStorage.setItem(senhaDoBanco, JSON.stringify(listaDeProfissionais) );
}