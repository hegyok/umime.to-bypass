//1. basic
setInterval(() => {
  processSkillUpdate("correct", Math.floor(Math.random() * 5000) + 5000)
}, 50)



//2. cteni s porozumenim
const args = window.location.href.split('/');
fetch("https://www.umimeanglicky.cz/ajax/logItemEvent.php", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "pragma": "no-cache",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sec-gpc": "1",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://www.umimeanglicky.cz/reading-lego/90",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": `data=${btoa(JSON.stringify({
    ps,
    user,
    cookieHash,
    item: parseInt(args[args.length - 1], 10),
    answer: "[\"q0|o0|47200\",\"q1|o0|59050\",\"q2|o0|67950\",\"q3|o0|74700\"]",
    correct: 1, 
    moves: 0, 
    quality: 1, 
    qualityStatus: "", 
    responseTime: 75850, 
    deviceType: "computer", 
    source: "explicitExercise"
  }))}`,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
})
fetch(`https://www.umimeanglicky.cz/ajax/logItemStatusPsStatus.php?ps=${ps}&item=${args[args.length-1]}&user=${user}&cookieHash=${cookieHash}&responseTime=16100&diffTime=16100&correct=1&quality=0.75&qualityStatus=&deviceType=computer&source=explicitExercise&homework=41456&familyHomework=-1`, {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sec-gpc": "1",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": "https://www.umimeanglicky.cz/reading-people-photos/80",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});