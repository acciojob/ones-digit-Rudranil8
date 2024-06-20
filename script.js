function onesDigit(n) {
	let a=n.toString();
	let b=a[a.length-1];
	return parseInt(b);
}
const n = prompt("Enter Number:");
alert(onesDigit(n));