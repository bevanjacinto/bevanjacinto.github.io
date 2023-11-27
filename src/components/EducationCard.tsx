import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";

interface Props {
  name: string;
  img: string;
  dateFrom: string;
  dateTo: string;
  degreeName: string;
}

export default function ActionAreaCard(obj: Props) {
  return (
    <>
      <Card
        sx={{
          marginX: 3,
          maxWidth: 450,
          maxHeight: 750,
          borderRadius: 8,
          width: "100%",
          display: { xs: "none", md: "flex" },
          border: "1px solid black",

          padding: "12px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="320"
            image={obj.img}
            alt="University"
          />
          <CardContent>
            <Container disableGutters>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ background: "white" }}
                fontFamily="poppins"
                fontWeight="700"
                align="center"
                fontSize={28}
              >
                {obj.name}
              </Typography>
            </Container>
            <Container disableGutters>
              <Typography
                variant="body2"
                color="secondary"
                align="center"
                fontFamily="poppins"
                fontWeight="600"
                fontSize={16}
              >
                {obj.degreeName}
              </Typography>
            </Container>
            <Container>
              <Typography variant="body2" color="secondary" align="center">
                {obj.dateFrom + " - " + obj.dateTo}
              </Typography>
            </Container>
          </CardContent>
        </CardActionArea>
      </Card>

      {/* Mobile view */}

      <Card
        sx={{
          marginX: 3,
          maxWidth: 450,
          maxHeight: 750,
          borderRadius: 8,
          width: "100%",
          height: "100%",
          display: { xs: "flex", md: "none" },
          border: "2px solid black",
          padding: "8px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={obj.img}
            alt="University"
          />
          <CardContent>
            <Container disableGutters>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
                fontFamily="poppins"
                fontWeight="700"
                fontSize={20}
              >
                {obj.name}
              </Typography>
            </Container>
            <Container disableGutters>
              <Typography
                variant="body2"
                color="secondary"
                align="center"
                fontFamily="poppins"
                fontWeight="500"
                fontSize={15}
              >
                {obj.degreeName}
              </Typography>
            </Container>
            <Container>
              <Typography variant="body2" color="text.secondary" align="center">
                {obj.dateFrom + " - " + obj.dateTo}
              </Typography>
            </Container>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
