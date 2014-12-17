$(document).ready(function(){
    var searchForm = $('.page-head__search');
    var hidden = true;

    searchForm.toggle(false);

    $(".page-head__menu--search").click(function(){
        if(hidden) {
            $(this).attr('class', 'page-head__menu--close-search');
            hidden = false;
        } else {
            $(this).attr('class', 'page-head__menu--search');
            hidden = true;
        }

        searchForm.toggle();
        searchForm.find('input[type=text]').focus();
    });
});
