

//get document by searching class name
const leftHalf = document.querySelector('.leftHalf');
const rightHalf = document.querySelector('.rightHalf');

const videoCategories=new Map([
    ["Film & Animation","1"],
    ["Autos & Vehicles","2"],
    ["Music","10"],
    ["Pets & Animals","15"],
    ["Sports","17"],
    ["Gaming","20"],
    ["People & Blogs","22"],
    ["Comedy","23"],
    ["Entertainment","24"],
    ["Howto & Style","26"],
    ["Science & Technology","28"] 
]);

//get active vidcat button
const categoryButtons = document.getElementsByClassName("vidCat")
for(let i=0;i<categoryButtons.length; i++){
    categoryButtons[i].addEventListener("click",function() {
        let current = document.getElementsByClassName("active");
        current[0].className=current[0].className.replace(" active","");
        this.className += " active";
        //console.log(document.querySelector(".active").innerText)
    });
}
//getFetchUrl(videoCategories.get(document.querySelector(".active").innerText));
function getFetchUrl(vidcat){
    let url = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&chart=mostPopular&maxResults=50&regionCode=us&videoCategoryId=' + vidcat+'&key=AIzaSyALoTeC4RHeVkkVAkkDdYxKrRZxDODjKGQ'
    //console.log(url)
    return url;
}

/*
//get  video category ids
fetch('https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=us&key=AIzaSyALoTeC4RHeVkkVAkkDdYxKrRZxDODjKGQ')
.then(result=> result.json())
.then(data=>{
    data.items.forEach(element=>{
        if(element.snippet.assignable)
        console.log(element.id, ":", element.snippet.title,)
    });
    console.log(data.items);
}).catch(err =>{
    console.log(err);
    videoSection.innerHTML = `<h3>Sorry something went wrong</h3>`
});
*/
/*
fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&chart=mostPopular&maxResults=10&regionCode=us&videoCategoryId=10&key=AIzaSyALoTeC4RHeVkkVAkkDdYxKrRZxDODjKGQ')
.then(result=> result.json())
.then(data=>{
    data.items.forEach(element => {
        console.log(element.snippet.title , "by :", element.snippet.channelTitle);
    });
    console.log(data.items);
}).catch(err =>{
    console.log(err);
    videoSection.innerHTML = `<h3>Sorry something went wrong</h3>`
});
*/
//getVideoCategories();
//getVideos();
/*
function getVideos(){
fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUY30JRSgfhYXA6i6xX1erWg&key=AIzaSyALoTeC4RHeVkkVAkkDdYxKrRZxDODjKGQ')
.then(result => result.json())
.then(data =>{
    data.items.forEach(element => {
        // ` backtic for template string
        videoSection.innerHTML += `
        <h3>${element.snippet.title}</h3>
        <a target="_black" href ="https://www.youtube.com/watch?v=${element.snippet.resourceId.videoId}">
        <img src="${element.snippet.thumbnails.default.url}"/>
        </a>
        `  
    });
    console.log(data.items[0]);
}).catch(err =>{
    console.log(err);
    videoSection.innerHTML = `<h3>Sorry something went wrong</h3>`
});
}
*/

//store fetch results in array to be accessed later.
    let videoInfo=[]
    const higherButton = document.getElementById("higher");
    const lowerButton = document.getElementById("lower");
    let roundNum=1;
    let score=0;
    const scoreText= document.getElementById("score");
    const roundNumText =document.getElementById("roundNum");
    const categoryNameText = document.getElementById("categoryName");
    const vsText = document.getElementById("vs");
    const startButton = document.getElementById("startButton");
    const tryAgainButton = document.getElementById("tryAgain");
    const changeCategoryButton = document.getElementById("changeCategory");
    startButton.addEventListener("click",(event)=>{ startGame();display();})
    tryAgainButton.addEventListener("click",(event)=>{resetGame(true); startGame(); })
    changeCategoryButton.addEventListener("click",(event)=>{resetGame(false); changeCategory();})
    //display();
    function startGame(){
        startButton.style.display= "none";
        for(let i=0;i<categoryButtons.length; i++){
            categoryButtons[i].style.display ="none";
        }
        categoryNameText.innerHTML ="Category : "+  document.querySelector(".active").innerText;
    }

    //must be called like this to properly get value of videoInfo
    async function display(){
        await getVideoInfo(); // videoInfo is properly updated after fetch
        setLeftHalf(0);
        setRightHalf(1);
        
    };

    function addCommas(number){
        let str="";
        let len = number.length
        let front = len % 3
        str = number.substr(0,front)
        for(let i =front; i<=len-3; i+=3){
            let temp = number.substr(i,3)
            str = str +"," +temp
        }
        if(front==0){
            return str.replace(",","")
        }
        else{return str}
        
    }

function setLeftHalf(i){
    document.documentElement.style.setProperty('--leftUrl',`url(${videoInfo[i].snippet.thumbnails.standard.url}` );
    leftHalf.innerHTML = `
    <div class="half">
        <p class = "vidTitle">${videoInfo[i].snippet.title}</p>
        <p class="author">By : ${videoInfo[i].snippet.channelTitle}</p>
        <img width=640px height=480px src="${videoInfo[i].snippet.thumbnails.standard.url}"/>
        <p>has</p>
        <p class="views">${addCommas(videoInfo[i].statistics.viewCount)}</p>
        <p>views</p>
        
    </div>
    ` 
}

// adjust image maybe by not using background img
//on mobile change width +height
function setRightHalf(i){
    document.documentElement.style.setProperty('--rightUrl',`url(${videoInfo[i].snippet.thumbnails.standard.url}` );
    rightHalf.innerHTML = `
    <div class="half">
        <p class = "vidTitle">${videoInfo[i].snippet.title}</p>
        <p class="author">By : ${videoInfo[i].snippet.channelTitle}</p>
        <img width=640px height=480px src="${videoInfo[i].snippet.thumbnails.standard.url}"/>
        <p>has</p>   
        <div class="choices">
          <button onclick="pressHigher()" id="higher">Higher &uarr;</button>
          <button onclick="pressLower()" id="lower">Lower &darr;</button>
        </div>
        <div class="answer views">
            ${addCommas(videoInfo[i].statistics.viewCount)}
        </div>
        <p>views</p>
    </div>
    `
}

//fetch - later make parameter for fetch to be changed on video category id
async function getVideoInfo(){
        //return makes it wait
        //'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&chart=mostPopular&maxResults=10&regionCode=us&key=AIzaSyALoTeC4RHeVkkVAkkDdYxKrRZxDODjKGQ'
    return fetch(getFetchUrl(videoCategories.get(document.querySelector(".active").innerText)))
    .then(result => {return result.json()})
    .then(data =>{
        data.items.forEach(element => {
            videoInfo.push(element);
        });
        //console.log(data.items);
        //console.log(videoInfo.length); //

    }).catch(err =>{
        console.log(err);
        videoSection.innerHTML = `<h3>Sorry something went wrong</h3>`
    });
};

function pressTest(){
    leftHalf.className += "a1";
    rightHalf.className+="a1";
}
function resolveAfterSeconds(s) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, s);
      
    });
  }
  
  async function asyncCall() {
    //console.log('calling');
    await resolveAfterSeconds(2000); // wait 2 seconds to show answer
    if(roundNum>=(videoInfo.length-1) || isWrong){
        console.log("end of game");
        endGame();
        return;
    }
    leftHalf.classList.toggle("a1");
    rightHalf.classList.toggle("a1");
    await resolveAfterSeconds(1900); // wait fro animation to finish
    //console.log(result);
    // Expected output: "resolved"
    
    leftHalf.classList.toggle("a1");
    rightHalf.classList.toggle("a1");
    vsText.innerHTML = "VS";
    vsText.style.backgroundColor="unset";
    
    setLeftHalf(roundNum);   
    setRightHalf(roundNum+1);
    rightHalf.classList.toggle("a2");
    await resolveAfterSeconds(1500);
    rightHalf.classList.toggle("a2");
    roundNum++;
    roundNumText.innerHTML="Round Number : " +roundNum +"/" +(videoInfo.length-1);
    
    //await resolveAfterSeconds(1000);
    
  }
  
/*
async function waitSeconds(s,color){
    document.body.style.backgroundColor=color;
    let myPromise = new Promise(function(resolve){
        setTimeout(() => {
            resolve("resolve")
        }, s);
        
    });
    await myPromise;
    document.body.style.backgroundColor="darkslategrey";
}
*/
    let isWrong=false;
    function pressLower(){
        let choices = document.querySelector(".choices");
        let answer = document.querySelector(".answer");
        choices.style.display= "none";
        answer.style.display= "block"

        //calculate score
        let prevViews =Number(videoInfo[roundNum-1].statistics.viewCount);
        let currViews =Number(videoInfo[roundNum].statistics.viewCount);

        //if curr video views is left than previous
        if(currViews<= prevViews){
            score++;
            scoreText.innerHTML = "Score : " + score;
            vsText.innerHTML = "&#10004;";
            vsText.style.backgroundColor="var(--correct)";
        }else{
            vsText.innerHTML = "&#10060;"
            vsText.style.backgroundColor="var(--incorrect)";
            isWrong=true;
        }
        /*
        let x=videoInfo[roundNum].statistics.viewCount-100;
        console.log(x)
        
        setInterval(function() {
            if(x<videoInfo[roundNum].statistics.viewCount){
                x++;
                answer.innerHTML=x;
            }else{
                return;
            }
        }, 1);
        */
        asyncCall();
    }
    
    function pressHigher(){
        
        let choices = document.querySelector(".choices");
        let answer = document.querySelector(".answer");
        choices.style.display= "none";
        answer.style.display= "block";

        let prevViews =Number(videoInfo[roundNum-1].statistics.viewCount);
        let currViews =Number(videoInfo[roundNum].statistics.viewCount);
        
        //if curr video views is left than previous
        if(currViews>= prevViews){
            score++;
            scoreText.innerHTML = "Score : " + score;
            vsText.innerHTML = "&#10004;";
            vsText.style.backgroundColor="var(--correct)";
        }else{
            vsText.innerHTML = "&#10060;"
            vsText.style.backgroundColor="var(--incorrect)";
            isWrong=true;
        }

        asyncCall();
        // console.log("new round num = ", roundNum)
    }
    
    const endScoreText = document.getElementById("endScore")
    const endScreenText = document.querySelector(".endScreen")
    function endGame(){
        leftHalf.style.display="none";
        rightHalf.style.display="none";
        vsText.style.display="none";
        vsText.innerHTML = "VS";
        vsText.style.backgroundColor="unset";
        endScoreText.innerHTML=score+ "/" + ((videoInfo.length-1));
        endScreenText.style.display= "block";
    }

    //Fisher-Yates Shuffle
    function shuffle(array) {
        let m = array.length, t, i;
      
        // While there remain elements to shuffle…
        while (m) {
      
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
      
          // And swap it with the current element.
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
        return array;
      }
    function resetGame(isTryAgain){
        score=0;
        roundNum=1;
        scoreText.innerHTML="Score : " + score;
        roundNumText.innerHTML="Round Number : " +roundNum+"/" +(videoInfo.length-1);
        if(isTryAgain){
            shuffle(videoInfo);
            setLeftHalf(0);
            setRightHalf(1);
        }
        else{
            videoInfo=[];
        }
        isWrong=false;
        leftHalf.style.display="block";
        rightHalf.style.display="block";
        vsText.innerHTML="VS";
        vsText.backgroundColor="unset";
        vsText.style.display="block";
        endScreenText.style.display= "none";
    }

    function changeCategory() {
        startButton.style.display= "block";
        for(let i=0;i<categoryButtons.length; i++){
            categoryButtons[i].style.display ="inline-block";
        }
        categoryNameText.innerHTML ="";   
    }

    /*
    higherButton.addEventListener("click", (event=>{
        console.log("hi higher")
    }));

    lowerButton.addEventListener("click",(event=>{
        console.log("hi lower");
        //setChoices(leftHalf,1);
        //setChoices(rightHalf,2);
    }));
    */

