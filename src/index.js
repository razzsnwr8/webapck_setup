import generateJoke from "./generateJoke";
import laughing from "./assets/laughing.svg";
import "./styles/main.scss";

function jokeGenerateFn(){
  const laughingImage = document.getElementById("laughing");
  const jokeBtn = document.getElementById("jokeBtn");

  laughingImage.src = laughing;
  jokeBtn.addEventListener("click", generateJoke);
};

jokeGenerateFn();