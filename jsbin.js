/**
 * Реализовать RLE-сжатие: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
 * @param  {string} value
 * @return {string}
 */
function rle(value) {
    var ret = '';
    for(i=0; i<value.length; i++){
        
        if (!isNaN(parseInt(ret.slice(-1)))) {
            if (value[i] == ret.slice(-2,-1)){
                ret = ret.slice(0,-1)+(parseInt(ret.slice(-1))+1);
            }else{
                ret=ret+value[i]; 
            }
        } else if (value[i] == ret.slice(-1)){
            ret = ret+'2';
        } else {
            ret=ret+value[i];
        }
    }
    return ret
}

console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));










/**
 * Получения двумерный массив анаграмм из произвольного массива слов
 * @param   {string[]} list
 * @returns {Array<[string, string]>}
 */
function getAnagrams(list) {
    var ret = [];
    var lann = list.map(x=>x.split('').sort().join(''));
    for (var i = 0; i < lann.length; i++) {
        if (list[i] != list[i+1+lann.slice(i+1).indexOf(lann[i])]) {
            ret.push([list[i], list[i+1+lann.slice(i+1).indexOf(lann[i])]]);
        }
    }
    return ret
}

const inputList = [
    'кот', 'пила', 'барокко',
    'стоп', 'ток', 'кошка',
    'липа', 'коробка', 'пост',
];

// Проверка (лучше смотреть в консоль)
console.log(getAnagrams(inputList));
// [
//   ['кот', 'ток'],
//   ['пила', 'липа'],
//   ['барокко', 'коробка'],
//   ['стоп', 'пост'],
// ]










/**
 * Получения массива уникальных значений
 * @param  {number[]} values
 * @return {*}
 */
const uniq = values => Array.from(new Set(values))

const uniq2 = values => values.filter( (element, index, array) => values.slice(index+1).indexOf(element)==-1 )

console.log(uniq([2, 3, 1, 2, 1, 5, 6, 3, 1, 8, 5]));










/**
 * Найти пересечение двух массивов
 * @param  {number[]} left
 * @param  {number[]} right
 * @return {number[]}
 */
function intersection(left, right) {
    return left.filter(e => right.indexOf(e)!=-1)
}

console.log(intersection(
    [1, 2, 3, 4, 5],
    [2, 8, 3]
));










/**
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
function isIsomorphic(left, right) {
    obj = {};
    for (var i=0; i<left.length; i++) {
        if (obj[left[i]] === undefined) {
            obj[left[i]] = right[i]
        } else if (obj[left[i]] !== right[i]) {return false}
    }
    return true
}

console.log('egg -> add:', isIsomorphic('egg', 'add')); // true
console.log('paper -> title:', isIsomorphic('paper', 'title')); // true










/**
 * Проверка на сбалансированность фигурных скобкок
 * @param  {string}  input
 * @return {boolean}
 */
function isBalanced(input) {
    var left = input.split('').filter(x=>x==='{');
    var right = input.split('').filter(x=>x==='}');
    return left.length == right.length
}

console.log('balanced:', isBalanced('{{}{}}{}')); // true
console.log('not balanced:', isBalanced('{}{{}')); // false










/**
 * Является ли строка палиндромом
 * @param  {string}  value
 * @return {boolean}
 */
function isPalindrome(value) {
    var val = value.replace(/\s/g, '').toLowerCase();
    var rev = val.split("").reverse().join("");
    return val == rev
}

console.log(isPalindrome('abcd')); // false
console.log(isPalindrome('A man a plan a canal Panama'));// true











/**
 * Релизуйте сортировку массива
 * @param   {any[]}     values  сортируемый массив
 * @returns {any[]}
 */
function sort(values) {
    return values.sort((a,b)=>a-b)
}

console.log(sort([7,0, -5, 2, 99, 5, -6, -4, 1, 3, 4, -1])); // [-1, 1, 2, 3, 4, 5, 7, 99]










/**
 * Найти пропущеное значение в неотсортированном массиве.
 * @param  {number[]} values
 * @return {boolean}
 */
function missing(values) {
    val = values.sort();
    for (i=0; i<val.length; i++){
        if (i+1 !== val[i]) return i+1 
    }
}

console.log(missing([1, 4, 3])); // 2
console.log(missing([5, 1, 4, 2])); // 3
console.log(missing([1, 2, 3, 4])); // undefined











/**
 * Реализовать свой Map
 * @constructor
 */
function XMap() {
    return {
        set: (key, val) => this[key]=val,
        has: (key) => !!this[key],
        get: (key) => this[key],
        remove: (key) => delete this[key]
    }
}

// Проверка
const map = new XMap();
const objKey = {foo: true};

map.set(123, 'ok');
map.set(objKey, 'fail');
map.has(objKey) && map.set(objKey, 'wow');

console.log(map.get(123)); // "ok"
console.log(map.get(objKey)); // "wow"

map.remove(123);
console.log(map.has(123)); // false










/**
 * Реализовать класс
 * @constructor
 */
function BinaryTree() {
    return {
        props: [],
        has: function(key) {return this.props.indexOf(key) != -1;},
        add: function() {this.props.push(...arguments);},
        remove: function(key) {this.props.splice( this.props.indexOf(key), 1);},
        size: function() { return this.props.length; },
        toArray: function() { return this.props.sort(); },
    }
}


var tree = new BinaryTree();

tree.add(2, 1, 3, 2.5, 4);
tree.add(5);


console.log('2:', tree.has(2)); // true
console.log('5:', tree.has(5)); // true

tree.remove(3);

console.log('3:', tree.has(3)); // false
console.log('2.5:', tree.has(2.5)); // true

console.log('size:', tree.size()); // 5
console.log('toArray:', tree.toArray()); // [1, 2, 2.5, 4, 5]










/**
 * Перенос нулей в конец массива
 * @param  {number[]} input
 * @return {number[]}
 */
function zsort(input) {
    return [...input.filter(x=>x!==0), ...input.filter(x=>x===0)]
}


// Проверка
console.log(zsort([1, 0, 2, 3, 0, 4, 0])); // [1, 2, 3, 4, 0, 0, 0]










// Реализовать метод `.delay` 
// ...
Function.prototype.delay = function(time) {
  setTimeout(this, time)
}

foo.delay(300);

function foo() {
    console.log("Wow!");
}






// Сейчас console выводит "undefined", нужно это исправить 


function Bomb(message, delay) {
    this.message = message;
    setTimeout(this.blowUp.bind(this), delay * 1000); // взрываем через delay sec
}


Bomb.prototype.blowUp = function () {
    console.log(this.message);
};


new Bomb("Allahu akbar!", .5);









//
var sum = function () {
    var i = 0;
    for (var y of arguments) {
        i = i+y
    }
    return i
};

console.log("result:", sum(1, 2, 3, 4, 5));








//
var inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';

/**
 * Найти min/max в произвольной строке
 * @param   {String} входные данные
 * @returns {{min:Number, max:Number}}  объект
 */
function getMinMax(string) {
    arr = inputData.split(' ').map(x=>parseFloat(x)).filter(x=>x).sort((a,b)=>a-b)
    return {min:arr.shift(), max:arr.pop()}
}


console.log(getMinMax(inputData));













/**
 * Вывод чисел в колонках
 * @param   {Number}  max    от 0 до max
 * @param   {Number}  cols   количество колонок
 * @returns {String}
**/
var printNumbers = function (max, cols) {
    var arr = '';
    var mag = Math.ceil(max/cols);
    for (var i=0; i<mag; i++){
        for (var y=0; y<cols; y++){
            if (i+y*mag>=max) {break;}
            arr = arr+(i+y*mag)+' '
        }
        arr = arr.slice(0,-1)+'\n'
    }
    return arr.slice(0, -1);
};



console.log(printNumbers(12, 3));
/*
Пример работы:
0 4 8
1 5 9
2 6 10
3 7 11
*/








// Реализовать подсчет кликов, максимум до 3-х включительно
// обработчик должен сниматься
var elem = document.getElementById('counter');
console.log(elem)
elem.onclick = function () {
    var i = parseInt(elem.innerHTML[10]);
    if (i === 3 ) i = -1; 
    elem.innerHTML=elem.innerHTML.slice(0,10)+ (i+1) + ')'
    
}
console.log(elem) 










// Заставьте это работать 
function Dummy() {
    return Dummy.prototype
}

Dummy.prototype.value = 'fail';

Dummy.prototype.setValue = function (value) {
    this.value = value;
};

Dummy.prototype.getValue = function () {
    return this.value;
};


// Используем
var fou = new Dummy();
var bas = new Dummy();


bas.setValue(123);


// Тесты
console.log('fou === bas ->', fou === bas); // true
console.log('values:', [fou.getValue(), bas.getValue()]); // [123, 123]


// Bonus level
//baz = Dummy();
//console.info('baz === bar ->', baz === bar, baz.getValue()); // true, 123

