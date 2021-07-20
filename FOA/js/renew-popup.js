function openPopup(id) {
    const popup = $('#'+id);
    popup.addClass('active');
    $('body').addClass('modal-show');
}

function closePopup(id) {
    const popup = $('#'+id);
    popup.removeClass('active');
    $('body').removeClass('modal-show');
}