import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";

// Server routes
import { database } from "./config/context/database.js";
import { api } from "./routes/index.js";

import bodyParser from "body-parser";

const server = express();
server.use(bodyParser.json());

server.get("/", (req, res) => {
  res.send("Server is running.");
});

// client can be postman | react website | react localhost link | etc
const clientURL = "*";

// CORS options
const corsOptions = {
  origin: clientURL,
};
server.use(cors(corsOptions));

// output dados de pedido HTTP - logger
server.use(morgan("short"));

// parse dados dos pedidos no content-type - application/json
server.use(express.json());

// http://localhost:4242/api ......
server.use("/api", api);
server.get("/api", (req, res) => {
  res.send("api is running.");
});

//Fazer ligação à Base de Dados
// npm install --save mysql2
try {
  await database.sync({ force: false, alter: true });
} catch (error) {
  console.info(error);
}

// Rota protegida
// server.get("/profile", authenticateToken, (req, res) => {
//   // Aqui você pode acessar o ID do usuário autenticado usando req.userId
//   res.json({ userId: req.userId });
// });

// correr server no url host:port definido em .env
server.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
  console.log(
    "Server up and running at http://%s:%s",
    process.env.SERVER_HOST,
    process.env.SERVER_PORT
  );
});
