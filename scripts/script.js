const themeButtons = document.querySelectorAll('.header-modified__menu-button');

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    themeButtons.forEach((btn) => {
      btn.classList.remove('header-modified__menu-button_active');
      btn.removeAttribute('disabled');
    });
    if (
      [...button.classList].includes('header-modified__menu-button_type_light')
    ) {
      changeTheme('light');
    } else if (
      [...button.classList].includes('header-modified__menu-button_type_dark')
    ) {
      changeTheme('dark');
    } else {
      changeTheme('auto');
    }
    button.classList.add('header-modified__menu-button_active');
    button.setAttribute('disabled', true);
  });
});

function changeTheme(theme) {
  document.body.className = 'page-modified';
  document.body.classList.add(`theme_${theme}`);
  localStorage.setItem('theme', theme);
}

function initTheme() {
  const theme = localStorage.getItem('theme');
  if (theme) {
    changeTheme(theme);
    themeButtons.forEach((btn) => {
      btn.classList.remove('header-modified__menu-button_active');
      btn.removeAttribute('disabled');
    });
    document
      .querySelector(`.header-modified__menu-button_type_${theme}`)
      .classList.add('header-modified__menu-button_active');
    document
      .querySelector(`.header-modified__menu-button_type_${theme}`)
      .setAttribute('disabled', true);
  }
}

initTheme();
