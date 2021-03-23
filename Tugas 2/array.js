console.log("1. Array dengan Range!");
function range(startnum, finishnum) {
	var range = [];
	for (var i = startnum; i <= finishnum; i++) {
		range.push(i);
	}
	for (var i = startnum; i >= finishnum; i--) {
		range.push(i);
	}
	for (var u = finishnum; u == undefined; u++) {
		range.push(-1);
	}
	return range
}
console.log(range(1, 10))
console.log(range(1))
console.log(range(11, 18))
console.log(range(54, 50))
console.log(range())

console.log("\n2. Array dengan Range with Step!");
function rangewithstep(startnum, finishnum, step) {
	var rangewithstep = [];
	if (startnum < finishnum) {
		for (i = startnum; i <= finishnum; i += step) {
			rangewithstep.push(i)
		}
	}
	else if (startnum > finishnum) {
		for (j = startnum; j >= finishnum; j -= step) {
			rangewithstep.push(j)
		}
	}
	else if (startnum == 0 && finishnum == 0) {
		rangewithstep.push(-1)
	} return rangewithstep;
}

console.log(rangewithstep(1, 10, 2))
console.log(rangewithstep(11, 23, 3))
console.log(rangewithstep(5, 2, 1))
console.log(rangewithstep(29, 2, 4))
console.log(rangewithstep(1, 5, 5))
console.log(rangewithstep(100, 120, 5))

console.log("\n3. Array dengan Sum of Range!");
function sum(startnum, finishnum, step) {
	var sum1 = [];
	if (startnum == null && finishnum == null && step == null) {
		sum1.push(0);
		var sum = sum1[0];
	} else if (startnum < finishnum && step == null) {
		for (var i = startnum; i <= finishnum; i++) {
			sum1.push(i);
		}
		var sum = sum1.reduce((startnum, finishnum) => { return startnum + finishnum; }, 0)
	}
	else if (startnum > finishnum && step == null) {
		for (var j = startnum; j >= finishnum; j--) {
			sum1.push(j);
		}
		var sum = sum1.reduce((startnum, finishnum) => { return startnum + finishnum; }, 0)
	}
	else if (startnum < finishnum) {
		for (var k = startnum; k <= finishnum; k += step) {
			sum1.push(k);
		}
		var sum = sum1.reduce((startnum, finishnum) => { return startnum + finishnum; }, 0)
	}
	else if (startnum > finishnum) {
		for (var l = startnum; l >= finishnum; l -= step) {
			sum1.push(l);
		}
		var sum = sum1.reduce((startnum, finishnum) => { return startnum + finishnum; }, 0)
	}
	else if (finishnum == null && step == null) {
		sum1.push(1);
		var sum = sum1.reduce((startnum, finishnum) => { return startnum + finishnum; }, 0)
	}
	return sum;
}
console.log(sum(1, 10));
console.log(sum(5, 50, 2));
console.log(sum(15, 10));
console.log(sum(20, 10, 2));
console.log(sum(1));
console.log(sum());

console.log("\n4. Membuat Array Multidimensi!");
var input = [
	["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
	["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
	["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
	["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
	["0005", "Udin Sedunia", "Rusia", "01/02/2003", "Ngawarnet"]
]
console.log("Nomor id: " + input[0][0] + "\nNama: " + input[0][1] + "\nTTl: " + input[0][2] + ", " + input[0][3] + "\nHobby: " + input[0][4]);
console.log("\nNomor id: " + input[1][0] + "\nNama: " + input[1][1] + "\nTTl: " + input[1][2] + ", " + input[1][3] + "\nHobby: " + input[1][4]);
console.log("\nNomor id: " + input[2][0] + "\nNama: " + input[2][1] + "\nTTl: " + input[2][2] + ", " + input[2][3] + "\nHobby: " + input[2][4]);
console.log("\nNomor id: " + input[3][0] + "\nNama: " + input[3][1] + "\nTTl: " + input[3][2] + ", " + input[3][3] + "\nHobby: " + input[3][4]);
console.log("\nNomor id: " + input[4][0] + "\nNama: " + input[4][1] + "\nTTl: " + input[4][2] + ", " + input[4][3] + "\nHobby: " + input[4][4]);

console.log("\n5. Membuat Array Pembalikan Kata!");

function balikkata(str) {
	var stringawal = str;
	var stringbalik = '';
	for (i = str.length - 1; i >= 0; i--) {
		stringbalik = stringbalik + stringawal[i];
	}
	return stringbalik;
}
console.log(balikkata('Kasur Rusak'));
console.log(balikkata('Informatika'));
console.log(balikkata('Haji Ijah'));
console.log(balikkata('RaceCar'));
console.log(balikkata('I am Humanikers'));

console.log("\n6. Membuat Metode Array!");
var datahandling2 = ["0001", "Roman Alamsyah Elsharawy", "Bandar Lampung", "21/5/1989", "Membaca"];
var data1 = datahandling2[0]
var data2 = datahandling2[1]
var data3 = datahandling2[2]
var data4 = datahandling2[3]
var data5 = ('SMA Internasional Metro')
var alamat = data3.split(' ')
alamat.unshift('Provinsi')
var newalamat = alamat.join(" ")
var output = (data1 + "," + data2 + "," + newalamat + "," + data4 + ",Pria," + data5)
var newoutput = output.split(",")
console.log(newoutput)
var tanggal = data4.split('/')
var newtanggal = tanggal.join("-")
var bulan = tanggal[1] = 5
switch (bulan) {
	case 1: { console.log('Januari'); break; }
	case 2: { console.log('Februari'); break; }
	case 3: { console.log('Maret'); break; }
	case 4: { console.log('April'); break; }
	case 5: { console.log('Mei'); break; }
	case 6: { console.log('Juni'); break; }
	case 7: { console.log('Juli'); break; }
	case 8: { console.log('Agustus'); break; }
	case 9: { console.log('September'); break; }
	case 10: { console.log('Oktober'); break; }
	case 11: { console.log('November'); break; }
	case 12: { console.log('Desember'); break; }
	default: { console.log('Tanggal tidak tersedia'); break; }
}
var numbers = tanggal
numbers.sort()
var nama = data2.split(' ')
nama.pop()
var newnama = nama.join(" ")
console.log(numbers)
console.log(newtanggal)
console.log(newnama)
