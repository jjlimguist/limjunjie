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

// Show More button
document.querySelectorAll('.show-more').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.parentElement;
    const hiddenItems = content.querySelectorAll('.hidden');

    hiddenItems.forEach(item => item.classList.toggle('hidden'));

    // Toggle button text
    if (button.textContent === 'Show More') {
      button.textContent = 'Show Less';
    } else {
      button.textContent = 'Show More';
    }
  });
});
