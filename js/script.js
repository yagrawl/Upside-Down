
function setup() {
	const main_space = document.getElementById('main-space');
	for(let i = 1; i <= 26; i++) {
		let p = document.createElement('p');
		p.className = 'letter';
		p.id = String.fromCharCode(i+64);
		p.innerHTML = String.fromCharCode(i+64);
		if(i === 9 || i === 18) {
			let brk = document.createElement('br');
			main_space.appendChild(brk);
		}
		main_space.appendChild(p);
	}
}

var i = 0;                     

function main() {
	let word = document.getElementById("message").value;
   	word = word.toUpperCase(); 
   	setTimeout(function () {  
   		
   		if(i !== 0) {
   			let prev_letter = document.getElementById(word[i - 1]);
   			prev_letter.className = "letter";
   		}

   		if(i !== word.length) {
   			let curr_letter = document.getElementById(word[i]);
   			curr_letter.className = "letter-active";
   		}

    	i++;    
    	if (i <= word.length) {          
    		main();     
    	}                       
   	}, 1000);
}