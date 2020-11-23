function showMenu() {
  $(".hamburger-menu").fadeIn(200);
}

function hideMenu() {
  $(".hamburger-menu").fadeOut(200);
}

$(".header-right > a").click(showMenu);

$(".hamburger-menu > a").click(hideMenu);
