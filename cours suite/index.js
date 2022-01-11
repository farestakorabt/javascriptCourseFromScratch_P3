// Methodes string

let string2 = "Javascript est un langage orienté objet";

// console.log(eval(parseInt("1") + 2)); // => 3
// console.log(eval(parseInt("1" + 2))); // => 12

// console.log(parseInt("42"));
// console.log(typeof "42"); // converted to number by "parseInt"

// console.log(isNaN(string2));
// console.log(isNaN(42));
// console.log(string2.length);
// console.log(string2[string2.length - 1]); // l'index commence de zero alors que la length de 1

// console.log(string2.indexOf("langage"));

// let newString = string2.slice(20);
// let newString = string2.slice(2, 15);
// console.log(newString);

// console.log(string2.split("i")); // coupe à chaque i
// console.log(string2.toLowerCase());
// console.log(string2.toUpperCase());

// console.log(string2.replace("Javascript", "PHP")); // javascipt est sensible à la casse

// -------------------------------------------------------------------------------------

// Methodes pour les numbers

let numero = 55.155;
let numero2 = "55.155 est un chiffre";

// console.log(numero.toFixed(2));
// console.log(parseInt("2"));
// console.log(parseInt(numero2)); // garde seulement le 1er chiffre trouvé (55) pas le reste

// console.log(parseFloat(numero2)); // affiche tout meme la virgule

// Math methodes

// console.log(Math.PI);
// console.log(Math.round(4.5)); // arrondie un chiffre au plus proche => 5
// console.log(Math.floor(4.5)); // arrondie un chiffre à l'inferieur => 4
// console.log(Math.ceil(4.5)); // arrondie un chiffre au plus haut => 5
// console.log(Math.pow(2, 7)); // => ou ** => 2 puissance 7 => 128
// console.log(Math.sqrt(16)); // affiche la racine du nombre => 4 * 4 = 16

// console.log(Math.floor(Math.random() * 50)); // chiffre random entre 0 et 50

// -------------------------------------------------------------------------------------
// Méthode arrays

let array3 = ["javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

let newArray = array3.concat(array4);
// console.log(newArray); // ['javascript', 'Php', 'Python', 'Ruby', 'Solidity']

// let newArray = [...array3, ...array4]; // => ... s'appelle le spread operator
// console.log(newArray); // ['javascript', 'Php', 'Python', 'Ruby', 'Solidity']

// console.log(array3.join('-')); // javascript-Php-Python
// console.log(array3.slice(1)); // ['Php', 'Python']
// console.log(newArray.slice(2, 5)); // ['Python', 'Ruby', 'Solidity'] il garde du 2 au 5

// console.log(array3.indexOf('Python')); // => 2 est l'index de Python
// newArray.forEach((languages) => console.log(languages)); // 'javascript', 'Php', 'Python', 'Ruby', 'Solidity'
// console.log(array3.every((language) => language === "Php")); // => false, car il faudrait que ça soit ecrit php partout
// console.log(array3.some((language) => language === "Php")); // => true, car php se trouve au moins 1 fois
// let shift1 = array3.shift();
// console.log(shift1); // => ['javascript'] on en le javascript
// console.log(array3); // => ['Php', 'Python'] mais on garde le reste
// console.log(array3.pop()); // => Python La méthode pop() supprime le dernier élément d'un tableau et retourne cet élément. Cette méthode modifie la longueur du tableau.

// const restArray = array3.splice(2, 1, "C++");
// console.log(array3);

// ---------------------------------
// Important //
// ---------------------------------

let arrayNumber = [2.2, 4, 65, 11, 87, 2, 93.2];
// console.log(arrayNumber.reduce((x, y) => x + y)); // => addicionne tous les chiffres 169

let arrayCine = ["Scorsese", "Raging_Bull", "DeNiro", 91];
// arrayCine.push("DeVito"); // => ajoute l'element à la fin du tableau
// arrayCine.pop(arrayCine.length); // => supprime l'element à la fin du tableau
// arrayCine.shift(); // => supprime l'element au debut du tableau
// arrayCine.unshift("New_York"); // => ajoute l'element au debut du tableau
// console.log(arrayCine);

// BIG 3 !!!! // très important !
// FILTER, SORT, MAP

// console.log(arrayNumber.filter((number) => number > 10)); // => [65, 11, 87, 93.2]
// console.log(arrayNumber.filter((number) => number < 10)); // => [2.2, 4, 2]
// console.log(arrayNumber.sort()); // => [11, 2, 2.2, 4, 65, 87, 93.2]
// console.log(arrayNumber.sort((a, b) => a - b)); // => [2, 2.2, 4, 11, 65, 87, 93.2]
// console.log(arrayNumber.sort((a, b) => b - a)); // => [93.2, 87, 65, 11, 4, 2.2, 2]

// document.body.innerHTML = arrayCine
//   .map((number) => `<li>${number} </li>`)
//   .join(" ");

// ---------------------------------
// Methodes objets //
// ---------------------------------
// let basketteur = [
//   {
//     prenom: "Chris",
//     nom: "Paul",
//     surnom: "CP3",
//     poste: "meneur",
//     numero: 3,
//     chairman: false,
//   },
//   {
//     prenom: "Michael",
//     nom: "Jordan",
//     surnom: "MJ23",
//     poste: "Ailier",
//     numero: 23,
//     chairman: true,
//   },
//   {
//     prenom: "Demarcus",
//     nom: "Cousins",
//     surnom: "Boogie",
//     poste: "pivot",
//     numero: 15,
//     chairman: false,
//   },
// ];
// document.body.innerHTML = basketteur
//   .filter((basketteur) => basketteur.chairman === false)
//   .filter((basketteur) => basketteur.nom.includes("u"))
//   .sort((a, b) => a.numero - b.numero)
//   .map(
//     (basketteur) =>
//       `
//     <div class="user-card">
//         <h2>${basketteur.nom} </h2>
//         <h2>chairman: ${
//           basketteur.chairman ? "c'est le boss" : "encore en activité"
//         } </h2>
//     </div>

//     `
//   )
//   .join("");

// -------------------------------
// Les dates
// -------------------------------

// Dates classiques
let date1 = new Date();

// Timestamp
let timestamp = Date.parse(date1);
// console.log(timestamp);

// IsoString
let isoString = date1.toISOString();
// console.log(date1.toISOString());

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
  });
  return newDate;
}

// console.log(dateParser(date1));  // =>10 janvier 2022
// console.log(dateParser(timestamp));   // =>10 janvier 2022
// console.log(dateParser(isoString)); // =>10 janvier 2022
// -------------------------------
// Destructuring
// -------------------------------

let moreData = {
  destVar: ["Element 41", "element 92", "Element 145", "element 223"],
  destVar2: ["Element 15", "element 23"],
  destVar3: ["Element 31", "element 21"],
};

const { destVar } = moreData; // => const destVar = moreData.destVar;

// console.log(moreData.destVar);
// console.log(destVar);

let array6 = [54, 666, 123];
let [t, r, s] = array6;
// console.log(t); // => 54
// console.log(r); // => 666
// console.log(s); // => 123

// console.log(isoString);
// const dateDestructuring = (chaine) => {
//   let newDate = chaine.split("T")[0]; // => ['2022-01-10', '12:43:28.950Z'] // garde moi que l'index [0] => 2022-01-10
//   let [y, m, d] = newDate.split("-");
//   return [d, m, y].join("-");
// };
// console.log(dateDestructuring(isoString)); // => 10-01-2022

// -------------------------------
// Les datasets
// -------------------------------

const h3js = document.getElementById("javascript");
// console.log(h3js.dataset.lang); // => js
h3 = document.querySelectorAll("h3");
// h3.forEach((language) => console.log(language.dataset.lang)); // => js  ph

// -------------------------------
// Les regex
// -------------------------------
let mail = "fares-tako200@gmail.com";
// console.log(mail.search(/-zth/)); // => 0 si ça existe, -1 si ça n'existe pas

// console.log(mail.replace(/fares/, 'MJ')); // => MJ-tako200@gmail.com

// console.log(mail.match(/Fares/i)); // => renvoi true, i evite la casse

// console.log(mail.match(/[zus]/)); // => si l'une des lettres existe => true pour s

// console.log(mail.match(/\d/)); // => si y a un chiffre => true

// console.log(mail.match(/[a-z]/)); // => si y a une lettre => true

// console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));

let separator = 163213213;

console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")); // => 163 213 213
