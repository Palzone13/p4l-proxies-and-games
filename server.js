import express from "express";
import { proxyRoute } from "./routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/proxy", proxyRoute);

app.listen(PORT, () => {
    console.log(`P4L Proxies and Games running on http://localhost:${PORT}`);
});
