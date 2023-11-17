import * as React from "react";
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
          maxWidth: 320,
          width: "100%",
          display: { xs: "none", md: "flex" },
          marginX: 8,
          border: "1px solid black",
          borderRadius: "10px",
          boxShadow: "3px 3px grey",
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
              >
                {obj.name}
              </Typography>
            </Container>
            <Container disableGutters>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                fontFamily="poppins"
                fontWeight="500"
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

      {/* Mobile view */}

      <Card
        sx={{
          maxWidth: 400,
          maxHeight: 400,
          width: "100%",
          height: "100%",
          display: { xs: "flex", md: "none" },
          marginX: "10px",
          borderRadius: "10px",
          border: "2px solid black",
          padding: "8px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={obj.img}
            alt="green iguana"
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
              >
                {obj.name}
              </Typography>
            </Container>
            <Container disableGutters>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                fontFamily="poppins"
                fontWeight="500"
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
