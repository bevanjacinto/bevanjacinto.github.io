import {
  Card,
  Typography,
  CardContent,
  List,
  ListItem,
  Button,
  CardActions,
  Container,
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
      {/* <Card sx={{ maxWidth: 450, borderRadius: 4 }}>
        <CardMedia
          sx={{ height: 200 }}
          image="/src/assets/fih.png"
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            fontWeight={600}
            component="div"
          >
            Game Hub
          </Typography>
          <List
            sx={{
              listStyleType: "disc",
            }}
          >
            {obj.map((line) => {
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
          <Typography display="flex">
            Skills:
            {skills.map((skill) => {
              return (
                <Typography
                  border="1px solid black"
                  borderRadius={3}
                  fontSize={12}
                  paddingX={0.6}
                  paddingY={0.2}
                  marginX={0.4}
                >
                  {skill}
                </Typography>
              );
            })}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary">
            Code
          </Button>
          {true && (
            <Button size="small" color="secondary">
              Deploy
            </Button>
          )}
        </CardActions>
      </Card> */}

      <Card sx={{ maxWidth: 450, borderRadius: 4 }}>
        {/* <CardMedia
          sx={{ height: 200 }}
          image="/src/assets/fih.png"
          title="green iguana"
        /> */}
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            fontWeight={600}
            component="div"
            align="center"
          >
            {obj.name}
          </Typography>

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

      {/* <Card sx={{ maxWidth: 450, borderRadius: 4 }}>
        <CardMedia
          sx={{ height: 200 }}
          image="/src/assets/fih.png"
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            fontWeight={600}
            component="div"
          >
            Game Hub
          </Typography>
          <List
            sx={{
              listStyleType: "disc",
            }}
          >
            {obj.map((line) => {
              return (
                <ListItem key={line}>
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
          <Typography display="flex">
            Skills:
            {skills.map((skill) => {
              return (
                <Typography
                  border="1px solid black"
                  borderRadius={3}
                  fontSize={12}
                  paddingX={0.6}
                  paddingY={0.2}
                  marginX={0.4}
                >
                  {skill}
                </Typography>
              );
            })}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="secondary">
            Code
          </Button>
          {true && (
            <Button size="small" color="secondary">
              Deploy
            </Button>
          )}
        </CardActions>
      </Card> */}
    </>
  );
};

export default ProjectCard;
