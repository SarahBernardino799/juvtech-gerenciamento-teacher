

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
        const {nome, cadeiras, disponibilidade, turmas, available, description, cadastro} = req.body
        const newProf = new cadastroProfModel({nome, cadeiras, disponibilidade, turmas, available, description, cadastro})
        const savedProf = await newProf.save()
        res.status(201).json({message: "your new teacher sucess", savedProf})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

const updateProf = async (req, res) =>{}
const deleteProf = async (req, res) =>{}
module.exports = {
    findAllProf,
    findProfById,
    addNewProf,
    updateProf,
    deleteProf
}