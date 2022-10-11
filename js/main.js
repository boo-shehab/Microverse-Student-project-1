const burgerButton = document.querySelector(' .burger-button');
burgerButton.addEventListener('click', () => { burgerButton.classList.toggle('active'); });
const menuLinkes = document.querySelectorAll('header nav ul.linkes li');
for (let i = 0; i < menuLinkes.length; i += 1) {
  menuLinkes[i].addEventListener('click', () => { burgerButton.classList.toggle('active'); });
}