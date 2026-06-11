
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
