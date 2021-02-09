/*
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

  for (let i = 0; i < scoreCount; i++) {
    let addNum = parseInt(scores[i], 10)
    currentSum += addNum
  }
  currentAverage = currentSum/scoreCount
  targetAverage = currentAverage - 5
  targetSum = targetAverage * (scoreCount + 1)
  testScore = targetSum - currentSum
  testScore = Math.round(testScore)
  result = `"${testScore}%"`

  console.log(result)
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

/*
let [actualParam, expectedParam] = [[
    ["95%", "83%", "90%", "87%", "88%", "93%"], ["10%"], ["74%", "76%", "58%", "50%", "99%", "70%"],
    ["64%", "95%", "89%", "69%", "96%", "59%", "84%", "93%"], ["77%", "77%"], ["73%", "98%"],
    ["96%", "87%", "66%"], ["94%", "79%", "54%", "62%"], ["56%", "50%"], ["100%", "51%", "98%"],
    ["85%", "74%", "61%", "70%", "56%", "67%", "53%", "53%"],
    ["67%", "91%", "93%", "87%", "81%", "79%", "88%", "69%", "92%", "69%"], ["75%", "100%"]],
    ["54%", "0%", "36%", "36%", "62%", "71%", "63%", "47%", "38%", "63%", "20%", "27%", "73%"]
  ]
  for (let i in actualParam) Test.assertEquals(takeDownAverage(actualParam[i]), expectedParam[i])
  */