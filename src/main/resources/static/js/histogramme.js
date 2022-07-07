
define(function () {
	
    return function (x) {
    	console.log('test in histogram')
    	let meanValue=0
    	for (let i=0;i<x.length;i++){
    		meanValue=meanValue+x[i]
    	}
    	meanValue=meanValue/x.length
    	let result=new Array()
    	let labels = [...new Set(x)]
    	let second=new Array()
    	//console.log(labels)
    	  labels.sort(function(a, b) {
    		  return a - b;
    	  });
    	//  console.log(labels)
    	let frequencies = new Array()
    	
    	
    let i=0
    let j=0
	
    for (i=0;i<labels.length;i++){
    	frequencies.push(0)
    	second.push(0)
    	for (j=0;j<x.length;j++){
    	if (x[j]==labels[i]){
    		(frequencies[i])++
    	}
    	}
    }
  second[Math.trunc(labels.length/2)]=4
    	result.push(labels)
    	result.push(frequencies)
    	result.push(second)
        return result;
    };
});