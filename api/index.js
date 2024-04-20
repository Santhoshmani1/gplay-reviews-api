import gplay from "google-play-scraper";
import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(helmet());


app.listen(process.env.PORT || 3000, () => {
  console.log("Google play store API is running on port 3000");
});
