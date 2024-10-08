import { Button, Container, Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import resume from "../assets/BevanResume_IN.pdf";
import Typewriter from "typewriter-effect";
import myImage from "../assets/new.jpeg";

const About = () => {
  return (
    <>
      <section id="About">
        <Container
          sx={{
            display: { xs: "none", md: "flex" },
            marginTop: "100px",
            justifyContent: "center",
            width: "100%",
            height: "560px",
          }}
          maxWidth="xl"
        >
          <Stack direction="row" sx={{ gap: 10 }}>
            <Container
              disableGutters
              sx={{
                display: "flex",
                height: "450px",
                width: "450px",
              }}
            >
              <img style={{ borderRadius: 10 }} src={myImage} alt="" />
            </Container>
            <Container disableGutters sx={{ display: "flex" }}>
              <Stack
                sx={{
                  height: "450px",
                  width: "450px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
                {/* <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "2rem",
                    color: "rgb(85,85,85)",
                    fontFamily: "poppins",
                  }}
                >
                  Fullstack developer
                </Typography> */}
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "2rem",
                    color: "rgb(85,85,85)",
                    fontFamily: "poppins",
                  }}
                >
                  <Typewriter
                    options={{
                      strings: ["Fullstack Developer", "Software Engineer"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Typography>
                <a
                  href={resume}
                  download="BevanResume"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
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
                </a>
                <Container
                  sx={{
                    justifyContent: "center",
                    gap: "1rem",
                    display: "flex",
                  }}
                >
                  <LinkedInIcon
                    sx={{
                      fontSize: "50px",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                    onClick={() =>
                      window.open("https://www.linkedin.com/in/bevan-jacinto")
                    }
                  />
                  <GitHubIcon
                    sx={{
                      fontSize: "50px",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                    onClick={() =>
                      window.open("https://www.github.com/bevanjacinto")
                    }
                  />
                </Container>
              </Stack>
            </Container>
          </Stack>
        </Container>
        {/* Mobile code */}
        <Stack
          id="About"
          direction="column"
          sx={{
            alignItems: "center",
            display: {
              xs: "flex",
              md: "none",
            },
          }}
        >
          <Stack
            sx={{
              height: "400px",
              width: "320px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "0.8rem",
                color: "rgb(85,85,85)",
                fontFamily: "poppins",
              }}
            >
              Hello, I'm
            </Typography>
            <Typography
              sx={{
                fontSize: "2.5rem",
                fontWeight: 700,
                fontFamily: "poppins",
              }}
            >
              Bevan Jacinto
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "1.5rem",
                color: "rgb(85,85,85)",
                fontFamily: "poppins",
              }}
            >
              <Typewriter
                options={{
                  strings: ["Fullstack Developer", "Software Engineer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Typography>
            <a
              href={resume}
              download="BevanResume"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
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
            </a>
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
        </Stack>
      </section>
    </>
  );
};

export default About;
