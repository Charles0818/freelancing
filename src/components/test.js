var myFunction = (number) => {
	let arr = [];
	let divisors = [2, 3, 5];
	const words = ['yu', 'gi', 'oh']
	for(let i = 1; i <= number; i++) {
		let replacement = '';
		divisors.forEach((value, index) => {
			if(i % value === 0) {
				replacement.length > 0
				? replacement = replacement.concat(`-${words[index]}`)
				: replacement += words[index]
			}
		});
		replacement.length === 0 ? replacement = i : null
		arr = [...arr, replacement]
	}
	return arr
}

console.log(myFunction(10));
