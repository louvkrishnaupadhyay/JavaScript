

// GLOBLE SCOPE KE POLLUTION SE PROBLEM HOTI HAI TO USSE BCHNE KE LIYE HAM IIFE KA USE KRTE HAI


// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // this is called named IIFE
    console.log(`DB CONNECTED`);
})();

//BUT ES FUNCTION ME HME LAST ME ; LGANA HOGA NAHI TO COMPUTER KO PTA NAHI CHLTA HAI KI USE KHAN RUKNA HAI

// ARE HME NORMALY O/P LENA HO TO HM LIKHENGE CHAI() BUT IIFE KE LIYE HM FUN. KO () WRAP KR DETE HAI OR () SE EXICUTE KRA LETE HAI

( (name) => {
    // this is called unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('LOUV')