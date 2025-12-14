// Function to open a specific section when a tab is clicked
function openSection(evt, sectionName) {
    var i, tabcontent, tablinks;
    
    // Hide all sections
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    
    // Remove active class from all tabs
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    // Show the clicked section and add active class to the clicked tab
    document.getElementById(sectionName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

