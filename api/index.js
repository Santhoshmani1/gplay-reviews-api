import gplay from "google-play-scraper";
import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(helmet());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Google Play Store API");
});

// Supported endpoints :  GET suggest, search, app, reviews, permissions, and similar

// GET suggest
// Returns an array of 5 suggested search terms based on the search term provided
app.get("/suggest", (req, res) => {
  gplay
    .suggest({
      term: req.query.term,
    })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// GET search
// Returns an array of top 10 apps based on the search term provided
app.get("/search", (req, res) => {
  gplay
    .search({
      term: req.query.term,
      num: 10,
    })
    .then((response) => {
      const similarApps = response.map((app) => {
        return {
          title: app.title,
          icon: app.icon,
          appId: app.appId,
          rating: app.scoreText,
        };
      });
      res.status(200).send(similarApps);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// GET app
// Returns the app details based on the appId provided
app.get("/app", (req, res) => {
  const appId = req.query.appId;
  gplay
    .app({ appId })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// GET reviews
// Returns an array of top 100 most helpful reviews based on the appId provided
app.get("/reviews", (req, res) => {
  const appId = req.query.appId;
  gplay
    .reviews({
      appId,
      sort: gplay.sort.HELPFULNESS,
      num: 100,
    })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// GET permissions
// Returns an array of permissions based on the appId provided
app.get("/permissions", (req, res) => {
  const appId = req.query.appId;
  gplay
    .permissions({
      appId,
    })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// GET similar
// Returns an array of similar apps based on the appId provided
app.get("/similar", (req, res) => {
  const appId = req.query.appId;
  gplay
    .similar({
      appId,
    })
    .then((response) => {
      const similarApps = response.map((app) => {
        return {
          title: app.title,
          icon: app.icon,
          appId: app.appId,
          rating: app.scoreText,
        };
      });

      res.status(200).send(similarApps.slice(0, 10));
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

// GET developer 
// Returns apps by specific developer based on the devId.
app.get("/developer", (req, res) => {
  const devId = req.query.devId;
  gplay
    .developer({ devId })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Google play store API is running on port 3000");
});
