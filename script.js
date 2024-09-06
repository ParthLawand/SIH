// Sample product suggestions
const products = ["Rice", "Cotton", "Wheat", "Corn", "Barley"];

function showSuggestions() {
    const input = document.getElementById('product-input').value.toLowerCase();
    const suggestions = document.getElementById('suggestions');
    
    suggestions.innerHTML = '';
    
    if (input) {
        const filteredProducts = products.filter(product => product.toLowerCase().includes(input));
        filteredProducts.forEach(product => {
            const div = document.createElement('div');
            div.textContent = product;
            div.onclick = () => {
                document.getElementById('product-input').value = product;
                suggestions.innerHTML = '';
            };
            suggestions.appendChild(div);
        });
    }
}

function scanProduct() {
    alert('Scanning feature is under development.');
}

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


function getWaterFootprint() {
    
    window.location.href = 'index1.html';
}
