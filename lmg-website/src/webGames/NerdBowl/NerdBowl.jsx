import LMG from "../../components/game-components/LMG"
import "../../game.css"
export default function NerdBowl(){

    async function fetchData(Category){
        try {
            const response = await axios.get(uri);
            //for each element in results copy it into question array
            //api results and questions arr should be same
            console.log(response.data.results);
            //   console.log(questions);
            response.data.results.forEach((element) => {
              questions.push(element);
            });
            //   console.log(response.data.results[0].question);
            //   console.log(response.data.results[0].correct_answer);
            correctAnswer = questions[0].correct_answer;
            //setting question text to the question on api
            //innerhtml used to make text more readable ( instead of &quot)
            questionText.innerHTML = questions[0].question;
            questionCounter.textContent = "1.";
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        
          //console.log(response.data);
        }
    

    return(
        <>
            <div className="Game">
                <LMG />
                
                <details className="dropdown">
                    <summary className="btn m-1">Choose a Category</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Video Games</a></li>
                        <li><a>Anime & Manga</a></li>
                        <li><a>Cartoon & Animations</a></li>
                    </ul>
                </details>
                <button className="btn">Start</button>
            </div>
        </>
    )
}