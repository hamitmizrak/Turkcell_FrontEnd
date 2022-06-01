// JS ==> tek satırlık yorumlama
/*
multi-line comment
*/

// pop-up alert
// alert("Deneme")
// window.alert("deneme window")

////////////////////////////////////////////////
// window   >> Hepsi
// document >> HTML

// alert("pop-up")
// window.alert("window pop-up")
// console.log("asd")
// document.write("Deneme")

////////////////////////////////////////////////
//Kullanıcıdan veri almak istersek
// var name=prompt("Adınızı giriniz");
// console.log(name)

////////////////////////////////////////////////
//Variable
// var isim="Hamit";
// isim="Hamit M"; //string
// isim=false;  //boolean
// isim=44; //number
//console.log(isim);

//var soyisim="Mızrak";
// soyisim44="Mızrak";
// $soyisim44="Mızrak";
// _soyisim44="Mızrak";

//üğşçöÜĞŞÇÖİ değişkenler oluşturmayalım
//~~soyisim44="Mızrak";//özel ile başlayamayız
// 44soyisim="Mızrak"; //sayı ile başlayamayız

//camelCase ile değişken adlarını oluşturalım
//unique 
//ingilizce kelimeler
//console.log(_soyisim44)

////////////////////////////////////////////////
//JS  " " , ''  , ` ` ,  " ' ' "

//variable initialization
// var deneme;  //undefined
// console.log(deneme)

////////////////////////////////////////////////
//Operator
//logic operators       : &&=VE  ||=VEYA 
//mathematics operators : + - / * % 
//comparison operators: > >= < <= ! ==  ===
//postfix ==>  x++ ,  ++x ,  y-- ,  --y

// 1 byte = 8 bit 
// bit < byte < GB < TB
// 1 bit =0
// Binary codes (2) ==> (0 1)
// octal (8)        ==> (01234567)
// decimal (10)     ==> (0123456789)
// hexadecimal (16) ==> (0123456789abcdef)

////////////////////////////////////////////////

// =   atama 
// ==  eşit mi (ancak türüne bakma)  "5" 5 TRUE
// === eşit mi (türüne bak)          "5" 5 FALSE

// var result1="Malatya";
// console.log(typeof result1)  //type: türü bulmak

// var result2=44.36;
// console.log(typeof result2)  //type: türü bulmak

// var result3=true;
// console.log(typeof result3)  //type: türü bulmak


////////////////////////////////////////////////
//Örnek-1
// var x1=9,x2=2,x3;
// x3=x1+x2;
// console.log(x3)

// x3=x1*x2;
// console.log(x3)

// x3=x1/x2;
// console.log(x3)

// x3=x1%x2;
// console.log(x3)

////////////////////////////////////////////////

//CAST: dönüştürmek
// Number()
// String()

//string number 
//database - api - socket 

// var x1=  Number(prompt("lütfen bir sayı giriniz")) ;
// console.log(x1*x1);

////////////////////////////////////////////////
//undefined: tanımlı değil yani değer vermezsek bu sorunu yazarız
// var x1;
// console.log(x1)

//NaN:  Not A Number : sayı değil
// var x2=9/"asd";
// console.log(x2);

//isNaN

//Infinity: sonsuz 
// var x3=8/0;
// console.log(x3);

//new   : ram hafızasında yer açmak (Doğar)

//null  : hafızayı boşaltmak (ölür)
//var x4=null;

//sıfır : bir değeri vardır ama sıfırdır. çarpmada yutan eleman ,toplama: etkisiz

////////////////////////////////////////////////
// escape character
// console.log("\"")
// console.log("'")


////////////////////////////////////////////////
//Math: static 

// // sabitler
// document.write(Math.PI+"<br/>") 
// document.write(Math.E+"<br/>") 

// // Math
// document.write(Math.random()+"<br/>") 
// document.write(Math.min(5,2,5,21,-525)+"<br>")
// document.write(Math.max(5,2,5,2151,-525)+"<br>")
// document.write(Math.sqrt(16)+"<br>")
// document.write(Math.pow(2,5)+"<br>")
// document.write(Math.abs(-4)+"<br>")

// // yuvarlama floor 
// document.write(Math.floor(3.9)+"<br>")
// document.write(Math.ceil(5.1)+"<br>")
// document.write(Math.round(2.5)+"<br>")

// // sin cos tan cot   
// document.write("sinüs: "+Math.sin(45)+"<br>")

// Kullanıcıda tarafından aldığımız 2 tane sayının
// var number1,number2;
// number1=Number(prompt("1.sayıyı giriniz"));
// number2=Number(prompt("2.sayıyı giriniz"));

// // s1-) Bu sayılardan en küçüğü nedir ?
// document.write("En küçüğü: "+ Math.min(number1,number2)+"<br/>")

// // s2-) Bu sayılardan en büyüğü nedir ?
// document.write("En küçüğü: "+ Math.max(number1,number2)+"<br/>")

// // s3-) Bu sayılardan en büyüğü karekökü nedir ?
// // monad: 
// document.write("en büyüğü karekök: "+Math.sqrt(Math.abs(Math.max(number1,number2)))  +"<br/>")

// // s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ?
// document.write("en büyüğü karekökünün üste yuvarlı: "+Math.ceil(Math.sqrt(Math.abs(Math.max(number1,number2))))    +"<br/>")

// // s5-) Bu sayılardan en küçüğü mutlak nedir ?

// // s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım

// document.write(  "En küçüğü alt taban en büyüğü üst taban: "+
//   Math.pow(Math.abs(Math.min(number1,number2)), Math.abs(Math.max(number1,number2)))
// +
//   "<br/>"
// );


////////////////////////////////////////////////
// //Number
// var number=44;
// number=44.33;
// document.write(number+"<br>")

// var bilimsel=14E+5;
// bilimsel=14E-5;
// document.write(bilimsel+"<br>")

// ////// 10  Tabana Çevirmek//////////////////////////
// //sayı sistemleri: 2,8,16 ==> 10 tabanda gösterimi
// //2 tabanda 10 tabana çevirme
// // 2 taban = 0,1 
// var binary=0b00111;
// document.write("2 tabanda: "+binary+"<br>");

// //10 taban = 01 2 3 4 5 6 7 8 9
// //2 tabanda 10 tabana çevirme
// var octal=070111;
// document.write("8 tabanda: "+octal+"<br>");

// //16 taban=0 1 2 3 4 5 6 7 8 9 a b c d e f
// //16 tabanda 10 tabanına çevirme
// // runtime error, compiler error, syntax error
// var hexadecimal=0x11;
// document.write("16 tabanda: "+hexadecimal+"<br>");


// ///// 10 tabandan diğer tabanlara
// var decimal=10;
// document.write(decimal.toString(2)+"<br>")
// document.write(decimal.toString(8)+"<br>")
// document.write(decimal.toString(16)+"<br>")

// //CAST
// var castNumber="14";
// document.write(castNumber+castNumber+"<br>")
// //Number()
// document.write(Number(castNumber)+Number(castNumber)+"<br>");

// //NaN: Not a Number
// document.write("result: "+ (16/"asd")+"<br>")

// //isNaN
// var numberx=200/"asd";
// //isNaN= false ==> sayıdır
// //isNaN= true ==>  sayı değildir
// document.write("result2: "+ isNaN(numberx))


////////////////////////////////////////////////
//String
//Dikakt: length aç kapa parentez yoktur.
var kelime="html5 css3 responsive Bootstrap JAVASCRIPT css3 ";
document.write(kelime+"<br>")
document.write("harf sayısı: "+kelime.length+"<br>")
document.write("trimlenmiş harf sayısı: "+kelime.trim().length+"<br>")

document.write("hepsi küçük harf: "+kelime.toLowerCase()+"<br>")
document.write("hepsi büyük harf: "+kelime.toUpperCase()+"<br>")

document.write("startsWith: "+kelime.startsWith('h')+"<br>")
document.write("endsWith: "+kelime.endsWith(' ')+"<br>")

document.write("concat: "+kelime.concat(" -sona eklendi")+"<br>")

var degistirilmis="Merhabalar";
document.write("replace: "+kelime.replace(kelime,degistirilmis)+"<br>")

document.write("substring-1: "+kelime.substring(6)+"<br>")
document.write("substring-2: "+kelime.substring(0,4)+"<br>") // 0 <= X <= 4-1

document.write("charAt: "+kelime.charAt("0")+"<br>")
document.write("indexOf: "+kelime.indexOf("css3")+"<br>")
document.write("lastIndexOf: "+kelime.lastIndexOf("css3")+"<br>")












