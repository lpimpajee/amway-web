document.addEventListener("DOMContentLoaded", () => {

    const inputNameTH = $("#firstN_TH");
    const inputLNameTH = $("#lastN_TH");



    inputNameTH.on("keyup", function(e) {
        validateNameTH(e, inputNameTH);
    });
    inputLNameTH.on("keyup", function(e) {
        validateNameTH(e, inputLNameTH);
    });



    function validateNameTH(event, input) {
        var inVal = " ";
        inVal = input.val();
        var regex = new RegExp(/^[\u0E00-\u0E7F ]+$/);

        if (!(regex.test(inVal) || input.IsNumeric)) {
            input.val(input.val().replace(/[^\u0E00-\u0E7F\s]/gi, ''))

        }
    }



});