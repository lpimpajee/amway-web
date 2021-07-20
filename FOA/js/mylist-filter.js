(() => {
    function mylistFilterLayout() {
        const layoutFilter = $(this);
        const sectonALL = $('.mylist-section')
        layoutFilter.on('change', () => {
            const dataType = layoutFilter.attr('data-type');
            sectonALL.removeClass('selected');
            $(`.mylist-section[data-type="${dataType}"]`).addClass('selected');
        })

    }

    const layoutFilter = $('.mylist-filter-layout-list-input');
    layoutFilter.each(mylistFilterLayout);

    // Expose `mylistFilterLayout` to $ for reuses
    $.mylistFilterLayout = mylistFilterLayout;
})();