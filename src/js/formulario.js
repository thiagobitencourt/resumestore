function cadastrarProfissional(event) {
    event.preventDefault();
    event.stopPropagation();
    var formulario = document.forms[0];
    var habilidades = formulario.habilidades.value.split(";");

    var profissional = {
        nome: formulario.nome.value,
        descricao: formulario.descricao.value,
        foto: formulario.foto.value,
        habilidades: habilidades.map(function(h) { return { nome: h }})
    }

    addProfissional(profissional);
}