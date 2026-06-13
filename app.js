(() => {
  // 1. DROPDOWN ACCORDION LOGIC
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

  // 2. CLOSE NAVIGATION WHEN A LINK IS CLICKED
  const dropdownNav = document.querySelector('.dropdown.nav');
  if (dropdownNav) { // Defensive check to prevent errors if nav is missing
    dropdownNav.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') {
        dropdownNav.classList.remove('open');
      }
    });
  }

  // 3. STICKY BACKGROUND INTERSECTION OBSERVER
  const anchor = document.querySelector('#scroll-anchor');
  const nav = document.querySelector('.dropdown.nav');

  // Guard clause: Only run the observer if both elements actually exist on the page
  if (anchor && nav) {
    const observer = new IntersectionObserver((entries) => {
      // Safely using entries[0] matches your updated array syntax
      if (!entries[0].isIntersecting) {
        nav.classList.add('at-top'); // Matches your updated CSS class name
      } else {
        nav.classList.remove('at-top');
      }
    }, {
      threshold: [0]
    });

    observer.observe(anchor);
  }
})();
