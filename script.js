// DOM Elements
const annualModeRadio = document.getElementById('annualMode');
const monthlyModeRadio = document.getElementById('monthlyMode');
const annualInputGroup = document.getElementById('annualInputGroup');
const monthlyInputGroup = document.getElementById('monthlyInputGroup');
const gradeInputGroup = document.getElementById('gradeInputGroup');

const annualBaseInput = document.getElementById('annualBase');
const monthlyBaseInput = document.getElementById('monthlyBase');
const shiftTypeSelect = document.getElementById('shiftType');
const functionGradeSelect = document.getElementById('functionGrade');
const gradeContractSelect = document.getElementById('gradeContract');
const bonusRateInput = document.getElementById('bonusRate');
const esppRateInput = document.getElementById('esppRate');
const calculatedAnnualSpan = document.getElementById('calculatedAnnual');

const calculateBtn = document.getElementById('calculateBtn');
const resultsSection = document.getElementById('resultsSection');

// Display elements
const displayAnnualBase = document.getElementById('displayAnnualBase');
const displayGradeBonus = document.getElementById('displayGradeBonus');
const displayFinalBonus = document.getElementById('displayFinalBonus');
const displayTaxAmount = document.getElementById('displayTaxAmount');
const displayEsppDeduction = document.getElementById('displayEsppDeduction');
const displayNetBonus = document.getElementById('displayNetBonus');

// Breakdown elements
const breakdownAnnual = document.getElementById('breakdownAnnual');
const breakdownGrade = document.getElementById('breakdownGrade');
const breakdownBonus = document.getElementById('breakdownBonus');
const breakdownEspp = document.getElementById('breakdownEspp');

// Constants
const ANNUAL_MULTIPLIER = 13.92;
const TAX_RATE = 0.1307; // 13.07%

// Event Listeners
annualModeRadio.addEventListener('change', toggleInputMode);
monthlyModeRadio.addEventListener('change', toggleInputMode);
calculateBtn.addEventListener('click', calculateBonus);

// Monthly calculation inputs
monthlyBaseInput.addEventListener('input', calculateAnnualFromMonthly);
shiftTypeSelect.addEventListener('change', calculateAnnualFromMonthly);
functionGradeSelect.addEventListener('change', calculateAnnualFromMonthly);

// Input validation
annualBaseInput.addEventListener('input', validateInputs);
gradeContractSelect.addEventListener('change', validateInputs);
bonusRateInput.addEventListener('input', validateInputs);
esppRateInput.addEventListener('input', validateInputs);

function toggleInputMode() {
    if (annualModeRadio.checked) {
        annualInputGroup.style.display = 'block';
        monthlyInputGroup.style.display = 'none';
        gradeInputGroup.style.display = 'block';
    } else {
        annualInputGroup.style.display = 'none';
        monthlyInputGroup.style.display = 'block';
        gradeInputGroup.style.display = 'none';
    }
    validateInputs();
}

function calculateAnnualFromMonthly() {
    const monthlyBase = parseFloat(monthlyBaseInput.value) || 0;
    const shiftMultiplier = parseFloat(shiftTypeSelect.value) || 1;
    const functionGrade = parseFloat(functionGradeSelect.value) || 0;
    
    if (monthlyBase > 0 && shiftMultiplier > 0 && functionGrade > 0) {
        const calculatedAnnual = monthlyBase * shiftMultiplier * ANNUAL_MULTIPLIER;
        calculatedAnnualSpan.textContent = formatCurrency(calculatedAnnual);
    } else {
        calculatedAnnualSpan.textContent = '€0.00';
    }
}

function validateInputs() {
    let isValid = false;
    
    if (annualModeRadio.checked) {
        const annualBase = parseFloat(annualBaseInput.value) || 0;
        const gradeContract = gradeContractSelect.value;
        const bonusRate = parseFloat(bonusRateInput.value) || 0;
        
        isValid = annualBase > 0 && gradeContract && bonusRate > 0;
    } else {
        const monthlyBase = parseFloat(monthlyBaseInput.value) || 0;
        const shiftType = shiftTypeSelect.value;
        const functionGrade = functionGradeSelect.value;
        const bonusRate = parseFloat(bonusRateInput.value) || 0;
        
        isValid = monthlyBase > 0 && shiftType && functionGrade && bonusRate > 0;
    }
    
    calculateBtn.disabled = !isValid;
    calculateBtn.classList.toggle('disabled', !isValid);
}

function calculateBonus() {
    let annualBase, gradeContractRate;
    
    if (annualModeRadio.checked) {
        annualBase = parseFloat(annualBaseInput.value);
        gradeContractRate = parseFloat(gradeContractSelect.value);
    } else {
        const monthlyBase = parseFloat(monthlyBaseInput.value);
        const shiftMultiplier = parseFloat(shiftTypeSelect.value);
        const functionGrade = parseFloat(functionGradeSelect.value);
        
        annualBase = monthlyBase * shiftMultiplier * ANNUAL_MULTIPLIER;
        gradeContractRate = functionGrade;
    }
    
    const bonusRate = parseFloat(bonusRateInput.value) / 100;
    const esppRate = parseFloat(esppRateInput.value) / 100;
    
    if (!annualBase || !gradeContractRate || !bonusRate) {
        showError('Please fill in all required fields with valid values.');
        return;
    }
    
    // Show loading state
    calculateBtn.classList.add('loading');
    calculateBtn.textContent = 'Calculating...';
    
    setTimeout(() => {
        performCalculation(annualBase, gradeContractRate, bonusRate, esppRate);
        calculateBtn.classList.remove('loading');
        calculateBtn.textContent = 'Calculate Bonus';
    }, 500);
}

function performCalculation(annualBase, gradeContractRate, bonusRate, esppRate) {
    try {
        // Step 1: Calculate grade bonus
        const gradeBonus = annualBase * gradeContractRate;
        
        // Step 2: Calculate final bonus
        const finalBonus = gradeBonus * bonusRate;
        
        // Step 3: Calculate tax amount
        const taxAmount = finalBonus * TAX_RATE;
        
        // Step 4: Calculate ESPP deduction
        const esppDeduction = finalBonus * esppRate;
        
        // Step 5: Calculate net bonus
        const netBonus = finalBonus - taxAmount - esppDeduction;
        
        // Debug logging
        console.log('=== CALCULATION DEBUG ===');
        console.log('Annual Base:', annualBase);
        console.log('Grade Contract Rate:', gradeContractRate);
        console.log('Grade Bonus (Annual Base × Grade%):', gradeBonus);
        console.log('Bonus Rate:', bonusRate);
        console.log('Final Bonus:', finalBonus);
        console.log('Tax Amount:', taxAmount);
        console.log('ESPP Rate:', esppRate);
        console.log('ESPP Deduction (Final Bonus × ESPP%):', esppDeduction);
        console.log('ESPP Calculation:', finalBonus, '×', esppRate, '=', esppDeduction);
        console.log('Net Bonus:', netBonus);
        console.log('========================');
        
        // Display results
        displayResults({
            annualBase,
            gradeBonus,
            finalBonus,
            taxAmount,
            esppDeduction,
            netBonus,
            gradeContractRate,
            bonusRate,
            esppRate
        });
        
        // Show results section
        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });
        
    } catch (error) {
        showError('An error occurred during calculation. Please try again.');
        console.error('Calculation error:', error);
    }
}

function displayResults(results) {
    // Format currency values
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(value);
    };
    
    // Format percentage values
    const formatPercentage = (value) => {
        return `${(value * 100).toFixed(1)}%`;
    };
    
    // Update display values
    displayAnnualBase.textContent = formatCurrency(results.annualBase);
    displayGradeBonus.textContent = formatCurrency(results.gradeBonus);
    displayFinalBonus.textContent = formatCurrency(results.finalBonus);
    displayTaxAmount.textContent = formatCurrency(results.taxAmount);
    displayEsppDeduction.textContent = formatCurrency(results.esppDeduction);
    displayNetBonus.textContent = formatCurrency(results.netBonus);
    
    // Update breakdown values
    breakdownAnnual.textContent = formatCurrency(results.annualBase);
    breakdownGrade.textContent = formatPercentage(results.gradeContractRate);
    breakdownBonus.textContent = formatPercentage(results.bonusRate);
    breakdownEspp.textContent = formatPercentage(results.esppRate);
    
    // Add success animation
    addSuccessAnimation();
}

function addSuccessAnimation() {
    const resultCards = document.querySelectorAll('.result-card');
    resultCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'scale(1.05)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 200);
        }, index * 100);
    });
}

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-notification';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #e53e3e;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(errorDiv);
        }, 300);
    }, 5000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .calculate-btn.disabled {
        background: #a0aec0 !important;
        cursor: not-allowed;
        transform: none !important;
        box-shadow: none !important;
    }
`;
document.head.appendChild(style);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    validateInputs();
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !calculateBtn.disabled) {
        calculateBonus();
    }
});

// Input formatting
[annualBaseInput, monthlyBaseInput, bonusRateInput, esppRateInput].forEach(input => {
    input.addEventListener('blur', () => {
        const value = parseFloat(input.value);
        if (value) {
            input.value = value.toFixed(2);
        }
    });
}); 