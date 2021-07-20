(() => {
    function dropdownSearch() {
        const input = $(this);
        input.keyup(function() {
            const val = input.val();
            const filter = val.toUpperCase();
            const dropdown = $(this).parent().parent('.dropdown-menu');
            const list = dropdown.find('.mz-dropdown__text');
            for (i = 0; i < list.length; i++) {
                txtValue = list[i].textContent || list[i].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    list[i].parentElement.style.display = "";
                } else {
                    list[i].parentElement.style.display = "none";
                }
            }
        });
    }

    const input = $('.dropdownSearch');
    input.each(dropdownSearch);

    // Expose `dropdownSearch to $ for reuses
    $.dropdownSearch = dropdownSearch;
})();

(() => {
    $(document).click(function() {
        const allOption = $('.mz-dropdown__option');
        const inputSearch = $('.dropdownSearch');
        inputSearch.val("");
        allOption.css('display', '');
    });
    
    function clearInput() {
        const option = $(this);
        const allOption = $('.mz-dropdown__option');
        option.click(function() {
            option.parent().parent().find('.dropdownSearch').val("");
            allOption.css('display', '');
        });
    }

    const option = $('.mz-dropdown__option');
    option.each(clearInput);

    // Expose `clearInput to $ for reuses
    $.clearInput = clearInput;
})();