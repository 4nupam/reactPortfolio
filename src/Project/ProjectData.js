import projectOne from "../assets/Project1.png";
import projectTwo from "../assets/Project2.png";
import projectThree from "../assets/project3.png";

const projects = {
  1: {
    title: "Weather App",
    image: projectOne,
    description: (
      <>
        <p>
          A Weather App in which i toke all the data from API.
        </p>
      </>
    ),
    github: "https://github.com/4nupam/Weather_App",
    demo: "https://lnkd.in/dUArawy6",
  },
  2: {
    title: "E-Commerce",
    image: projectTwo,
    description: (
      <>
        <p>
          An E-Commerce front-end page, made it by using of HTML,CSS and Javascript.
        </p>
      </>
    ),
    github: "https://github.com/4nupam/Anon",
    demo: "https://anon-ten.vercel.app/",
  },
  3: {
    title: "Movie App",
    image: projectThree,
    description: (
      <>
        <p>
        I have created a Movie app, which is a IMDB clone created on React App.
This React project is providing us the list of upcoming, popular & top rated movies.
 On clicking on any movie it will show us the detail page of the movie.
        </p>
      </>
    ),
    github: "https://github.com/4nupam/MovieApp",
    demo: "https://movie-app-4nupam.vercel.app/",
  },
};

export default projects;