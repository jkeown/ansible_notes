
//  (() => {
//   const dropdown = document.getElementById('dropdown');
//   if (!dropdown) return;
  
//   // Fail gracefully
//   const header = dropdown.querySelector('.dropdown-header');
//   if (!header) return;

//   header.addEventListener('click', () => {
//     dropdown.classList.toggle('open');
//   });
// })();

// (() => {
//   const dropdowns = document.querySelectorAll('.dropdown');
//   if (!dropdowns.length) return;

//   dropdowns.forEach(dropdown => {
//     const header = dropdown.querySelector('.dropdown-header');
//     if (!header) return;

//     header.addEventListener('click', () => {
//       dropdown.classList.toggle('open');
//     });
//   });
// })();

// Only one dropdown can be open at a time.

// Clicking a different one closes the previous.

// Clicking the same one toggles it normally.

(() => {
  const dropdowns = document.querySelectorAll('.dropdown');
  if (!dropdowns.length) return;

  dropdowns.forEach(dropdown => {
    const header = dropdown.querySelector('.dropdown-header');
    if (!header) return;

    header.addEventListener('click', () => {
      // Close all other dropdowns
      dropdowns.forEach(other => {
        if (other !== dropdown) {
          other.classList.remove('open');
        }
      });

      // Toggle the clicked dropdown
      dropdown.classList.toggle('open');
    });
  });
})();

// CLOSE NAVIGSTION WHEN LINK CLICKED
// Select the dropdown container
const dropdownNav = document.querySelector('.dropdown.nav');

// Listen for clicks inside the dropdown
dropdownNav.addEventListener('click', (event) => {
  // Check if the clicked element is a link inside the nav
  if (event.target.tagName === 'A') {
    // Remove the open class to close the menu
    dropdownNav.classList.remove('open');
  }
});