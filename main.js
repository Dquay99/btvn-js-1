
var n = prompt('nhap n=')
n = parseInt(n)
var f1 = 0;
var f2 = 1;
var f3 = 1;
for( var i = 3 ; i<= n ; i++){
    f1=f2;
    f2=f3;
    f3 = f1 +f2;
}
alert(`so can tim: ${f3}`);