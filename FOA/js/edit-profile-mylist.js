(() => {
    function initEditBtn() {
        const editBtnArea = $(this);
        const editBtn = editBtnArea.find('.shop-mylist-banner-mod-bci-edit-btn');
        const backdrop = editBtnArea.find('.shop-mylist-banner-mod-edit-backdrop');
        const editMenu = editBtnArea.find('.shop-mylist-banner-mod-edit-menu');
        const list = editBtnArea.find('.shop-mylist-banner-mod-edit-menu-list');
        const onMb = $('#editPop');
        const bdonMb = onMb.find('.bg-modal');
        editBtn.on('click', () => {
            editBtnArea.toggleClass('selected');
            onMb.toggleClass('active');
        })

        list.on('click', () => {
            editBtnArea.removeClass('selected');
            onMb.removeClass('active');
        })
        backdrop.on('click', () => {
            editBtnArea.removeClass('selected');
            onMb.removeClass('active');
        })
        bdonMb.on('click', () => {
            editBtnArea.removeClass('selected');
            onMb.removeClass('active');
        })

    }
    const editBtn = $('.shop-mylist-banner-mod-bci-edit');
    editBtn.each(initEditBtn);
})();