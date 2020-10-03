// external js: isotope.pkgd.js
var $grid = $('.grid').imagesLoaded(function () {
    $grid.isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        layoutMode: 'fitRows'
    });
});

// reveal all items after init
var $items = $grid.find('.grid-item');
$grid.addClass('is-showing-items')
  .isotope( 'revealItemElements', $items );

// filter functions
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function () {
        var number = $(this).find('.number').text();
        return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function () {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
    }
};

function getHashFilter() {
    // get filter=filterName
    var matches = location.hash.match(/filter=([^&]+)/i);
    var hashFilter = matches && matches[1];
    return hashFilter && decodeURIComponent(hashFilter);
}

// bind filter button click
var $filterButtonGroup = $('.filter-button-group');
$filterButtonGroup.on('click', 'button', function () {
    var filterAttr = $(this).attr('data-filter');
    // set filter in hash
    location.hash = 'filter=' + encodeURIComponent(filterAttr);
});

var isIsotopeInit = false;

function onHashchange() {


    var hashFilter = getHashFilter();
    if (!hashFilter && isIsotopeInit) {
        return;
    }
    isIsotopeInit = true;
    
    // filter isotope
    $grid.isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        // use filterFns
        filter: filterFns[hashFilter] || hashFilter
    });

   
    // set selected class on button
    if (hashFilter) {
        $filterButtonGroup.find('.is-checked').removeClass('is-checked');
        $filterButtonGroup.find('[data-filter="' + hashFilter + '"]').addClass('is-checked');
        
        
        if (hashFilter == "*") {
            $('#pageTitle').text("Selected Work");
        }

        if (hashFilter == ".graphic-design") {
            $('#pageTitle').text("Graphic Design");
        }

        if (hashFilter == ".illustration") {
            $('#pageTitle').text("Illustration");
        }
        if (hashFilter == ".animation"){
            $('#pageTitle').text("Animation");
        }
        if (hashFilter == ".web-dev")
            {
            $('#pageTitle').text("Web Development");
        }
    }
}

$(window).on('hashchange', onHashchange);

// trigger event handler to init Isotope
onHashchange();