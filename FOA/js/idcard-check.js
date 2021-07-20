document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("idcardInputBox");
    const input = document.getElementById("idcard");

    const error = document.getElementById("idcardIncorrect");
    const errorIncom = document.getElementById("idcardIncomplete");
    const mask = new IMask(input, { mask: "0-0000-00000-00-0" });

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