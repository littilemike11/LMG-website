const videoSection = document.querySelector('section');
const videoSection2 = document.querySelector('.example');

//get document by searching class name
const leftHalf = document.querySelector('.leftHalf');
const rightHalf = document.querySelector('.rightHalf');

const videoCategories=new Map([
    ["Film & Animation","1"],
    ["Autos & Vehicles","2"],
    ["Music","10"],
    ["Pets & Animals","15"],
    ["Sports","17"],
    ["Travel & Events","19"],
    ["Gaming","20"],
    ["People & Blogs","22"],
    ["Comedy","23"],
    ["Entertainment","24"],
    ["Howto & Style","26"],
    ["Education","27"],
    ["Science & Technology","28"] 
]);

//get active vidcat button
var categoryButtons = document.getElementsByClassName("vidCat")
console.log(categoryButtons)
for(var i=0;i<categoryButtons.length; i++){
    categoryButtons[i].addEventListener("click",function() {
        var current = document.getElementsByClassName("active");
        current[0].className=current[0].className.replace(" active","");
        this.className += " active";
        console.log(document.activeElement.innerText)
        console.log(videoCategories.get(document.activeElement.innerText))
        getFetchUrl(document.activeElement.innerText);
    });
}
console.log(document.activeElement.innerText)
function getFetchUrl(vidcat){
    var url ='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&chart=mostPopular&maxResults=10&regionCode=us&videoCategoryId=10&key=AIzaSyALoTeC4RHeVkkVAkkDdYxKrRZxDODjKGQ'
    
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
    var videoInfo=[]
    const higherButton = document.getElementById("higher");
    const lowerButton = document.getElementById("lower");
    var roundNum=1;
    var score=0;
    const scoreText= document.getElementById("score");
    const roundNumText =document.getElementById("roundNum");
    const vsText = document.getElementById("vs");
    const startButton = document.getElementById("startButton");
    const tryAgainButton = document.getElementById("tryAgain");
    startButton.addEventListener("click",(event)=>{display();})
    tryAgainButton.addEventListener("click",(event)=>{resetGame(); display();})
    
    //display();
    //must be called liek this to properly get valuie of videoinfo
    async function display(){
        startButton.style.visibility = "hidden";
        await getVideoInfo(); // videoinfo is properly upodated after fetch
        console.log(videoInfo);
        console.log(videoInfo[0].snippet.title);
        setLeftHalf(0);
        setRightHalf(1);
        
    };

function setLeftHalf(i){
    leftHalf.innerHTML = `
    <div class="half">
        <p class = vidTitle">${videoInfo[i].snippet.title}</p>
        <p>by : ${videoInfo[i].snippet.channelTitle}</p>
        <p>published on : ${videoInfo[i].snippet.publishedAt}</p>
        <img width=640px height=480px src="${videoInfo[i].snippet.thumbnails.standard.url}"/>
        <p>likes : ${videoInfo[i].statistics.likeCount}</p>
        <p>has</p>
        <p class="views">${videoInfo[i].statistics.viewCount}</p>
        <p>views</p>
        
    </div>
    `

        
}

// adjust image maybe by not using background img
//on mobiel change width +height
function setRightHalf(i){
    //document.documentElement.style.setProperty('--rightUrl', )
    rightHalf.innerHTML = `
    <div class="half">
        <p class = vidTitle">${videoInfo[i].snippet.title}</p>
        <p>by : ${videoInfo[i].snippet.channelTitle}</p>
        <p>published on : ${videoInfo[i].snippet.publishedAt}</p>
        <img width=640px height=480px src="${videoInfo[i].snippet.thumbnails.standard.url}"/>
        <p>likes : ${videoInfo[i].statistics.likeCount}</p>
        <p>has</p>   
        <div class="choices">
          <button onclick="pressHigher()" id="higher">Higher &uarr;</button>
          <button onclick="pressLower()" id="lower">Lower &darr;</button>
        </div>
        <div class="answer views">
            ${videoInfo[i].statistics.viewCount}
        </div>
        <p>views</p>
    </div>
    `
}

//fetch - later make paramter for fetch to be changed on video category id
async function getVideoInfo(){
        //return makes it wait
        //'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&chart=mostPopular&maxResults=10&regionCode=us&key=AIzaSyALoTeC4RHeVkkVAkkDdYxKrRZxDODjKGQ'
    return fetch(getFetchUrl(document.activeElement.innerText))
    .then(result => {return result.json()})
    .then(data =>{
        data.items.forEach(element => {
            videoInfo.push(element);
            //console.log(element)
            /*
            videoSection.innerHTML += `
            <div>
            <h3>${element.snippet.title}</h3>
            <p>by: ${element.snippet.channelTitle}</p>
            <p>published on : ${element.snippet.publishedAt}</p>
            <img width=100% src="${element.snippet.thumbnails.standard.url}"/>
            <p>views : ${element.statistics.viewCount}<p>
            <p>likes : ${element.statistics.likeCount}<p>
            </div>
            `
            */
        });
        console.log(data.items);
        console.log(videoInfo.length); //

    }).catch(err =>{
        console.log(err);
        videoSection.innerHTML = `<h3>Sorry something went wrong</h3>`
    });
};

function pressTest(){
    var choices = document.querySelector(".choices");
    var answer = document.querySelector(".answer");
    choices.style.display= "none";
    answer.style.display= "block"

    var x=0
    // setInterval(function() {
    //     if(x<1000){
    //         x++;
    //         answer.innerHTML=x;
    //     }else{
    //         return;
    //     }
        
    // }, 1);
    asyncCall();
    
}
function resolveAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
      
    });
  }
  
  async function asyncCall() {
    //console.log('calling');
    const result = await resolveAfter2Seconds();
    //console.log(result);
    // Expected output: "resolved"
    vsText.innerHTML = "VS";
    vsText.style.backgroundColor="unset";
    if(roundNum>=videoInfo.length-1)
        {
            console.log("end of game");
            endGame();
            return;
        }
    setLeftHalf(roundNum);
    setRightHalf(roundNum+1);
    roundNum++;
    roundNumText.innerHTML="Round Number : " +roundNum;
    
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
    function pressLower(){
        console.log("pressed lower / less");
        var choices = document.querySelector(".choices");
        var answer = document.querySelector(".answer");
        choices.style.display= "none";
        answer.style.display= "block"

        //calculate score
        var prevViews =Number(videoInfo[roundNum-1].statistics.viewCount);
        var currViews =Number(videoInfo[roundNum].statistics.viewCount);

        //if curr vido views is left than previous
        if(currViews<= prevViews){
            score++;
            scoreText.innerHTML = "Score : " + score;
            vsText.innerHTML = "&#10004;";
            vsText.style.backgroundColor="var(--correct)";
        }else{
            vsText.innerHTML = "&#10060;"
            vsText.style.backgroundColor="var(--incorrect)";
        }
        console.log("roundNum : ", roundNum);
        console.log("curr views : ",currViews);
        console.log("prev views : ", prevViews);
        /*
        var x=videoInfo[roundNum].statistics.viewCount-100;
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
    console.log("roundNum : ", roundNum);
    
    function pressHigher(){
        
        var choices = document.querySelector(".choices");
        var answer = document.querySelector(".answer");
        choices.style.display= "none";
        answer.style.display= "block";

        var prevViews =Number(videoInfo[roundNum-1].statistics.viewCount);
        var currViews =Number(videoInfo[roundNum].statistics.viewCount);

        console.log("roundNum : ", roundNum);
        console.log("curr views : ",currViews);
        console.log("prev views : ", prevViews);
        
        //if curr vido views is left than previous
        if(currViews>= prevViews){
            score++;
            scoreText.innerHTML = "Score : " + score;
            vsText.innerHTML = "&#10004;";
            vsText.style.backgroundColor="var(--correct)";
        }else{
            vsText.innerHTML = "&#10060;"
            vsText.style.backgroundColor="var(--incorrect)";
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
        endScoreText.innerHTML=score+ "/" + roundNum;
        endScreenText.style.display= "block";
    }

    function resetGame(){
        score=0;
        roundNum=1;
        videoInfo=[];
        scoreText.innerHTML="Score : " + score;
        roundNumText.innerHTML="Round Number : " +roundNum;
        leftHalf.style.display="block";
        rightHalf.style.display="block";
        vsText.innerHTML="VS";
        vsText.backgroundColor="unset";
        vsText.style.display="block";
        endScreenText.style.display= "none";
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

