define(['tossAcoinWithProbabilityOfSuccessP'], function (tP) {

	  return function (n,p) {
		  let arr=new Array();
			let le=0
			for(i=0;i<n;i++){
				arr.push(tP(p))
			}
			for(i=0;i<n;i++){
			
				if(arr[i]=="H"){ 
					le++
					}
			}
			arr.push(le)
			return arr
	    }
})






