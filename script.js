function toggleAbstract(abstractId) {
    var abstract = document.getElementById(abstractId);
    if (abstract.style.display === "none") {
        abstract.style.display = "block";
    } else {
        abstract.style.display = "none";
    }
}
function switchLanguage(language) {
    const englishElements = document.querySelectorAll('.english');
    const japaneseElements = document.querySelectorAll('.japanese');
    englishElements.forEach(elem => elem.style.display = language === 'english' ? 'block' : 'none');
    japaneseElements.forEach(elem => elem.style.display = language === 'japanese' ? 'block' : 'none');
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.info-section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

// Initialize page with English content visible
switchLanguage('english');
