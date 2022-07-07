define({
	
/************This function return a head 'H' or a tail 'T' with probability of  Head =p************/
  tossAcoinWithProbabilityOfSuccessP: function(p) {
	
		return(Math.random() < p) ? 'H' : 'T';
		
	},
	
 tossAcoinWithProbabilityPnTimes:function(n,p){
	let arr=new Array();
	let le=0
	for(i=0;i<n;i++){
		arr.push(this.tossAcoinWithProbabilityOfSuccessP(p))
	}
	for(i=0;i<n;i++){
		if(arr[i]=="H"){ 
			le++
			}
	}
	arr.push(le)
	return arr
},


	   
	
 getResultOfKtrials:function(k,n,p){
		let arr
		let arrr=new Array()
	
		let j=0
		for (j=0;j<k;j++){
			 arr=this.tossAcoinWithProbabilityPnTimes(n,p)
		//	 console.log(arr[arr.length-1])
			 arrr.push(arr[arr.length-1])
		}
		return arrr
	}

});
