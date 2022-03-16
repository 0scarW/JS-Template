const färger = ["diamonds", "clubs", "hearts", "spades"];
const valörer = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "jack",
  "queen",
  "King",
  "ace"
];

const card_slots = document.getElementsByClassName("card-slot")
const second = 1000

let displayindex = 0
function displayCard(index, filename){
  card_slots[index].style.backgroundImage = "url(./kortlek/" + filename + ".png)"
}

// Klass för att skapa spelkort
class Kort {
  constructor(valör, färg, value) {
    this.valör = valör;
    this.färg = färg;
    this.value = value;
    this.image = `${valör}_of_${färg}`
  }
}

// Klass för stack
class Kortlek {
  constructor() {
    this.stack = [];
  }

  // Lägg ett kort överst i leken
  lägg_till_kort(item) {
    this.stack.push(item);
  }
  // Ta ett kort överst från leken
  dra_kort() {
    let draget_kort = this.stack.pop();
    //console.log(`Du drar ${draget_kort.färg} ${draget_kort.valör}`);
    return draget_kort;
  }

  // Visa korten som finns i leken (I ordning)
  visa_lek() {
    this.stack.forEach((kort) => {
      console.log(kort.färg, kort.valör);
    });
  }

  // Visa hur många kort som finns
  visa_längd() {
    console.log(`Kortleken har ${this.stack.length} kort`);
  }

  // Blanda leken
  blanda() {
    for (let i = this.stack.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.stack[i];
      this.stack[i] = this.stack[j];
      this.stack[j] = temp;
    }
  }
}

let kortlek = new Kortlek();
let valueindex = 1

for (let i = 0; i < färger.length; i++) {
  for (let j = 0; j < valörer.length; j++) {
    let kort = new Kort(valörer[j], färger[i], valueindex++);
    kortlek.lägg_till_kort(kort);
  }
}

let dealerHand = new Kortlek;
let dealerkort;

function dealerdrakort() {
    dealerkort = kortlek.dra_kort();
    dealerHand.lägg_till_kort(dealerkort);
    displayCard(displayindex, dealerkort.image)
    displayindex++
    console.log(`Dealern drar ${dealerkort.färg} ${dealerkort.valör}`);
}

let playerHand = new Kortlek;
let playerkort;

function playerdrakort() {
    playerkort = kortlek.dra_kort();
    playerHand.lägg_till_kort(playerkort);
    displayCard(displayindex, playerkort.image)
    displayindex++
    console.log(`Du drar ${playerkort.färg} ${playerkort.valör}`);
}

function mergecards() {
  if (dealerHand.stack.length == 5) {
    for (let i = 0; i < 2; i++) {
      dealerHand.lägg_till_kort(playerHand.dra_kort())
    }
  } else {
    for (let a = 0; a < playerHand.stack.length; a++) {
      dealerHand.pop()
    }
  }
}

let straightflush = 0
let stegen = 0
let färgen = 0

const stege = (lista) => {
  let sorteradvalue = lista.sort();
  let results = [];
  console.log(sorteradvalue)
  for (let i = 0; i < sorteradvalue.length - 1; i++) {
  console.log(sorteradvalue[i]/4)
  }
  console.log(results)
  const allEqualvalue = arr => arr.every(v => v === arr[0]);
  for (let i = 0; i < sorteradvalue.length - 1; i++) {
    if (sorteradvalue[i + 1] == sorteradvalue[i] + 1) {
      results.push(Math.ceil(sorteradvalue[i]));
    }
  } if (results.length >= 4) {
    stegen++
    straightflush++
    
  }
}

const findDuplicatesfärg = (lista) => {
  let sorteradfärg = lista.slice().sort();
  let results = [];
  const allEqualfärg = arr => arr.every(v => v === arr[0]);
  for (let i = 0; i < sorteradfärg.length - 1; i++) {
    if (sorteradfärg[i + 1] == sorteradfärg[i]) {
      results.push(sorteradfärg[i]);
    }
  } if (results.length >= 4 && allEqualfärg(results)) {
    färgen++
    straightflush++
  }
}
  

const findDuplicatesvalör = (lista) => {
  let sorteradvalör = lista.slice().sort();
  let results = [];
  const allEqualvalör = arr => arr.every(v => v === arr[0]);
  for (let i = 0; i < sorteradvalör.length - 1; i++) {
    if (sorteradvalör[i + 1] == sorteradvalör[i]) {
      results.push(sorteradvalör[i]);
    }
  } if (straightflush == 2) {
    console.log("Du har straight flush")
  } else if (stegen == 1) {
    console.log("Du har stege")
  } else if (färgen == 1) {
    console.log("Du har färg")
  } else if (results.length == 3 && results[1] != results[2] && results[0] == results[1]){
    console.log("Du har kåk")
  } else if (results.length >= 3 && allEqualvalör(results)){ 
    console.log("Du har fyrtal")
  } else if (results.length == 2 && allEqualvalör(results)){ 
    console.log("Du har ett tretal")
  } else if (results.length/2 == 1) {
    console.log("Du har två par")
  } else if (results.length/2 == 0.5) {
    console.log("Du har ett par")
  }
  return;
}


let valörlista = [];
let färglista = [];
let valuelista = [];
function checkforpair(){
  for (let i = 0; i < 7; i++) {
      let b = dealerHand.dra_kort()
      valörlista.push(b.valör)
      färglista.push(b.färg)
      valuelista.push(b.value)
  }
}

function game() {
  console.log(kortlek)
  //kortlek.blanda()
    playerdrakort()
    playerdrakort()
    for (let i = 0; i < 5; i++) {
        dealerdrakort()
      }
    mergecards()
    checkforpair()
    findDuplicatesfärg(färglista)
    stege(valuelista)
    findDuplicatesvalör(valörlista)
}

game()