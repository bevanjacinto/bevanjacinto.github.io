import {
  Card,
  Typography,
  CardContent,
  List,
  ListItem,
  Button,
  CardActions,
  Container,
  CardHeader,
} from "@mui/material";

interface Props {
  name: string;
  skills: string[];
  deployment: boolean;
  content: string[];
  gitlink: string;
  deplink?: string;
}

// const obj = [
//   "Developed a game listing website clone using React, Vite, and Typescript.",
//   "Integrated frontend frameworks including Chakra UI and Bootstrap to enhance the user interface and experience.",
//   "Implemented data fetching from the RAWG API to dynamically populate and display games in a grid format on the webpage.",
// ];

// const skills = [
//   "Figma",
//   "Java",
//   "Python",
//   "Docker",
//   "AWS",
//   "React.js",
//   "React.js",
//   "React.js",
//   "React.js",
// ];

const ProjectCard = (obj: Props) => {
  return (
    <>
      <Card
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
          maxWidth: 450,
          borderRadius: 4,
        }}
      >
        <CardHeader
          title={
            <Typography variant="h5" fontWeight={600} align="center">
              {obj.name}
            </Typography>
          }
        />
        <CardContent>
          <List
            sx={{
              listStyleType: "disc",
            }}
          >
            {obj.content.map((line) => {
              return (
                <ListItem>
                  <Typography
                    variant="body2"
                    color="secondary"
                    sx={{ display: "list-item", fontWeight: 400, fontSize: 15 }}
                  >
                    {line}
                  </Typography>
                </ListItem>
              );
            })}
          </List>

          <Container disableGutters>
            {obj.skills.map((skill) => {
              return (
                <Typography
                  borderRadius={3}
                  fontSize={14}
                  paddingX={1.1}
                  margin={0.5}
                  paddingY={0.4}
                  display="inline-flex"
                  sx={{
                    background: "black",
                    color: "white",
                  }}
                >
                  {skill}
                </Typography>
              );
            })}
          </Container>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            fullWidth
            size="small"
            color="secondary"
            component="a"
            target="_blank"
            href={obj.gitlink}
            sx={{ fontSize: 20 }}
          >
            Code
          </Button>
          {obj.deployment && (
            <Button
              size="small"
              color="secondary"
              component="a"
              target="_blank"
              href={obj.deplink}
              fullWidth
              sx={{ fontSize: 20 }}
            >
              Deploy
            </Button>
          )}
        </CardActions>
      </Card>

      {/* Mobile View */}

      <Card
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
          marginX: 3,
          maxWidth: 450,
          maxHeight: 650,
          borderRadius: 4,
        }}
      >
        <CardHeader
          title={
            <Typography variant="h5" fontWeight={600} align="center">
              {obj.name}
            </Typography>
          }
        />
        <CardContent>
          <List
            sx={{
              listStyleType: "disc",
            }}
          >
            {obj.content.map((line) => {
              return (
                <ListItem>
                  <Typography
                    variant="body2"
                    color="secondary"
                    sx={{ display: "list-item", fontWeight: 400, fontSize: 15 }}
                  >
                    {line}
                  </Typography>
                </ListItem>
              );
            })}
          </List>

          <Container disableGutters>
            {obj.skills.map((skill) => {
              return (
                <Typography
                  borderRadius={3}
                  fontSize={14}
                  paddingX={1.1}
                  margin={0.5}
                  paddingY={0.4}
                  display="inline-flex"
                  sx={{
                    background: "black",
                    color: "white",
                  }}
                >
                  {skill}
                </Typography>
              );
            })}
          </Container>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            fullWidth
            size="small"
            color="secondary"
            component="a"
            target="_blank"
            href={obj.gitlink}
            sx={{ fontSize: 20 }}
          >
            Code
          </Button>
          {obj.deployment && (
            <Button
              size="small"
              color="secondary"
              component="a"
              target="_blank"
              href={obj.deplink}
              fullWidth
              sx={{ fontSize: 20 }}
            >
              Deploy
            </Button>
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default ProjectCard;
