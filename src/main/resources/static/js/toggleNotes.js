/***************************this function is related to the book icon************************************/
/*
 * If the book icon is clicked (while the book is closed) the text between tooltop is displayed and the book is open
 *  If the book icon is clicked (while the book is open) the text between tooltop is hidden and the book is closed
 */
define(function () {
	var x = [...document.querySelectorAll(".tooltip")];
	//console.log(x)
	
	document.body.addEventListener("click", function(evv){ 
		let el=evv.target
	
		if(x.includes(el)){
		
			 var ce = el.nextElementSibling;
		
	         var style = getComputedStyle(ce);
			
			 if(style.display=="none"){
				 ce.style.display="inline"
					 el.innerHTML = "&#128214;"
			}else if(style.display=="inline"){
				ce.style.display="none"
					 el.innerHTML="&#128216;"
			}
		}
	})
})