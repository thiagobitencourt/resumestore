var senhaDoBanco = 'resumestore.profissionais';
var resumesList = JSON.parse(localStorage.getItem(senhaDoBanco)) || [];

Resume = {};
Resume.get = function(searchTerm, advancedFilter) {
    advancedFilter = advancedFilter || {};
    return resumesList.filter(function(resume) {
        return resume.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resume.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resume.habilidades.some(function(h) {
                return h.nome.toLowerCase().includes(searchTerm)
            });
    });
}

Resume.add = function(resume) {
    resumesList.push(resume);
    localStorage.setItem(senhaDoBanco, JSON.stringify(resumesList) );
}