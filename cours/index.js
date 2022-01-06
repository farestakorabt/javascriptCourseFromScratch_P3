// Rappel

let string = "";
let numero = 41;
let vraiOuFaux = true;
let rien = null;
let undefinie; // undefined

// Table (array)

let ville = ["Paris", "Lille", "Marseille"];
// console.log(ville[1][0]);

// Object

// let footballeur = new;

let tableau = ["Rome", 24, true, [1, 8]];
// console.log(tableau[4].surnome);

let footballeur = {
  nom: "Romario",
  numero: 10,
  age: 33,
  ballon_dor: true,
  club: ["PSV", "Barcelona", "Miami"],
};
// console.log(footballeur);

// footballeur.nationalité = "Brazilan";

// console.log(footballeur);

let data = [
  {
    nom: "Nana",
    numero: 31,
    age: 19,
    ballon_dor: false,
    club: ["Milan", "Real", "Villareal"],
  },
  {
    nom: "Demarcus",
    numero: 22,
    age: 30,
    ballon_dor: true,
    club: ["Scramento", "LA", "Milwaukee"],
  },
  {
    nom: "Crespo",
    numero: 18,
    age: 25,
    ballon_dor: false,
    club: ["River", "Milan", "Chelsea"],
  },
];

// console.log(data[2].nom);
// ----------------------------------------------------------------------

// structure de controle
// ----------------------------------------------------------------------
if (data[0].age > data[1].age) {
  //   console.log(data[0].nom + " est plus agé que " + data[1].nom);
} else {
  //   console.log(data[0].nom + " est moins agé que " + data[1].nom);
}

// on peut l'ecrire de cette façon egalement =>
// if (data[0].age > data[1].age)
// console.log(data[0].nom + " est plus agé que " + data[1].nom);
// else console.log(data[0].nom + " est moins agé que " + data[1].nom);

// ou en ternaire
// data[0].age > data[1].age
// ? console.log(data[0].nom + " est plus agé que " + data[1].nom)
//   : console.log(data[0].nom + " est moins agé que " + data[1].nom);

// les boucles(loop) while

let w = 0;

while (w < 10) {
  w++;
  //   console.log("la valeur est de " + w);
}

// les boucles(loop) do whuile

let d = 0;

do {
  d++;
  //   console.log(d);
} while (d < 5);

// les boucles(loop) for

for (const user of data) {
  //   document.body.innerHTML += `<li>${user.nom} , agé de ${user.age} ans</li>`;1
}

for (let i = 0; i < data.length; i++) {
  const joueur = data[i].club[1];
  //   console.log(`Les clubs du joueur sont : ${joueur}.`);
  //   document.body.innerHTML +=
  //     "<h2>" +
  //     "Le club préféré de " +
  //     data[i].nom +
  //     " est " +
  //     data[i].club[2] +
  //     " !</h2>";
}

// console.log(data.length);

// let titre = document.querySelector("#h3");

document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "red";
      break;

    case "php":
      document.body.style.background = "blue";
      break;

    case "python":
      document.body.style.background = "green";
      break;

    default:
      null;
      break;
  }
});


