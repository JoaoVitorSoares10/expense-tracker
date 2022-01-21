const item = require('../models/item.model');

module.exports = {
    async getItem (req, res){
        try{
            const data = await item.find();
            return res.json(data);
        }catch(err){
            res.status(404).send("Não foi possivel exibir seus dados, tente novamente!");
        }
    },
    async registerItem (req, res){
        try{
            const data = await item.create(req.body);
            return res.json(data);
        }catch(err){
            res.status(404).send("Não foi possivel registrar, tente novamente!");
        }
    }
}