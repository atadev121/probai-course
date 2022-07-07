define(function () {
    return function (p) {
    	return (Math.random() < p) ? 'H' : 'T';
    };
});
