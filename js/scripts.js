var triangle1Area = getTriangleArea(10,15),
    triangle2Area = getTriangleArea(20,30),
    triangle3Area = getTriangleArea(30,50);

function getTriangleArea(a, h) {
    var result = a*h/2;
    if ((a<=0)||(h<=0)) {
      console.log ("Niewłaściwe dane"); }
      else {
        return result; }
}