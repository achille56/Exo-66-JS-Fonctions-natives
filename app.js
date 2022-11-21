
let operande = 10;

let first = document.getElementById("entier");
let second = document.getElementById("flottant");
let third = document.getElementById("non-numerique");
let fourth = document.getElementById("random");
let fifth = document.getElementById("trunc");
let sixth = document.getElementById("replace");

let result1 = operande * parseInt(first.innerHTML);
    first.innerHTML = result1.toString();
    console.log(result1);

let result2 = operande * parseFloat(second.innerHTML) + result1;
    second.innerHTML = result2.toString();
    console.log(result2);

    if (isNaN(third.innerHTML)) {
        third.innerHTML = 0;
    }

    fourth.innerHTML = Math.random();

    fifth.innerHTML = Math.trunc(fifth.innerHTML);


sixth.innerHTML = sixth.innerHTML.replace('world', "nom et prenom");
















