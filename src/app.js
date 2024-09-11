require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbConnect.js");

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect();

const admRotas = require("./rotas/admRotas.js");
const cadastroProfRotas = require("./rotas/cadastroProfRotas.js");

app.use("/sistema/adm",admRotas);
app.use("/sistema/cadastroProfessor",cadastroProfRotas);

/*const swaggerUi = require("swagger-ui-express")
const swaggerFile = require("../swagger/swagger_output.json")
app.use("/minha-rota-de-documentacao", swaggerUi.serve, swaggerUi.setup(swaggerFile))
*/
module.exports = app;