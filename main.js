// Task-27
// if...else operatoru ilə yazllmış kodu switch operatoruna dəyişdirməklə kodu yenidən yazın.
// let id = prompt ('enter product id:');
// if (id === '1') {
//   alert ('Available 10 pcs.');
// }
// else if (id === '2') {
//   alert ('Available 256 pcs.');
//  }
// else if (id === '3') {
//   alert ('Available 53 pcs.');
//  }
//   else if (id === '4') {
//   alert ('There are 3 available.');
//  }
// else {
//   alert ('Out of stock');
// }

// let id = prompt("Enter product id:");
// let amount;
// switch (id) {
//   case "1":
//     amount = alert("Available 10 pcs.");
//     break;
//   case "2":
//     amount = alert("Available 256 pcs.");
//     break;
//   case "3":
//     amount = alert("Available 53 pcs.");
//     break;
//   case "4":
//     amount = alert("Available 3 pcs.");
//     break;
//     default:
//         alert("Out of stock");
// }

// Task-28
// İstifadəçidən onun cinsini (M və ya F hərfləri şəklində) sorğulayan və
// gender dəyişəninə male yaxud female sözlərindən birini yazdıran proqramı yazın

// let gender = prompt("Cinsinizi daxil edin - m yaxud f");
// switch (gender) {
//   case "M":
//   case "m":
//     gender = "Male";
//     break;
//   case "F":
//   case "f":
//     gender = "Female";
//     break;
//   default:
//     gender = "Yanlis deyisen daxil edilib";
// }
// console.log(gender);

// Task-29
// Ayın adını mətnlə konsola yazdıran bir program yazın.
// İstifadəçidən ayın nömrəsini soruşun və adını konsola çıxarın.

// let month = prompt("Ayin nomresini daxil edin");
// switch (month) {
//   case "1":
//   case "01":
//     month = "Yanvar";
//     break;
//   case "2":
//   case "02":
//     month = "Fevral";
//     break;
//   case "3":
//   case "03":
//     month = "Mart";
//     break;
//   case "4":
//   case "04":
//     month = "Aprel";
//     break;
//   case "5":
//   case "05":
//     month = "May";
//     break;
//   case "6":
//   case "06":
//     month = "Iyun";
//     break;
//   case "7":
//   case "07":
//     month = "Iyul";
//     break;
//   case "8":
//   case "08":
//     month = "Avqust";
//     break;
//   case "9":
//   case "09":
//     month = "Sentyabr";
//     break;
//   case "10":
//     month = "Oktyabr";
//     break;
//   case "11":
//     month = "Noyabr";
//     break;
//   case "12":
//     month = "Dekabr";
//     break;
//   default:
//     month = "Yanlis deyisen daxil edilib";
// }
// console.log(month);

// Task-30
// İstifadəçi tərəfindən daxil edilmiş tarixin təsvirini çıxarın.
// İstifadəçidən tarixi «2009.12.19» formatında daxil etməyi xahiş edin.
// Tarixin təsvirini «19 Dekabr 2009-cu il» formatında çıxarın.
// Daxil edilmiş dəyərə validator əlavə edin.
// İstifadəçi səhv formatda dəyər daxil edərsə, «Yanlış dəyər daxil edilib» bildirişi göstərin.

// let date = prompt("Ili daxil edin").split(".")
// let year = date[0]
// let month = date[1]
// let day = date[2]
// let result;
// switch (month) {
//     case "1":
//     case "01":
//         result = "Yanvar"
//         break;
//     case "2":
//     case "02":
//         result = "Fevral"
//         break;
//     case "3":
//     case "03":
//         result = "Mart"
//         break;
//     case "4":
//     case "04":
//         result = "Aprel"
//         break;
//     case "5":
//     case "05":
//         result = "May"
//         break;
//     case "6":
//     case "06":
//         result = "Iyun"
//         break;
//     case "7":
//     case "07":
//         result = "Iyul"
//         break;
//     case "8":
//     case "08":
//         result = "Avqust"
//         break;
//     case "9":
//     case "09":
//         result = "Sentyabr"
//         break;
//     case "10":
//         result = "Oktyabr"
//         break;
//     case "11":
//         result = "Noyabr"
//         break;
//     case "12":
//         result = "Dekabr"
//         break;
//     default:
//         result = "Yanlis deyisen daxil edilib"
// }
// console.log(`"${day} ${result} ${year} -cu il`);
