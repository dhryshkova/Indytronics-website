function toggleMenu() {
  var menu = document.querySelector("#main-menu");
  if (menu.className == 'hidden-small') {
    menu.classList.remove('hidden-small');
	menu.classList.add('show-small');
	menu.style.position = 'relative';
  } else {
    menu.classList.remove('show-small');
	menu.classList.add('hidden-small');
	menu.style.position = "absolute";
  }
}