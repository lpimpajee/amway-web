(() => {
    $("#checkout-box-upload").on("click", function() {
        const idcard = $("input#idcard").val().replace(/-/g, "");
        if(idcard != "" && idcard.length == 13 && validNationalID(idcard)) {
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

    $("input#idcard").keyup(function() {
        $('.checkout-alert').removeClass('show');
    });
    
    $(document).on("click", ".checkout-alert-close", function() {
        $('.checkout-alert').removeClass('show');
    });

    $("#checkout-box-upload-input").on('change', function() {
        $(".checkout-box-edit-btn").removeClass("hidden");
        $("input#idcard").attr("disabled", true);
        $("#idcardInputBox").addClass("disabled");
    });
})();

function openPopup(id) {
    $("#"+id).addClass("active");
    $("body").addClass("modal-show");
}
function closePopup(id) {
    $("#"+id).removeClass("active");
    $("body").removeClass("modal-show");
}
function clearInput(id) {
    $("#"+id).val("");
    $("#checkout-box-upload-input").val("");
    $('#checkout-box-upload').removeClass('hidden');
    $('#upload-file-area').addClass('hidden');
    $('#checkout-box-upload-img').attr('src', '');
    $("input#"+id).attr("disabled", false);
    $("#"+id+"InputBox").removeClass("disabled");
}