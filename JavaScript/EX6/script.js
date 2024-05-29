/*var mochila = ['faca', 'oculos', 'relogio']

console.log(mochila)

for(var x = 0; x < mochila.length; x++){
    document.write(mochila[x] + '<br>')
}*/

var x = 1;
var y = 1;

while (x <= 10) {
    y = 1;
    while (y <= 10) {
        console.log(x + ' x ' + y + ' = ' + x * y);
        document.write(x + ' x ' + y + ' = ' + x * y);
        y++;
    }
    console.log("\n");
    document.write("<hr/>");
    x++
}