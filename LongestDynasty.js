const romanConversion = {"M":1000, "D":500, "C":100, "L":50, "X":10, "V":5, "I":1};

function longestdynasty(dynastyReign){
   
    if(!(Array.isArray(dynastyReign) && dynastyReign.length > 0)){
        return "No Data";
    }

    let longestYear = 0;
    let totalYears = 0;
    let dynastyName = '';

    dynastyReign.forEach(function(item, index){
        year = convertYear(Object.values(item)[0]);
        if(year > 0){
            if((index+1) < dynastyReign.length){
                nextYear = convertYear(Object.values(dynastyReign[index + 1])[0]);
            }else{
                nextYear = year;
            }

            totalYears = nextYear - year;
            if(totalYears > longestYear){
                dynastyName = Object.keys(item)[0];
            }
        }
    });

    return dynastyName;
}

/*
MMM
CM = 900
DC = 600
DCC = 700
DCCC = 800
D = 500
CD = 400
CCC = 300 
XC = 90
LXXX = 80
LXX =70
LX = 60
L = 50
XL = 40
XXXX = 30
XX = 20
X = 10
IX = 9
VIII = 8
VII = 7
VI = 6
V = 5
IV = 4
III= 3
II = 2
I =  1
*/

const pattern = new RegExp(/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/);

function convertYear(year){

    if(pattern.test(year) != true){
        return "invalid";
    }

    const strArr = year.split('');

    let total = 0;
    let currentVal, nextValue;

    for(let i=0; i < strArr.length; i++){
        currentVal = romanConversion[strArr[i]];
        if((i+1) < strArr.length){
            nextValue = romanConversion[strArr[i+1]];
        }else{
            nextValue = 0;
        }

        if(currentVal >= nextValue){
            total += currentVal;
        }else if(currentVal < nextValue){
            total -= currentVal;
        }
    }

    return total;


}
