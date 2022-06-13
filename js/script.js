function init() {
  // Put the quotes into an array
  const chuckQuotes = [
    "Chuck Norris helps out NASA by throwing astronauts into space.",
    "In high school, Chuck Norris would get out of math class by dividing by zero and then escaping through the wormhole it produced.",
    "Chuck Norris is only demonic on the inside.",
    "On NCIS, when Gibbs wants your attention he gives you a head slap. When Chuck Norris wants your attention, he gives you a skull punch.",
    "Every year on his birthday, Chuck norris randomly selects one lucky child to be thrown into the sun.",
    "Chuck Norris flosses his teeth with his tongue",
    'Chuck Norris first word was "apocalypse".',
    "When Chuck Norris walks into a party, everyone immediately has an orgasm... even the men.",
    "Chuck Norris once broke a large anaconda spine.",
    "Chuck Norris can hack the shit outta you with a samurai sword and make it look like you died of natural causes.",
    "Chuck Norris once rode a bull, and nine months later it had a calf.",
    "The Terminator peed his pants when he turned around and saw Chuck Norris behind him.",
    "Chuck Norris can lick his own elbow",
    "When Chuck Norris plays scrabble, hjdldudhqe IS a real word",
    "when you play COD with Chuck Norris the escape button does not work! No one can escape from Chuck Norris.",
    "In lieu of shark week. When Chuck Norris goes shark diving. It is the sharks that jump into a steel cage for their protection.",
  ];

  // console.log(chuckQuotes[random]);

  // Select the button class
  const clickButton = document.querySelector(".chuckQuotes");

  // Add an event on the button when we click on it
  clickButton.addEventListener(
    "click",
    (chuckSay = (e) => {
      // Randomly choose a number according the length of the array 'chuckQuotes'
      let random = Math.floor(Math.random() * chuckQuotes.length);
      // use the random number as index for the chosen quote and push it into the <p> with the class .chuckSay
      document.querySelector(".chuckSay").innerHTML = chuckQuotes[random];
    })
  );
}

document.addEventListener("DOMContentLoaded", init);
