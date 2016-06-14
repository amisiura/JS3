
/*
 1 задание

 Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

 Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.

 Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.

 P.S. Код также должен легко модифицироваться для любых других интервалов.
 */

outer:for (var i = 2; i < 20; i++) {
    for (var j=2;j<i;j++){
        if (i % j == 0) continue outer;
    }
    console.log(i);
}



/*
 2 задание

 В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:

 var obj = {
 className: 'open menu'
 }
 Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:

 addClass(obj, 'new'); // obj.className='open menu new'
 addClass(obj, 'open'); // без изменений (класс уже существует)
 addClass(obj, 'me'); // obj.className='open menu new me'

 alert( obj.className ); // "open menu new me"
 P.S. Ваша функция не должна добавлять лишних пробелов.*/



var obj = {
    className: 'open menu'
}
var clsOld = obj.className.split(' ');
//var clsOld = obj.className;

function addClass(obj, cls){
    var cls = prompt("Enter new value");

    if(clsOld.indexOf(cls)>(-1)){
        alert("Такое значение уже есть");
    }

    else{
        clsOld.push(cls);

        obj.className = clsOld.join(' ');
    }

    //console.log(clsOld.splice(3, 0, cls));
    console.log(clsOld);

    //var str = clsOld.join(' ');
}

addClass();


/*
 3 задание

 У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:

 var obj = {
 className: 'open menu'
 };
 Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

 removeClass(obj, 'open'); // obj.className='menu'
 removeClass(obj, 'blabla'); // без изменений (нет такого класса)
 P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:

 obj = {
 className: 'my menu menu'
 };
 removeClass(obj, 'menu');
 alert( obj.className ); // 'my'
 Лишних пробелов после функции образовываться не должно.
*/


function removeClass(obj, cls){

    var obj = {
        className: 'open menu'
    }
    var clsOld = obj.className.split(' ');
    //var clsOld = obj.className;


    var cls = prompt("Enter value you want to remove");

    if(clsOld.indexOf(cls)>(-1)){
        var clsNumber= clsOld.indexOf(cls);
        var rem=clsOld.splice(clsNumber-1,1);
    }

    else{
        alert("Not found");
    }

    obj.className = rem.join(' ');

    alert(obj.className);

}

removeClass();

/*
 4 задание

 Напишите код, который:

 Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве. Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена». При этом ноль 0 не должен заканчивать ввод, это разрешённое число. Выводит сумму всех значений массива когда ввод прекращен.
 */

var val=prompt("Enter number");
var check=isNaN(val);
var sum=+val;
var arr=[];
arr.push(val);

while(!check||!val==null)
{
    val=prompt("Enter number");

    arr.push(val);
    sum += +val;
    var check=isNaN(val);
    if (check||val===null||val=='') break;
    console.log(sum);
    console.log(arr);
}

/*
 5 задание

 Напишите код который принимат от пользователя значение x (можно например через prompt) и выводит значение следующей формулы
 */

x=+prompt("Enter X");

decision=5*Math.pow(x,3)-5*x*(Math.pow(x,2)+4)

alert(decision);


/*
 6 задание

 Последовательность чисел Фибоначчи вычисляется по формуле формулу F(n) = F(n-1) + F(n-2). В ней каждое следующее число вычисляется как сумма двух предыдущих. Первые два числа равны 1 и 1.

 Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.

 Например:


 console.log(fib(3)); //2
 console.log(fib(7)); //13
 console.log(fib(77)); //5527939700884757
 */

n=prompt('Enter number of Fibonacci sequence')
var fib= function(n){

    arr=[1,1];

    for(i=2;i<n;i++)
    {
        arr[i]=arr[i-1]+arr[i-2];
    }
    return arr[n-1];
    fibN=arr[n-1];
    console.log(fibN);
}
fib(n);


/*
 7 задание

 Напишите функцию, которая принимает на вход строку и возвращает ее неизменной если ее длина не превышает 20 символов. Если длинна больше 20, то обрезает строку и добавляет в конец строки '...'*/


var strfunction = function(s) {
    var s = prompt("Enter the string, dude");
    if (s.length<21)
    {
        return s
    }
    else
    {
        s=(s.substring(0,21)+'...')
        return s
    }
    alert(s);

}
strfunction();


/*
 8 задание
Напиште код который выведет сотрудника который выполнил больше всех задач.

 Например:*/

var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

var max=0;
var maxName='';
for (var name in tasksCompleted)
{
    if (max<tasksCompleted[name])
    {
        max=tasksCompleted[name];
    }
    max=tasksCompleted[name];
    maxName = name;
}