const btnEl = document.getElementById("btn")

const emojiEl = document.getElementById("emoji-name");

const emoji = [];
// const emojiAPI = "a5bf919bbb3814ed49ed5d136eb3087b7efe6496"

async function getEmoji(){
 let response = await fetch("https://emoji-api.com/emojis?access_key=a5bf919bbb3814ed49ed5d136eb3087b7efe6496")
 data = await response.json();
 console.log(emoji);
for(let i=0; i<1500; i++){
    emoji.push({
        emojiName: data[i].character,
        emojiCode: data[i].unicodeName,
        
    })
}
}
getEmoji();

btnEl.addEventListener("click", ()=>{
   
  const randomNum = Math.floor(Math.random() * emoji.length);
  console.log(randomNum);
  btnEl.innerText = emoji[randomNum].emojiName;
  emojiEl.innerText = emoji[randomNum].emojiCode;
   
})