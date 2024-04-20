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

**URL:** `https://gplayapi.vercel.app/suggest?term={appName}`

**Query Parameters:**
- `term` (query): The search term to get suggestions for.

---

### GET /search
Returns the Top 10 apps that match the provided search term.

**URL:** `https://gplayapi.vercel.app/search?term={appName}`

**Query Parameters:**
- `term` (query): The search term to find matching apps for.

---

### GET /app
This endpoint returns detailed information about a specific app.

**URL:** `https://gplayapi.vercel.app/app?appId={appId}`

**Query Parameters:**
- `appId` (query): The ID of the app to get information for.

---

### GET /similar
Returns a list of apps that are similar to a specific app.

**URL:** `https://gplayapi.vercel.app/similar?appId={appId}`

**Query Parameters:**
- `appId` (query): The ID of the app to get similar apps for.

---

### GET /permissions
Returns a list of permissions required by a specific app.

**URL:** `https://gplayapi.vercel.app/permissions?appId={appId}`

**Query Parameters:**
- `appId` (query): The ID of the app to get permissions for.

---

### GET /reviews
Returns a list of top 100 helpful reviews for a specific app.

**URL:** `https://gplayapi.vercel.app/reviews?appId={appId}`

**Query Parameters:**
- `appId` (query): The ID of the app to get reviews for.
