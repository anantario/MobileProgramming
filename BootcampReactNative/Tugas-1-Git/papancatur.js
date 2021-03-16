console.log('Papan Catur\n');
var b = 8;
var c = 4;
var hitam = "#";
var putih = " ";
for (a = 1; a <= b; a++) {
    var papan = (hitam + putih).repeat(c);
    console.log(papan);
}
