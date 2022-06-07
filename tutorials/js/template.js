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
//algoritma analizi
//switch -case
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

// document.writeln("<br>"+ (1+2+3+4+5+6+7+8+9+10)+"<br>")

// //for
// var sum = 0
// for (var i = 1; i <= 10; i++) {
//   sum = sum + i
// }
// document.writeln('<br>' + sum + '<br>')

//while
// var sum2 = 0
// var x = 1
// while (x <= 10) {
//   sum2 = sum2 + x
//   x++
// }
// document.writeln('<br>' + sum2 + '<br>')

//do-while: şart sağlansın yada sağlanması 1 kere çalışır.
// var sum3 = 0
// var y = 1
// do {
//   sum3 = sum3 + y
//   y++
// } while (y <= 10)

// document.writeln('<br>' + sum3 + '<br>')

//////////////////////////////////////////////////////
//ÖDEV (if-else for break continue)
//Fonksiyonlarla yapılsın
//Örnek-1)  kullanıcının vereceği (prompt) bitiş sayısını belirleyelim Exam 1<=X<=5
//1.adım: kaç tane sayı var ?
//2.adım: sayı toplamları var ?

//3.adım: kaç tane tek  sayı var ?
//4.adım: tek sayılar toplamı ?
//5.adım: tek sayılar gösterelim ?

//6.adım: kaç tane çift  sayı var ?
//7.adım: çift sayılar toplamı ?
//8.adım: çift sayılar gösterelim ?

//Eğer verilen sayılarda 7 sayısı varsa bunu eklemesin (continue)
//Eğer bitiş sayısı 100 fazla ise 100'e kadar olanlar toplansın  (break)
//Eğer kullanıcı başlangıç sayıdan küçük girerse uyaralım başlangıçtan büyük girmesini isteyelim
//Eğer kullanıcı secret-key girerse yani 44 sayısını girerse program çalışmayı direk durdursun

// //UserData function
// function userData() {
//   var number = Number(prompt('Lütfen bitiş sayısını giriniz'))
//   if (number <= 1) {
//     return "lütfen 1'den büyük sayı giriniz"
//   } else return number
// }

// //main function
// function main() {
//   var number =8 //userData();
//   //document.write("<br>"+number);
//   var sum = 0,
//     counter = 0 //toplam ve sayı adedi
//   var even = 0,
//     evenSum = 0,
//     evenNumber = 0 //çift sayılar
//   var odd = 0,
//     oddSum = 0,
//     oddNumber = 0 //Tek sayılar

//   for (let i = 1; i <= number; i = i + 1) {
//     //secretKey
//     if (number === 44) {
//       alert(number + ' SecretKey verildi Çıkış yapıldı')
//       break
//     }

//     //100 fazla verilemez
//     if (i === 100) {
//       alert('Sayı:' + number + '. 100 fazla hesaplayamam.')
//       break;
//     }

//     //special data :7
//     if (i === 7) {
//       alert('Sayı:' + number + ' dahil etmiyorum')
//       continue
//     }

//     //toplam
//     sum += i
//     //sum=sum+i;
//     //sum++;

//     //çift
//     if (i % 2 == 0) {
//       evenSum += i
//       even++
//       evenNumber = String(evenNumber).concat('-' + i)
//     }

//     //çift
//     if (i % 2 == 1) {
//       oddSum += i
//       odd++
//       oddNumber = String(oddNumber).concat('-' + i)
//     }
//   }

//   document.write('<br>' + 'verilen Sayı: ' + number)
//   document.write('<br>' + 'verilen Sayı Toplamı: ' + sum + '<br>')

//   document.write('<br>' + 'çift Sayı adeti: ' + even)
//   document.write('<br>' + 'çift Sayı toplamı: ' + evenSum)
//   document.write('<br>' + 'çift Sayı nelerdir: ' + evenNumber + '<br>')

//   document.write('<br>' + 'tek Sayı adeti: ' + odd)
//   document.write('<br>' + 'tek Sayı toplamı: ' + oddSum)
//   document.write('<br>' + 'tek Sayı nelerdir: ' + oddNumber)
// }

//main()

//////////////////////////////////////////////////////
/// Debug nasıl atılır ?
// http://127.0.0.1:5501/tutorials/js/javascript.html
//.vscode ==> launch.json
//////////////////////////////////////////////////////
//Date get()
// var tarih=new Date();
// document.write('<br>'  +"Gün: "+ tarih.getDate());
// document.write('<br>'  +"Yıl: "+ tarih.getFullYear());
// document.write('<br>'  +"Dakika: "+ tarih.getMinutes());
// document.write('<br>'  +"AY (0): "+ tarih.getMonth());
// document.write('<br>'  +"<br>");

// //Date set()
// var tarih2=new Date("2015-1-1");
// document.write('<br>'  +"Gün: "+ tarih2.getDate());
// document.write('<br>'  +"Yıl: "+ tarih2.getFullYear());
// document.write('<br>'  +"Dakika: "+ tarih2.getMinutes());
// document.write('<br>'  +"AY (0): "+ tarih2.getMonth());

// function getDateHoursControl(){
//   //Zaman Uygulaması
// var hour=new Date().getHours();
// if(hour>=13){
//   document.write('<br>'  +"Öğlededen Sonra ");
// }else{
//   document.write('<br>'  +"Öğlededen Önce ");
// }
// }
// getDateHoursControl()

//Ödev kullanıcı tarafında girilen şifre ve şifre doğrulama
//validation password -repassword

//////////////////////////////////////////////////////////////////
//JavaScript  single Thread

// function bodyFunction(){
//   document.write('<br>'  +" 3 saniye sonra geldi ");
// }
// setTimeout(bodyFunction,3000);

//+++++++++++++++++++++++
// //1-) callback function
// function ikinci(value){
//   document.write('<br>'  +" ikinci fonkisyon çalıştı "+value);
// }

// //2-) ana function
// function birinci(number1,number2,callback){
// var result=number1*number2;
// callback(result)
// }

// birinci(4,6,ikinci)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//2-) Immedia function : fonksiyonu çağırmadan gelsin
//Öncesinde başka bir fonksiyon olmasın
//immediate: dogrudan, dolaysiz, derhal
//()()
// (function deneme44 (){
//   document.write('<br>'  +" deneme");
// })();

//////////////////////////////////////////////////////////////////
//Dizi Fonksiyon
// push()      ==> dizide sona 1 eleman ekleme
// unshift()   ==> dizide başa 1 eleman ekleme
// pop()       ==> dizide sona 1 eleman çıkarma
// shift()     ==> dizide baştan 1 eleman çıkarma

// sort()           ==> Küçükten büyüğe sıralama
// reverse()        ==> dizide ters yazdırır
// sort().reverse() ==> büyükten küçüğe

// toString() ==> diziyi String'e çevirir
// join()     ==> dizide  her bir elemena ekleme yapar
// concat()   ==> String'te en sona ekleme yapar
// split()    ==> String verileri diziye çevirir
// slice()    ==> dizi clone

// 1.gösterim ==> var dizi=[]  ==> tavsiye edilen
// 2.gösterim ==> var dizi2 = new Array();
// new Array()  ==> eleman sayısını vermek ve NOT: dolmayan dizi elemanlarında undefined gelecektir

// diziler sıfırdan(0) indis başlar
// dizi.length-1 ==> son elemana erişmek
// var array=[1,5,true,"merhabalar",55];
// console.log(array)

//++++++++++++++++++++++++
// //iterative for
// for (let i = 0; i < array.length;  i++) {
//  document.write('<br>'  + array[i])
// }
// document.write('<br>' +"****************")

// //for-in (for over index)
// for (temp in array){
//   document.write('<br>'  + temp+" ==> "+array[temp])
// }

// document.write('<br>' +"****************")

//for-of(for over members)
//Direk ekranda göstermek
// for (var temp of array){
//   document.write('<br>'  + temp)
// }
// document.write('<br>' +"****************")

//++++++++++++++++++++++++
// // Dizi fonksiyonlarına
// //EKLEME
//+++++++++++++
// //push(): var olan dizimizin son elemanına veri eklemek
// array.push(" son");

// for (temp of array){
//   document.write('<br>'  + temp)
// }

// document.write('<br>' +"****************")

//+++++++++++++
// //unshift(): var olan dizimizin son elemanına veri eklemek
// array.unshift("önce");

// for (temp of array){
//   document.write('<br>'  + temp)
// }

//ÇIKARMA
//+++++++++++++
//pop: sondan bir eleman çıkarmak
// var dizi=[1,5,true,"merhabalar",55];

// dizi.pop()
// for (temp of dizi){
//   document.write('<br>'  + temp)
// }

//+++++++++++++
//shift: başlangıçtan bir eleman çıkarmak
// var dizi=[1,5,true,"merhabalar",55];

// dizi.shift();

// for (temp of dizi){
//   document.write('<br>'  + temp)
// }

//+++++++++++++

// sort(): küçükten büyüğe doğru sıralama yapar
// var dizi=["malatya","istanbul","ankara"];
// dizi.sort();
// for( var temp of dizi ){
//    document.write('<br>'  + temp)
//  }

//reverse(): ters sıralama
//var dizi=["istanbul","malatya","ankara"];
//reverse() ==> Diziyi tersten yazdırır
//dizi.reverse();
//büyükten küçüğe ==>
//sort().reverse() ==> Diziyi önce küçükten büyüğe sonra reverse
//  dizi.sort().reverse()
// for( var temp of dizi ){
//   document.write('<br>'  + temp)
// }

// // diziyi String nasıl çevirelim
// //+++++++ dizi konuları
// function arrayValue() {
//   var dizi = ['java', 'spring', 'hibernate', 'spring']
//   document.write('<br>' + dizi[1] + dizi[2])

//   //dizinin ilk elemanına erişmek
//   document.write('<br>' + 'dizi ilk elemanı =>' + dizi[0])

//   //dizinin son elemanına erişmek
//   document.write('<br>' + 'dizi son elemanı =>' + dizi[dizi.length - 1])

//   var diziEleman = dizi[0] //string
//   document.write('<br>' + typeof diziEleman)
// }
// //arrayValue()

// //+++++++ dizi string'e çevir  ==> dizi.toString()
// // string ,concat()==> concat sadece kelimenin en sonuna ekler
// //arrayToString()
// function arrayToString() {
//   var dizi2 = ['java', 'spring', 'hibernate', 'MVC', 'Data']

//   document.write('<br>' + dizi2.toString())
//   console.log(dizi2.toString().toUpperCase().concat(' 1 kere ekle'))
// }

// //join() => her bir elemana erişim sağlamak
// //join() => string verilere çevirmek
// function arrayJoin(){
//   var dizi3 = ['java', 'spring', 'hibernate', 'MVC', 'Data'];
//   document.write("<br/>"+dizi3.join()) //virgüllü
//   document.write("<br/>"+dizi3.join(' ')) //boşlukla göstersin
//   document.write("<br/>"+dizi3.join('-')) //- göstersin

//   var value=dizi3.join();
//   document.write("<br>"+typeof value)

//   var value2=dizi3.join().startsWith('j');
//   document.write("<br>"+value2)
// }

// //arrayJoin()

// //toString()
// //join()
// //concat()

// //ÖDEV: Math.round(Math.random()*10+1))
// // bilgisayar tarafında rastgele  sayılar 1-10 arasında rastgele olsun oluştursun ve bitiş değeri 1<=X<=kullanıcı tarafından bitiş sayısına göre sayılar oluşturulsun
// // bu sayıları bir diziye atama yapalım
// // bu sayılardan ilk eleman  ===> dizi[0]
// // bu sayılardan son eleman ===> dizi[dizi.length-1]
// // bu sayıların küçükten büyüğe sıralama ===> dizi.sort()
// // bu sayıların büyükten küçüğe sıralama ===> dizi.sort().reverse()
// // bu sayıların toplamları  ===> sum=0  sum+=i;
// // bu sayıların çift sayı toplamları  ===> if(dizi[i]%2==0)
// // bu sayıların tek sayı toplamları  ===> if(dizi[i]%2==1)
// // bu sayıların her birine 1 ekleyerek yeni bir dizi oluşturalım ==> iterative for ile her bir eleman erişmek ve 1 eklemek bunun dinamik kısmını ES kısmında göreceğiz.

// //++++++++++++++++++++++++++++++++++++++++++++++++

// // split()  ==> string elemanları diziye almak
// // slice()  ==> dizi clonelama
// // splice() ==> Diziye blok şeklinde veri ekleme veya çıkarma

// //split: bir string verisindeki bütün elemanları bir diziye atar
// function arraySplit(){
//   var dizi4 = "java, spring, +hibernate, MVC, Data";
//   console.log(dizi4)

//   var dizi5=[];
//   console.log(dizi4.split(" ")) //regex

//   dizi5=dizi4.split("+"); //+ işaretine göre parçalama
//   console.log(dizi5)

//  for (let i = 0; i < dizi5.length; i++) {
//    console.log(dizi5[i]);
//  }

// }
// //arraySplit()

// //slice()  ==> dizi clone
// //slice: bize dizi döndürür.
// function arrayIndexClone(){
// var dizi=[1,2,3,4,5,6,7,8,9];
// //console.log(dizi);

// //3.indisten itibaren yani (4 eleman) diziyi kopyaladı
// console.log(dizi.slice(3));

// //istediğimiz dizi aralığını vererek dizi döndürmek
// console.log(dizi.slice(0,2)); //0<=X<=(2-1)
// }
// //arrayIndexClone()

// console.log("**************************")

// //splice() ==> diziye veri ekleme silmek
// function arrayBlockDelete(){
//   var dizi=["deneme",2,3,4,5,6,7,8,9];

//   // //verilen indisten itibaren kopyaladı (indis dahildir)
//   // console.log(dizi.splice(3));

//   // //0:başlama indisi
//   // //2:bitiş indisi
//   // console.log(dizi.splice(0,2)); //0<=X<=(2-1)

//   //0: başlamada indisi
//   console.log(dizi);
//   dizi=dizi.splice(0,0,66);

// for(var i=0; i<dizi.length; i++){
//   console.log(dizi[i]);
// }
// }
// //arrayBlockDelete();

// function arrayBlockAdd(){
var dizi = ['1', '2', '3', '4']
//2.başlama indisi
//0: silme
//   //
//   console.log(dizi.splice(2, 0, "Lemon", "Kiwi"));
//   console.log(dizi)
//   }
//   //arrayBlockAdd()

//   //Hoisting: önce değerei daha sonra türünü
//   deneme=44;
//   var deneme;
//  //document.write("<br>"+deneme)

////////////////////////////////////////////////////////////
//Object: özellikleri
//this: unutma
//anonymous function

//   var obj2=new Object()
//  console.log(obj2)

// var person = {
//   "adı":"Hamit",
//   "soyadı":"Mızrak",
//   "deneyim":9,
//   "isLogin":true,
//   "teknolojiler":["html5","css3","js","bootstrap"],
//   "adiSoyadi":function(){
//     return this.adı.toUpperCase()
//   },

//   "java":{
//     "adı":"JavaSE",
//     "db":"H2DB"
//   }
// };
// //console.log(person)

// //objeye sonradan veri eklemek için kullanıyoruz
// // person.eklenen="Eklenen veri";
// // console.log(person.eklenen)

// //Literal Template
// function esLiteralTemplateMultiLine(){
// var valueTem1="Merhabalar <br> nasılsınız <br> yeni teknolojiler öğreniyorum";
// document.writeln("<br>"+valueTem1)
// console.log(valueTem1+"\ndiğer kelime")

// //1-MultiLine
// var valueTem2=`Merhabalar
// nasılsınız`;
// console.log(valueTem2)
// }
// //esLiteralTemplateMultiLine()

// // 2-) Interpolation `${}`
// function esLiteralInterpolation(){
//   var adi44="Hamit";
//   var soyadi44="Mızrak";

//   var valueInter1=adi44+"\n"+soyadi44;
//   console.log(valueInter1)

//   var valueInter2=`adım:${adi44} soyadım:${soyadi44}`;
//   console.log(valueInter2)

//   }
// //esLiteralInterpolation()

// // 3-) Html Template
// function normalHtmlTemplate(){
//   var country="Turkey";
//   var html=
//   "<ul>"+
//       "<li>"+
//           country+
//       "</li>"+
//       "<li>"+
//           country.toUpperCase()+
//       "</li>"+
//   "</ul>";
//   document.body.innerHTML=html;
// }
// //normalHtmlTemplate()

// function esTemplateHtmlTemplate(){
//   var country="Turkey";
// var html=
// `
// <ul>
//     <li>${country}</li>
//     <li>${country}</li>
// </ul>
// `;
// document.body.innerHTML=html;
// }
// esTemplateHtmlTemplate()

///////////////////////////////////////////////////////////////////////////////
//ÖDEV-1
//y=3x+4k ==> 1.dereceden 2 bilinmyenli denklem
//Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?

//ÖDEV-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül:(x*9/5)+32

//ÖDEV-3 verilen bir sayının negatif mi pozitif mi olduğunu bulan algoritma ?

//ÖDEV-4 Kullanıcı tarafından aldığımız password ile repassword girilsin doğru ve yanlışı göstersin ?

//ÖDEV-5
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren arrow function algoritmasını yazalım switch-case   new Date().getDay() 0=pazar 1=pazartesi

//ÖDEV-6
//Login userEmail,userPassword kullanıcıdan aldığımız değeri db ile karşılaştıracak eğer doğru ise adminFunction'a gönderecek 4 kalan haktan aşağı doğru düşecek eğer kalan hak sayımız 0 olursa kullanıcı bloke olsun
// dbUserEmail="deneme@gmail.com"
// dbUserPassword="root"

//ÖDEV-7
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren Immedia function algoritmasını yazalım switch-case   new Date().getDay()
// ()()

//ÖDEV-8
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren Arrow function algoritmasını yazalım switch-case   new Date().getDay()
// let deneme= ()=>{ }

//ÖDEV-9
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren Anonymous function algoritmasını yazalım switch-case   new Date().getDay()
// let deneme= function (){ }

//ÖDEV-10
//Sayı bulma oyunu: 1-10 arasında rastgele sayılar olsun bizde tahmin etmeye çalışalım bizim tahmin sayımız 5 olsun eğer biz sayıdan büyükse büyük tahmin eğer sayıdan küçükse küçük tahmin. ve sonunda eğer bulursak kaçıncı tahminde bulduğumuz bize söylesin ?

///////////////////////////////////////////////////////////////////////////////