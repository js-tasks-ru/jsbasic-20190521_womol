/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
//let m = prompt('Введите число больше 0', 1);
//let n = prompt('В какую степень возвести', 2);

function pow (x, n) {
    let result = x;
	let count = 1;
	if (x > 0 && !isNaN(x)) 
	{
		while (count < n) 
		{
		  		result *= x;
		  		count += 1;
		};
		alert(result);
	} 
	else 
	{		
		alert("Введете натуральное целое число");  
  	};  
  };
pow (2, 3);
