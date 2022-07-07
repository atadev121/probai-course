/**
 * http://usejsdoc.org/
 */
//define(['chartBar','mathjs'],function (cb,mj) {
console.log("rrrrmmp")
const parser = math.parser()
parser.evaluate('f(x, y) = x^y')        // f(x, y)
console.log(parser.evaluate('f(2, 3)'))  
	arr=new Array()
	arrX=new Array()
	arrY=new Array()
	arrO=new Array()
	for(i=0;i<50;i++){
		arrX.push(i)
	}
	for(i=0;i<50;i++){
		arrY.push(i*i)
	}
	arrO.push("barChart")
	arrO.push("bar")
	arr.push(arrX)
	arr.push(arrY)
	arr.push(arrO)
//	cb(arr)



//})