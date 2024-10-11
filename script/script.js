document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    // Function to set the active class
    function setActiveLink(link) {
        navLinks.forEach(l => l.parentElement.classList.remove('active')); 
        link.parentElement.classList.add('active');
    }

    // Get the current page path
    const currentPage = window.location.pathname.split('/').pop();
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Set active class for the current page
        if (linkPath === currentPage) {
            setActiveLink(link);
        }

        // Add click event listener to set the active link on click
        link.addEventListener('click', function() {
            setActiveLink(link); 
        });
    });
});
