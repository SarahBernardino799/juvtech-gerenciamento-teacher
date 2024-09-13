const controler = require("../controler/cadastroProfControler");
const express = require("express")

const rotas = express.Router();

rotas.get("/all", controler.findAllProf);
rotas.get("/:id", controler.findProfById);
rotas.post("/add", controler.addNewProf);
rotas.patch("/:id", controler.updateProf);
rotas.delete("/:id", controler.deleteProf);

module.exports = rotas;