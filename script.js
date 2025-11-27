// العناصر الأساسية للعداد
const display = document.getElementById('counter-display');
const incrementButton = document.getElementById('increment-button');
const resetButton = document.getElementById('reset-button');
let count = 0;
let resetCount = 0; // لتتبع عدد مرات التصفير

// عناصر الكلمات الثلاث
const word1 = document.getElementById('word1'); // عبادة
const word2 = document.getElementById('word2'); // يا
const word3 = document.getElementById('word3'); // اقعد

// السرعات الأربع المطلوبة (بالثواني)
// السرعة الحالية (2.5s) وأعلى قليلا (2.3s) وأقل قليلا (2.7s) وأقل من القليل الأخير (3.0s)
const jumpSpeeds = [2.5, 2.3, 2.7, 3.0];

// دالة لاختيار سرعة عشوائية
function getRandomJumpSpeed() {
    return jumpSpeeds[Math.floor(Math.random() * jumpSpeeds.length)];
}

// مجموعة الألوان العشوائية الزاهية
const colors = [
    '#FF6347', // أحمر طماطم
    '#4682B4', // أزرق فولاذي
    '#3CB371', // أخضر بحري
    '#FFA500', // برتقالي
    '#DA70D6', // بنفسجي
    '#FFD700', // ذهبي
    '#FF69B4', // وردي فاتح
    '#00CED1', // تركواز
    '#FF4500', // برتقالي محمر
    '#9370DB', // بنفسجي متوسط
    '#32CD32', // أخضر ليموني
    '#FF1493', // وردي عميق
    '#00FA9A', // أخضر نعناعي
    '#FFB6C1'  // وردي فاتح جداً
];

// دالة لاختيار لون عشوائي
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// دالة لتطبيق حركة القفز من خارج الشاشة (عند النقر على زر العد)
function animateWordsJump() {
    // إزالة الحركة السابقة
    word1.style.animation = 'none';
    word2.style.animation = 'none';
    word3.style.animation = 'none';
    
    // إعادة تشغيل DOM
    void word1.offsetHeight;
    void word2.offsetHeight;
    void word3.offsetHeight;

    // تطبيق مبادئ التحريك الـ12:
    // - Timing: توقيت مختلف لكل كلمة
    // - Ease in/out: تسارع وتباطؤ طبيعي
    // - Arcs: مسار منحني
    // - Exaggeration: مبالغة في الارتفاع للكوميديا
    
    // اختيار سرعة أساسية عشوائية
    const baseSpeed = getRandomJumpSpeed();
    
    // الكلمة الأولى: "عبادة"
    word1.style.color = getRandomColor();
    // توقيت الحركة: السرعة الأساسية
    word1.style.animation = `jump-from-bottom ${baseSpeed}s forwards`;

    // الكلمة الثانية: "يا" - أبطأ قليلاً
    setTimeout(() => {
        word2.style.color = getRandomColor();
        word2.style.animation = `jump-from-bottom ${baseSpeed + 0.2}s forwards`;
    }, 150);

    // الكلمة الثالثة: "اقعد" - أبطأ أكثر
    setTimeout(() => {
        word3.style.color = getRandomColor();
        word3.style.animation = `jump-from-bottom ${baseSpeed + 0.4}s forwards`;
    }, 300);
}

// دالة لتطبيق حركة الطيران من اليمين لليسار (عند التصفير)
function animateWordsFly() {
    resetCount++; // زيادة عداد التصفير
    const isDramatic = resetCount % 3 === 0; // هل هي نقرة درامية (مضاعفات 3)
    const animationName = isDramatic ? 'fly-right-to-left-slow' : 'fly-right-to-left';
    const baseDuration = isDramatic ? 3.0 : 1.8; // مدة أطول للحركة الدرامية
    const resetDelay = isDramatic ? 1200 : 600; // تأخير أطول لتصفير العداد في الحركة الدرامية
    // إزالة الحركة السابقة
    word1.style.animation = 'none';
    word2.style.animation = 'none';
    word3.style.animation = 'none';
    
    // إعادة تشغيل DOM
    void word1.offsetHeight;
    void word2.offsetHeight;
    void word3.offsetHeight;

    // تطبيق مبادئ التحريك الـ12:
    // - Anticipation: بداية مفاجئة
    // - Speed lines: حركة سريعة
    // - Exaggeration: دوران ومبالغة كوميدية
    // - Follow through: استمرار الحركة خارج الشاشة
    
    // الكلمة الأولى: تطير أولاً
    word1.style.color = getRandomColor();
    word1.style.animation = `${animationName} ${baseDuration}s forwards`;

    // الكلمة الثانية: تطير بعدها بقليل
    setTimeout(() => {
        word2.style.color = getRandomColor();
        word2.style.animation = `${animationName} ${baseDuration + 0.18}s forwards`;
    }, 50);

    // الكلمة الثالثة: تطير أخيراً
    setTimeout(() => {
        word3.style.color = getRandomColor();
        word3.style.animation = `${animationName} ${baseDuration + 0.36}s forwards`;
    }, 100);
    
    // عندما تمر الكلمات من فوق الرقم، نصفر العداد
    setTimeout(() => {
        count = 0;
        display.textContent = count;
        // تأثير بصري على الرقم عند التصفير
        display.style.transform = 'scale(1.3)';
        setTimeout(() => {
            display.style.transform = 'scale(1)';
        }, 200);
    }, resetDelay);
}

// دالة زيادة العداد
function incrementCounter() {
    count++;
    display.textContent = count;
    
    // تأثير بصري على الرقم
    display.style.transform = 'scale(1.2)';
    setTimeout(() => {
        display.style.transform = 'scale(1)';
    }, 150);
    
    // تشغيل حركة القفز
    animateWordsJump();
}

// دالة التصفير مع الحركة الفكاهية
function resetCounter() {
    // تشغيل حركة الطيران
    animateWordsFly();
    // العداد سيتصفر تلقائياً داخل دالة animateWordsFly بعد 600ms
}

// ربط الدوال بالأزرار
incrementButton.addEventListener('click', incrementCounter);
resetButton.addEventListener('click', resetCounter);

// تأثير بصري على زر العد عند النقر
incrementButton.addEventListener('click', () => {
    incrementButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        incrementButton.style.transform = 'scale(1)';
    }, 100);
});

// تأثير بصري على زر التصفير عند النقر
resetButton.addEventListener('click', () => {
    resetButton.style.transform = 'scale(0.95)';
    setTimeout(() => {
        resetButton.style.transform = 'scale(1)';
    }, 100);
});
