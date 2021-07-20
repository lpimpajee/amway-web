(() => {
    function initLanguage() {
        const Language = $(this);
        const btn = Language.find(".ahl-btn");
        const inputLang = $('#inputLanguage');
        const listMenu = Language.find(".ahl-menu-list");
        btn.on('click', () => {
            Language.toggleClass('active');
            $('.amway-header-modal.for-changeLang').toggleClass('active');
        })
    }

    const Language = $('.amway-header-language');
    Language.each(initLanguage);

    // Expose `initLanguage` to $ for reuses
    $.initLanguage = initLanguage;
})();
(() => {
    function MbLanguage() {
        const btnLanguage = $(this);
        const mblanguage = $(".shop-list-btn-lang-box");
        btnLanguage.on('click', () => {
            const langData = btnLanguage.find(".shop-list-btn-lang-box.active").attr('data-lang');
            const DataTogle = '';

            const LanguageListALL = $('.ahl-menu-list');
            const inputLanguage = $('.inputLanguage');
            if (langData == 'en') {
                const DataTogle = 'th';
                const mblanguageSelected = $(`.shop-list-btn-lang-box[data-lang="${DataTogle}"]`);
                mblanguage.removeClass('active');
                mblanguageSelected.addClass('active');

                const LanguageList = $(`.ahl-menu-list[data-lang="${DataTogle}"]`);

                $('.amway-header-modal.for-changeLang').removeClass('active');
                LanguageList.parents(".amway-header-language").removeClass('active');
                LanguageListALL.removeClass('--active');
                LanguageList.addClass('--active');
                LanguageList.parents(".amway-header-language").find('.ahl-btn').text(LanguageList.text());
                inputLanguage.val(DataTogle)
            } else if (langData == 'th') {
                const DataTogle = 'en';
                const mblanguageSelected = $(`.shop-list-btn-lang-box[data-lang="${DataTogle}"]`);
                mblanguage.removeClass('active');
                mblanguageSelected.addClass('active');

                const LanguageList = $(`.ahl-menu-list[data-lang="${DataTogle}"]`);

                $('.amway-header-modal.for-changeLang').removeClass('active');
                LanguageList.parents(".amway-header-language").removeClass('active');
                LanguageListALL.removeClass('--active');
                LanguageList.addClass('--active');
                LanguageList.parents(".amway-header-language").find('.ahl-btn').text(LanguageList.text());
                inputLanguage.val(DataTogle)
            }





        })
    }

    const MbBtnLanguage = $('.shop-list-btn-lang');
    MbBtnLanguage.each(MbLanguage);

    // Expose `MbLanguage` to $ for reuses
    $.MbLanguage = MbLanguage;
})();
(() => {
    function chooseLanguage() {
        const LanguageList = $(this);
        const LanguageListALL = $('.ahl-menu-list');
        const inputLanguage = $('.inputLanguage');
        const LanguageData = LanguageList.attr('data-lang')
        const LanguageListALLMB = $('.shop-list-btn-lang-box');
        const LanguageListSelectedMB = $(`.shop-list-btn-lang-box[data-lang="${LanguageData}"]`);
        LanguageList.on('click', () => {
            $('.amway-header-modal.for-changeLang').removeClass('active');
            LanguageList.parents(".amway-header-language").removeClass('active');
            LanguageListALL.removeClass('--active');
            LanguageList.addClass('--active');
            LanguageListALLMB.removeClass('active');
            LanguageListSelectedMB.addClass('active');
            LanguageList.parents(".amway-header-language").find('.ahl-btn').text(LanguageList.text());
            inputLanguage.val(LanguageData)

        })
    }

    const LanguageList = $('.ahl-menu-list');
    LanguageList.each(chooseLanguage);

    // Expose `chooseLanguage` to $ for reuses
    $.chooseLanguage = chooseLanguage;
})();



(() => {
    function chooseLanguageInput() {
        const inputLanguage = $(this);
        const inputLanguageData = inputLanguage.val()

        const LanguageListALL = $('.ahl-menu-list');
        const LanguageList = $(`.ahl-menu-list[data-lang="${inputLanguageData}"]`);
        const LanguageListALLMB = $('.shop-list-btn-lang-box');
        const LanguageListSelectedMB = $(`.shop-list-btn-lang-box[data-lang="${inputLanguageData}"]`);
        LanguageList.parents(".amway-header-language").removeClass('active');
        LanguageListALL.removeClass('--active');
        LanguageList.addClass('--active');
        LanguageList.parents(".amway-header-language").find('.ahl-btn').text(LanguageList.text());
        inputLanguage.val(inputLanguageData)
        LanguageListALLMB.removeClass('active');
        LanguageListSelectedMB.addClass('active');


    }

    const inputLanguage = $('.inputLanguage');
    inputLanguage.each(chooseLanguageInput);

    // Expose `chooseLanguageInput` to $ for reuses
    $.chooseLanguageInput = chooseLanguageInput;
})();

$(window).resize(function() {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width < 1024) {
        $('.amwaySubmenu').removeClass('active');
        $('.for-changeLang').removeClass('active');
    }
});