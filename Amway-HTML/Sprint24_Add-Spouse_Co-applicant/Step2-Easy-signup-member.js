(() => {
    // Generate year options backwardly to the past 100 years.
    function generateYearOptions() {
        const yearDropdownButton = $('#year');
        const now = new Date();
        const previousEighteenYears = now.getFullYear() - 18;
        const years = Array(50 - 18) // Ranged between age of 18 to 50
            .fill()
            .map((_, i) => previousEighteenYears - i);

        const yearsWrapper = yearDropdownButton.next(
            'ul.oa-dropdown__menu.dropdown-menu'
        );
        years.forEach(year => {
            const li = $('<li></li>');
            li.addClass('oa-dropdown__option');
            li.attr('data-value', year);
            li.text(year);
            li.appendTo(yearsWrapper);
        });

        const yearDropdown = yearDropdownButton.parent('.oa-dropdown');
        yearDropdown.removeAttr('data-init');
        $.initDropdown.call(yearDropdown.get(0));
    }

    function initBirthdayInput() {
        let day;
        let month;
        let year;

        const birthDayInput = $('input[name="birthday"]');

        function updateBirthday() {
            if (day && month && year) {
                birthDayInput.attr('value', `${year}-${month}-${day}`);
            }
        }

        $('#day').on('change', (e, label, value) => {
            day = value;
            updateBirthday();
        });
        $('#month').on('change', (e, label, value) => {
            month = value;
            updateBirthday();
        });
        $('#year').on('change', (e, label, value) => {
            year = value;
            updateBirthday();
        });
    }

    generateYearOptions();
    initBirthdayInput();

    $.validator.addMethod(
        'validDate',
        function validDate(value) {
            if (!value) {
                return true;
            }

            const date = moment(value, 'YYYY-MM-DD');
            return date.isValid();
        },
        'คุณกรอกวันที่ไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง'
    );

    /* ID Card */

    const idForm = $('#id-card-form');

    idForm.validate({
        rules: {
            'id-card': {
                digits: true,
                required: true,
                minlength: 13,
                maxlength: 13
            }
        },
        messages: {
            'id-card': {
                required: 'โปรดกรอกเลขที่บัตรประชาชน',
                digits: 'คุณกรอกเลขที่บัตรประชาชนไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง',
                minlength: 'คุณกรอกเลขที่บัตรประชาชนไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง',
                maxlength: 'คุณกรอกเลขที่บัตรประชาชนไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง'
            }
        }
    });

    /* Vadlidate Passport Section */

    const passportForm = $('#passport-form');
    const countryInput = $('input[name="country"]');


    $('#country-selector').on('change', (e, label, value) => {
        countryInput.val(value);
        countryInput.trigger('keyup');
    });
    const nonTHRegex = /[^a-zA-Z|\s]/;


    passportForm.validate({
        rules: {
            passport: 'required',
            country: 'required',
            'FirstnameEng': {
                required: true,
                en: true

            },
            'LastnameEng': {
                required: true,
                en: true
            },
            day: 'required',
            month: 'required',
            year: 'required',
            birthday: 'required',
        },
        messages: {
            passport: 'โปรดกรอกเลขที่หนังสือเดินทาง',
            country: 'โปรดเลือกประเทศ',
            birthday: 'โปรดระบุวันเกิด'

        }
    });

    /* Checkbox disable Button */

    (() => {
        const submitButton = document.getElementById("submit");
        const checker = document.getElementById("id-agreement");
        submitButton.disabled = true;

        checker.onchange = function () {
            if (this.checked) {
                submitButton.disabled = false;
            } else {
                submitButton.disabled = true;
            }
        };
    })();

    
    (() => {
        const submitButton2 = document.getElementById("submit2");
        const checker = document.getElementById("passport-agreement");
        submitButton2.disabled = true;

        checker.onchange = function () {
            if (this.checked) {
                submitButton2.disabled = false;
            } else {
                submitButton2.disabled = true;
            }
        };
    })();
})();