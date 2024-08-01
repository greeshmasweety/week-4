function checkNumber(num) {
    if (num > 0) {
        console.log(num + " is positive.");
    } else if (num < 0) {
        console.log(num + " is negative.");
    } else {
        console.log(num + " is zero.");
    }
}


checkNumber(5);  
checkNumber(-3); 
checkNumber(0);  
function getDayMessage(day) {
    switch(day.toLowerCase()) {
        case 'monday':
            console.log("Start of the work week.");
            break;
        case 'tuesday':
            console.log("Second day of the work week.");
            break;
        case 'wednesday':
            console.log("Midweek day.");
            break;
        case 'thursday':
            console.log("Almost the weekend.");
            break;
        case 'friday':
            console.log("Last workday of the week.");
            break;
        case 'saturday':
            console.log("Weekend is here!");
            break;
        case 'sunday':
            console.log("Rest day before the week starts again.");
            break;
        default:
            console.log("Invalid day of the week.");
    }
}


getDayMessage('Monday');    
getDayMessage('friday');    
getDayMessage('Sunday');    
getDayMessage('Funday');    
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let k = 2;
let count = 0;
do {
    console.log(k);
    k += 2;
    count++;
} 
while (count < 5);




    