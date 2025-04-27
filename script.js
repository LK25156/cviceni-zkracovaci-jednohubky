//1.Tento kód definuje funkci isEmail, kt ověřuje, zda daný text obsahuje znak @
/*const isEmail = (str) => {     //vstup funkce, přijímá jeden parametr str, což je řetězec
  return str.includes('@');        //pomocí metody .includes() funkce ověří, zda str obsahuje symbol @
};*/                               //výstup funkce vrátí hodnotu true, pokud znak @ existuje,nb false, pokud neexistuje

//1. zkrácený zápis
/*const isEmail = (str) => `${str.includes('@')}`
console.log(isEmail("ldhd@s"));*/


//2. Tento kód definuje funkci roll, kt simuluje hod šestistěnnou hrací kostkou

/*const roll = () => {                
  return Math.floor(Math.random() * 6) + 1; //Math.random() generuje náhodné číslo mezi 0(včetně) a 1(mimo)
};*/  //náhodné číslo je vynásobené 6, Math.floor -číslo zaokrouhlené dolů na nejbližší celé číslo (0-5), 
//přičtení plus jedna, návratová hodnota return vrací celé číslo v rozsahu 1-6

//2. zkrácený zápis
/*const roll = () => Math.floor(Math.random)() *6) +1;
console.log(roll())*/


//3. Tento kód definuje funkci getNumber, kt získává hodnotu z HTML elementu na základě jeho ID a převádí ji na číslo
/*const getNumber = (id) => {   //funkce přijímá jeden parametr id
  return Number(document.querySelector(`#${id}`).value); 
};*/
//metoda document.querySelector vyhledá HTML element podle zadaného ID, použití zpětných uvozovek umožňuje zapsat ID dynamicky
//vlastnost .value získá obsah(hodnotu)daného elementu, např. text nb číslo zadané do vstupního pole
//funkce Number převede získanou hodnotu na číslo, pokud hodnota není validní číslo, vrátí NaN(Not a number)

const getNumber = (id) => Number(document.querySelector(`#${id}`).value);



//4. Kód definuje funkci weather, která na základě hodnoty teploty rozhoduje, zda je počasí teplo nb zima
/*const weather = (temperature) => {  //funce přijímá jeden parametr temperature
  if (temperature > 16) {  //funkce kontroluje, zda je hodnota větší než 16, pokud ano vrací řetězec teplo
    return 'teplo';    //méně než 16 vrací řetězec zima
  }

  return 'zima';
};*/

//4. zkrácený zápis - použijte ternární operátor
/*const weather = (temperature) => (temperature>16? "teplo" : "zima");
console.log(weather(15));*/

