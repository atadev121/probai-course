

define(function (require) {
	//console.clear()
	var x = document.getElementsByClassName("small");
	var y = document.getElementsByClassName("meduim");
	var z= document.getElementsByClassName("big");
	var all = [...new Set([...z, ...y])];
	let i=0
	

function compareElement(el1,el2){
		return (  returnRank(el1)-returnRank(el2)   )
		 function returnRank(element){
				let r=-1
					switch (element.className.split(" ")[0]) {
					  case "big":
					    r = 3;
					    break;
					  case "meduim":
					    r = 2;
					    break;
					  case "small":
					     r = 1;
					    break;
					}
				return r
				}
	}
	   
		function returnSub(element){
			let arr=new Array()
			
			try{
				let movingElement
				if(     (element.nextElementSibling == null)    ||   (compareElement(element,element.nextElementSibling)<0)    ||   (element.className.split(" ")[0]==element.nextElementSibling.className.split(" ")[0])    ){
					
					return arr
				}
				else {
					movingElement=element.nextElementSibling
				//	console.log("blank"+movingElement.innerHTML)
				}
				arr.push(movingElement)
				console.log("ME:"+movingElement.nextElementSibling.className.split(" ")[0]+";element:"+element.className.split(" ")[0])
				console.log("compare(me,element:"+compareElement(movingElement.nextElementSibling,element))
					while(  (movingElement.nextElementSibling !== null)  &&  (compareElement(element,movingElement.nextElementSibling)>0) ){
						movingElement=movingElement.nextElementSibling	
					//	alert("inside loop"+movingElement.innerHTML)
						arr.push(movingElement)
					}
			}
			catch(err){
				console.log(err.message+",on element:")
			}
			return arr
	}
	for (let i=0;i<all.length;i++)	{
	//	console.log(all[i].innerHTML)
	}

	document.getElementById("side").addEventListener("click", function(evv){ 
	let element=evv.target
			let arrr=returnSub(element)
			
		if(!all.includes(evv.target)   || arrr.length==0){
			return
		}
			let j=0
			while(j<arrr.length){
				 if (arrr[j].style.display === "none") {
					 arrr[j].style.display = "block";

					  } else {
						  arrr[j].style.display = "none";
					  }
				j++
			}
			
			for(let i=0;i<arrr.length;i++){
				
				if(  compareElement(element,arrr[i])  >1   ){
					console.log("hh")
					 arrr[i].style.display = "none";
				}
			}
		
	})

});