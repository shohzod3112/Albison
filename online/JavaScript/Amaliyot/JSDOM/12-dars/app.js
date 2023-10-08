// Element selection
// HTML hujjatdagi elementlarni bir necha yo'l bilan tanlab olish imkoni
// mavjud va bular DOM API orqali amalga oshiriladi.
// Elementlarni tanlab olish yo'llari
// getElementByID - element ID orqali tanlab olish
// getElementsByName - elementlarni nomi orqali tanlab olish
// getelementsByClassName - elementlarni class nomi orqali tanlab olish
// getelementsByTagName - elementlarni tag nomi orqali tanlab olish
// querySelector - CSS selektor orqali elementni tanlab olish

// ====================== getElementById ============================
// Bitta element qaytaradi

// const heading1 = document.getElementById('sarlavha');
// console.log(heading1);
// heading1.remove();

// ====================== getElementsByName ==========================

// const inputEls = document.getElementsByName('username');
// const inputEl = inputEls[0];
// console.log(inputEl);
// inputEl.remove();

// ====================== getElementsByClassName ==========================

// const headings = document.getElementsByClassName('heading');
// console.log(headings);
// headings[1].remove();

// ====================== getElementsByTagName ==========================
// html collection qaytaradi. Arrayga o'xshaydi lekin array emas. Array ba'zi metodlari bunga ishlamaydi.
// forEach bilan yurib bo'lmaydi.

// const headings = document.getElementsByTagName('li');
// console.log(headings);
// headings[1].remove();

// ====================== querySelector =================================
// querySelector -> metodi orqali HTML hujjatimizdagi elementni CSS selektor orqali tanlab olish imkoniyati mavjud

// const heading1 = document.querySelector('#sarlavha');
// console.log(heading1);

// ====================== querySelectorAll =================================
// querySelectorAll -> metodi orqali HTML hujjatimizdagi elementlarni CSS selektor orqali tanlab olish imkoniyati mavjud
// NodeList qaytaradi. forEach bilan yursa bo'ladi.

// const headings = document.querySelectorAll('h1');
// console.log(headings);
// headings[0].remove();

// ================== Element matnini o'zgartirish ======================

// const heading = document.getElementById('sarlavha');
// // console.log(heading);
// heading.textContent = 'Yangi matn';

// ================== Element qiymatini o'zgartirish ======================

// const inputEl = document.getElementById('username');
// inputEl.value = 25;

// ================== Element tanasini o'zgartirish ======================
// Tanlab olingan elementni tanasini boshqa HTML element bilan almashtirish uchun
// elementning innerHTML attributidan foydlanishimiz mumkin.

// inputEl.placeholder = 'yangi placeholder'

// const liitems = document.querySelectorAll("li");
// for(let i = 0; i < liitems.length; i++){
//     liitems[i].textContent += " hello" + liitems.textContent;
// }