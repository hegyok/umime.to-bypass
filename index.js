function getId(){
  const href = window.location.href.split("/");
  return href[href.length-1]
}

async function getAnswer(id, api_url){
  const data = await fetch(api_url);
  const payload = JSON.parse(await data.text());
  console.log(`ID: ${id}`)


  let item = payload.items.find((f) => f.id == id);
  if(!item) return console.log("Nemohl jsem najít odpověď");
  let answer;
  item.question.forEach(q => {
    q.forEach((qq, i) => {
      if(typeof qq == "object"){
        answer = q[i];
      }
    })
  })
  const answerInput = document.getElementById("answer0");
  console.log(answerInput);
  answerInput.value = answer.answer[0];
  console.log(`Odpověď: ${answer.answer[0]}`);
  
}

let lastId = "";

setInterval(() => {
  const id = getId();
  if(id != lastId){
    lastId = id;
    exec(id);
  }
}, 1000)

async function exec(ID){
  if(window.location.href.includes('vpisovacka')){
    const API_URL = '/ajax/vpisovackaLoadWrittenAnswerData.php?user='+user+'&ps='+ps+'&kc='+kc+'&chosenProblem='+chosenProblem+"&cookieHash="+cookieHash;
    console.log(`API: ${API_URL}`)
    getAnswer(ID, API_URL);
  }
}
