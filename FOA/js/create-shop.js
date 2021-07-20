(() => {
    function nextStepCreate() {
        const BtnNext = $(this);
        const contentId = BtnNext.attr('data-stepContent');
        const content = $(`.amway-creator-step-content[data-stepContent="${contentId}"]`);

        const dataContent = content.attr('data-stepContent');
        const dataBack = content.attr('data-backContentTab');
        const dataTitle = content.attr('data-title');
        const dataProgress = content.attr('data-progress');
        const btnBackAll = $('.ah-back');
        const btnBack = $(`.ah-back[data-backContentTab="${dataBack}"]`);
        const title = $('.ah-creator');
        const progress = $('.acp-state');
        const contentAreaAll = $('.amway-creator-step-content');
        BtnNext.on('click', () => {
            if (contentId != 'anotherLink') {
                btnBackAll.removeClass('active');
                contentAreaAll.removeClass('--selected');
                content.addClass('--selected');
                btnBack.addClass('active');
                progress.css('width', `${dataProgress}%`);
                title.text(`${dataTitle}`);
            }
        })


    }
    const BtnNext = $('.next-step-creator');
    BtnNext.each(nextStepCreate);

    // Expose `nextStepCreate` to $ for reuses
    $.nextStepCreate = nextStepCreate;
})();
(() => {
    function backStepCreate() {
        const BtnBack = $(this);
        const contentId = BtnBack.attr('data-backContentTab');
        const content = $(`.amway-creator-step-content[data-stepContent="${contentId}"]`);
        const dataContent = content.attr('data-stepContent');
        const dataBack = content.attr('data-backContentTab');
        const dataTitle = content.attr('data-title');
        const dataProgress = content.attr('data-progress');
        const btnBackAll = $('.ah-back');
        const btnBack = $(`.ah-back[data-backContentTab="${dataBack}"]`);
        const title = $('.ah-creator');
        const progress = $('.acp-state');
        const contentAreaAll = $('.amway-creator-step-content');

        BtnBack.on('click', () => {
            console.log(contentId);
            if (contentId != 'anotherLink') {
                btnBackAll.removeClass('active');
                contentAreaAll.removeClass('--selected');
                content.addClass('--selected');
                btnBack.addClass('active');
                progress.css('width', `${dataProgress}%`);
                title.text(`${dataTitle}`);
            }
        })
    }
    const BtnBack = $('.ah-back');
    BtnBack.each(backStepCreate);
    const BtnBackDt = $('.back-step-creator');
    BtnBackDt.each(backStepCreate);
    // Expose `backStepCreate` to $ for reuses
    $.backStepCreate = backStepCreate;
})();


(() => {
    function inputPolicyAction() {
        const inputPolicy = $(this);
        const btnCreateShop = $('.create-shop');
        inputPolicy.on('change', () => {

            if ($(this).prop("checked") == true) {
                btnCreateShop.attr('disabled', false)

            } else if ($(this).prop("checked") == false) {
                btnCreateShop.attr('disabled', true)

            }
        })
    }

    const inputPolicy = $('.policy-creator-chx');
    inputPolicy.each(inputPolicyAction);

    // Expose `inputPolicyAction` to $ for reuses
    $.inputPolicyAction = inputPolicyAction;
})();
(() => {
    function AcceptPolicyAction() {
        const AcceptPolicy = $(this);
        const inputPolicy = $('.policy-creator-chx');
        const btnCreateShop = $('.create-shop');
        AcceptPolicy.on('click', () => {
            inputPolicy.prop("checked", true)
            if (inputPolicy.prop("checked") == true) {
                btnCreateShop.attr('disabled', false)

            } else if (inputPolicy.prop("checked") == false) {
                btnCreateShop.attr('disabled', true)

            }
        })
    }

    const AcceptPolicy = $('.btn-black.Accept');
    AcceptPolicy.each(AcceptPolicyAction);

    // Expose `AcceptPolicyAction` to $ for reuses
    $.AcceptPolicyAction = AcceptPolicyAction;
})();

function openPolicy(id) {
    const modal = $('#' + id);
    modal.addClass('active');
    $('body').addClass('modal-show');
}

function closePolicy(id) {
    const modal = $('#' + id);
    modal.removeClass('active');
    $('body').removeClass('modal-show');
}
(() => {
    function bgClosePolicy() {
        const bgPolicy = $(this);
        const modal = $('.amway-policy-modal');
        bgPolicy.on('click', () => {
            modal.removeClass('active');
            $('body').removeClass('modal-show');
        })

    }

    const bgPolicy = $('.amway-policy-modal .bg-modal');
    bgPolicy.each(bgClosePolicy);

    // Expose `bgClosePolicy` to $ for reuses
    $.bgClosePolicy = bgClosePolicy;
})();



function openCongrate(id) {
    const modal = $('#' + id);
    modal.addClass('active');
    $('body').addClass('modal-show');
}

function closeCongrate(id) {
    const modal = $('#' + id);
    modal.removeClass('active');
    $('body').removeClass('modal-show');
}


(() => {

    function ThemeSelected(mainTheme, showProfile) {
        const themeSelected = mainTheme.find('.slick-current.slick-active.slick-center');
        const valTheme = themeSelected.find('.theme-content-theme-input').attr('value');
        console.log(themeSelected.find('.theme-content-theme-input').attr('value'))
        showProfile.attr('class', `theme-content-profile ${valTheme}`)
    }

    const mainTheme = $('.creator-theme');
    const showProfile = $('.theme-content-profile');
    mainTheme.on('afterChange', function() {
        ThemeSelected(mainTheme, showProfile)
    });

})();