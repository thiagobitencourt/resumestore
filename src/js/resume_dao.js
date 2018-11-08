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
    resume.id = Resume.generateID();
    resumesList.push(resume);
    localStorage.setItem(senhaDoBanco, JSON.stringify(resumesList) );
}

Resume.getById = function(resumeId) {
    return resumesList.find(function(resume) {
        return resume.id == resumeId
    });
}

Resume.generateID = function() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

