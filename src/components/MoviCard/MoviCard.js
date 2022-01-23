import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import "./style.css";
import { Link } from "react-router-dom";
import { Button, CardActions } from "@mui/material";

export default function MoviCard({ cardList, titleshearch, ratingSearch }) {
  return (
    <div className="movicards">
      {cardList
        .filter(
          (movi) =>
            movi.name.toLowerCase().includes(titleshearch.toLowerCase()) &&
            movi.rating >= ratingSearch
        )
        .map((card) => (
          <Card
            sx={{
              display: "flex",
              maxWidth: "40%",
              marginTop: 10,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {card.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {card.date} <br />
                  {card.type}
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  >
                    <br />
                    <Rating name="simple-controlled" value={card.rating} />
                  </Box>
                  <h4>{card.description}</h4>
                </Typography>
                <CardActions>
                  <Button size="small">
                    <Link underline="always" to={`Description/${card.link}`}>
                      plus
                    </Link>
                  </Button>
                </CardActions>
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={card.image}
              alt="Live from space album cover"
            />
          </Card>
        ))}
    </div>
  );
}
