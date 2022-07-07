/**
 * http://usejsdoc.org/
 */
define(['charT'],function (re) {
//	Chart.defaults.global.elements.line.fill = false;
	//alert("from chartBar.js0")
	//console.log("from chartBar")
	return function (x) {
		
		DrawChart(x)
 
    };
	
//barChart
    
	function DrawChart(arrt){
	//	console.clear()
	//	console.log("display title="+arrt[2][8]+",title="+arrt[2][9])
		if(window.bar != undefined) 
			window.bar.destroy(); 
		
		window.bar=new Chart(document.getElementById(arrt[2][0]), {
		    type: arrt[2][1],
		    data: {
		      labels: arrt[0],
		      datasets: [
		        {
		          label: arrt[2][2],//"Number of occurences",
		        backgroundColor: "#2e95cd", 
		          data: arrt[1],
		          fill: arrt[2][3],//false,
		         borderColor: arrt[2][11]//"#18c3b9",
		        },
		      ]
		    },
		    options: {
		    	 scales: {
		    	        xAxes: [{
		    	        	display:true,
		    	            barPercentage: 0.2,
		    	            scaleLabel: {   // To format the scale Lebel
                                display: true,
                                labelString: 'X axe name',
                                fontColor:'#000000',
                              
                            },
		    	            ticks: {
	                               fontColor: "white", // To format the ticks, coming on the axis/lables which we are passing.
	                              
	                              }
		    	        }],
		    	        yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true,
                                max: arrt[2][4],//100,
                                min:arrt[2][5],//20
                                fontColor: "white",
                            }
                        }]
		    	    },
		    	   
		      legend: { 
		    	  display: arrt[2][6],//true,
		    	/*  labels: {
		                fontColor: 'rgb(25, 99, 12)',
		            },*/
		    	  position:arrt[2][7],//'top'
		    	  },
		      title: {
		        display: arrt[2][8],//true,
		        text: arrt[2][9],//'Distribution of Number of Heads in n throws with probability of success p',
		        fontSize:arrt[2][10]//18
		      }
		    }
		});
	}
});
