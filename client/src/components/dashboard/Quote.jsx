import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import axios from "axios";

export default function Quote() {
  const [quote, setQuote] = useState([]);
  console.log("QUOTE", quote);
  const api_url = "https://zenquotes.io/api/quotes/";

  async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
  }

  getapi(api_url);

  // https://zenquotes.io/api/quotes/[YOUR_API_KEY]&keyword=happiness
  useEffect(() => {
    axios
      .get("https://zenquotes.io/api/quotes")
      .then((result) => {
        console.log("result", result);
        setQuote(result);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Card
      id='quote-card'
      sx={{
        width: "70%",
        height: "20vh",
        borderRadius: "15px",
        boxShadow: "5px 5px 0px 2px #f7faff",
      }}
    >
      <CardContent>
        <Typography
          sx={{
            mb: 1.5,
            textAlign: "center",
            padding: "1rem",
          }}
          color='text.secondary'
        >
          {quote}
        </Typography>
      </CardContent>
    </Card>
  );
}
