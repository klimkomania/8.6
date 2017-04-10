var triangle1Area = getTriangleArea(10, 15),
	triangle2Area = getTriangleArea(20, 30),
	triangle3Area = getTriangleArea(30, 50);

function getTriangleArea(a, h) {
	if ((a<=0)||(h<=0)) {
    	console.log ("Niewłaściwe dane"); 
    	} else {
        		return a*h/2; 
        }
}

console.log(triangle1Area, triangle2Area, triangle3Area);