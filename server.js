const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const next = require("next");
const { translate } = require("@vitalets/google-translate-api");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const httpServer = http.createServer(server);
  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("message", (msg) => {
      io.emit("message", msg);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });

  server.use(express.json()); // Add this line to parse JSON bodies

  // Translation endpoint
  async function trans() {
    const { text } = translate("Привет, мир! Как дела?", { to: "en" });

    console.log(text, "asfdaf"); // => 'Hello World! How are you?
  }
  trans();

  server.post("/api/translate", async (req, res) => {
    const { text, targetLanguage } = req.body;
    try {
      const result = await translate(text, { to: targetLanguage });
      res.json({ translatedText: result.text });
    } catch (error) {
      console.error("Error translating text:", error);
      res.status(500).json({ error: "Failed to translate text" });
    }
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  httpServer.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
