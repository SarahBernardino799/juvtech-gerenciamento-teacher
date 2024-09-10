const controler = require("../controler/cadastroProfControler");
const express = require("express")

const rota = express.Rotas();

router.get("/all", controler.findAllProf);
router.get("/:id", controler.findProfById);
router.post("/add", controler.addNewProf);
router.patch("/:id", controler.updateProf);
router.delete("/:id", controler.deleteProf);

module.exports = rota;