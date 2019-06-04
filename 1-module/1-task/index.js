/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
//let m = prompt('Введите число больше 0', 1);
//let n = prompt('В какую степень возвести', 2);

function pow (m, n) {
    let result = m;
	let count = 1;
	if (m < 0 || isNaN(m)) {
		alert("Введете натуральное целое число")
	} else {		
		  while (count < n) {
		  		result *= m;
		  		count += 1;
  	};  
  }
  alert(result);
};
pow (2, 3);