alert("Välkommen till Oscars smyckesbutik")
let saldo = prompt("Ange ett tal ");

console.log(saldo)

const järn = 200;

const silver = 500;

const guld = 1000;

if (saldo < järn) {
    alert("Du har inte råd med några smycken")
}
else if (saldo >= guld) {
    alert(`Du kan köpa ${Math.floor(saldo/guld)} stycken guldsmycken och därmed ha kvar ${(saldo-Math.floor(saldo/guld)*guld)} kr`);
}
else if (saldo >= silver) {
    alert(`Du kan köpa ${Math.floor(saldo/silver)} stycken silversmycken och därmed ha kvar ${(saldo-Math.floor(saldo/silver)*silver)} kr`);
}
else if (saldo >= järn) {
    alert(`Du kan köpa ${Math.floor(saldo/järn)} stycken järnsmycken och därmed ha kvar ${(saldo-Math.floor(saldo/järn)*järn)} kr`);
}


