function openSection(sectionId) {
    document.querySelectorAll('.section').forEach(sec => {
        sec.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';

    if (sectionId === 'projects') {
        showProjectType('cpp');
    }
}

function showProjectType(type) {
    document.querySelectorAll('.project-group').forEach(group => {
        group.style.display = 'none';
    });
    document.getElementById(type).style.display = 'block';
}

// Default open About
openSection('about');

