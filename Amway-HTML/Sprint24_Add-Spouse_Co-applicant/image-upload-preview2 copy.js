(() => {
    function openImage() {
        const imageThumbnail = $(this);
        const popup = $('.image-popup2');
        imageThumbnail.on('click', function() {
            popup.addClass('active');
        });
    }

    const image = $('.upload-example2');
    image.each(openImage);

    $.openImage = openImage;
})();

(() => {
    function closePopup() {
        const bg = $(this);
        const popup = $('.image-popup2');
        const btnClose = $('.image-popup-close2');
        bg.on('click', function() {
            popup.removeClass('active');
        });
        btnClose.on('click', function() {
            popup.removeClass('active');
        });
    }

    const bg = $('.popup-bg2');
    bg.each(closePopup);

    $.closePopup = closePopup;
})();

