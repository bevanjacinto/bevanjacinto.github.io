import { Container, Typography } from "@mui/material";
import ExperienceCard from "./ExperienceCard";
import frugal from "../assets/fih.png";
import jio from "../assets/Jio-Logo.png";
import rocket from "../assets/rocket_mortgage_profile_picture.png";
import tcon from "../assets/tcs_logo.png";
import nt from "../assets/nt.jpg";
import htech from "../assets/hcl.jpg";

const fih = [
  "Developed dynamic and reusable buttons and forms using React and Typescript for an e-learning application to teach unprivileged children.",
  "Integrated Material-UI components to ensure a consistent and visually appealing design across the application.",
  "Created web interfaces using HTML, CSS, Typescript and Bootstrap to develop an internal UI for Frugal developers to update their weekly progress.",
  "Developing cross-platform full-stack applications using Flutter and Dart, with Firebase for backend support.",
  "Collaborated with non-profit organizations to create resource applications catering to people with disabilities.",
];

const rc = [
  "Crafted validation scripts using Joi (data validator) for multiple forms in the mortgaging application flow using Angular and Typescript to ensure accurate prediction of mortgage rates.",
  "Used the Rocket Mortgage API to persist users mortgage application progress and data for smooth retrieval at a later point in the future.",
  "Leveraging Git and GitHub for code management, version control and continuous integration.",
  "Created different UI views using HTML, CSS and Typescript for different clients originating through one of the many Rocket Mortgage partners.",
];

const rj = [
  "Served as a software developer, responsible for implementing user interface (UI/UX) designs using HTML, CSS, Bootstrap and frontend technologies like Angular.",
  "Designed and developed Data VisualizationWeb Dashboards using Angular, TypeScript, and HighchartsJS.",
  "Created an API using NodeJS and Express to fetch application data from a MongoDB database to be integrated with the dashboards.",
  "These dashboards presented tabular and graphical representations of KPIs (Key Performance Indicators), such as User Retention and Churn Rate, for various Jio Media applications.",
  "Delivered an 80% reduction in manual queries and significantly improved the efficiency of report generation, enhancing the analysis of key performance metrics and aiding business decision-making for Jio products.",
];

const tcs = [
  "Designed and developed React components using HTML, CSS, and TypeScript to enhance Tata Consultancy Services web pages, making it more user friendly.",
  "Created forms and dashboards using React and Bootstrap, facilitating seamless claim report filing for TCS’s claims department, fostering improved communication between HR and 10,000 employees.",
  "Used Git for collaborative version control and code review, ensuring efficient code management.",
  "Utilized NodeJS and Express to develop RESTful services within React, enabling efficient retrieval of employee data across multiple pages, optimizing data management and accessibility of claim services.",
];

const ntr = [
  "Spearheaded the development of wealth management microservices at Northern Trust, utilizing Java and Spring MVC to architect scalable solutions.",
  "Worked on a 20% improvement in system performance through meticulous backend optimizations and efficient implementation of Hibernate for database operations.",
  "Employed Angular's i18n features to facilitate internationalization and localization, ensuring the financial application's adaptability to diverse language and regional requirements.",
  "Utilized PostgreSQL's advanced indexing and query optimization features to enhance database performance, resulting in a 15% reduction in query response times.",
  "Implemented the web layer using Spring MVC, facilitating the development of RESTful APIs and handling client requests efficiently.",
  "Enabled encryption at rest and in transit using AWS Key Management Service to safeguard sensitive financial data.",
  "Conducted security testing using tools like OWASP ZAP to identify and address potential vulnerabilities in the application, ensuring robust protection of sensitive financial data.",
  "Contributed to an improvement in user satisfaction by integrating an intuitive design and advanced functionality into the financial system.",
];

const hcl = [
  "Served as a Full Stack Java developer, responsible for implementing user interface (UI/UX) designs using HTML, CSS, Bootstrap, and frontend technologies like React.",
  "Designed and developed Data Visualization Web Dashboards using React, TypeScript, and HighchartsJS.",
  "These dashboards presented tabular and graphical representations of KPIs (Key Performance Indicators), such as User Retention and Churn Rate, for various applications.",
  "Used Core Java features including Collections framework, exception handling, generics and annotations in coding.",
  "Delivered an 80% reduction in manual queries and significantly improved the efficiency of report generation, enhancing the analysis of key performance metrics and aiding business decision-making.",
  "Created forms and dashboards using React and Bootstrap, facilitating seamless claim report filing for claims department, fostering improved communication between HR and 10,000 employees.",
  "Used Git for collaborative version control and code review, ensuring efficient code management.",
  "Implemented secure authentication and authorization mechanisms, including OAuth and JWT, to protect sensitive data and ensure user privacy.",
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
        {/* <ExperienceCard
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
        /> */}
        <ExperienceCard
          name="Northern Trust"
          datefrom="Sept 2022"
          dateTo="Present"
          logo={nt}
          content={ntr}
        />
        <ExperienceCard
          name="HCL Tech"
          datefrom="Nov 2018"
          dateTo="Sept 2021"
          logo={htech}
          content={hcl}
        />
      </Container>
    </>
  );
};

export default Experience;
