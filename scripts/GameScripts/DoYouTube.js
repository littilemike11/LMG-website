const videoSection = document.querySelector('section');
const videoSection2 = document.querySelector('.example');

//get document by searching class name
const leftHalf = document.querySelector('.leftHalf');
const rightHalf = document.querySelector('.rightHalf');

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
/*
function getVideoCategories(){
    fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&chart=mostPopular&maxResults=10&regionCode=us&key=AIzaSyALoTeC4RHeVkkVAkkDdYxKrRZxDODjKGQ')
    .then(result => result.json())
    .then(data =>{
        data.items.forEach(element => {
            videoSection2.innerHTML += `
            <h3>${element.snippet.title}</h3>
            <p>by: ${element.snippet.channelTitle}</p>
            <p>published on : ${element.snippet.publishedAt}</p>
            <img src="${element.snippet.thumbnails.default.url}"/>
            <p>views : ${element.statistics.viewCount}<p>
            <p>likes : ${element.statistics.likeCount}<p>
            `
        });
        console.log(data);
    }).catch(err =>{
        console.log(err);
        videoSection.innerHTML = `<h3>Sorry something went wrong</h3>`
    });
    }
*/
//store fetch results in array to be accessed later.
    const videoInfo=[]
    const higherButton = document.getElementById("higher");
    const lowerButton = document.getElementById("lower");
    var roundNum=1;
    
    display();
    //must be called liek this to properly get valuie of videoinfo
    async function display(){
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

/*
function setChoices(half, i){
    half.innerHTML = `
    <div class="half">
        <p class = vidTitle">${videoInfo[i].snippet.title}</p>
        <p>by : ${videoInfo[i].snippet.channelTitle}</p>
        <p>published on : ${videoInfo[i].snippet.publishedAt}</p>
        <img width=640px height=480px src="${videoInfo[i].snippet.thumbnails.standard.url}"/>
        <p>views : ${videoInfo[i].statistics.viewCount}</p>
        <p>likes : ${videoInfo[i].statistics.likeCount}</p>
    
    `
    if(half == rightHalf){
        half.innerHTML+=`
        <div class="choices">
          <button onclick="pressHigher()" id="higher">Higher &uarr;</button>
          <button onclick="pressLower()" id="lower">Lower &darr;</button>
        </div>
        </div>
        `
    }else{
        half.innerHTML+=`</div>`
    }
    
}
*/
//fetch - later make paramter for fetch to be changed on video category id
async function getVideoInfo(){
        //return makes it wait
    return fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&chart=mostPopular&maxResults=10&regionCode=us&key=AIzaSyALoTeC4RHeVkkVAkkDdYxKrRZxDODjKGQ')
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
    setInterval(function() {
        if(x<1000){
            x++;
            answer.innerHTML=x;
        }else{
            return;
        }
        
    }, 1);

}

    function pressLower(){
        if(roundNum>=videoInfo.length-1)
        {
            console.log("end of game")
            return;
        }
        var choices = document.querySelector(".choices");
        var answer = document.querySelector(".answer");
        choices.style.display= "none";
        answer.style.display= "block"
        
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

        setLeftHalf(roundNum);
        setRightHalf(roundNum+1);
        roundNum++;
    }
    
    function pressHigher(){
        if(roundNum>=videoInfo.length-1)
        {
            console.log("end of game")
            return;
        }
        var choices = document.querySelector(".choices");
        var answer = document.querySelector(".answer");
        choices.style.display= "none";
        answer.style.display= "block";


        // console.log(" pressed higher")
        // console.log("prev round num = ",roundNum);
        // console.log(" pressed lower");
        setLeftHalf(roundNum);
        setRightHalf(roundNum+1);
        roundNum++;
        // console.log("new round num = ", roundNum)
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

