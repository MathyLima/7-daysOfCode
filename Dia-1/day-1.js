/*
Reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (COMPARAR O numeroUm e a stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (COMPARAR O numeroDez e a stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor') }*/

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'


if (numeroUm === stringUm) {
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor e tipo');
} else if (numeroUm == stringUm) {
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes');
} else {
    console.log('As variáveis numeroUm e stringUm não tem o mesmo valor nem tipo');
}



if (numeroTrinta === stringTrinta) {
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e tipo');
} else if (numeroTrinta == stringTrinta) {
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo, mas possuem o mesmo valor');
} else {
    console.log('As variáveis numeroTrinta e stringTrinta não possuem o mesmo tipo nem valor')
}



if (numeroDez === stringDez) {
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor tipo');
} else if (numeroDez == stringDez) {
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes');
} else {
    console.log('As variáveis numeroDez e stringDez não tem o mesmo valor e tipo');
}