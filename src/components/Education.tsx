import { Container, Typography } from "@mui/material";
import ExperienceCard from "./EducationCard";
import MasterUni from "../assets/Santa_Clara_U_Seal.svg.png";
import BachelorUni from "../assets/University_of_Mumbai_coat_of_arms.svg.png";

const Education = () => {
  return (
    <>
      <Container
        id="Education"
        disableGutters
        maxWidth="xl"
        sx={{
          display: "flex",
          background: "black",
          width: "100%",
          height: "100%",
          flexWrap: "wrap",
          gap: 3,
          paddingY: "70px",
          justifyContent: "center",
        }}
      >
        <Container>
          <Typography
            variant="h3"
            align="center"
            fontFamily="poppins"
            fontWeight="600"
            letterSpacing={1}
            color="primary"
            marginBottom="30px"
          >
            Education
          </Typography>
        </Container>
        <ExperienceCard
          name="Santa Clara University"
          img={MasterUni}
          dateFrom="2021"
          dateTo="2023"
          degreeName="MS Computer Science & Engineering"
        />
        <ExperienceCard
          name="University of Mumbai"
          img={BachelorUni}
          dateFrom="2016"
          dateTo="2020"
          degreeName="BE Information Technology"
        />
      </Container>
    </>
  );
};

export default Education;
