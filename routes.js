import fetch from "node-fetch";

export async function proxyRoute(req, res) {
    const url = req.query.url;
    if (!url) return res.status(400).send("No URL provided");

    try {
        const response = await fetch(url);
        const text = await response.text();
        res.send(text);
    } catch (err) {
        res.status(500).send("Error fetching URL");
    }
}
