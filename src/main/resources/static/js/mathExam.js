
define(['mathjsm','chartBar'],function (cm,cb) {// mathjsm is the alias (in config.js) for  or mathjs which is a javascript library that contains a flexible expression parser
	window.onload = function() {
		let functionNumber=0
	// all cancel elements for function input
	    let graphTypes=new Array()
		let labels=new Array()
		let borderColors=new Array()
		let i=0
		for(i=0;i<9;i++){
			graphTypes.push("bar")
			labels.push("label"+i)
			borderColors.push("#ff0000")
		}
		
		const array=new Array()  //Labels=array[0] data=array[1]
							
		            let fill=false
				    let maxY=100
					let minY=20
					let displayLegend=true
					let legendPosition="bottom"
					let displayTitle=true
					let graphTitle=""
					let titleFontSize=15
		
					let x0=0
					let xmax=20
					let step=1
		/**********************build an array of x values and y values starting **********************/
		 
	     /**************from the f expression  and x0 and xAxisLength entered by the user ********/
		function buildArray(stringFunction){

	        array.splice(0,array.length)
			const parser = cm.parser()
		//	console.log("stringFunction before="+stringFunction)
			
			if(stringFunction=="f(x)="){
				let num=0
				stringFunction="f(x)="+num.toString()
				console.log("stringFunction after="+stringFunction)
			}
	        
			const f = cm.evaluate(stringFunction)
			const array0=new Array()
			const array1=new Array()
			const array2=new Array()
			let x=0
	    	let i=0
		
	    	while(x<xmax){
				x=x0+i*step
				array0.push(Math.round((x+ Number.EPSILON) * 100) / 100)  //Math.round((x+ Number.EPSILON) * 100) / 100
				array1.push(f(x))
				i++
			}

			array2.push("barChartGraph")  //arrt[2][0]  (arrt is the argument in DrawChart function in chartBar.js
			array2.push(graphTypes[0])  //arrt[2][1] 
	//	console.log('graphTypes[0]='+graphTypes[0])
			array2.push(labels[0])  //arrt[2][2]
			//console.log('labels[0]='+labels[0])
			array2.push(fill)  //arrt[2][3]
			array2.push(maxY)  //arrt[2][4]
			array2.push(minY)  //arrt[2][5]
			array2.push(displayLegend)  //arrt[2][6]
			array2.push(legendPosition)  //arrt[2][7]
			array2.push(displayTitle)  //arrt[2][8]
			array2.push(graphTitle)  //arrt[2][9]
			array2.push(titleFontSize)  //arrt[2][10]
			array2.push(borderColors[0]) ////arrt[2][11]
				
		    array.push(array0)   //
			array.push(array1)
			array.push(array2)

		}
	  
	    /****************add  data set with values from a given function expression******************/
		function addDataSet(functionExp,newLabel,newType,newBorderCoulour){
			const parser = cm.parser()
		
			const f = cm.evaluate("f(x)="+functionExp)
			const newData=new Array()
			
			let x=0
	    	let i=0
		
	    	while(x<xmax){
				x=x0+i*step
				newData.push(f(x))
				i++
			}
	
		window.bar.data.datasets.push({
				  label: newLabel,
			      backgroundColor: "#1e95cd", 
				  type: newType,
				  data: newData,
				  fill: false,
			      borderColor: newBorderCoulour,
				});
				
			window.bar.update();
		}
	    
	
/*******************suppress function input when cancel icon is clicked for function number i***************/                         
		 function hideInputWhenCancelIconIsClicked(i){
			
			document.getElementById("cancelByFunctionGraph"+i).addEventListener("click", function(evv){ 
			document.getElementById("enterFunctionInput"+i).value=""
			document.getElementById("enterFunctionsBox").removeChild(document.getElementById("enterFunctionInput"+i))
			document.getElementById("enterFunctionsBox").removeChild(document.getElementById("settingsByFunctionGraph"+i))
			document.getElementById("enterFunctionsBox").removeChild(document.getElementById("cancelByFunctionGraph"+i))
			
			  })
		 }
		  
/*********************************Create second function input element******************************/
		 
	    var input = document.createElement("input");
		var span2 = document.createElement("span2");
		var span = document.createElement("span");
		
		document.getElementById("enterFunctionsBox").appendChild(input);
		document.getElementById("enterFunctionsBox").appendChild(span2);
		document.getElementById("enterFunctionsBox").appendChild(span);
	    
		input.id="enterFunctionInput2"
		
		input.type="text"
	
		input.classList.add('enterFunctionInput');
		span.classList.add('cancelSpanGraph');
		span2.classList.add('settingsByFunctionGraph');
		span2.id="settingsByFunctionGraph2"
		span.id= "cancelByFunctionGraph2"
        span.innerHTML='&nbsp;\u274C';
        span2.innerHTML='&nbsp;&#9881;';

    /*************************hide first input when cancel icon is clicked***************************/
   	       
       hideInputWhenCancelIconIsClicked(2)
       
       /***************if ok button in  settings by function menu is clicked process the settings **********/
       
       		document.getElementById("okButtonFunctionSettings").addEventListener("click", function(evv){ 
       			
       			if(document.getElementById("discretGraphRadio").checked){
				 graphTypes[functionNumber-1]='bar'
			 }else{
				 graphTypes[functionNumber-1]='line'
			 }
       			borderColors[functionNumber-1]=document.getElementById("colorPerfunctionGraph").value
       			
       			document.getElementById("functionSettings").style.display="none"
       				
       		})
       
       
       
/***************if settings by function icon is clicked display settings by function **********************
	 ***************************and set functionNumber variable***********************************
	 */
       
       		document.getElementById("enterFunctionsBox").addEventListener("click", function(evv){ 
       		   let ary=document.querySelectorAll(".settingsByFunctionGraph");
       		let element=evv.target
       		if (element.className=='settingsByFunctionGraph'){
       		//	str.substring(str.length - n)
       			functionNumber= Number((element.id).substring(23))
       	//		console.log('functionNumber:'+functionNumber)
       		
       			document.getElementById("functionSettings").style.display="block"
       		}
       		})
	      		
       		
       		
       		
	/************************if the box for function input gets focus another **********************
	 * *************************box is created under that box***************************************
	 */
       
       		document.getElementById("enterFunctionsBox").addEventListener("click", function(evv){ 
       		    let ary=document.querySelectorAll(".enterFunctionInput");
       		    let k=ary.length+1
       			let element=evv.target
       if(element==ary[k-2]){
    		var input = document.createElement("input");
			var span2 = document.createElement("span2");
			var span = document.createElement("span");
			
			document.getElementById("enterFunctionsBox").appendChild(input);
			document.getElementById("enterFunctionsBox").appendChild(span2);
			document.getElementById("enterFunctionsBox").appendChild(span);
			
			input.id="enterFunctionInput"+k
			span2.id="settingsByFunctionGraph"+k
			span.id= "cancelByFunctionGraph"+k
			input.type="text"

			input.classList.add('enterFunctionInput');
			span.classList.add('cancelSpanGraph');
			span2.classList.add('settingsByFunctionGraph');
      
           span.innerHTML='&nbsp;\u274C';
           span2.innerHTML='&nbsp;&#9881;';
           hideInputWhenCancelIconIsClicked(k)

       }
       		})
       		
       		/*******************************If Settings Icon is clicked display settings ***********************************/
	  document.getElementById("cancelButtonFunctionSettings").addEventListener("click", function(evv){ 
	  document.getElementById("functionSettings").style.display="none"
		
	  })
	    	/*******************************hide graph settings drop down menu when focus is out *************/
  document.getElementById("functionSettingsDropDownMenuId").addEventListener("focusout", function(evv){ 
				
		  document.getElementById("selectFunctionSettingsGraph").style.display="none"
			console.log("ddddddddd")
	    
	  }) 		
      	/*******************************If a graph setting is selected pop up the *************
      	 * ***************related menu and hide the drop down list ***********************************/
	  document.getElementById("functionSettingsDropDownMenuId").addEventListener("click", function(evv){ 
			  
		   var e = document.getElementById("functionSettingsDropDownMenuId");
	
		   
	    if(!(e.selectedIndex == 0)){
	    	
	   	switch(e.selectedIndex) {
	    	  case 1:
	    		  document.getElementById("insertTitleGraph").style.display="block"
	    	    break;
	    	  case 2:
	    		  document.getElementById("setMinMaxGraph").style.display="block"
	    	    break;
	    	  case 3:
		    	    // code block
		    	    break;
	            default:
	    	    // code block
	    	}
	    	
	    	
	    	 e.selectedIndex=0
	    	 document.getElementById("selectFunctionSettingsGraph").style.display="none"
	    }
	  }) 		
       		
	/*******************************If Settings Icon is clicked display settings ***********************************/
	  document.getElementById("graphSettingsImg").addEventListener("click", function(evv){ 
	 if(document.getElementById("selectFunctionSettingsGraph").style.display=="block"){
		 document.getElementById("selectFunctionSettingsGraph").style.display="none"
	 }else{
		 document.getElementById("selectFunctionSettingsGraph").style.display="block"
	 }
		  
		
	  })
	                         
	   /***************************If cancel button in  Settings menu is clicked hide settings menu*****************/
	  	  document.getElementById("cancelButtonGraphSettings").addEventListener("click", function(evv){ 
		  document.getElementById("graphSettings").style.display="none"
		
	  })
	  
	  	     /***************************If set title button settings  menu is clicked show set title menu*****************/
	  	  document.getElementById("insertTitleButtonGraph").addEventListener("click", function(evv){ 
		  document.getElementById("insertTitleGraph").style.display="block"
		
	  })
	     /***************************If set Label button settings  menu is clicked show set Label menu*****************/
	  	  document.getElementById("insertLabelButtonGraph").addEventListener("click", function(evv){ 
		  document.getElementById("insertLabelGraph").style.display="block"
		
	  })
	  
	      /***************************If set Axis button settings  menu is clicked show set Axis menu*****************/
	  	  document.getElementById("insertminmaxButtonGraph").addEventListener("click", function(evv){ 
		  document.getElementById("setMinMaxGraph").style.display="block"
		
	  })
	  
	     /***************************If cancel button in  Insert Label  menu is clicked hide Insert Title menu*****************/
	  	     document.getElementById("setMinMaxCancelButtonGraph").addEventListener("click", function(evv){ 
			 document.getElementById("setMinMaxGraph").style.display="none"
		
	  })
	  
	       /***************************If cancel button in  Insert Label  menu is clicked hide Insert Title menu*****************/
	  	     document.getElementById("setMinMaxCancelButtonGraph").addEventListener("click", function(evv){ 
			 document.getElementById("insertLabelGraph").style.display="none"
		
	  })
	  
	   /***************************If cancel button in  Insert Title  menu is clicked hide Insert Title menu************************/
	  	  document.getElementById("cancelButtonGraphTitle").addEventListener("click", function(evv){ 
		  document.getElementById("insertTitleGraph").style.display="none"
	  })
	  
	   /********************************If Ok button in  Insert Title  menu is clicked read value***********************************/
	  	  document.getElementById("okButtonGraphTitle").addEventListener("click", function(evv){ 
	  		displayTitle= document.getElementById("titleInputGraph").value
	  		if(document.getElementById("titleInputGraph").value!==""){
	  			displayTitle=true
	  			graphTitle=document.getElementById("titleInputGraph").value
	  		}
	  		 document.getElementById("insertTitleGraph").style.display="none"
	  })
	  
	/***************************If Ok button in  Insert Label  menu is clicked read value**************************************/
	  	  document.getElementById("okButtonGraphLabel").addEventListener("click", function(evv){ 
	  		displayTitle= document.getElementById("labelInputGraph").value
	  		if(document.getElementById("labelInputGraph").value!==""){
	  			displayLegend=true
	  			labels[functionNumber-1]=document.getElementById("labelInputGraph").value
	  			
	  		}
	  	//	console.log('functionNumber='+functionNumber)
	//  		console.log('labels['+(functionNumber-1)+']='+labels[functionNumber-1])
	  		 document.getElementById("insertLabelGraph").style.display="none"
	  })
	  
 /***************************If cancel button in  Insert Title  menu is clicked hide Insert Title menu*****************/
	  	  document.getElementById("cancelButtonGraphLabel").addEventListener("click", function(evv){ 
		 //	console.log("hi")
			 document.getElementById("insertLabelGraph").style.display="none"
	  })
	  
	    /************************If Ok button in axis setting menu is clicked read values of the axis settings************/
	    document.getElementById("setMinMaxOkButtonGraph").addEventListener("click", function(evv){ 
			x0=parseFloat(document.getElementById("x0GraphInput").value)
			xmax=parseFloat(document.getElementById("xmaxGraphInput").value)
			minY=parseFloat(document.getElementById("y0GraphInput").value)
			 maxY=parseFloat(document.getElementById("ymaxGraphInput").value)
			 step=parseFloat(document.getElementById("stepGraphInput").value)
			 document.getElementById("setMinMaxGraph").style.display="none"
		
	  })
	  /************************If Ok button in Settings menu is clicked read values of the settings************/
	    document.getElementById("okButtonGraphSettings").addEventListener("click", function(evv){ 
	    
	/*		 if(document.getElementById("discretGraphRadio").checked){
				 graphTypes[0]='bar'
			 }else{
				 graphTypes[0]='line'
			 }
				 
			 document.getElementById("graphSettings").style.display="none"*/
				 
	  })
	/************************************************************************************************************/                         
	document.getElementById("drawGraphButton").addEventListener("click", function(evv){ 
console.log('graphTypes=')
//console.log('labels='+labels)
	    try {
	    	let ex=document.getElementById("enterFunctionInput1").value// read function 1
	      //  let f = cm.evaluate("f(x)="+ex)
	          buildArray("f(x)="+ex) // build data to plot
	          cb(array) // plot data
	     
	          let ary=document.querySelectorAll(".enterFunctionInput");
	
          let i
	          for (i=0;i<ary.length-1;i++){
	        		 
	        //	  let rt=ary[i+1].id
	     
	        //      console.log(document.getElementById(rt).id)
	               ex=ary[i+1].value
	        //       console.log((i+2)+":"+ex)
	  /*             if(ex==''){
	            		console.log(ary[i+1].id+" is blank")
	               }*/
	               
	        	  if(!ex==''){
	        	
	        		  try{
	        		    	Label=labels[i+1]
	        			    console.log('graphTypes['+i+']='+graphTypes[i]+',labels['+i+']:'+labels[i]+',borderColors['+i+']:'+borderColors[i])
	        				newType=graphTypes[i+1]
	        			  addDataSet(ex,labels[i+1],graphTypes[i+1],borderColors[i+1])
	        		  }catch(err2){
	        			  console.log( err2.message);
	        		  }
	        		  
	        	  }
	          }
	}
	catch(err) {
	 console.log( err.message);
	}

	})
		
	};
	
})






