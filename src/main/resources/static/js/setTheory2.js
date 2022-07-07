define(['combinatorics'],function (comb) {


	document.getElementById("calculateButton").addEventListener("click", function(evv){ 
    let arr=new Array()
	let n=Number(document.getElementById("numberOfBallsInput").value)
	let k=Number(document.getElementById("numberOfWithdrawalInput").value)
	
	let selectedSamplingMethod=document.getElementById("samplingMethods").value
	
	/**************************************************************************************************
	    "owor":Ordered without replacement :
        "uwor":Unordered without replacement :
         "owr":Ordered with replacement :
         "uwr":Unordered with replacement :

	*************************************************************************************************/
	

	if(n<k){
		   document.getElementById("listOfAllOutcomesResult").innerHTML='n must be greater than k!'
		   document.getElementById("NumberOfPossibilitiesResult").innerHTML='n must be greater than k!'
	}else{
		switch (selectedSamplingMethod) {
		  case "owor":
			  arr=comb.permutationsKfromN(k,n)
            
		    break;
		  case "uwor":
			  arr=comb.combinationsKfromN(k,n)
			
		    break;
		  case "owr":
			  arr=comb.orderedWithReplacement(k,n)
			
		    break;
		  case "uwr":
			  arr=comb.unorderedWithReplacement(k,n)
			
			 break;
		}
	    document.getElementById("listOfAllOutcomesResult").innerHTML=comb.fromTowDimensionArrayToString(arr)
		document.getElementById("NumberOfPossibilitiesResult").innerHTML= arr.length
	}
	}) 
});
