$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

$(".scrollable").on('click', 'span', function () {
    if (!$(this).hasClass('category-item-selected'))
        $(this).toggleClass('category-item-selected').siblings().removeClass('category-item-selected');
})


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});