(() => {
    function openImage() {
        const imageThumbnail = $(this);
        const popup = $('.image-popup3');
        imageThumbnail.on('click', function() {
            popup.addClass('active');
        });
    }

    const image = $('.upload-example3');
    image.each(openImage);

    $.openImage = openImage;
})();

(() => {
    function closePopup() {
        const bg = $(this);
        const popup = $('.image-popup3');
        const btnClose = $('.image-popup-close3');
        bg.on('click', function() {
            popup.removeClass('active');
        });
        btnClose.on('click', function() {
            popup.removeClass('active');
        });
    }

    const bg = $('.popup-bg3');
    bg.each(closePopup);

    $.closePopup = closePopup;
})();

