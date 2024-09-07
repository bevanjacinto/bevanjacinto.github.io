import { Container, Typography } from "@mui/material";
import ExperienceCard from "./ExperienceCard";
import frugal from "../assets/fih.png";
import jio from "../assets/Jio-Logo.png";
import rocket from "../assets/rocket_mortgage_profile_picture.png";
import tcon from "../assets/tcs_logo.png";
import nt from "../assets/nt.jpg";
import htech from "../assets/hcl.jpg";

const fih = [
  "Developed and implemented user interface (UI/UX) designs utilizing technologies such as HTML, CSS, Bootstrap, and Angular, ensuring a responsive and user-friendly experience.",
  "Designed and developed data visualization web dashboards using Angular, TypeScript, and HighchartsJS to present key metrics clearly and effectively.",
  "Created and integrated APIs using NodeJS and Express to retrieve and display data from a MongoDB database, ensuring seamless data flow and real-time updates in dashboards.",
  "Provided visual and tabular representations of critical KPIs (Key Performance Indicators) such as user engagement and retention rates, supporting data-driven decision-making.",
  "Achieved a significant reduction in manual data queries (by 80%), streamlining the process of generating reports and enhancing the accuracy and speed of performance analysis for key business metrics.",
];

const rc = [
  "Crafted validation scripts using Joi (data validator) for multiple forms in the mortgaging application flow using Angular and Typescript to ensure accurate prediction of mortgage rates.",
  "Used the Rocket Mortgage API to persist users mortgage application progress and data for smooth retrieval at a later point in the future.",
  "Leveraging Git and GitHub for code management, version control and continuous integration.",
  "Created different UI views using HTML, CSS and Typescript for different clients originating through one of the many Rocket Mortgage partners.",
];

const rj = [
  "Collaborated closely with the market research and data analysis teams to conduct surveys and gather valuable insights on the product experiences of the newly launched video conferencing application, Jiomeet.",
  "Played a key role in ensuring high-quality user experiences and customer satisfaction for multiple Jio products.",
  "Worked collaboratively with cross-functional teams, including market research and data analysis, to gather and analyze user feedback and insights.",
  "Demonstrated leadership skills in overseeing service validation activities and ensuring the successful deployment of releases.",
];

const tcs = [
  "Created a Machine Learning based classifier in Python using Natural Language Processing (NLP) to categorize Tata Consultancy Services employee claim reports into seven distinct categories using NLTK (Natural Language Toolkit).",
  "Leveraged Anaconda Python for preprocessing of data using stemming and lemmatization.",
  "Used Git for collaborative version control and code review, ensuring efficient code management.",
  "Developed an organizational solution that effectively bridged communication between 10,000 employees and the Human Resources department, resulting in significant time savings of up to 70% previously spent on manual processes.",
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
        <ExperienceCard
          name="Frugal Innovation Hub"
          datefrom="Sept 2023"
          dateTo="Aug 2024"
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
          dateTo="July 2021"
          logo={jio}
          content={rj}
        />
        <ExperienceCard
          name="Tata Consultancy Services"
          datefrom="Jun 2019"
          dateTo="Aug 2019"
          logo={tcon}
          content={tcs}
        />
        {/* <ExperienceCard
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
        /> */}
      </Container>
    </>
  );
};

export default Experience;
