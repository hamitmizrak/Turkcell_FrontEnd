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
// var kelime="html5 css3 responsive Bootstrap JAVASCRIPT css3 ";
// document.write(kelime+"<br>")
// document.write("harf sayısı: "+kelime.length+"<br>")
// document.write("trimlenmiş harf sayısı: "+kelime.trim().length+"<br>")

// document.write("hepsi küçük harf: "+kelime.toLowerCase()+"<br>")
// document.write("hepsi büyük harf: "+kelime.toUpperCase()+"<br>")

// document.write("startsWith: "+kelime.startsWith('h')+"<br>")
// document.write("endsWith: "+kelime.endsWith(' ')+"<br>")

// document.write("concat: "+kelime.concat(" -sona eklendi")+"<br>")

// var degistirilmis="Merhabalar";
// document.write("replace: "+kelime.replace(kelime,degistirilmis)+"<br>")

// document.write("substring-1: "+kelime.substring(6)+"<br>")
// document.write("substring-2: "+kelime.substring(0,4)+"<br>") // 0 <= X <= 4-1

// document.write("charAt: "+kelime.charAt("0")+"<br>")
// document.write("indexOf: "+kelime.indexOf("css3")+"<br>")
// document.write("lastIndexOf: "+kelime.lastIndexOf("css3")+"<br>")

//CAST
//String()

//ÖDEV
// kullanıcı tarafından girilen bir kelimenin
//S-1) Kaç karakterlidir ?
//S-2) boşluklar alınarak Kaç karakterlidir ?
//S-3) bütün kelimeyi küçük harfle göstermek ?
//S-4) bütün kelimeyi büyük harfle göstermek ?
//S-5) ilk harf nedir  ?
//S-6) girdiğiniz kelime java ile başlıyor mu  ?
//S-7) girdiğiniz kelimenin sonuna "-ben js öğreniyorum"   ?
//S-8) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin   ?
//S-9) Kullanıcıdan alınan başka bir kelimeyle birinci olan kelimeyle yer değiştirmek ?

// //JSON nedir ?
// //stringify: JSON verisini string'e çevirmek
// var obje = {
//   adi: 'Hamit',
//   soyadi: 'Mızrak',
//   diller: 5,
//   turkish: true,
// }
// console.log(obje)
// document.write(obje + '<br>')

// //JSON String'e çevir
// var objectToString = JSON.stringify(obje)
// document.write(objectToString)

// //1.adım: adınızı ve soyadınızı json objesine ekleyip
// //2.adım: bu json objesini String'e çevirip
// //3.adım: bu json objesini String'e çevirilmiş kısımdan substring fonksiyon metodu ile isim ve soyismini ayrıştır
// //4.adım: adınızı ve soyasınız document.write ile ekranda gösterelim.
// //ip uçu: JSON.stringfy  ve substring()

// var nameSurname = {
//   "name": 'Hamit',
//   "surname": 'Mızrak',
// }

// //1-Çözüm (static)
// //json'ı string'e çevirdim
// var nameAndSurnameJsontoString = JSON.stringify(nameSurname)
// //ipucu almak (indexOf veya search)
// var searchResult = nameAndSurnameJsontoString.search('Hamit')
// document.write("<br>"+searchResult)
// //çıktısı: 9 başlıyor
// var name = nameAndSurnameJsontoString.substring(9, 14)
// var surname = nameAndSurnameJsontoString.substring(27, 33)
// document.write('<br>' + 'Adım: ' + name + '<br> Soyadım: ' + surname)
// var adi=JSON.parse

// document.writeln('<br>'+"****************************")

// //2-Çözüm (static)
// //json'ı string'e çevirdim
// var nameAndSurnameJsontoString2 = JSON.stringify(nameSurname)
// //ipucu almak (indexOf veya search)
// var searchResult = nameAndSurnameJsontoString2.search('Hamit');
// var searchResult2 = nameAndSurnameJsontoString2.search('Mızrak')

// //çıktısı: 9 başlıyor
// var name = nameAndSurnameJsontoString2.substring(searchResult, (searchResult+5))
// var surname = nameAndSurnameJsontoString2.substring(searchResult2, (searchResult2+6))
// document.write('<br>' + 'Adım: ' + name + '<br> Soyadım: ' + surname)
// var adi=JSON.parse

// document.writeln('<br>'+"****************************")

// //3-Çözüm (dinamik-1)
// //JSON.stringfy()
// //JSON.parse()
// var dinamic=JSON.stringify(obje);
// var parse=JSON.parse(dinamic);

// var name=parse.adi;
// document.writeln('<br>'+name)

// var surname=parse.soyadi;
// document.writeln('<br>'+surname)

// document.writeln('<br>'+"****************************")

// //4-Çözüm (dinamik-1)
// //JSON.stringfy()
// //JSON.parse() (dinamik-2 clean codes)

// //monad
// document.writeln('<br>'+ JSON.parse(JSON.stringify(obje)).adi.toUpperCase()+" "+JSON.parse(JSON.stringify(obje)).soyadi);

//////////////////////////////////////////////////////////////
//Fonksiyon:
//Normal Function
//1-) returnsuz, parametresiz function
// function functionName1(){
//   document.writeln('<br>'+"returnsuz, parametresiz function")
// }
// functionName1()

// //2-) returnsuz, parametreli function
// function functionName2(ekmekTuru){
//   document.writeln('<br>'+"returnsuz, parametresiz function: "+ekmekTuru)
// }
// functionName2('Trabzon ekmeği')

// //3-) returnlu, parametrelisiz function
// function functionName3(){
//   return 'returnlu, parametresiz function 200-6 = 194TL'
// }
// var temp3= functionName3();
// document.writeln('<br>'+temp3)

// //4-) returnlu, parametreli function
// function functionName4(money){
//   var count=money-6;
//   return 'returnlu, parametreli function Kalan Para: '+count;

// }
// var temp4= functionName4(200);
// document.writeln('<br>'+temp4);

//////////////////////////////////////////////////////////////
//senkron: bir işlem biter diğerine geçer. Sırayla çalışır.
//setTimeOut() ==> function istediğimiz zaman aralığında çalışmasını sağlarız.
// function merhaba1(){
//   document.writeln('<br>'+"1.function")
// }
// setTimeout(merhaba1,3000);

// function merhaba2(){
//   document.writeln('<br>'+"2.function")
// }
// merhaba2()

//////////////////////////////////////////////////////////////
//try catch: exception handling
// try {
//   alert44('Merhabalar')
// } catch (err) {
//   document.writeln('<br>' + err.message);
//   document.writeln('<br>' + err.name);
// } finally {
//   document.write('<br>' + 'db.close()')
// }
// document.writeln('<br>' + 'diğer satır')

//////////////////////////////////////////////////////////////
//conditional:
//if else
// var number = '4'
// if (number == 4) {
//   document.write('<br>' + 'eşittir')
// } else {
//   document.write('<br>' + 'değildir')
// }

// //if else
// if (number == 4) document.write('<br>' + 'eşittir')
// else document.write('<br>' + 'değildir')

// /////////
// //ternary
// var ternary = number == 4 ? 'eşittir' : 'değildir'
// document.write('<br>' + ternary)

// document.write('<br>' + '++++++++')
// /////////
// //if elseif else
// var day = 'persembe'
// if (day === 'pazartesi') {
//   document.write('<br>' + '1-pazartesi')
// } else if (day === 'sali') {
//   document.write('<br>' + '2-sali')
// } else if (day === 'carsamba') {
//   document.write('<br>' + '3-carsamba')
// } else if (day === 'persembe') {
//   document.write('<br>' + '4-persembe')
// } else if (day === 'cuma') {
//   document.write('<br>' + '5-cuma')
// } else if (day === 'cumartesi') {
//   document.write('<br>' + '6-cumartesi')
// } else if (day === 'pazar') {
//   document.write('<br>' + '7-pazar')
// } else {
//   document.write('<br>' + 'gün yanlış çalışıldı')
// }

// ///////////////////////////////////////////////////////////////
// //algoritma analizi
// //switch -case
// switch (day) {
//   case 'pazartesi':
//     document.write('<br>' + '1-pazartesi')
//     break

//   case 'sali':
//     document.write('<br>' + '2-sali')
//     break

//   case 'carsamba':
//     document.write('<br>' + '3-carsamba')
//     break

//   case 'persembe':
//     document.write('<br>' + '4-persembe')
//     break

//   case 'cuma':
//     document.write('<br>' + '5-cuma')
//     break

//   case 'cumartesi':
//     document.write('<br>' + '6-cumartesi')
//     break

//   case 'pazar':
//     document.write('<br>' + '7-pazar')
//     break

//   default:
//     document.write('<br>' + 'gün yanlış çalışıldı')
//     break
// }

///////////////////////////////////////////////////////////////
//return break continue 
//return   : birşey döndermek (function durdurmak)
//break    : döngüyü kırmak
//continue : sadece o şart için çalışma ama sonrasında devam et

//////////////////////
//Loop
//iterative for
//1 artımak 
// i++
// i=i+1
// i+=1

document.writeln("<br>"+ (1+2+3+4+5+6+7+8+9+10)+"<br>")

var sum=0;
for (var i = 1; i <=10000; i++) {
  sum=sum+i;
}
document.writeln("<br>"+ sum+"<br>")


