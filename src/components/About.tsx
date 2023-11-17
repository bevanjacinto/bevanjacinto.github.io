import { Button, Container, Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { green } from "@mui/material/colors";

const About = () => {
  return (
    <>
      <Container
        sx={{
          display: { xs: "none", md: "flex" },
          marginTop: "150px",

          width: "930px",
          height: "565px",
          //background: "red",
        }}
      >
        <Stack direction="row" sx={{ gap: 10 }}>
          <Container
            disableGutters
            sx={{
              display: "flex",
              height: "400px",
              width: "400px",
            }}
          >
            <img src="src\assets\new.jpeg" alt="" />
          </Container>
          <Container disableGutters sx={{ display: "flex" }}>
            <Stack
              sx={{
                height: "400px",
                width: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                //background: "green",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "rgb(85,85,85)",
                  fontFamily: "poppins",
                }}
              >
                Hello, I'm
              </Typography>
              <Typography
                sx={{
                  fontSize: "3rem",
                  fontWeight: 700,
                  fontFamily: "poppins",
                }}
              >
                Bevan Jacinto
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "2rem",
                  color: "rgb(85,85,85)",
                  fontFamily: "poppins",
                }}
              >
                Fullstack developer
              </Typography>
              <Button
                color="secondary"
                sx={{
                  my: 2,
                  display: "block",
                  fontFamily: "poppins",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.1rem",
                  borderRadius: 5,
                  border: "1.8px solid",
                  paddingX: "18px",
                  paddingY: "10px",
                  transition: "all 300ms ease",
                  "&:hover": {
                    background: "black",
                    color: "white",
                  },
                }}
              >
                Download CV
              </Button>
              <Container
                sx={{
                  justifyContent: "center",
                  gap: "1rem",
                  display: "flex",
                }}
              >
                <LinkedInIcon sx={{ fontSize: "50px" }} />
                <GitHubIcon sx={{ fontSize: "50px" }} />
              </Container>
            </Stack>
          </Container>
        </Stack>
      </Container>

      {/* Mobile code */}

      {/* <Container
        sx={{
          display: { xs: "flex", md: "none" },
          flexWrap: "wrap",
        }}
      >
        <Stack direction="column" sx={{}}>
          <Container
            sx={{
              position: "absolute",
              display: "flex",
              height: "80vh",
              width: "100vh",
            }}
          >
            <img src="src\assets\new.jpeg" alt="" />
          </Container>
        </Stack>
      </Container> */}
    </>
  );
};

export default About;
