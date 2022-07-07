define({
	
		
	/*==================================================================================*/
	/*==================================================================================*/
	/*                                                            function: orderedWithReplacement                                                                                          */
	/*==================================================================================*/
	/*==================================================================================*/
	
	/*
	 * This function gives the all k possibilities while choosing k elements from from n elements, with replacement, with order
	 */
	orderedWithReplacement:function(k,n){
  
		let per=new Array();	
		
		for(let i=1;i<n+1;i++){
			let ml=new Array()
			ml.push("b"+i)
			per.push(ml)
		}	
		
		console.log(per)
		for(let i=2;i<k+1;i++){
			let pro=per.slice()
	
			per=new Array()
			for(let j=0;j<pro.length;j++){
				
				for(let d=1;d<n+1;d++){
					let pp=new Array()
						pp=pro[j].slice()
						pp.push( ("b")+d)
						per.push(pp)
				}	
			}	
		}
	
		return per		
	},	
	
	/******************************************************End Function:orderedWithReplacement ******************************************/	
	
	
	
	
	
	
	/*==================================================================================*/
	/*==================================================================================*/
	/*                                                                   function: combinationsKfromN                                                                                          */
	/*==================================================================================*/
	/*==================================================================================*/
	
	/*
	 * This function gives all k combinations from n elements, the algorithm used in this function is the following:
	 * declare an array where we put the final result 'result'
	 * declare another array 'comb' which is equal to the array of all permutation (k from n)
	 * get the last element from com sort it by the function (sortBseries) and put is in result
	 * do a for loop to iterate over all elements in comb, get element last element, sort it, check if this element is in result 
	 * (by function arrayAlreadyHasArray) if it is not  included push it in 'result' 
	 * 
	 */
	 combinationsKfromN:function(k,n){
		 let comb=new Array()
		 let result=new Array() // result will be returned in this array
		 
		 		 
		 /******************************************* Function:arrayAlreadyHasArray****************************************/	
		 /*
		  * Check if testArr is in arr
		  */
		 function arrayAlreadyHasArray(arr, testArr){
		        for(let i = 0; i<arr.length; i++){
		            let checker = []
		            for(let j = 0; j<arr[i].length; j++){
		                if(arr[i][j] === testArr[j]){
		                    checker.push(true)
		                } else {
		                    checker.push(false)
		                }
		            }
		            if (checker.every(check => check === true)){
		                return true
		            }
		        }
		        return false
		    }
		 
		  /**********************************End Function:arrayAlreadyHasArray*****************************************/		 
		 	
         /******************************************* Function:sortBseries************************************************/	
		/*
		 * This function takes as parameter a b serie like [b3,b5,b1,b2] and returns this serie in order like [b1,b2,b3,b5]
		 * it first start by turning [b3,b5,b1,b2] to [3,5,1,2]
		 * then sorting  [3,5,1,2] (turning it to [1,2,3,5])
		 * then turning  [1,2,3,5] to [b1,b2,b3,b5]
		 */
		
		 function sortBseries(bSerie){
			
			 let result=new Array()
			 let finalResult=new Array()
			 let strToNumber

				let len=bSerie.length
		for (let i=0;i<len;i++){
			
					 strToNumber=bSerie.pop()
					 strToNumber=strToNumber.replace(/b/g,'')
					 
					 strToNumber= parseInt(strToNumber, 10)
				
					 result.push(strToNumber)
					 
					 
		}
	
			    result.sort((a, b) => a - b)
			     len=result.length
		       let helpElement
			    for (let i=0;i<len;i++){
			    	helpElement=result.pop()
			    	helpElement='b'+helpElement
			    	finalResult.push(helpElement)
		        }
		    
	     	
			return finalResult
		 }
		 
  /**********************************End Function:sortBseries***************************************/	
		
		comb=this.permutationsKfromN(k,n)
			 let element
			
			len=comb.length
		 
		for (let i=0;i<len;i++){

			 element=comb.pop()
	
			 element=sortBseries(element)
				 
			 if (!arrayAlreadyHasArray(result, element)){
				 result.push(element)
			 }

		}

		return result
	},
	/***********************************************End Function:combinationsKfromN*******************************************/	
	/*******************************************************************************************************************************/
	/*compareTwoCombinations:function(arr1,arr2){
		let result=true
		for (let i=0;i<arr1.length;i++){
			if(!arr2.includes(arr1[i])){
				result=false
			}
		}
		return result
	},*/
	
/*	numberOfPermutationsKfromN:function(k,n){
		if(k>n){
			return 0
		}
		let nn=1
		let kk=1
	//console.log("n:="+n+",k="+k)
		for (let i=2;i<(n+1);i++){
			nn=nn*i
	//		console.log("i:"+i+"nn:"+nn)
		}
		
		for (let j=2;j<(n-k+1);j++){
			kk=kk*j
		}	
		//console.log("n!:"+nn+",(n-k)!:"+kk)
		return nn/kk
	},*/
	
	
	fromOneDimensionArrayToString:function(arra){
		
			let str="["
			for(let j=0;j<arra.length;j++){
				str=str+arra[j]
				if(j<arra.length-1){
					str=str+","
				}
	     	}
			return str
	},
	/*==================================================================================*/
	/*==================================================================================*/
	/*                                                            function: fromSequenceWithNumberedBletterToArrayOfNumbers                                                                      */
	/*==================================================================================*/
	/*==================================================================================*/
	/**************************************   "-1-23-4-5"==>[1,23,4,5]    **************************************/
	fromSequenceWithNumberedBletterToArrayOfNumbers:function(str){

		let numbers=new Array()
		let lengths=new Array()
		let indexes=new Array()
		let movingNumber=''
	    
		for (let i=0;i<str.length;i++){
		          if(str[i]=='-'){
		        	  indexes.push(i+1)
		          }
        	}
		//console.log('indexes:'+indexes)
		
	for(let j=0;j<indexes.length;j++){
			lengths.push(0)
		
		}
		
		for(let j=0;j<indexes.length;j++){
		
		  let strr=str[indexes[j]]
		
			let i
			if ((indexes[j]+1)<str.length){
				i=indexes[j]+1
			}else {
				i=indexes[j]-1
			}

		while((i<str.length) & (str[i]!='-')){
		
				strr=strr.concat(str[i])
				i++
			
			}
		  
		  numbers.push(parseInt(strr, 10))
		}
		
		return numbers
	},
   /******************************************************End Function**********************************************************************/	
	

	
	/*==================================================================================*/
	/*==================================================================================*/
	/*                                                            function: fromCrossCaseNumbersTobSequence                                                                      */
	/*==================================================================================*/
	/*==================================================================================*/
	
	/*
	 This function turns an array:arra (which gives the position of x) into a sequence for example, for k=4 and n=7
	 1/ Example1 : [1,2,5,9]==>[b1,b1,b3,b6]   
	 2/ Example2 : [2,5,6,8]==>[b2,b4,b4,b5]   
	 3/ lengthh=n+k-1 (10)
	 */
	
	fromCrossCaseNumbersTobSequence:function(arra,lengthh){
	
		let strrr=new Array()  /* we'll put the returned string in strrr **/
		
		/*************************function alpha truns an array of x positions to a complete x- notation**********************/
		/*********************************Example 1: [2,5,6,8]==> [-,x,-,-,x,x,-,x,-,-]  *******************************************/
		/*********************************Example 2: [1,2,5,9]==> [x,x,-,-,x,-,-,-,x,-]  *******************************************/
		
		function alpha(arra){
	
			let str=new Array()    /* we'll put the returned string in str */
	          	for(let j=0;j<lengthh;j++){
                      str[j]='-'
	        	}
	        
	    	  for (let i=0;i<str.length;i++){
	    		
	    	//	  console.log('arra.includes('+i+')='+arra.includes(i))
			    if(arra.includes(i+1)){
			    
			    		str[i]='x'
			    }
	    	 }
	     return str
		
		}
		/*************************************************end alpha function***************************************************************/	
		let xMinusNotation=alpha(arra) //for example [-,x,-,-,x,x,-,x,-,-] 
	    console.log('xMinusNotation')
		 console.log(xMinusNotation)
	    //	let xArray=new Array()// if xMinusNotation=[-,x,-,-,x,x,-,x,-,-], xArray=[2,5,6,8]
		
		let minusArray=new Array()// if xMinusNotation=[-,x,-,-,x,x,-,x,-,-], minusArray=[1,3,4,7,9,10]
         
		for (let i=0;i<xMinusNotation.length;i++){  // populate minusArray
			if(xMinusNotation[i]=='-'){
				minusArray.push(i+1)
			}
		}

		console.log('minusArray')
		console.log(minusArray)
		
		for (let i=0;i<minusArray[0]-1;i++){  //calculate number of b1 aside (to avoid limit problems)
		       strrr.push('b1')
	    }
		
		for (let h=1;h<minusArray.length;h++){  // for loop to calculate bi (i from 2 to k-1)
			for (let r=0;r<(minusArray[h]-minusArray[h-1]-1);r++){
				strrr.push("b"+(h+1))
			}
		}

		for (let i=0;i<lengthh-minusArray[minusArray.length-1];i++){  //calculate number of bk aside (to avoid limit problems)
			strrr.push("b"+(lengthh+1-arra.length))
		    }
		console.log(arra)
		console.log('lengthh:'+lengthh)
console.log(strrr)
			return strrr  
	},
	
	/************************end fromCrossCaseNumbersTobSequence function*******************************************************/
	
	/*==================================================================================*/
	/*==================================================================================*/
	/*                                                            function:fromTowDimensionArrayToString                                                         
	/*==================================================================================*/
	/*==================================================================================*/
	
	fromTowDimensionArrayToString:function(arra){
	
			let str="[["
			for(let i=0;i<arra.length;i++){
				//console.log("fromTowDimensionArrayToString:arra["+i+"]="+arra[i])
				for(let j=0;j<arra[i].length;j++){
					str=str+arra[i][j]
					if(j<arra[i].length-1){
						str=str+","
					}
				}	
				if(i<arra.length-1){
					str=str+"],["
				}
			}
			
			str=str+"]]"
			return str
	},
	
	/***************************************************************permutation k from n***************************************************/
	permutationsKfromN:function(k,n){

		let per=new Array();	
	/*	if (k>n){
			per.push("")
			return per
		}*/
		for(let i=1;i<n+1;i++){
			let ml=new Array()
			ml.push("b"+i)
			per.push(ml)
		}	
		
		for(let i=2;i<k+1;i++){
			let pro=per.slice()
	
			per=new Array()
			for(let j=0;j<pro.length;j++){
				
				for(let d=1;d<n+1;d++){
					let pp=new Array()
						pp=pro[j].slice()
					
					if( !pp.includes(  ("b")+d)){
					
						pp.push( ("b")+d)
						per.push(pp)
						
					}
					
				}	
			}	
		}

		return per		
	},
	
	
	/*==================================================================================*/
	/*==================================================================================*/
	/*                                                            function: unordered with replacement                                                       
	/*==================================================================================*/
	/*==================================================================================*/
	
	
	 /*
	  *The algorithm in this function is based on the algorithm presented in the probabilitycourse web site in § related to unordered 
	  * with replacement
	  * For example if k=4 and n=7 
	  * We begin by choosing a combination (k from n+1-k) which represent the position of x for example [b1,b3,b9,b10] 
	  * Then transform [b1,b3,b9,b10] to [1,3,9,10]
	  * Then transform by function 'fromCrossCaseNumbersTobSequence', [1,3,9,10] to x-x-----xx ,  Then from x-x-----xx to [S1,S2,S7,S7] which is the final result (we mean all those combinations)
	  */

	unorderedWithReplacement:function(k,n){
	
		let result=new Array();       //  the final result is put in result array
		
		 this.fromCrossCaseNumbersTobSequence([4,5,7,10],10)  
		
	let occuren=this.combinationsKfromN(k,n+k-1)	// a value in the matrix occuren represent all cases where the x (or |) mark resides
		
	    
	
	
		for(let j=0;j<occuren.length;j++){
			
			let str=occuren[j].toString()
			let strr=str.replace(/b/g,'-').replace(/,/g,'')
			let ar=this.fromSequenceWithNumberedBletterToArrayOfNumbers(strr)  // example: if strr=''-2-8-4-10"    ar would be [2,8,4,10]
		
          result.push(this.fromCrossCaseNumbersTobSequence(ar,n+k-1))
	    	
		}
		

		return 	result
		
	},


});
