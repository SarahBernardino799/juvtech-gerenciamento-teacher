const mongoose = require ("mongoose")
const cadastroProfSchrema = new mongoose.Schema( 
{
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
       },
    
    nome:{
        type: String,
        required: true,
    },
    cadeiras:{
        type: [String],
        required: true,
    },
    disponibilidade:{
        type: [String],
        required: true,
    },
    turmas:{
        type: [String],
        required: true,
    },
    available: {
        type: Boolean,
        required: true,
    },
    description: {
        type: String,
        minLength: 10,
        maxLength: 500,
        default: "não informado."
    },
    cadastro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cadastro"
    }
},
{
    versionKey: false
})
const cadastro = mongoose.model("CadastroProfModel", cadastroProfSchrema)
module.exports = cadastro