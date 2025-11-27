// الوصول إلى العناصر التي نحتاجها
const display = document.getElementById('counter-display');
const incrementButton = document.getElementById('increment-button');
const resetButton = document.getElementById('reset-button');

// متغير لحفظ القيمة، يبدأ من صفر
let count = 0;

// دالة زيادة العداد
function incrementCounter() {
    count++;
    display.textContent = count; // تحديث النص المعروض
}

// دالة تصفير العداد
function resetCounter() {
    count = 0;
    display.textContent = count; // تحديث النص المعروض
}

// ربط الدوال بالأزرار عند الضغط
incrementButton.addEventListener('click', incrementCounter);
resetButton.addEventListener('click', resetCounter);