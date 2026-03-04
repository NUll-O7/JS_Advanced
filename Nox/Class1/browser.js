// Plain Log
console.log(this); // Returns the global object (window in browsers)

// With Function
function myFunction() {
    console.log(this); // Returns the global object (window in browsers)
}
myFunction();

//with Object
const myObject = {
    name: "Nox",
    age:20,
    Logger: function() {
        console.log(this); // Returns the myObject
    }
};
myObject.Logger();
