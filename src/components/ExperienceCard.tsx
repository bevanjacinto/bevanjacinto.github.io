import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { List, ListItem } from "@mui/material";

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
      <Card
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
          marginX: 3,
          maxWidth: 550,
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
          marginX: 2,
          maxWidth: 400,
          maxHeight: 760,
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
