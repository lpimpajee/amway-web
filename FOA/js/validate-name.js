document.addEventListener("DOMContentLoaded", () => {

    const inputName = $("#firstN_EN");
    const inputLName = $("#lastN_EN");
    const inputNameTH = $("#firstN_TH");
    const inputLNameTH = $("#lastN_TH");

    inputName.on("keyup", function(e) {
        validateNameEN(e, inputName);
    });
    inputLName.on("keyup", function(e) {
        validateNameEN(e, inputLName);
    });

    inputNameTH.on("keyup", function(e) {
        validateNameTH(e, inputNameTH);
    });
    inputLNameTH.on("keyup", function(e) {
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