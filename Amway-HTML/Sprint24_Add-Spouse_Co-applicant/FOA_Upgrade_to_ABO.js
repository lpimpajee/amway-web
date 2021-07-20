document.addEventListener("DOMContentLoaded", () => {

    const inputName = $("#firstN_EN");
    const inputLName = $("#lastN_EN");
    const inputNameTH = $("#firstN_TH");
    const inputLNameTH = $("#lastN_TH");

    inputName.on("keyup", function (e) {
        validateNameEN(e, inputName);
    });
    inputLName.on("keyup", function (e) {
        validateNameEN(e, inputLName);
    });

    inputNameTH.on("keyup", function (e) {
        validateNameTH(e, inputNameTH);
    });
    inputLNameTH.on("keyup", function (e) {
        validateNameTH(e, inputLNameTH);
    });

    function validateNameEN(event, input) {
        var inVal = " ";
        inVal = input.val();
        var regex = new RegExp(/^[a-zA-Z ]+$/);

        if (!(regex.test(inVal) || input.IsNumeric)) {
            input.val(input.val().replace(/[^a-zA-z\s]/gi, ''))

        }
    }

    function validateNameTH(event, input) {
        var inVal = " ";
        inVal = input.val();
        var regex = new RegExp(/^[\u0E00-\u0E7F ]+$/);

        if (!(regex.test(inVal) || input.IsNumeric)) {
            input.val(input.val().replace(/[^\u0E00-\u0E7F\s]/gi, ''))

        }
    }



});

(() => {
    $("#checkout-box-upload").on("click", function () {
        const idcard = $("input#idcard").val().replace(/-/g, "");
        if (idcard != "" && idcard.length == 13 && validNationalID(idcard)) {
            $(this).find('#checkout-box-upload-input').attr('disabled', false);
        } else {
            $(this).find('#checkout-box-upload-input').attr('disabled', true);
            $(this).find('.checkout-alert').addClass('show');
        }
    });

    function validNationalID(id) {
        if (id.length != 13) return false;
        // STEP 1 - get only first 12 digits
        for (i = 0, sum = 0; i < 12; i++) {
            // STEP 2 - multiply each digit with each index (reverse)
            // STEP 3 - sum multiply value together
            sum += parseInt(id.charAt(i)) * (13 - i);
        }
        // STEP 4 - mod sum with 11
        let mod = sum % 11;
        // STEP 5 - subtract 11 with mod, then mod 10 to get unit
        let check = (11 - mod) % 10;
        // STEP 6 - if check is match the digit 13th is correct
        if (check == parseInt(id.charAt(12))) {
            return true;
        }
        return false;
    }

    $("input#idcard").keyup(function () {
        $('.checkout-alert').removeClass('show');
    });

    $(document).on("click", ".checkout-alert-close", function () {
        $('.checkout-alert').removeClass('show');
    });

    $("#checkout-box-upload-input").on('change', function () {
        $(".checkout-box-edit-btn").removeClass("hidden");
        $("input#idcard").attr("disabled", true);
        $("#idcardInputBox").addClass("disabled");
    });
})();

function openPopup(id) {
    $("#" + id).addClass("active");
    $("body").addClass("modal-show");
}

function closePopup(id) {
    $("#" + id).removeClass("active");
    $("body").removeClass("modal-show");
}

function clearInput(id) {
    $("#" + id).val("");
    $("#checkout-box-upload-input").val("");
    $('#checkout-box-upload').removeClass('hidden');
    $('#upload-file-area').addClass('hidden');
    $('#checkout-box-upload-img').attr('src', '');
    $("input#" + id).attr("disabled", false);
    $("#" + id + "InputBox").removeClass("disabled");
}

$('#policyAccept').on('click', () => {
    $('#policyChx').prop('checked', true);

});
$('#termsAccept').on('click', () => {
    $('#termsAndConditionsChx').prop('checked', true);

});

(() => {
    function ChxPolicyFunc() {
        const ChxPolicy = $(this)

        const ChxPolicyItem = $('.checkout-order-policy-chx-input');
        ChxPolicy.on('change', () => {

            var countCheckedCheckboxes = ChxPolicyItem.filter(':checked').length;
            if (countCheckedCheckboxes === 2) {
                $('#goToPayment').attr('disabled', false);
            }
            ChxPolicy.prop('checked', true);

        })
    }
    const ChxPolicy = $('.checkout-order-policy-chx-input');
    ChxPolicy.each(ChxPolicyFunc);
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

document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("idcardInputBox");
    const input = document.getElementById("idcard");

    const error = document.getElementById("idcardIncorrect");
    const errorIncom = document.getElementById("idcardIncomplete");
    const mask = new IMask(input, {
        mask: "0-0000-00000-00-0"
    });

    input.addEventListener("keyup", event => {
        validateInput(event, input.value.replace(/-/g, ""));
    });

    input.addEventListener("keypress", event => {
        if (event.keyCode === 13) {
            event.preventDefault();
            return false; // Disable enter to submit for UX
        }
    });



    function validateInput(event, value) {
        const maxLength = 13;
        const regex = /^[0-9]\d*$/;
        const char =
            String.fromCharCode(event.keyCode) || String.fromCharCode(event.which);

        if (
            value !== undefined &&
            value.toString().length == maxLength &&
            value.match(regex) &&
            validNationalID(value)
        ) {

            input.setAttribute("aria-invalid", false);
            error.setAttribute("aria-hidden", true);

            error.style.display = "none";
            errorIncom.style.display = "none";
            box.classList.remove('idcardIncorrect-errorMessage');
            box.classList.remove('idcardIncomplete-errorMessage');

        } else if (
            value !== undefined &&
            value.toString().length == maxLength &&
            value.match(regex) &&
            !validNationalID(value)
        ) {

            input.setAttribute("aria-invalid", true);
            error.setAttribute("aria-hidden", false);

            error.style.display = "block";
            errorIncom.style.display = "none";
            box.classList.remove('idcardIncorrect-errorMessage');
            box.classList.add('idcardIncomplete-errorMessage');


        } else {

            input.setAttribute("aria-invalid", true);
            error.setAttribute("aria-hidden", false);

            error.style.display = "none";
            box.classList.remove('idcardIncomplete-errorMessage');

        }
    }

    function validNationalID(id) {
        if (id.length != 13) return false;
        // STEP 1 - get only first 12 digits
        for (i = 0, sum = 0; i < 12; i++) {
            // STEP 2 - multiply each digit with each index (reverse)
            // STEP 3 - sum multiply value together
            sum += parseInt(id.charAt(i)) * (13 - i);
        }
        // STEP 4 - mod sum with 11
        let mod = sum % 11;
        // STEP 5 - subtract 11 with mod, then mod 10 to get unit
        let check = (11 - mod) % 10;
        // STEP 6 - if check is match the digit 13th is correct
        if (check == parseInt(id.charAt(12))) {
            return true;
        }
        return false;
    }


});

function checkIncomplete() {
    const box = document.getElementById("idcardInputBox");
    const input = document.getElementById("idcard");
    const error = document.getElementById("idcardIncomplete");
    const maxLength = 13;
    const value = input.value.replace(/-/g, "");

    if (
        value !== undefined &&
        value.toString().length < maxLength && value !== ''
    ) {
        error.setAttribute("aria-hidden", false);

        error.style.display = "block";
        box.classList.add('idcardIncorrect-errorMessage');
    } else {
        error.setAttribute("aria-hidden", false);

        error.style.display = "none";
        box.classList.remove('idcardIncorrect-errorMessage');
    }
}

(() => {
    function dropdownSearch() {
        const input = $(this);
        input.keyup(function () {
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
    $(document).click(function () {
        const allOption = $('.mz-dropdown__option');
        const inputSearch = $('.dropdownSearch');
        inputSearch.val("");
        allOption.css('display', '');
    });

    function clearInput() {
        const option = $(this);
        const allOption = $('.mz-dropdown__option');
        option.click(function () {
            option.parent().parent().find('.dropdownSearch').val("");
            allOption.css('display', '');
        });
    }

    const option = $('.mz-dropdown__option');
    option.each(clearInput);

    // Expose `clearInput to $ for reuses
    $.clearInput = clearInput;
})();

(() => {
    $("#checkout-box-upload-input").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);

            $('#checkout-box-upload').addClass('hidden');
            $('#upload-file-area').removeClass('hidden');
            $('#upload-file-title').html(this.files[0].name);
        }
    });

    function imageIsLoaded(e) {
        $('#checkout-box-upload-img').attr('src', e.target.result);
    };

    $('#upload-file-delete').click(function () {
        $('#checkout-box-upload-input').val('');
        $('#checkout-box-upload').removeClass('hidden');
        $('#upload-file-area').addClass('hidden');
    });
})();

(() => {
    $("#checkout-box-upload-input-bank").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);

            $('#checkout-box-upload-bank').addClass('hidden');
            $('#upload-file-bank-area').removeClass('hidden');
            $('#upload-file-bank-title').html(this.files[0].name);
        }
    });

    function imageIsLoaded(e) {
        $('#checkout-box-upload-img-bank').attr('src', e.target.result);
    };

    $('#upload-file-bank-delete').click(function () {
        $('#checkout-box-upload-input-bank').val('');
        $('#checkout-box-upload-bank').removeClass('hidden');
        $('#upload-file-bank-area').addClass('hidden');
    });
})();

(() => {
    function openImage() {
        const imageThumbnail = $(this);
        const popup = $('.image-popup');
        imageThumbnail.on('click', function () {
            popup.addClass('active');
        });
    }

    const image = $('.upload-example');
    image.each(openImage);

    $.openImage = openImage;
})();

(() => {
    function closePopup() {
        const bg = $(this);
        const popup = $('.image-popup');
        const btnClose = $('.image-popup-close');
        bg.on('click', function () {
            popup.removeClass('active');
        });
        btnClose.on('click', function () {
            popup.removeClass('active');
        });
    }

    const bg = $('.popup-bg');
    bg.each(closePopup);

    $.closePopup = closePopup;
})();

var db = [
    "312654 - Robert Shawn",
    "312655 - Shawn Robert",
    "312656 - Robert Robert",
    "312657 - Roboto font",
    "312658 - Anna Robert",
    "312659 - Cardi Robert",
    "drawCircle",
    "drawCircleMore",
    "fillLine",
    "fillCircle",
    "fillCircleMore"
];

function popupClearAndHide() {
    sponser_autocomplete_result.innerHTML = "";
    sponser_autocomplete_result.style.display = "none";
    sponser_autocomplete_result_box.style.display = "none";
    sponsor_search_input_box.classList.remove("active");
}

function updPopup() {
    if (!sponser_autocomplete.value) {
        popupClearAndHide();
        return;
    }
    var a = new RegExp("^" + sponser_autocomplete.value, "i");
    for (var x = 0, b = document.createDocumentFragment(), c = false; x < db.length; x++) {
        if (a.test(db[x])) {
            c = true;
            var d = document.createElement("div");
            d.classList.add('sponser-list-result');
            d.innerText = db[x];
            d.setAttribute("onclick", "sponser_autocomplete.value=this.innerText;sponser_autocomplete_result.innerHTML='';sponser_autocomplete_result.style.display='none';sponser_autocomplete_result_box.style.display = 'none';sponsor_search_input_box.classList.remove('active');");
            b.appendChild(d);
        }
    }
    if (c == true) {
        sponser_autocomplete_result.innerHTML = "";
        sponser_autocomplete_result.style.display = "block";
        sponser_autocomplete_result_box.style.display = "block";
        sponsor_search_input_box.classList.add("active");
        sponser_autocomplete_result.appendChild(b);
        return;
    }
    popupClearAndHide();
}

sponser_autocomplete.addEventListener("keyup", updPopup);
sponser_autocomplete.addEventListener("change", updPopup);
sponser_autocomplete.addEventListener("focus", updPopup);

(() => {
    $("#checkout-box-upload-input").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });

    function imageIsLoaded(e) {
        $('#checkout-box-upload-img').attr('src', e.target.result);
    };
})();

(() => {
    $("#checkout-box-upload-bank").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });

    function imageIsLoaded(e) {
        $('#checkout-box-upload-img-bank').attr('src', e.target.result);
        $('#popup-img-bank').attr('src', e.target.result);
        $('#bank-detail-image').attr('src', e.target.result);
        $('#img-bank').attr('src', e.target.result);
    };
})();

(() => {
    var date = document.getElementById('birthdayDate');
    date.oninput = checkDate;

    function checkValue(str, max) {
        if (str.charAt(0) !== '0' || str == '00') {
            var num = parseInt(str);
            if (isNaN(num) || num <= 0 || num > max) num = 1;
            str = num > parseInt(max.toString().charAt(0)) &&
                num.toString().length == 1 ? '0' + num : num.toString();
        };
        return str;
    };

    function checkDate(e) {
        e.target.type = 'text';
        var input = e.target.value;

        if (/\D\/$/.test(input)) input = input.substr(0, input.length - 3);
        var values = input.split('/').map(function (v) {
            return v.replace(/\D/g, '')
        });
        if (values[0]) values[0] = checkValue(values[0], 31);
        if (values[1]) values[1] = checkValue(values[1], 12);
        var output = values.map(function (v, i) {
            return v.length == 2 && i < 2 ? v + ' / ' : v;
        });
        e.target.value = output.join('').substr(0, 14);

        document.getElementById('test-day').style.color = "#FF0000";

    };

})();

(() => {
    function selectNation() {
        const selectItem = $(this);
        const mainContent = selectItem.parents('.checkout-choose-nationality');
        const inputNation = mainContent.find('.checkout-choose-nationality-input-val');
        const dataSelected = selectItem.attr('data-nation');
        const selectItemAll = mainContent.find('.checkout-choose-nationality-box');
        const contentSelected = mainContent.find(`.checkout-choose-nationality-box[data-nation=${dataSelected}]`);
        selectItem.on('click', () => {
            selectItemAll.removeClass('selected');
            inputNation.val(dataSelected);
            contentSelected.addClass('selected');
        })


    }
    const selectItem = $('.checkout-choose-nationality-label');
    selectItem.each(selectNation);

    // Expose `selectNation` to $ for reuses
    $.selectNation = selectNation;
})();

/* global $ */
(() => {

    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    const GAP = 24;
    const MAX_MENU_HEIGHT = 300;

    function calculateMenuPosition(anchor, menu, {
        forceBottom
    } = {}) {
        const topRestrictHeight = $("[data-dropdown-top-restrict='true']").height();
        const bottomRestrictHeight =
            $("[data-dropdown-bottom-restrict='true']").height() || 0;

        const top = anchor.offset().top - $(window).scrollTop();
        const bottom = top + anchor.outerHeight();
        const windowHeight = window.innerHeight;
        const bottomArea = windowHeight - bottom;
        if (bottomArea > 240 + bottomRestrictHeight || forceBottom) {
            console.log(bottomArea - GAP - bottomRestrictHeight)
            return {
                top: bottom + 8,
                bottom: 'auto',
                maxHeight: bottomArea - GAP - bottomRestrictHeight
            };
        }

        return {

            top: 'auto',
            bottom: windowHeight - top + 8,
            maxHeight: top - GAP - topRestrictHeight
        };
    }

    function placeDropdownMenu(anchor, menu, menuList) {
        menu.css('width', anchor.outerWidth());
        menu.css('max-width', anchor.outerWidth());
        menu.css('left', anchor.offset().left);

        const {
            top,
            bottom,
            maxHeight
        } = calculateMenuPosition(anchor, menu);


        menu.css('top', top);
        menu.css('bottom', bottom);
        menu.css('max-height', Math.min(maxHeight, MAX_MENU_HEIGHT));
        menuList.css('max-height', Math.min(maxHeight, MAX_MENU_HEIGHT) - 16)
    }

    function placeDropdownMenuModal(anchor, menu, menuList) {
        menu.css('width', anchor.outerWidth());
        menu.css('max-width', anchor.outerWidth());


        const {
            top,
            bottom,
            maxHeight
        } = calculateMenuPosition(anchor, menu);

        menu.css('max-height', Math.min(maxHeight, MAX_MENU_HEIGHT));
        menuList.css('max-height', '12rem');
        menu.css('position', 'absolute');
        menu.css('top', 'calc(100% + 8px)');
    }

    function initDropdown() {
        const dropdown = $(this);

        if (dropdown.attr('data-init')) return;
        dropdown.attr('data-init', true);

        const button = dropdown.find('.mz-dropdown__button');
        const buttonText = button.find('.mz-dropdown__button-text');
        const iconOnBtn = button.find('.mz-icon');
        const options = dropdown.find('li.mz-dropdown__option');
        const dropdownMenu = dropdown.find('.mz-dropdown__menu');
        const menuList = dropdown.find('.mod_mz-dropdown__menu');
        const itFilter = dropdown.hasClass('filter-in') ? 1 : 0;
        const onModal = dropdown.hasClass('on-modal') ? 1 : 0;

        function checkFilter(onfX) {
            width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
            if ((itFilter == 0 && width < 1023) || (width > 1023)) {

                if (onfX == 1 && (onModal == 0) || (onModal == 1 && width < 1024)) {
                    dropdownMenu.attr("style", "");
                    placeDropdownMenu(button, dropdownMenu, menuList);
                } else if (onModal == 1 && width > 1023) {
                    dropdownMenu.attr("style", "");
                    placeDropdownMenuModal(button, dropdownMenu, menuList);
                }
                buttonText.show();
                iconOnBtn.show();

            } else {
                buttonText.hide();
                iconOnBtn.hide();
                dropdownMenu.attr("style", "");

            }
        }
        checkFilter(0)

        dropdown.on('shown.bs.dropdown', () => {
            checkFilter(1)
            dropdown.append('<div class="dropdown-backdrop"></div>');
        });
        dropdown.on('hidden.bs.dropdown', () => {
            dropdown.find('.dropdown-backdrop').remove();
        })
        dropdown.on('hidde.bs.dropdown', () => {
            dropdown.find('.dropdown-backdrop').remove();
        })
        $(window).resize(() => {
            checkFilter(1)
        });

        document.addEventListener('scroll', () => {
            dropdown.removeClass('open');
            dropdown.find('.dropdown-backdrop').remove();
        });

        options.on('click', e => {
            e.preventDefault();

            const target = $(e.target);
            if (!target.hasClass('disabled')) {
                const option = target.hasClass('mz-dropdown__option') ?
                    target :
                    target.closest('.mz-dropdown__option');

                buttonText.html(option.html());
                buttonText.addClass('--selected');
                buttonText.removeClass('has-soldout');

                options.removeClass('--active');
                option.addClass('--active');
                option
                    .parents('.mz-dropdown__menu')
                    .siblings('button.mz-dropdown__button')
                    .trigger('change', [option.text(), option.data('value')]);
                const idDD = option
                    .parents('.mz-dropdown__menu').siblings('button.mz-dropdown__button').attr('id');

                const inputDD = $(`#${idDD.replace('-dropdown', '')}`);
                inputDD.attr('value', option.data('value'));
            }

        });
    }

    const dropdowns = $('.mz-dropdown');
    dropdowns.each(initDropdown);

    // Expose `initDropdown` to $ for reuses
    $.placeDropdownMenu = placeDropdownMenu;
})();

(() => {
    function ShowAllPd() {
        const btnShow = $(this);
        const pdHide = $('.checkout-order-pic-img.orderHide');
        btnShow.on('click', () => {
            btnShow.addClass('show');
            pdHide.removeClass('orderHide');
        })

    }

    const btnShow = $('.checkout-order-pic-img-action');
    btnShow.each(ShowAllPd);

    // Expose `ShowAllPd to $ for reuses
    $.ShowAllPd = ShowAllPd;
})();

function editBox(id) {
    const box = $('#' + id);
    const boxText = box.find('.checkout-box-edit-content-text');
    const boxEdit = box.find('.checkout-box-edit-content-edit');
    const btnEdit = box.find('.checkout-box-edit-btn-edit');
    boxText.addClass('active');
    boxEdit.addClass('active');
    btnEdit.addClass('active');
}

function closeEditBox(id) {
    const box = $('#' + id);
    const boxText = box.find('.checkout-box-edit-content-text');
    const boxEdit = box.find('.checkout-box-edit-content-edit');
    const btnEdit = box.find('.checkout-box-edit-btn-edit');
    boxText.removeClass('active');
    boxEdit.removeClass('active');
    btnEdit.removeClass('active');
}

function editSponserBox(id) {
    const box = $('#' + id);
    const btnEdit = $('#foreignSponserEditbtn');
    box.addClass('active');
    btnEdit.addClass('active');
}

function editSponserforeignBox(id) {
    const boxEdit = $('#' + id);
    const box = $('#checkout-box-foreignSponser-name');
    box.removeClass('active');
    boxEdit.addClass('active');

}

function delSponserforeignBox(id) {
    const box = $('#' + id);
    const btnEdit = $('#foreignSponserEditbtn');
    box.removeClass('active');
    btnEdit.removeClass('active');

}

function saveSponserforeignBox(id) {
    const boxEdit = $('#' + id);
    const box = $('#checkout-box-foreignSponser-name');
    box.addClass('active');
    boxEdit.removeClass('active');
}

function closeSponserEditBox(id) {
    const box = $('#' + id);
    const btnEdit = $('#foreignSponserEditbtn');

    box.removeClass('active');
    btnEdit.removeClass('active');
}

function saveSponserEditBox(id) {
    const box = $('#' + id);
    const btnEdit = $('#foreignSponserEditbtn');
    const boxName = $('#checkout-box-foreignSponser-name');
    boxName.addClass('active');
    box.removeClass('active');
    /*  btnEdit.removeClass('active'); */
}

/* global $ */
(() => {
    function initIntegerInput() {
        const integerInput = $(this);

        const input = integerInput.find('input');
        const inputId = input.attr('id');

        const quantity = integerInput.find('.mz-integer-input__quantity');
        const addButton = integerInput.find('.mz-integer-input__add-button');

        const incrementButton = integerInput.find('[data-increment]');
        const decrementButton = integerInput.find('[data-decrement]');

        function setValue(id, value) {
            let val = Number(value);

            const min = Number(input.attr('min'));
            const max = Number(input.attr('max'));

            if (Number.isNaN(val)) return;

            if (val > max) val = max;
            if (val < min) val = min;

            if (Number(input.val()) === val) return;

            input.val(Number(val));
            input.trigger('change', [id, val]);
        }

        function increment() {
            setValue(inputId, Number(input.val()) + 1);

        }

        function decrement() {
            setValue(inputId, Number(input.val()) - 1);
        }

        input.keypress(e => {
            if (Number.isNaN(Number(e.key))) {
                e.preventDefault();
            }
        });

        input.keydown(e => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                decrement();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                increment();
            }
        });

        input.keyup(() => {
            setValue(inputId, input.val());
        });

        input.blur(() => {
            setValue(inputId, input.val());
        });

        input.on('paste', e => {
            const value = Number(e.originalEvent.clipboardData.getData('text'));

            if (Number.isNaN(value)) {
                e.preventDefault();
            }

            setValue(inputId, input.val());
        });

        addButton.click(increment);
        incrementButton.click(increment);
        decrementButton.click(decrement);

        function updateMax(value) {
            const incrementDisabled = incrementButton.attr('disabled');
            const max = Number(input.attr('max'));

            if (value >= max && !incrementDisabled) {
                addButton.attr('disabled', true);
                incrementButton.attr('disabled', true);
            } else if (value < max && incrementDisabled) {
                addButton.attr('disabled', false);
                incrementButton.attr('disabled', false);
            }
        }

        function updateMin(value) {
            const decrementDisabled = decrementButton.attr('disabled');
            const min = Number(input.attr('min'));

            if (value <= min && !decrementDisabled) {
                decrementButton.attr('disabled', true);
            } else if (value > min && decrementDisabled) {
                decrementButton.attr('disabled', false);
            }
        }
        if (input.val() <= 0) {
            quantity.addClass('set_zero');
            updateMin(input.val())
        } else {
            quantity.removeClass('set_zero');
        }

        if (input.val() <= 1 && quantity.hasClass("has_bin")) {

            quantity.addClass('--active');
            quantity.removeClass('set_zero');
            addButton.removeClass('--active');
            decrementButton.attr('disabled', false);
            quantity.find('.mz-icon.--minus').hide();
            quantity.find('.btn-del-bin').addClass('active');

        }
        input.on('change', (e, id, value) => {

            if (value <= 0) {
                if (quantity.hasClass("sop_dt")) {
                    quantity.addClass('--active');
                    addButton.removeClass('--active');
                    quantity.addClass('set_zero');

                } else {
                    quantity.removeClass('--active');
                    addButton.addClass('--active');

                }
            } else if (value <= 1 && quantity.hasClass("has_bin")) {

                quantity.addClass('--active');
                quantity.removeClass('set_zero');
                addButton.removeClass('--active');
                decrementButton.attr('disabled', false);
                quantity.find('.mz-icon.--minus').hide();
                quantity.find('.btn-del-bin').addClass('active');

            } else {
                quantity.addClass('--active');
                quantity.removeClass('set_zero');
                addButton.removeClass('--active');
                quantity.find('.mz-icon.--minus').show();
                quantity.find('.btn-del-bin').removeClass('active');
            }

            updateMin(value);
            updateMax(value);
        });

        input.on('update:max', () => {
            updateMax(Number(input.val()));
        });
    }

    $('.mz-integer-input').each(initIntegerInput);
})();

function copyAction(id) {
    $('.amway-modal').removeClass('active');
    $('body').removeClass('modal-show');
    $("#" + id).addClass('active');
    setTimeout(function () {
        $("#" + id).removeClass('active');
    }, 1500);
}

function openModal(id) {
    const modal = $('#' + id);
    $('.amway-modal').removeClass('active');
    $('.amway-modal-fullPageOnMb').removeClass('active');

    modal.addClass('active');
    $('body').addClass('modal-show');
}

function openModalEditP(id) {
    const modal = $('#' + id);
    $('.amway-modal').removeClass('active');
    $('.amway-modal-fullPageOnMb').removeClass('active');
    $('.amway-modal-fullPageOnMb').removeClass('show');
    modal.addClass('active');
    $('body').addClass('modal-show');
}


function openModalInput(id, valueToinput) {
    const modal = $('#' + id);
    const input = modal.find('.input-for-use-something');
    input.val(valueToinput);
    modal.addClass('active');
    $('body').addClass('modal-show');
}

function closeModal(id) {
    const modal = $('#' + id);
    modal.removeClass('active');
    $('body').removeClass('modal-show');
}



function initModal() {
    const allModal = $(this);
    const bgModal = allModal.find('.bg-modal');
    const btnClose = allModal.find('.btn-close-modal');

    bgModal.on('click', () => {
        allModal.removeClass('active');
        $('body').removeClass('modal-show');
    })
    btnClose.on('click', () => {
        allModal.removeClass('active');
        $('body').removeClass('modal-show');
    })

}
const allModal = $('.amway-modal');
allModal.each(initModal);

const allModalFull = $('.amway-modal-fullPageOnMb');
allModalFull.each(initModal);
const allModalSearch = $('.amway-modal-search-pd');
allModalSearch.each(initModal);
const allModalCustomer = $('.amway-modal-customer-right');
allModalCustomer.each(initModal);