// let student = 181;

// let grand = 180;

// let kirish = 130;

// if (student >= grand) {
//   console.log("grantga kirdi");
// } 
// else if(student >= kirish){
//     console.log("kantraktga kirdi");
// }
// else {
//   console.log("yiqildi");
// }

// switch case

// let a = 2+2;

// if(a === 3){
//     console.log("too small");
// }
// else if(a === 4){
//     console.log( 'Exactly!' );
// }
// else if(a === 5){
//     console.log('too big');
// }
// else{
//     console.log("I don't know such values");
// }

// let a2 = 4;

// switch (a2) {
//   case 1:
//     alert( 'Too small' );
//     break;
//   case 2:
//     alert( 'Exactly!' );
//     break;
//   case 3:
//     alert( 'Too big' );
//     break;
//   case 4:
//     alert( 'Too big' );
//     break;
//   case 5:
//     alert( 'Too big' );
//     break;
//   case 6:
//     alert( 'Too big' );
//     break;
//   case 7:
//     alert( 'Too big' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }

// let hafta = 2

// switch(hafta){

// }

// =============== || Logical operators ||==================

// or yoki ||

// ============================== || falsy values ||====================
// false, null, undefined, '', NaN, 0, 0n;

// if(false || undefined || null || 0){
//     console.log("if ishladi");
// }else{
//     console.log("else ishladi");
// }

// console.log(false || "qwer" || null || true);

// or operatori truthy qiymatni qidiradi va birinchi topganini qaytaradi, topa olmasa oxirgi qiymatni qaytaradi

// ============-- and && --==============


// if(yoshi > 18 && soglom && fuqoroligi && yoshi < 27){
//     console.log("if ishladi");
// }else{
//     console.log("else ishladi");
// }

// console.log(false || "qwer" || null || true);

// and operatori falsy qiymatni qidiradi va birinchi topganini qaytaradi, topa olmasa oxirgi qiymatni qaytaradi

// =============-- not ! --===============

// console.log(!false);

// not qiymatni teskarisiga o'girib beradi

// ============-- nulish ?? --=============

// null va undefined

// console.log(null ?? false ?? undefined ?? "true" ?? null);


// homework

function kvadrat(a){
    if(Number(a)){
        console.log("bu number");
        console.log(Number(a)**2);
    }else {
        console.log("is NaN");
    }
}

kvadrat(true);