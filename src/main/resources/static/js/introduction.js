define(['statistics','chartBar','histogramme'],function (re,cb,his) {
	
     	document.getElementById("numberOfHeadsButton").addEventListener("click", function(evv){ 
		let k=document.getElementById("numberOfTrialsInput").value
		let p=document.getElementById("probabilityOfHavingHeads").value
		let n=document.getElementById("numberOfTosses").value
		document.getElementById("numberOfHeadsInktrials").innerHTML="{"
		document.getElementById("numberOfTrials").innerHTML=k
		let arrr=re.getResultOfKtrials(k,n,p)
		let meanValueOfNumberOfHeads=0
		console.log("arrr[0]:"+arrr[0])
		for (j=0;j<k-1;j++){
			meanValueOfNumberOfHeads=meanValueOfNumberOfHeads+arrr[j]
			document.getElementById("numberOfHeadsInktrials").append(arrr[j]+",")
			if(j % 40 == 39){
				document.getElementById("numberOfHeadsInktrials").append("\n")
			}
		}
		document.getElementById("numberOfHeadsInktrials").append(arrr[arrr.length-1]+"}")
		document.getElementById("meanValueOfNumberOfHeads").innerHTML=meanValueOfNumberOfHeads/k
		arrrr=new Array()
		arrrr[0]=his(arrr)[0]
		arrrr[1]=his(arrr)[1]
		arrrr[2]=new Array()
		arrrr[2][0]="barChart"
			arrrr[2][1]="bar"
		//cb(his(arrr))
		cb(arrrr)
	})
	
	
	document.getElementById("tosseButton").addEventListener("click", function(evv){ 
		console.log("rrrr")
		let p=document.getElementById("probabilityOfHavingHeads").value
		let n=document.getElementById("numberOfTosses").value
		//alert("p:"+p)
		let arr=re.tossAcoinWithProbabilityPnTimes(n,p)
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
		document.getElementById("nTimesPid").innerHTML=((n*p-arr[arr.length-1])*100/(n*p)).toFixed(2)+"%"
		
	})
	
	

	
	let arrt=[document.getElementById("refreshButton"), document.getElementById("numberOfHeadsButton")]
	
	arrt.forEach(item => {
		
		item.addEventListener('click', event => {
    	
    	let k=document.getElementById("numberOfTrialsInput").value
		let p=document.getElementById("probabilityOfHavingHeads").value
		let n=document.getElementById("numberOfTosses").value
		document.getElementById("numberOfHeadsInktrials").innerHTML="{"
		document.getElementById("numberOfTrials").innerHTML=k
		document.getElementById("numberOfTrialsInsideChart").innerHTML=k
		document.getElementById("probabilityInsideChart").innerHTML=p
		document.getElementById("nubmberOfTossesInsideChart").innerHTML=n
		document.getElementById("nTimespInsideChart").innerHTML=n*p
		
	
		
		let arrr=re.getResultOfKtrials(k,n,p)
		
		let meanValueOfNumberOfHeads=0

		for (j=0;j<k-1;j++){
			meanValueOfNumberOfHeads=meanValueOfNumberOfHeads+arrr[j]
			document.getElementById("numberOfHeadsInktrials").append(arrr[j]+",")
			if(j % 40 == 39){
				document.getElementById("numberOfHeadsInktrials").append("\n")
			}
		}
    	meanValueOfNumberOfHeads=meanValueOfNumberOfHeads/k
    	document.getElementById("meanValueInsideChart").innerHTML=meanValueOfNumberOfHeads
		document.getElementById("numberOfHeadsInktrials").append(arrr[arrr.length-1]+"}")
		document.getElementById("meanValueOfNumberOfHeads").innerHTML=meanValueOfNumberOfHeads
		
		arrrr=new Array()
		arrrr[0]=his(arrr)[0]
		arrrr[1]=his(arrr)[1]
    	arrrr[2]=new Array()
    	arrrr[2][0]="barChart"
			arrrr[2][1]="bar"
		cb(arrrr)
  })
})

});
