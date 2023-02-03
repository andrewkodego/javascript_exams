function topProduct(productProfitArray){
    
    if(!(Array.isArray(productProfitArray) && productProfitArray.length > 0)){
        return "No Data";
    }
    
    let profit = 0;
    let highestProfit = '';
    let productName = '';

    productProfitArray.forEach(function(item){
        profit = Object.values(item)[0];

        if(highestProfit == ''){
            highestProfit = profit;
        }

        if(profit > highestProfit){
            highestProfit = profit;
            productName = Object.keys(item)[0];
        }else if(profit == highestProfit){
            if(productName != ''){
                productName += ", ";
            }
            productName += Object.keys(item)[0];
        }
    });

    return productName;
   
}

function bottomProduct(productProfitArray){
    
    if(!(Array.isArray(productProfitArray) && productProfitArray.length > 0)){
        return "No Data";
    }
    
    let profit = 0;
    let lowestProfit = '';
    let productName = '';

    productProfitArray.forEach(function(item){
        profit = Object.values(item)[0];

        if(lowestProfit == ''){
            lowestProfit = profit;
        }

        if(lowestProfit > profit){
            lowestProfit = profit;
            productName = Object.keys(item)[0];
        }else if(profit == lowestProfit){
            if(productName != ''){
                productName += ", ";
            }
            productName += Object.keys(item)[0];
        }
    });

    return productName;

}

function zeroProfitProduct(productProfitArray){
    if(!(Array.isArray(productProfitArray) && productProfitArray.length > 0)){
        return "No Data";
    }
    
    let profit = 0;
    let lowestProfit = '';
    let productName = '';

    productProfitArray.forEach(function(item){
        profit = Object.values(item)[0];
        //profit = Math.abs(profit);

        if(profit < 0){
            profit = profit * -1;
        }

        if(lowestProfit == ''){
            lowestProfit = profit;
        }

        if(lowestProfit == 0 || lowestProfit > profit){
            lowestProfit = profit;
            productName = Object.keys(item)[0];
        }else if(profit == lowestProfit){
            if(productName != ''){
                productName += ", ";
            }
            productName += Object.keys(item)[0];
        }
    });

    return productName;
    
}