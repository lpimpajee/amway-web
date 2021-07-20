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