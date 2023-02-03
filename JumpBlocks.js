function solution(blocks){
    let longestDistance = 0;

    for(let i=0; i < blocks.length; i++){

        let totaljumps = 1;
        //left frog
        for(let j=i-1; j >= 0; j--){
            if(blocks[j] >= blocks[j+1]){
                totaljumps++;
            }
        }

        //right frog
        for(let k=i+1; k < blocks.length; k++){
            if(blocks[k] >= blocks[k-1]){
                totaljumps++;
            }
        }

        if(totaljumps > longestDistance){
            longestDistance = totaljumps;
        }
    }

    return longestDistance;

}