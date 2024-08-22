//! Ülke Kodları
$(document).ready(function() {
    let phoneInputField = document.querySelector("#phone-number");
    let phoneInput = window.intlTelInput(phoneInputField, {
        initialCountry: "tr",
        preferredCountries: ["tr", "us", "gb"],
        separateDialCode: true,
        autoHideDialCode: false,
        nationalMode: false,
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        geoIpLookup: function(callback) {
            $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
                let countryCode = (resp && resp.country) ? resp.country : "tr";
                callback(countryCode);
            });
        },
        customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
            return `e.g. ${selectedCountryPlaceholder}`;
        }
    });

    phoneInputField.addEventListener('input', function() {
    });

    phoneInputField.addEventListener('countrychange', function() {
    });
});