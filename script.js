let saldo = prompt("Ange ett tal ");

console.log(saldo)

const järn = 100;

const silver = 300;

let guld = 1000;

while (true) {
    if (saldo >= 1000) {
        console.log('Du kan köpa "${saldo//100}" guldsmycken');
    }
    if (saldo >= 300) {
        console.log('Du kan köpa "${saldo//100}" silversmycken');
    }
    if (saldo >= 100) {
        console.log('Du kan köpa "${saldo//100}" järnsmycken');
    }
    if (saldo < 100) {
        console.log("Du har inte råd med några smycken")
        break
    }
}

