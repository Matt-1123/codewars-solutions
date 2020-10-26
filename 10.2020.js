// 10.21.20
// Return a name

// JS:
const greet = (name) => `Hello, ${name} how are you doing today?`;

// Python:
def greet(name):
    return "Hello, " + name + " how are you doing today?"


// 10.26.20
// 
function mostFrequentDays(year){
    
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const leap = new Date(year, 1, 29).getMonth() === 1;
    const frequent = (new Date(year, 0, 1).getDay() + 6) % 7;
    
    let result = (leap ? [frequent, (frequent + 1) % 7].sort() : [frequent]).map((day) => days[day]);

    console.log(`The most frequent day of the week of ${year} is ${result}`);

    return result;
    
}