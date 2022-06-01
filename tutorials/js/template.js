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

// sabitler
document.write(Math.PI+"<br/>") 
document.write(Math.E+"<br/>") 

// Math
document.write(Math.random()+"<br/>") 
document.write(Math.min(5,2,5,21,-525)+"<br>")
document.write(Math.max(5,2,5,2151,-525)+"<br>")
document.write(Math.sqrt(16)+"<br>")
document.write(Math.pow(2,5)+"<br>")
document.write(Math.abs(-4)+"<br>")

// yuvarlama floor 
document.write(Math.floor(3.9)+"<br>")
document.write(Math.ceil(5.1)+"<br>")
document.write(Math.round(2.5)+"<br>")


// Kullanıcıda tarafından aldığımız 2 tane sayının
// s1-) Bu sayılardan en küçüğü nedir ?
// s2-) Bu sayılardan en büyüğü nedir ?
// s3-) Bu sayılardan en büyüğü karekökü nedir ?
// s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ?
// s5-) Bu sayılardan en küçüğü mutlak nedir ?
// s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım












