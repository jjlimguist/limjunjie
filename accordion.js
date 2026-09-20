// Accordion toggle
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const accordion = item.parentElement;

    // Close all other items
    accordion.querySelectorAll('.accordion-item').forEach(i => {
      if (i !== item) i.classList.remove('active');
    });

    // Toggle current
    item.classList.toggle('active');
  });
});

// Show More / Show Less button
document.querySelectorAll('.show-more').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.parentElement;
    const hiddenItems = content.querySelectorAll('.hidden');

    if (button.textContent === 'Show More') {
      // Reveal hidden items
      hiddenItems.forEach(item => item.classList.remove('hidden'));
      button.textContent = 'Show Less';
    } else {
      // Hide items again
      const items = content.querySelectorAll('.accordion-content li');
      items.forEach((item, index) => {
        if (index >= 5) item.classList.add('hidden'); // keep only first 5 visible
      });
      button.textContent = 'Show More';
    }
  });
});
