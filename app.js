import express from "express";
import drags from "./drags.js";

const app = express();
const port = 3000;

app.get("/", (requisicao, resposta) => {
  resposta.send(drags);
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
