// 1. Check if window exists (Browser). If not, we are in Node.js.
const isBrowser = typeof window !== "undefined";

const isLocalhost = isBrowser 
  ? (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
  : true; // Default to true in Node.js, or use process.env

const API_BASE_URL = isLocalhost
  ? "http://localhost:3400" 
  : "https://final-year-project-rk87.onrender.com";

// 2. Handle Browser Global
if (isBrowser) {
    window.backend_URL = API_BASE_URL;
}

// 3. Handle Node.js Export (Required for your 'require' in 2.js)
if (typeof module !== "undefined" && module.exports) {
    module.exports = { backend_URL: API_BASE_URL };

}
