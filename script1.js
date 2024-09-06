function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi,ta,te,kn,ml,bn,mr,gu,pa,or,as,mai',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        gaTrack: true,
        gaId: 'your-ga-id'
    }, 'google_translate_element');
}


// Listen for the language change event
document.addEventListener('click', function() {
    var select = document.querySelector(".goog-te-combo");
    if (select) {
        select.addEventListener('change', function() {
            var selectedLanguage = select.value;
            localStorage.setItem('selectedLanguage', selectedLanguage);
        });
    }
});


function applySavedLanguage() {
    var selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
        var select = document.querySelector(".goog-te-combo");
        if (select) {
            select.value = selectedLanguage;
            select.dispatchEvent(new Event('change')); // Trigger the language change event
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    applySavedLanguage();
});



// Show tips immediately when the user clicks "Yes"
function showTips() {
    document.getElementById('tips-section').style.display = 'block';
    document.getElementById('user-satisfaction').style.display = 'none';
}

// Ask for water input when the user clicks "No"
function askForWaterInput() {
    document.getElementById('water-input-section').style.display = 'block';
    document.getElementById('user-satisfaction').style.display = 'none';
}

// Suggest crops based on water input
function suggestCrops() {
    const waterAmount = document.getElementById('water-amount').value;
    const suggestedProductsList = document.getElementById('suggested-products-list');
    suggestedProductsList.innerHTML = '';  // Clear previous suggestions

    // Example crops suggestion logic based on water amount
    if (waterAmount >= 2500) {
        suggestedProductsList.innerHTML += '<li>Rice (2,500 liters per kilogram)</li>';
    }
    if (waterAmount >= 1800) {
        suggestedProductsList.innerHTML += '<li>Wheat (1,800 liters per kilogram)</li>';
    }
    if (waterAmount >= 1200) {
        suggestedProductsList.innerHTML += '<li>Barley (1,200 liters per kilogram)</li>';
    }
    if (waterAmount < 1200) {
        suggestedProductsList.innerHTML += '<li>Millet (900 liters per kilogram)</li>';
    }

    // Show the suggested products section
    document.getElementById('suggested-products-section').style.display = 'block';
    document.getElementById('water-input-section').style.display = 'none';
}
 

