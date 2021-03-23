console.log("1. Membuat Array to Object");
function arraytoobject(arr) {
	var arr = [
		["Abduh", "Muhamad", "male", 1992],
		["Ahmad", "Taufik", "male", 1985]
	]
	var people = [
		["Bruce", "Banner", "male", 1975],
		["Natasha", "Romanoff", "female"]
	]
	var people2 = [
		["Tony", "Stark", "male", 1980],
		["Pepper", "Pots", "female", 2023]
	]
	var tampungarr = {}
	var tampungpeople = {}
	var tampungpeople2 = {}

	var now = new Date()
	var thisYear = now.getFullYear()

	console.log('Contoh :')
	for (var a = 0; a < 2; a++) {
		tampungarr.firstName = arr[a][0]
		tampungarr.lastName = arr[a][1]
		tampungarr.gender = arr[a][2]
		tampungarr.age = thisYear - arr[a][3]
		console.log(a + 1 + '.' + ' ' + tampungarr.firstName + ' ' + tampungarr.lastName + ': ' + '{ ' + '\nfirstName: ' + '"' + tampungarr.firstName + '"' + ',\n' + 'lastName: ' + '"' + tampungarr.lastName + '"' + ',\n' + 'gender: ' + '"' + tampungarr.gender + '"' + ',\n' + 'age: ' + tampungarr.age + '\n}');
	}
	console.log('\n- People :')
	for (var b = 0; b < 2; b++) {
		tampungpeople.firstName = people[b][0]
		tampungpeople.lastName = people[b][1]
		tampungpeople.gender = people[b][2]
		tampungpeople.age = thisYear - people[b][3]
		if (tampungpeople.age = thisYear - people[b][3]) {
			console.log(b + 1 + '.' + ' ' + tampungpeople.firstName + ' ' + tampungpeople.lastName + ': ' + '{ ' + '\nfirstName: ' + '"' + tampungpeople.firstName + '"' + ',\n' + 'lastName: ' + '"' + tampungpeople.lastName + '"' + ',\n' + 'gender: ' + '"' + tampungpeople.gender + '"' + ',\n' + 'age: ' + tampungpeople.age + '\n}');
		} else {
			console.log(b + 1 + '.' + ' ' + tampungpeople.firstName + ' ' + tampungpeople.lastName + ': ' + '{ ' + '\nfirstName: ' + '"' + tampungpeople.firstName + '"' + ',\n' + 'lastName: ' + '"' + tampungpeople.lastName + '"' + ',\n' + 'gender: ' + '"' + tampungpeople.gender + '"' + ',\n' + 'age: ' + '"Invalid Birth Year"' + '}');
		}
	}
	console.log('\n- People2 :')
	for (var c = 0; c < 2; c++) {
		tampungpeople2.firstName = people2[c][0]
		tampungpeople2.lastName = people2[c][1]
		tampungpeople2.gender = people2[c][2]
		if (tampungpeople2.age = thisYear < people2[c][3]) {
			console.log(c + 1 + '.' + ' ' + tampungpeople2.firstName + ' ' + tampungpeople2.lastName + ': ' + '{ ' + '\nfirstName: ' + '"' + tampungpeople2.firstName + '"' + ',\n' + 'lastName: ' + '"' + tampungpeople2.lastName + '"' + ',\n' + 'gender: ' + '"' + tampungpeople2.gender + '"' + ',\n' + 'age: ' + '"Invalid Birth Year"' + '}');
		} else {
			tampungpeople2.age = thisYear - people2[c][3]
			console.log(c + 1 + '.' + ' ' + tampungpeople2.firstName + ' ' + tampungpeople2.lastName + ': ' + '{ ' + '\nfirstName: ' + '"' + tampungpeople2.firstName + '"' + ',\n' + 'lastName: ' + '"' + tampungpeople2.lastName + '"' + ',\n' + 'gender: ' + '"' + tampungpeople2.gender + '"' + ',\n' + 'age: ' + tampungpeople2.age + '}');
		}
	}
	return arraytoobject;
}
console.log(arraytoobject());

console.log("\n2. Membuat Array to Object (Shopping Time)");
function shoppingTime(memberId, money) {
	var shopping = {}
	var barang = [
		['Sepatu Brand Stacattu', 1500000],
		['Baju Brand Zoro', 500000],
		['Baju Brand H&N', 250000],
		['Sweater Brand Uniklooh', 175000],
		['Casing Brand Handphone', 50000]
	]

	if (memberId === undefined && money === undefined) {
		return 'Mohon maaf, toko X hanya berlaku untuk member saja'
	}

	if (memberId === '') {
		return "Mohon maaf, toko X hanya berlaku untuk member saja"
	} else {
		shopping.memberId = memberId
	}

	if (money <= 50000) {
		return 'Mohon maaf, uang anda tidak cukup'
	} else {
		shopping.money = money
	}

	var jumlahHargaBarang = 0
	shopping.listPurchased = []
	for (i = 0; i < barang.length; i++) {

		if (money > barang[i][1]) {
			shopping.listPurchased.push(barang[i][0])
			jumlahHargaBarang += barang[i][1]
		}
		shopping.changeMoney = money - jumlahHargaBarang
	}
	return shopping
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());

console.log("\n3. Membuat Array to Object (Naik Angkot)");
function naikAngkot(arrPenumpang) {
	rute = ['A', 'B', 'C', 'D', 'E', 'F'];
	var angkot = [{}, {}];
	var i = 0;
	var asal = '';
	var tujuan = '';
	for (i; i < arrPenumpang.length; i++) {
		var j = 0;
		for (j; j < arrPenumpang[i].length; j++) {
			switch (j) {
				case 0: {
					angkot[i].penumpang = arrPenumpang[i][j];
					break;
				} case 1: {
					angkot[i].naikDari = arrPenumpang[i][j];
					angkot[i].tujuan = arrPenumpang[i][j + 1];
					break;
				} case 2: {
					asal = arrPenumpang[i][j - 1];
					tujuan = arrPenumpang[i][j];
					var jarak = 0;
					for (var k = 0; k < rute.length; k++) {
						if (rute[k] === asal) {
							for (var l = k + 1; l < rute.length; l++) {
								jarak += 1;
								if (rute[l] === tujuan) {
									var bayar = jarak * 2000;
									angkot[i].bayar = bayar;
								}
							}
						}
					}
					break;
				}
			}
		}
	}
	return angkot;
}
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));

