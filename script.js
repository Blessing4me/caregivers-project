const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// =================================active code==================================
// Get all menu items
const menuItems = document.querySelectorAll('.menu-item');

// Function to remove active class from all menu items
function removeActiveClasses() {
    menuItems.forEach(item => item.classList.remove('active'));
}

// Add click event to each menu item
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from other items
        removeActiveClasses();

        // Add active class to the clicked item
        item.classList.add('active');
    });
});
