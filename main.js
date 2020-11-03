$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

$(".scrollable").on('click', 'span', function () {
    if (!$(this).hasClass('category-item-selected'))
        $(this).toggleClass('category-item-selected').siblings().removeClass('category-item-selected');
})

