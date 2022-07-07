requirejs.config({
	waitSeconds: 50,
			        baseUrl : '/js',
      /*  deps:['/js/myf.js'],*/
        paths: {
       /* 	 mathjax:['https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/latest.js?config=TeX-MML-AM_CHTML','mathjaxn'],*/
         	'mathjax':'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/latest.js?config=TeX-MML-AM_CHTML'
      /*  	'mathjax':*/
        	/* 'chartjs':'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart',*/
      /*  	 'mathjsm':'https://cdn.jsdelivr.net/npm/mathjs@9.3.2/lib/browser/math.min'*/
        	
        }
})

//console.log("inside config")

 requirejs(['mathjax'], function(m) {
	//console.log("inside require inside introduction")
		});  