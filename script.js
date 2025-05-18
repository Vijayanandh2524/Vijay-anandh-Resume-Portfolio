// === Animated Typing Effect ===
function typeText(element, text, speed = 25) {
  element.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

window.addEventListener('DOMContentLoaded', () => {
  const intro = `Finance and Accounting professional with a 7.4 CGPA from Sri Krishna Arts and Science College. Published author of seven books with ISBN recognition. Hands-on experience in SAP ERP during an internship at Dalmia Cement. Skilled in financial analysis, risk management, budgeting, and forecasting. Strong project management expertise in Agile, ITIL V4, and Waterfall. Proficient in SQL, Oracle PL/SQL, MS Power BI, HTML, CSS, and SAP Concur. Analytical thinker with a focus on automation and innovation.`;

  const introElement = document.getElementById('intro-text');
  if (introElement) {
    typeText(introElement, intro);
  }

  const darkToggle = document.getElementById('dark-toggle');
  const html = document.documentElement;

  // Load saved theme preference or system preference
  const savedTheme = localStorage.getItem('theme');
  if (
    savedTheme === 'dark' ||
    (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    html.classList.add('dark');
    if (darkToggle) darkToggle.checked = true;
  } else {
    html.classList.remove('dark');
    if (darkToggle) darkToggle.checked = false;
  }

  // Toggle dark mode on checkbox change
  if (darkToggle) {
    darkToggle.addEventListener('change', () => {
      if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
