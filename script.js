const quotetext=document.querySelector(".quote"),
authorName=document.querySelector(".author .name"),
quotebtn = document.querySelector("button"),
soundbtn = document.querySelector(".sound"),
copybtn = document.querySelector(".copy"),
twitterbtn = document.querySelector(".twitter");


function randomQuote(){
    quotebtn.classList.add("loading");
    quotebtn.innerText="Loading Quotes...";
    //fetching random quotes/data from the API and parsing it into javascript objects
    fetch("http://api.quotable.io/random").then(res=>res.json()).then(result=>{
        console.log(result);
        quotetext.innerText = result.content;
        authorName.innerText=result.author;
        quotebtn.innerText="New Quotes";
        quotebtn.classList.remove("loading");

    });
}
soundbtn.addEventListener("click",()=>{
  //the speechSynthesisUtterance is a web speech api that represents a speech request
  let utterance=new SpeechSynthesisUtterance(`${quotetext.innerText} by ${authorName.innerText}`);
  // speak meathod of speechSynthesis is speaks the utterance
  speechSynthesis.speak(utterance);
});
copybtn.addEventListener("click",()=>{
  navigator.clipboard.writeText(`${quotetext.innerText} by ${authorName.innerText}`);
});
twitterbtn.addEventListener("click",()=>{
    let tweeturl=`https://twitter.com/intent/tweet?url=${quotetext.innerText}`;
    window.open(tweeturl,"_blank");
});

quotebtn.addEventListener("click", randomQuote);
