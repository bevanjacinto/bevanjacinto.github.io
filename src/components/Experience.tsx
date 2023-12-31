import { Container, Typography } from "@mui/material";
import ExperienceCard from "./ExperienceCard";
import frugal from "../assets/fih.png";
import jio from "../assets/Jio-Logo.png";
import rocket from "../assets/rocket_mortgage_profile_picture.png";
import tcon from "../assets/tcs_logo.png";

const fih = [
  "Developed dynamic and responsive user interfaces using React.js, leveraging component-based architecture.",
  "Implemented state management with React Hooks and Context API to enhance application functionality and maintainability.",
  "Integrated Material-UI components to ensure a consistent and visually appealing design across the application.",
  "Developing cross-platform full-stack applications using Flutter and Dart, with Firebase for backend support.",
  "Collaborated with non-profit organizations to create informative applications catering to people with disabilities.",
];

const rc = [
  "Played an integral role in supporting daily operations by actively participating in code reviews as well as implementation of changes and enhancements to the Rocket Mortgage Application websites.",
  "Crafted validation scripts for multiple forms in Angular and Typescript to enhance the reliability and eliminate bugs in the purchase flow for various products within the Rocket group of companies.",
  "Leveraging Git and GitHub for code management, version control and continuous integration.",
  "Developed high-performance applications using Angular and Typescript in five different Rocket Mortgage applications used by the 2.5 million clients.",
];

const rj = [
  "Served as a software developer, responsible for implementing user interface (UI/UX) designs using HTML, CSS, Bootstrap and frontend technologies like Angular.",
  "Played a key role in implementing changes to web pages across five distinct Reliance products.",
  "Designed and developed Data Visualization Web Dashboards using Angular, TypeScript, and Highcharts JS. These dashboards presented tabular and graphical representations of KPIs (Key Performance Indicators), such as UserRetention and Churn Rate, for various Jio Media applications.",
  "Delivered an 80% reduction in manual queries and significantly improved the efficiency of report generation, enhancing the analysis of key performance metrics and aiding decision-making for Jio Media applications.",
];

const tcs = [
  "Designed and developed reusable React components using HTML, CSS, and TypeScript to enhance Tata Consultancy Services web pages, ensuring code maintainability and consistency.",
  "Created user-friendly forms and dashboards using React and Bootstrap, facilitating seamless claim report filing for TCS’s claims department, fostering improved communication between HR and 10,000 employees.",
  "Used Git for collaborative version control and code review, ensuring efficient code management.",
  "Utilized Node.js and Express.js to develop RESTful services within React, enabling efficient retrieval of employee data across multiple pages, optimizing data management and accessibility.",
];

const Experience = () => {
  return (
    <>
      <Container
        id="Experience"
        disableGutters
        maxWidth="xl"
        sx={{
          display: "flex",
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
        <Container>
          <Typography
            variant="h3"
            align="center"
            fontFamily="poppins"
            fontWeight="600"
            letterSpacing={1}
            color="secondary"
            marginBottom="30px"
          >
            Experience
          </Typography>
        </Container>
        <ExperienceCard
          name="Frugal Innovation Hub"
          datefrom="Jan 2022"
          dateTo="Present"
          logo={frugal}
          content={fih}
        />
        <ExperienceCard
          name="Rocket Central"
          datefrom="Jun 2022"
          dateTo="Aug 2022"
          logo={rocket}
          content={rc}
        />
        <ExperienceCard
          name="Reliance Jio"
          datefrom="Sept 2020"
          dateTo="Aug 2021"
          logo={jio}
          content={rj}
        />
        <ExperienceCard
          name="Tata Consultancy Services"
          datefrom="Jun 2019"
          dateTo="Feb 2020"
          logo={tcon}
          content={tcs}
        />
      </Container>
    </>
  );
};

export default Experience;
