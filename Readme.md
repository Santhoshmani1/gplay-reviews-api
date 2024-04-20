# GPLAY Reviews API
A Restful API Implementation for Google Play Scraper.


## Setup
```
bash setup.sh
```


---

## Endpoints

---

### GET /suggest
Returns a list of suggestions based on the provided search term.

**URL:** `http://localhost:3000/suggest?term={appName}`

**Query Parameters:**
- `term` (query): The search term to get suggestions for.

---

### GET /search
Returns the Top 10 apps that match the provided search term.

**URL:** `http://localhost:3000/search?term={appName}`

**Query Parameters:**
- `term` (query): The search term to find matching apps for.

---

### GET /app
This endpoint returns detailed information about a specific app.

**URL:** `http://localhost:3000/app?appId={appId}`

**Query Parameters:**
- `appId` (query): The ID of the app to get information for.

---

### GET /similar
Returns a list of apps that are similar to a specific app.

**URL:** `http://localhost:3000/similar?appId={appId}`

**Query Parameters:**
- `appId` (query): The ID of the app to get similar apps for.

---

### GET /permissions
Returns a list of permissions required by a specific app.

**URL:** `http://localhost:3000/permissions?appId={appId}`

**Query Parameters:**
- `appId` (query): The ID of the app to get permissions for.

---

### GET /reviews
Returns a list of top 100 helpful reviews for a specific app.

**URL:** `http://localhost:3000/reviews?appId={appId}`

**Query Parameters:**
- `appId` (query): The ID of the app to get reviews for.
