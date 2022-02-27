
const naiveStringSearch = (targetString:string, pattern:string) => {
    
    // match count tracks how many times we find a match of pattern in targetString
    let matchCount = 0;

    for (let index = 0; index < targetString.length; index++ ) {
        // loop through target string
        for(let patternIndex = 0; patternIndex < pattern.length; patternIndex++) {
            // loop through the pattern string for each singular iteration of the target string

            // the match index lets us increment the first index by adding the second index to it,
            // this lets us search both strings side-by-side for matching letters
            let matchIndex = index + patternIndex;
            if(pattern[patternIndex] !== targetString[matchIndex]) break;
            // breaking resets the patternIndex and restarts its iteration, 
            // while the first index moves to its next iteration
            if(patternIndex === pattern.length - 1) matchCount++;

            // increment number of matches found 

        }
    }

    return matchCount;
}


console.log(naiveStringSearch("lorie loled", "l"));