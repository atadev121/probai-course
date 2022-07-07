/**************************************this function is related to the next previous pages icons******************************************/
/*
 * If next page icon is clicked, next page is displayed
 * If previous page icon is clicked, previous page is displayed
 */

define(function () {
	
	/****************************************function:turnLinktoString**********************************************/
	/*
	 * "http://localhost:8080/probabilityCourse/introductionToPan#1_1"==>"introductionToPan"
	 */
	function turnLinktoString(link){
		let index1=link.lastIndexOf("/")+1
		let index2=link.lastIndexOf("#")
		
		return	link.substring(index1,index2)
	}
	/****************************************End function:turnLinktoString**********************************************/
	
	/*************************************event listener click on next Icon**********************************************/
	/*
	 * Select all a element, put them in array href
	 * Iterate through all elements in href until href of current element is the same as current url 
	 * and href of current element is different of href of next element
	 */
	document.getElementById("nextIconId").addEventListener("click", function(evv){ // if nextIcon clicked fire event
	
		
		 let currentURL=window.location.href;
		 let href = document.querySelectorAll('a');
		 
		 let index=0
		 
		// console.log('href[7].href:'+href[7].href)
	    // console.log('turnLinktoString(href[7].href):'+turnLinktoString(href[7].href))
		 
		 for(let i=0;i<href.length-1;i++){
			 console.log('(turnLinktoString(href['+i+'].href)==turnLinktoString(currentURL)):'+(turnLinktoString(href[i].href)==turnLinktoString(currentURL)))
			 console.log('turnLinktoString(href['+(i+1)+'].href)!=turnLinktoString(href['+i+'].href):'+(turnLinktoString(href[i+1].href)!=turnLinktoString(href[i].href)))
			 		 console.log('turnLinktoString(href['+i+'].href):'+turnLinktoString(href[i].href))
			 if((turnLinktoString(href[i].href)==turnLinktoString(currentURL)) & (turnLinktoString(href[i+1].href)!=turnLinktoString(href[i].href))){
				 index=i+1
			 }
			 console.log('index:'+index)
		 }
		 console.log('href[index].href:'+href[index].href)
		 console.log('currentURL:'+currentURL)
		 window.location.href=href[index].href
})
	
	

	document.getElementById("previousIconId").addEventListener("click", function(evv){ // if previoustIcon clicked fire event
	
		
		 let currentURL=window.location.href;
		 let href = document.querySelectorAll('a');
		 
		 let i=0
		 
		  console.log('turnLinktoString(currentURL):'+turnLinktoString(currentURL))
		 
		while (turnLinktoString(href[i].href)!=turnLinktoString(currentURL) ){
	 		 console.log('turnLinktoString(href['+i+'].href):'+turnLinktoString(href[i].href))
			
			 
		i++
			
		 }
	
		 window.location.href=href[i-1].href
})
})