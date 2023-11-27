import { Container, Typography } from "@mui/material";
import ProjectCard from "./ProjectCard";

const gameHub = {
  name: "Game Hub",
  content: [
    "Developed a game listing website clone using React, Vite, and Typescript.",
    "Integrated frontend frameworks including Chakra UI and Bootstrap to enhance the user interface and experience.",
    "Implemented data fetching from the RAWG API to dynamically populate and display games in a grid format on the webpage.",
  ],
  skills: ["Bootstrap", "Vite", "Chakra UI", "Docker", "Typescript"],
  deployment: true,
  gitlink: "https://github.com/bevanjacinto/game-hub",
  deplink: "https://bevanjacinto.github.io/game-hub/",
};

const smp = {
  name: "Stock Market Prediction",
  content: [
    "Developed an LSTM model achieving an 85% prediction accuracy for stock prices using Python.",
    "Fetched data using Yahoo Finanace API",
    "Engineered a software application for deploying the machine learning model, leveraging Tkinter, Scikit-learn, Pandas, NumPy, and TensorFlow libraries.",
  ],
  skills: [
    "Python",
    "NumPy",
    "Tkinter",
    "Scikit-learn",
    "Pandas",
    "Tensorflow",
  ],
  deployment: false,
  gitlink: "https://github.com/bevanjacinto/stock-prediction",
};

const medlabs = {
  name: "Medlabs",
  content: [
    "Created a dynamic website from the ground up, employing HTML, CSS, and JavaScript for the front-end development.",
    "Used Apache for the server backend to render PHP scripts in the browser",
    "Engineered the back-end infrastructure of the website using PHP and MySQL, incorporating a robust shopping cart system.",
  ],
  skills: ["PHP", "MySql", "HTML", "CSS", "Javascript"],
  deployment: false,
  gitlink: "https://github.com/bevanjacinto/Medlabs",
};

const Projects = () => {
  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        display: "flex",
        background: "black",
        width: "100%",
        height: "100%",
        flexWrap: "wrap",
        gap: 3,
        paddingY: "60px",
        justifyContent: "center",

        // backgroundAttachment: "fixed",
        // // backgroundImage: `url(${background})`,
        // backgroundPosition: "center",

        // backgroundSize: "cover",
      }}
    >
      <Container disableGutters>
        <Typography
          variant="h3"
          align="center"
          fontFamily="poppins"
          fontWeight="600"
          letterSpacing={1}
          color="primary"
          marginBottom="30px"
        >
          Projects
        </Typography>
      </Container>
      <ProjectCard {...gameHub} />
      <ProjectCard {...smp} />
      <ProjectCard {...medlabs} />
      <Typography
        variant="h5"
        component="a"
        href="https://www.github.com/bevanjacinto"
        target="_blank"
        align="center"
        fontFamily="poppins"
        fontWeight="500"
        letterSpacing={1}
        color="primary"
        marginBottom="20px"
      >
        And many more...
      </Typography>
    </Container>
  );
};

export default Projects;
