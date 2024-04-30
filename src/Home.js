import Typewriter from "typewriter-effect";
import './Home.css';

function Home() {


    return (
      <div className="Content-home">
        <h1>Hi! I'm Sophie</h1>
        <h2>I'm a Front-End Developer looking for my next challenge.</h2>
        <Typewriter
            options={{
                loop: true,
                delay: 90,
                deleteSpeed: 'natural'
            }}
            onInit={(typewriter)=> {
            typewriter
                .typeString("I'm a fast learner and always looking to discover new technologies 🤓")
                .pauseFor(1500)
                .deleteAll()
                .typeString("I am a multi-disciplined, inquisitive and team-oriented problem solver ")
                .pauseFor(1500)
                .deleteAll()
                .typeString("I like to share what I know")
                .pauseFor(1500)
                .deleteAll()
                .typeString("I am a passionate supporter of women in STEM")
                .pauseFor(1500)
                .deleteAll()
                .start();
            }}
        />
      </div>
    );
  }
  
  export default Home;
  