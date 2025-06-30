# 💰 Company Bonus Calculator

A modern, responsive web application for calculating annual bonuses based on company-specific parameters including shift types, grade contracts, tax rates, and ESPP contributions.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Accurate Calculations**: Implements the exact company formula
- **Multiple Shift Types**: Support for all shift variations (night, A/B, fixed morning/late, weekend)
- **Grade Contract System**: Complete K1-K8 grade support with different percentages
- **Tax Calculation**: Automatic 13.07% tax deduction with amount display
- **ESPP Integration**: Employee Stock Purchase Plan contribution calculation
- **Real-time Validation**: Input validation and error handling
- **Detailed Breakdown**: Step-by-step calculation display
- **Mobile Responsive**: Works perfectly on all devices

## 📋 Calculation Formula

The calculator uses the following formula as specified:

```
((Base Bruto × Shift Bonus) × 13.92 × Grade Contract% × Bonus%) - Tax Amount - ESPP Deduction
```

### Step-by-step breakdown:
1. **Base Salary**: Your base bruto salary
2. **Shift Adjustment**: Multiplied by shift bonus percentage
3. **Annual Calculation**: Multiplied by 13.92 (annual multiplier)
4. **Grade Application**: Multiplied by your grade contract percentage
5. **Bonus Application**: Multiplied by the bonus rate percentage
6. **Tax Calculation**: 13.07% tax rate calculated and displayed
7. **ESPP Deduction**: ESPP percentage applied to base salary
8. **Net Calculation**: Final amount after tax and ESPP deductions

## 🎯 How to Use

1. **Open the Application**: Open `index.html` in your web browser
2. **Enter Base Salary**: Input your base bruto salary in euros
3. **Set Bonus Rate**: Enter the annual bonus percentage
4. **Select Shift Type**: Choose your shift from the dropdown:
   - Regular Day Shift (100%)
   - Night Shift (115%)
   - A/B Shift (110%)
   - Fixed Morning (105%)
   - Fixed Late (108%)
   - Weekend Day (112%)
   - Weekend Night (120%)
5. **Choose Grade Contract**: Select your grade (Knike, K2-K8)
6. **Set ESPP Rate**: Enter your ESPP contribution percentage (optional, defaults to 0%)
7. **Calculate**: Click "Calculate Bonus" to see results

## 📊 Grade Contract Percentages

| Grade | Percentage |
|-------|------------|
| Knike | 5%         |
| K2    | 8%         |
| K3    | 10%        |
| K4    | 12%        |
| K5    | 15%        |
| K6    | 18%        |
| K7    | 20%        |
| K8    | 25%        |

## 🎨 Features

### Input Validation
- Real-time validation of all inputs
- Automatic formatting of currency and percentage values
- Error notifications for invalid inputs
- ESPP is optional (can be 0%)

### Results Display
- **Base Salary**: Your original salary
- **Shift Adjusted Salary**: Salary after shift bonus
- **Annual Base**: Annual calculation (×13.92)
- **Grade Bonus**: Amount after grade application
- **Final Bonus Amount**: Pre-tax bonus amount
- **Tax Amount**: Exact amount of 13.07% tax deducted
- **ESPP Deduction**: Amount deducted for stock purchase
- **Net Bonus**: Final amount after tax and ESPP deductions

### User Experience
- Smooth animations and transitions
- Loading states during calculation
- Keyboard shortcuts (Enter to calculate)
- Mobile-responsive design
- Professional color scheme
- Color-coded results (red for tax, green for ESPP)

## 🛠️ Technical Details

- **Frontend**: Pure HTML, CSS, and JavaScript
- **No Dependencies**: No external libraries required
- **Browser Support**: Works in all modern browsers
- **Currency Formatting**: German locale (€ format)
- **Responsive Design**: Mobile-first approach

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🚀 Getting Started

1. Download all files to a folder
2. Open `index.html` in your web browser
3. Start calculating your bonus!

## 📝 Example Calculation

**Input:**
- Base Salary: €2,500
- Bonus Rate: 15%
- Shift: Night Shift (115%)
- Grade: K5 (15%)
- ESPP: 5%

**Calculation:**
1. Shift Adjusted: €2,500 × 1.15 = €2,875
2. Annual Base: €2,875 × 13.92 = €40,020
3. Grade Bonus: €40,020 × 0.15 = €6,003
4. Final Bonus: €6,003 × 0.15 = €900.45
5. Tax Amount: €900.45 × 0.1307 = €117.69
6. ESPP Deduction: €2,500 × 0.05 = €125.00
7. Net Bonus: €900.45 - €117.69 - €125.00 = **€657.76**

## 🔧 Customization

You can easily customize the calculator by modifying:
- Shift percentages in the HTML select options
- Grade contract percentages in the HTML select options
- Tax rate in the JavaScript constants
- Annual multiplier in the JavaScript constants
- ESPP calculation logic in the JavaScript
- Styling in the CSS file

## 📄 License

This project is open source and available under the MIT License.

---

**Made with ❤️ for accurate bonus calculations**

# PSP Bonus Calculator 📱

A mobile-friendly bonus calculator for PSP employees.

## How to Use on Your Phone

### Method 1: Direct File Access
1. Copy all files (`index.html`, `styles.css`, `script.js`) to your phone
2. Open `index.html` in your phone's browser
3. Add to home screen for easy access

### Method 2: Local Web Server (Recommended)
1. Install a simple web server on your computer
2. Run the server in the project folder
3. Access via your phone's browser using your computer's IP address

### Method 3: Online Hosting
Upload the files to a free hosting service like:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## Quick Setup Commands

### Using Python (if installed):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### Using Node.js (if installed):
```bash
npx serve .
```

### Using PHP (if installed):
```bash
php -S localhost:8000
```

## Mobile Access
Once the server is running:
1. Find your computer's IP address
2. On your phone, go to: `http://[YOUR_COMPUTER_IP]:8000`
3. Add to home screen for app-like experience

## Features
- ✅ Mobile responsive design
- ✅ Works offline
- ✅ Add to home screen capability
- ✅ Modern UI with warnings
- ✅ Accurate bonus calculations

## Files Included
- `index.html` - Main calculator interface
- `styles.css` - Styling and mobile responsiveness
- `script.js` - Calculation logic
- `README.md` - This file

## Disclaimer
This calculator provides estimates only. Always verify with official company documentation. 