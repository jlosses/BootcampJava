//Script Jquery para la animación del menu
$("#navbarNav li a").wrapInner('<span class="out"></span>');

$("#navbarNav li a").each(function () {
    $('<span class="over">' + $(this).text() + '</span>').appendTo(this);
});

$("#navbarNav li a").hover(function () {
    $(".out", this).stop().animate({ 'top': '45px' }, 200); // move down - hide
    $(".over", this).stop().animate({ 'top': '0px' }, 200); // move down - show

}, function () {
    $(".out", this).stop().animate({ 'top': '0px' }, 200); // move up - show
    $(".over", this).stop().animate({ 'top': '-45px' }, 200); // move up - hide
});

/**
   * Mobile nav toggle
   */
const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

function mobileNavToogle() {
  document.querySelector('body').classList.toggle('mobile-nav-active');
  mobileNavToggleBtn.classList.toggle('bi-list');
  mobileNavToggleBtn.classList.toggle('bi-x');
}
mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

/**
 * Hide mobile nav on same-page/hash links
 */
document.querySelectorAll('#navmenu a').forEach(navmenu => {
  navmenu.addEventListener('click', () => {
    if (document.querySelector('.mobile-nav-active')) {
      mobileNavToogle();
    }
  });

});

/**
 * Toggle mobile nav dropdowns
 */
document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
  navmenu.addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.classList.toggle('active');
    this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
    e.stopImmediatePropagation();
  });
});
