(() => {
    function editLinkName() {
        const btnEdit = $(this);
        const mainSubmit = $('.box-link-edit-btn-main-submit');
        const mainbox = btnEdit.parents('.box-link-edit');
        const inputEdit = mainbox.find('.box-link-edit-input');
        const box = $('.box-link-edit-content');
        const firstName = btnEdit.attr('data-name');

        btnEdit.on('click', () => {
            mainSubmit.attr("disabled", true);
            mainbox.removeClass('disabled');
            inputEdit.attr("disabled", false);
            box.addClass('selected');
            $('.amway-info-url-status-state').removeClass('active');
        })


    }
    const btnEdit = $('.box-link-edit-btn');
    btnEdit.each(editLinkName);

    // Expose `editLinkName` to $ for reuses
    $.editLinkName = editLinkName;
})();

(() => {
    function saveEditLinkName() {
        const btnSave = $(this);
        const btnEdit = $('.box-link-edit-btn');
        const mainSubmit = $('.box-link-edit-btn-main-submit');
        const mainbox = btnEdit.parents('.box-link-edit');
        const inputEdit = mainbox.find('.box-link-edit-input');
        const box = $('.box-link-edit-content');
        const firstName = btnEdit.attr('data-name');
        const textBox = $('.box-link-edit-text');
        btnSave.on('click', () => {

            mainSubmit.attr("disabled", false);
            mainbox.addClass('disabled');
            inputEdit.attr("disabled", true);
            box.removeClass('selected');
            const newName = inputEdit.val();
            textBox.html(`<p>${newName}</p>`);
            btnEdit.attr('data-name', newName);

        })


    }
    const btnSave = $('.box-link-edit-confirm-btn');
    btnSave.each(saveEditLinkName);

    // Expose `saveEditLinkName` to $ for reuses
    $.saveEditLinkName = saveEditLinkName;
})();

function closeEditLinkName() {
    const btnEdit = $('.box-link-edit-btn');
    const mainSubmit = $('.box-link-edit-btn-main-submit');
    const mainbox = btnEdit.parents('.box-link-edit');
    const inputEdit = mainbox.find('.box-link-edit-input');
    const box = $('.box-link-edit-content');
    const textBox = $('.box-link-edit-text');
    const firstName = btnEdit.attr('data-name');
    mainSubmit.attr("disabled", false);
    mainbox.addClass('disabled');
    inputEdit.attr("disabled", true);
    box.removeClass('selected');
    inputEdit.val(firstName);
    textBox.html(`<p>${firstName}</p>`);
    $('.box-link-edit-confirm-btn').attr("disabled", false);
}

var reg = /^[A-Za-z0-9]+[.,]*$/;
var inputChx = $('#link');

activeUrlInput()
inputChx.on('change', () => {
    activeUrlInput()
})

function activeUrlInput() {
    if (reg.test(inputChx.val()) == false) {
        $('.box-link-edit-confirm-btn').attr("disabled", true);
        $('.amway-info-url-status-state.available').removeClass('active');
        $('.amway-info-url-status-state.unavailable').addClass('active')
    } else {
        $('.box-link-edit-confirm-btn').attr("disabled", false);
        $('.amway-info-url-status-state.available').addClass('active');
        $('.amway-info-url-status-state.unavailable').removeClass('active');
    }

}