//регулярные выражения не используйте. попробуйте в ручную.
//обсуждение преветствуется) выберайте любые из списка
/* 
1 Напишите функцию которая переводит введенную строку в верблюжий регистр (camelCase) 
Пример, "hello world" преобразуется "helloWorld" 
 */
let str = 'hello my world', str1 = 'heLlo MY woRld'

//====1.1====>

function camelCaseConverter1(string) {
    let PascalCaseStr = string.toLowerCase().split(' ').map(el => el[0].toUpperCase()+el.substring(1)).join('');
    //сначала перевел каждую букву в нижний регистр (на всякий случай) потом каждую первую букву в верхний регистр и соеденил в одну строку, получился PascalCase
    let camelCaseStr = PascalCaseStr.split().map(el => el[0].toLowerCase()+el.substring(1)).join('');
    //потом перевел первую букву в нижний.
    return camelCaseStr;
}
//console.log(camelCaseConverter1(str));
//console.log(camelCaseConverter1(str1));

//====1.2===>
function camelCaseConverter2(string) {
    let part1 = string.toLowerCase().split(' ').shift().split()
    //первое слово в нижнем регистре
    let part2 = string.toLowerCase().split(' ').splice(1).map(el => el[0].toUpperCase()+el.substring(1))
    // последующие слова где каждое слово с большой буквы
    let camelCaseStr = part1.concat(part2).join('')
    //склейка первого со вторым и camelCase по факту=)
    return camelCaseStr;
}
//console.log(camelCaseConverter2(str));
//console.log(camelCaseConverter2(str1));

/* 
2 Написать функцию для проверки спама в переданной строке. Функция возвращает true, 
если строка содержит спам. Спамом считать следующие 
слова: 100% бесплатно, увеличение продаж, только сегодня, не удаляйте, ххх. 
Функция должна быть нечувствительна к регистру. 
  */
let spam = ['только сегодня', 'увеличение продаж', '100% бесплатно','не удаляйте', 'ххх']

let strNoSpam = 'Написать функцию для проверки спама в переданной строке'
let strOfSpam = 'Только сегодня ты можешь получить 10000$'

//====2====>
function spamDetected(string) {
    let newString = string.toLowerCase();
    //перевод строки в нижний регистр, для нечувствительности к регистру=)
    let resTrue=spam.map(el => newString.includes(el));
    //создается массив с значениями булиан где true = найденому слову из массива spam
    if (resTrue.includes(true)) return true;
    else return string;
    //в массиве ищем есть ли true и вертаем true, если нет вертаем строку
}
//console.log(spamDetected(strNoSpam));
//console.log(spamDetected(strOfSpam));

/* 
3 Написать функцию, которая очищает строку от всех не буквенно-цифровых символов 
Пример, "This., -/ is #! a ;: {} to $ % ^ & * book"; преобразуется "This is a book" 
 */

let strTrash = 'This., -/ is #! a ;: {} to $ % ^ & * book'

//====3====>
function searchInTheTrash(trashString) {
    let normalString = trashString.match(/[A-ZА-Я ]/gi).join('').split(/\s+/).join(' ');
    //взял у строки все буквы(латиница и кирилица(для след задания)) и пробелы, полученный массив перевел в строку с множеством пробелов, потом обратно в массив почистив от лишних пробело и перевел все в строку с нормальными пробелами=)
    return normalString;
}
//console.log(searchInTheTrash(strTrash));


//4 Среднюю длину слова в предложении 

let str2 = 'Написать функцию для проверки спама в переданной строке. Функция возвращает true, если строка содержит спам. Спамом считать следующие';

//====4====>
function averageWordLength(string) {
    let arrayStr = string.split(/\s+/gi);
    //полученую строку перевел в массив для кол-ва слов
    let totalWord = arrayStr.join('');
    //далее массив перевел в одну строку без пробелов для кол-ва букв
    let averageWord = (totalWord.length/=arrayStr.length);
    //ну и подсчитал с помощью длин предыдущих значений
    return averageWord;
}
//console.log(averageWordLength(searchInTheTrash(str2))); //отправил дополнительно на чистку от мусора=)


