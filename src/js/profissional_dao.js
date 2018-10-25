

function getProfissionais(searchTerm) {
    return [
        {
            nome: "Steve Jobs",
            descricao: "Fundador da Apple",
            foto: "./assets/image/steve.jpg",
            habilidades: [ 
                { nome: "Apple", cor: "primary" }, 
                { nome: "IOs", cor: "success" },
            ]
        },
        {
            nome: "Bill Gates",
            descricao: "Fundador da Microsoft",
            foto: "./assets/image/gates.jpeg",
            habilidades: [ 
                { nome: "Microsoft", cor: "danger" }, 
                { nome: "Windows", cor: "warning" },
            ]
        }
    ]
}