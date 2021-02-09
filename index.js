/* example results
takeDownAverage(["95%", "83%", "90%", "87%", "88%", "93%"]) ➞ "54%"
takeDownAverage(["10%"]) ➞ "0%"
takeDownAverage(["53%", "79%"]) ➞ "51%"
*/

function takeDownAverage(scores) {
  // Declare variables
  let result = "";
  let testScore = 0;
  const scoreCount = scores.length;
  let currentSum = 0;
  let targetSum = 0;
  let currentAverage = 0;
  let targetAverage = 0;

  // Get sum
  for (let i = 0; i < scoreCount; i++) {
    let addNum = parseInt(scores[i], 10)
    currentSum += addNum
  }

  // Perform math logic
  currentAverage = currentSum/scoreCount
  targetAverage = currentAverage - 5
  targetSum = targetAverage * (scoreCount + 1)
  testScore = targetSum - currentSum
  testScore = Math.round(testScore)
  result = `${testScore}%`

  //console.log(result)
  return result
}

takeDownAverage(["95%", "83%", "90%", "87%", "88%", "93%"])

/*
pseudo code
-turn to integers
-get sum 95+83+90+87+88+93=536 sum
-get current average 536/6=89.33 sum/array count= current average
-subtract current average by 5 89.33-5=84.33 current average-5=target average
-multiply target average by array count +1 84.33*(6+1)=590.31 target average * array count+1 = new sum
-subtract old sum from new sum 590.31-536=54.31 new sum-old sum = test score
-round to nearest whole number 54.31 -> 54
-return test score in expected format "54%"
*/

// tested code on edabit and passes all tests
// other solutions are more compact
// could refactor with array.reduce() and perform more logic in one line to reduce amount of variables