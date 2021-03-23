console.log("1. Membuat Function Teriak Humanika!");
function teriak() {
    console.log("Halo Humanini!");
    return teriak;
}
console.log(teriak());

console.log("2. Membuat Function Perkalian!");
function kalikan() {
    console.log("Hasil Perkalian Angka " + num1 + " x " + num2 + " = " + num1 * num2);
    return kalikan;
}
var num1 = 10;
var num2 = 10;
var hasilkali = kalikan(num1, num2);
console.log(hasilkali);

console.log("3. Membuat Function Introduce!");
function introduce() {
    console.log("Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + address + ", dan saya mempunyai hobby yaitu " + hobby + "!");
    return introduce;
}
var name = "Rio";
var age = 20 * 2;
var address = "Purwakarta City";
var hobby = "madi";
console.log(introduce());

