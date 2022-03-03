"use strict";
const a = 'hello';
const n = 3;
const b = true;
const d = null;
const arr = ['aze', 'azee', 3];
const user1 = { firstname: 'Fab', lastname: 'Kaiz' };
//or
const user2 = { firstname: 'Fab', lastname: 'Kaiz' };
const date = new Date();
const cb = (e) => {
};
const compteur = document.querySelector('#compteur');
let i = 0;
const increment = (e) => {
    e.preventDefault;
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
