const cadastroProfModel = require("../model/cadastroProfModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const findAllProf = async (req, res) => {
    try {
        const allProf = await cadastroProfModel.find();
        res.status(200).json(allProf)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

const findProfById = async (req, res) => {
    try {
        const findProf = await cadastroProfModel.findById(req.params.id)
        res.status(200).json(findProf)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

const addNewProf = async (req, res) =>{
    try {
        const {nome, cadeiras, disponibilidade, turmas, available, description} = req.body
        const newProf = new cadastroProfModel({nome, cadeiras, disponibilidade, turmas, available, description})
        const savedProf = await newProf.save()
        res.status(201).json({message: "Sucesso!!novo professor(a) cadastrado", savedProf})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

const updateProf = async (req, res) =>{
    try {
        const {nome, cadeiras, disponibilidade, turmas, available, description} = req.body
        const updatedProf = await cadastroProfModel.findByIdAndUpdate(
            req.params.id, {nome, cadeiras, disponibilidade, turmas, available, description})
            res.status(200).json({message: "Professor(a) atualizado e salvo", updatedProf})
        
    } catch (error) {
       console.error(error)
       res.status(500).json({message:"não foi possivel atualizar o professor(a)"}) 
    
    }
}

const deleteProf = async (req, res) =>{
    try {
    
        const authHeader = req.get("authorization")
        if (!authHeader) {
            return res.status(401).send("Atenção! Voçê esqueceu de adicionar o TOKEN!")
        }
        const token = authHeader.split(" ")[1]
    
        jwt.verify(token, SECRET, async function (err) {
            if (err) {
                return res.status(403).send("acesso não autorizado!! adicione o token correto")
            }
        const {id} = req.params
        const deletedProf = await cadastroProfModel.findByIdAndDelete(id)
        const message = `A Dança ${deletedProf.nome} foi deletada com sucesso.`
        res.status(200).json({message})
        })
    } catch (error) {
        console.error(error)
       res.status(500).json({message:"não foi possivel deletar a dança"}) 
    
    }
}
module.exports = {
    findAllProf,
    findProfById,
    addNewProf,
    updateProf,
    deleteProf
}