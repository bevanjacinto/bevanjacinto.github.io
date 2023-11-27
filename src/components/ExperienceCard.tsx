import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container, List, ListItem } from "@mui/material";

interface Props {
  name: string;
  datefrom: string;
  dateTo: string;
  content: string[];
  logo: string;
}

export default function ExperienceCard(obj: Props) {
  return (
    <>
      {/* <Card
        sx={{
          display: {
            xs: "block",
            md: "block",
          },
          marginX: 1,
          maxWidth: 340,
          maxHeight: 500,
          borderRadius: 8,
          border: "2px solid black",
        }}
      >
        <CardHeader
          disableTypography={false}
          avatar={<Avatar src={obj.logo}></Avatar>}
          title={<Typography sx={{ fontWeight: 700 }}>{obj.name}</Typography>}
          subheader={
            <Typography>{obj.datefrom + " - " + obj.dateTo}</Typography>
          }
          titleTypographyProps={{ fontWeight: 600 }}
          sx={{ color: "black", background: "white" }}
        />

        <CardContent sx={{ background: "black" }}>
          <List sx={{ listStyleType: "disc" }}>
            {obj.content.map((line) => {
              return (
                <ListItem>
                  <Typography
                    variant="body2"
                    color="primary"
                    sx={{ display: "list-item", fontWeight: 500 }}
                  >
                    {line}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>

      <Card
        sx={{
          display: {
            xs: "block",
            md: "block",
          },
          marginX: 1,
          maxWidth: 340,
          maxHeight: 500,
          borderRadius: 8,
          border: "2px solid black",
        }}
      >
        <CardHeader
          disableTypography={false}
          avatar={<Avatar src={obj.logo}></Avatar>}
          title={<Typography>{obj.name}</Typography>}
          subheader={
            <Typography>{obj.datefrom + " - " + obj.dateTo}</Typography>
          }
          titleTypographyProps={{ fontWeight: 600 }}
          sx={{ color: "white", background: "black" }}
        />

        <CardContent sx={{ background: "white" }}>
          <List sx={{ listStyleType: "disc" }}>
            {obj.content.map((line) => {
              return (
                <ListItem>
                  <Typography
                    variant="body2"
                    color="secondary"
                    sx={{ display: "list-item", fontWeight: 500 }}
                  >
                    {line}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>

      <Card
        sx={{
          display: {
            xs: "block",
            md: "block",
          },
          marginX: 1,
          maxWidth: 340,
          maxHeight: 500,
          borderRadius: 8,
          border: "2px solid black",
        }}
      >
        <CardHeader
          disableTypography={false}
          avatar={<Avatar src={obj.logo}></Avatar>}
          title={<Typography>{obj.name}</Typography>}
          subheader={
            <Typography>{obj.datefrom + " - " + obj.dateTo}</Typography>
          }
          titleTypographyProps={{ fontWeight: 600 }}
          sx={{ color: "black", background: "white" }}
        />

        <CardContent sx={{ background: "white" }}>
          <List sx={{ listStyleType: "disc" }}>
            {obj.content.map((line) => {
              return (
                <ListItem>
                  <Typography
                    variant="body2"
                    color="secondary"
                    sx={{ display: "list-item", fontWeight: 500 }}
                  >
                    {line}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card> */}

      <Card
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
          marginX: 3,
          maxWidth: 450,
          maxHeight: 750,
          borderRadius: 8,
          border: "2px solid black",
          background: "black",
        }}
      >
        <CardHeader
          disableTypography={false}
          avatar={<Avatar src={obj.logo}></Avatar>}
          title={<Typography sx={{ fontWeight: 700 }}>{obj.name}</Typography>}
          subheader={
            <Typography sx={{ fontWeight: 700 }}>
              {obj.datefrom + " - " + obj.dateTo}
            </Typography>
          }
          sx={{ color: "white" }}
        />

        <CardContent>
          <List
            sx={{
              listStyleType: "disc",
            }}
          >
            {obj.content.map((line) => {
              return (
                <ListItem key={line}>
                  <Typography
                    variant="body2"
                    color="primary"
                    sx={{ display: "list-item", fontWeight: 500, fontSize: 15 }}
                  >
                    {line}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>

      {/* Mobile view */}

      <Card
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
          marginX: 3,
          maxWidth: 450,
          maxHeight: 750,
          borderRadius: 8,
          border: "2px solid black",
          background: "black",
        }}
      >
        <CardHeader
          disableTypography={false}
          avatar={<Avatar src={obj.logo}></Avatar>}
          title={<Typography sx={{ fontWeight: 700 }}>{obj.name}</Typography>}
          subheader={
            <Typography sx={{ fontWeight: 700 }}>
              {obj.datefrom + " - " + obj.dateTo}
            </Typography>
          }
          sx={{ color: "white" }}
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
                    color="primary"
                    sx={{
                      display: "list-item",
                      fontWeight: 500,
                      fontSize: 10.5,
                    }}
                  >
                    {line}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </Card>
    </>
  );
}
