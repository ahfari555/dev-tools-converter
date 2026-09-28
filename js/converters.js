/**
 * DevTools Converter - Core Logic & Tab Controller
 */

// Tab Switching Function linked to Global Window
window.switchTab = function(tabId) {
    // 1. Hide all tab panels
    const panels = document.querySelectorAll('.tab-panel');
    panels.forEach(panel => {
        panel.classList.add('tab-panel-hidden');
    });

    // 2. Reset buttons styling
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active-tab');
        btn.classList.add('inactive-tab');
    });

    // 3. Show target panel
    const targetPanel = document.getElementById('panel-' + tabId);
    if (targetPanel) {
        targetPanel.classList.remove('tab-panel-hidden');
    }

    // 4. Highlight target button
    const targetBtn = document.getElementById('tab-btn-' + tabId);
    if (targetBtn) {
        targetBtn.classList.remove('inactive-tab');
        targetBtn.classList.add('active-tab');
    }
};

// 1. Tax & Discount Calculator
window.calculateTaxAndDiscount = function() {
    const originalPrice = parseFloat(document.getElementById('calc-price')?.value) || 0;
    const discountPercent = parseFloat(document.getElementById('calc-discount')?.value) || 0;
    const taxPercent = parseFloat(document.getElementById('calc-tax')?.value) || 0;

    const discountAmount = originalPrice * (discountPercent / 100);
    const priceAfterDiscount = originalPrice - discountAmount;
    const taxAmount = priceAfterDiscount * (taxPercent / 100);
    const finalPrice = priceAfterDiscount + taxAmount;

    const elDiscount = document.getElementById('res-discount-amount');
    const elTax = document.getElementById('res-tax-amount');
    const elFinal = document.getElementById('res-final-price');

    if (elDiscount) elDiscount.textContent = discountAmount.toFixed(2);
    if (elTax) elTax.textContent = taxAmount.toFixed(2);
    if (elFinal) elFinal.textContent = finalPrice.toFixed(2);
};

// 2. Temperature Converter
window.convertTempUS = function() {
    const inputVal = parseFloat(document.getElementById('temp-input')?.value);
    const unitFrom = document.getElementById('temp-from')?.value;

    if (isNaN(inputVal)) return;

    let celsius = 0;
    if (unitFrom === 'C') celsius = inputVal;
    else if (unitFrom === 'F') celsius = (inputVal - 32) * (5 / 9);
    else if (unitFrom === 'K') celsius = inputVal - 273.15;

    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    const elC = document.getElementById('res-temp-c');
    const elF = document.getElementById('res-temp-f');
    const elK = document.getElementById('res-temp-k');

    if (elC) elC.textContent = celsius.toFixed(2) + ' °C';
    if (elF) elF.textContent = fahrenheit.toFixed(2) + ' °F';
    if (elK) elK.textContent = kelvin.toFixed(2) + ' K';
};

// 3. Weight Converter
window.convertWeightUS = function() {
    const inputVal = parseFloat(document.getElementById('weight-input')?.value);
    const unitFrom = document.getElementById('weight-from')?.value;

    if (isNaN(inputVal)) return;

    let grams = 0;
    if (unitFrom === 'g') grams = inputVal;
    else if (unitFrom === 'kg') grams = inputVal * 1000;
    else if (unitFrom === 'lbs') grams = inputVal * 453.592;
    else if (unitFrom === 'oz') grams = inputVal * 28.3495;

    const kg = grams / 1000;
    const lbs = grams / 453.592;
    const oz = grams / 28.3495;

    const elG = document.getElementById('res-weight-g');
    const elKg = document.getElementById('res-weight-kg');
    const elLbs = document.getElementById('res-weight-lbs');
    const elOz = document.getElementById('res-weight-oz');

    if (elG) elG.textContent = grams.toFixed(2) + ' g';
    if (elKg) elKg.textContent = kg.toFixed(4) + ' kg';
    if (elLbs) elLbs.textContent = lbs.toFixed(2) + ' lbs';
    if (elOz) elOz.textContent = oz.toFixed(2) + ' oz';
};

// 4. Length Converter
window.convertLengthUS = function() {
    const inputVal = parseFloat(document.getElementById('length-input')?.value);
    const unitFrom = document.getElementById('length-from')?.value;

    if (isNaN(inputVal)) return;

    let meters = 0;
    if (unitFrom === 'm') meters = inputVal;
    else if (unitFrom === 'cm') meters = inputVal / 100;
    else if (unitFrom === 'km') meters = inputVal * 1000;
    else if (unitFrom === 'inch') meters = inputVal * 0.0254;
    else if (unitFrom === 'ft') meters = inputVal * 0.3048;

    const cm = meters * 100;
    const km = meters / 1000;
    const inch = meters / 0.0254;
    const ft = meters / 0.3048;

    const elM = document.getElementById('res-length-m');
    const elCm = document.getElementById('res-length-cm');
    const elKm = document.getElementById('res-length-km');
    const elInch = document.getElementById('res-length-inch');
    const elFt = document.getElementById('res-length-ft');

    if (elM) elM.textContent = meters.toFixed(2) + ' m';
    if (elCm) elCm.textContent = cm.toFixed(2) + ' cm';
    if (elKm) elKm.textContent = km.toFixed(4) + ' km';
    if (elInch) elInch.textContent = inch.toFixed(2) + ' in';
    if (elFt) elFt.textContent = ft.toFixed(2) + ' ft';
};

// Run initial conversions on load
document.addEventListener('DOMContentLoaded', () => {
    window.calculateTaxAndDiscount();
    window.convertTempUS();
    window.convertWeightUS();
    window.convertLengthUS();
});