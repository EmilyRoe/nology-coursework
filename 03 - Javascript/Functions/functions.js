// **Challenge**

// 1. Write a function to find the perimeter of a rectangle
const calculatePerimeter = (width, height) => {
    return width + width + height + height;
}

console.log(calculatePerimeter(1,1));

// 2. Write a function to find the area of a circle. When given a radius, print the area to the console.
const calculateArea = (radius) => {
    const area = Math.PI * radius * radius;
    return area;
}

const smallArea = calculateArea(2);

// 3. Now do the same to find the circumference of a circle. 
// Emily's attempt - need to test:
const calculateCircumference = (diameter) => {
    const circumference = Math.PI * diameter;
    return circumference;
}

const Circumference = calculateCircumference(2); 

// Andy's solution
const calculatePerimeter = (radius) => {
    return 2 * Math.PI * radius;
}