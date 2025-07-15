document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    form.addEventListener('submit', e => e.preventDefault()); // previne reîncărcarea

    form.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        e.preventDefault();

        const button = form.querySelector('button[type="button"]');
        if (button) button.click(); // Simulează apăsarea pe buton
      }
    });
  });
});
