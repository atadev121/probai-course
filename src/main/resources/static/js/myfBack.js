

define(function (require) {
	console.clear() 
	console.log("eeee")
	var x = document.getElementsByClassName("small");
	var y = document.getElementsByClassName("meduim");
	var z= document.getElementsByClassName("big");
	var all = [...new Set([...z, ...y])];
	let i=0
	
function tossAcoinWithProbabilityOfSuccessP(p){
		return(Math.random() < p) ? 'H' : 'T';
	}
	
function tossAcoinWithProbabilityPnTimes(n,p){
	let arr=new Array();
	let le=0
	for(i=0;i<n;i++){
		arr.push(tossAcoinWithProbabilityOfSuccessP(p))
	}
	for(i=0;i<n;i++){
		if(arr[i]=="H"){ 
			le++
			}
	}
	arr.push(le)
	return arr
}


function compareElement(el1,el2){
		return (returnRank(el1)<returnRank(el2))
		 function returnRank(element){
				let r
					switch (element.className) {
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
				if(element.nextElementSibling !== null){
					movingElement=element.nextElementSibling
				}
				arr.push(movingElement)
					while((movingElement.nextElementSibling !== null) && movingElement.nextElementSibling	.className!=element.className && (!compareElement(element,movingElement.nextElementSibling)) ){
						movingElement=movingElement.nextElementSibling	
						arr.push(movingElement)
					}
			}
			catch(err){
				alert(err.message+",on element:"+element.innerHIML)
			}
			return arr
	}
	
/*	document.getElementById("side").addEventListener("click", function(evv){ 
		if(all.includes(evv.target)){
			let arrr=returnSub(evv.target)
			let j=0
			while(j<arrr.length){
				 if (arrr[j].style.display === "none") {
					 arrr[j].style.display = "block";
					  } else {
						  arrr[j].style.display = "none";
					  }
				j++
			}
		}
	})*/
function getResultOfKtrials(k,n,p){
		let arr
		let arrr=new Array()
	
		let j=0
		for (j=0;j<k;j++){
			 arr=tossAcoinWithProbabilityPnTimes(n,p)
		//	 console.log(arr[arr.length-1])
			 arrr.push(arr[arr.length-1])
		}
		return arrr
	}
	
	document.getElementById("numberOfHeadsButton").addEventListener("click", function(evv){ 
		let k=document.getElementById("numberOfTrialsInput").value
		let p=document.getElementById("probabilityOfHavingHeads").value
		let n=document.getElementById("numberOfTosses").value
		document.getElementById("numberOfHeadsInktrials").innerHTML="{"
		document.getElementById("numberOfTrials").innerHTML=k
		let arrr=getResultOfKtrials(k,n,p)
		console.log(arrr[0])
		for (j=0;j<k-1;j++){
			document.getElementById("numberOfHeadsInktrials").append(arrr[j]+",")
			if(j % 40 ==39){
				document.getElementById("numberOfHeadsInktrials").append("\n")
			}
		}
		document.getElementById("numberOfHeadsInktrials").append(arrr[arrr.length-1]+"}")
	})
	
	
	document.getElementById("tosseButton").addEventListener("click", function(evv){ 
		let p=document.getElementById("probabilityOfHavingHeads").value
		let n=document.getElementById("numberOfTosses").value
		
		let arr=tossAcoinWithProbabilityPnTimes(n,p)
		//alert("arr dim:"+arr.length)
		let i=0
		document.getElementById("tossResult").innerHTML=""
		document.getElementById("tossResult").append("{")
		
		for(i=0;i<arr.length-2;i++){
			document.getElementById("tossResult").append(arr[i]+",")
			if(i % 60 ==59){
				document.getElementById("tossResult").append("\n")
			}
		}
		document.getElementById("tossResult").append(arr[arr.length-2]+"}")
		document.getElementById("numberOfHeads").innerHTML=arr[arr.length-1]
		document.getElementById("probabilityOfSuccess").innerHTML=p
		document.getElementById("numberOfTossesN").innerHTML=n
		})


});
