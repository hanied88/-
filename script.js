// العناصر الأساسية للعداد
const display = document.getElementById('counter-display');
const incrementButton = document.getElementById('increment-button');
const resetButton = document.getElementById('reset-button');
let count = 0;

// عناصر الكلمات
const word1 = document.getElementById('word1'); // اقعد
const word2 = document.getElementById('word2'); // يا
const word3 = document.getElementById('word3'); // عبادة

// مجموعة الألوان العشوائية التي ستظهر
const colors = ['#FF6347', '#4682B4', '#3CB371', '#FFA500', '#DA70D6'];

// دالة عشوائية لاختيار لون من المصفوفة
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// دالة تطبيق الحركة المعقدة
function animateWords() {
    // إزالة الحركة السابقة لإعادة تشغيلها (هذا ضروري لإعادة القفز)
    word1.style.animation = 'none';
    word2.style.animation = 'none';
    word3.style.animation = 'none';
    word1.offsetHeight; // إعادة تشغيل DOM
    word2.offsetHeight;
    word3.offsetHeight;

    // --- إعدادات الحركة الفيزيائية ---
    // (1) اقعد: قفزة سريعة وقصيرة (مدة 1.0 ثانية، تأخير 0.0 ثانية)
    // cubic-bezier(0.5, 0, 0.5, 1) هي دالة التوقيت التي تعطي إحساس التسارع والتباطؤ
    word1.style.color = getRandomColor();
    word1.style.animation = 'jump-up-and-down 1.0s cubic-bezier(0.5, 0, 0.5, 1) forwards';

    // (2) يا: قفزة متوسطة وأبطأ قليلاً (مدة 1.2 ثانية، تأخير 0.1 ثانية)
    setTimeout(() => {
        word2.style.color = getRandomColor();
        word2.style.animation = 'jump-up-and-down 1.2s cubic-bezier(0.5, 0, 0.5, 1) forwards';
    }, 100); // 100 ملي ثانية تأخير

    // (3) عبادة: قفزة أطول وأبطأ (مدة 1.5 ثانية، تأخير 0.2 ثانية)
    setTimeout(() => {
        word3.style.color = getRandomColor();
        word3.style.animation = 'jump-up-and-down 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards';
    }, 200); // 200 ملي ثانية تأخير
}

// دالة زيادة العداد
function incrementCounter() {
    count++;
    display.textContent = count;
    
    // تشغيل حركة الكلمات مع كل نقرة
    animateWords();
}

// دالة تصفير العداد
function resetCounter() {
    count = 0;
    display.textContent = count;
}

// ربط الدوال بالأزرار عند الضغط
incrementButton.addEventListener('click', incrementCounter);
resetButton.addEventListener('click', resetCounter);