/*
Let a,b,c be the lengths of the sides of a triangle. 
The area is given by:
Area	=	 √	 p	 (	p	−	a	) 	(	p	−	b	)	 (	p	−	c	)    
where p is half the perimeter =    (a	+	b	+	c )/2
*/

var a = 5;
var b = 6;
var c = 7;

const areaOfTriangle = (a, b, c) => {
    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}
console.log(areaOfTriangle(a, b, c));

// Reference: https://www.mathopenref.com/heronsformula.html