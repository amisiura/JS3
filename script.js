
/*
 1 �������

 ����������� �����, ������� 1, ���������� �������, ���� ��� �� �� ��� �� �������, ����� ���� � 1.

 ������� �������, n>1 � �������, ���� ��� ������� �� ����� ����� �� 2 �� n-1 ���� �������.

 �������� ���, ������� ������� ��� ������� ����� �� ��������� �� 2 �� 10. ��������� ������ ����: 2,3,5,7.

 P.S. ��� ����� ������ ����� ���������������� ��� ����� ������ ����������.
 */

outer:for (var i = 2; i < 20; i++) {
    for (var j=2;j<i;j++){
        if (i % j == 0) continue outer;
    }
    console.log(i);
}



/*
 2 �������

 � ������� ���� �������� className, ������� �������� ������ �������� � ����, ����������� ��������:

 var obj = {
 className: 'open menu'
 }
 �������� ������� addClass(obj, cls), ������� ��������� � ������ ����� cls, �� ������ ���� ��� ��� ��� ���:

 addClass(obj, 'new'); // obj.className='open menu new'
 addClass(obj, 'open'); // ��� ��������� (����� ��� ����������)
 addClass(obj, 'me'); // obj.className='open menu new me'

 alert( obj.className ); // "open menu new me"
 P.S. ���� ������� �� ������ ��������� ������ ��������.*/



var obj = {
    className: 'open menu'
}
var clsOld = obj.className.split(' ');
//var clsOld = obj.className;

function addClass(obj, cls){
    var cls = prompt("Enter new value");

    if(clsOld.indexOf(cls)>(-1)){
        alert("����� �������� ��� ����");
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
 3 �������

 � ������� ���� �������� className, ������� ������ ������ �������� � ����, ����������� ���������:

 var obj = {
 className: 'open menu'
 };
 �������� ������� removeClass(obj, cls), ������� ������� ����� cls, ���� �� ����:

 removeClass(obj, 'open'); // obj.className='menu'
 removeClass(obj, 'blabla'); // ��� ��������� (��� ������ ������)
 P.S. �������������� ����������. ������� ������ ��������� ������������ ������������ ������ � ������:

 obj = {
 className: 'my menu menu'
 };
 removeClass(obj, 'menu');
 alert( obj.className ); // 'my'
 ������ �������� ����� ������� �������������� �� ������.
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
 4 �������

 �������� ���, �������:

 ����������� �� ������� �������� ��� ������ prompt � ��������� �� � �������. ����������� ����, ��� ������ ���������� ����� ������ ������, �� ����� ��� ����� �������. ��� ���� ���� 0 �� ������ ����������� ����, ��� ����������� �����. ������� ����� ���� �������� ������� ����� ���� ���������.
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
 5 �������

 �������� ��� ������� �������� �� ������������ �������� x (����� �������� ����� prompt) � ������� �������� ��������� �������
 */

x=+prompt("Enter X");

decision=5*Math.pow(x,3)-5*x*(Math.pow(x,2)+4)

alert(decision);


/*
 6 �������

 ������������������ ����� ��������� ����������� �� ������� ������� F(n) = F(n-1) + F(n-2). � ��� ������ ��������� ����� ����������� ��� ����� ���� ����������. ������ ��� ����� ����� 1 � 1.

 �������� ������� fib(n), ������� ���������� n-� ����� ���������.

 ��������:


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
 7 �������

 �������� �������, ������� ��������� �� ���� ������ � ���������� �� ���������� ���� �� ����� �� ��������� 20 ��������. ���� ������ ������ 20, �� �������� ������ � ��������� � ����� ������ '...'*/


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
 8 �������
������� ��� ������� ������� ���������� ������� �������� ������ ���� �����.

 ��������:*/

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