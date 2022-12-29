"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validantion(req, res, netx) {
    const { nome, email, telefone, endereco, senha, cpf } = req.body;
    if (!nome) {
        return res.status(400).json({ msg: "Nome é obrigatório" });
    }
    if (!email) {
        return res.status(400).json({ msg: "E-mail é obrigatório" });
    }
    if (!telefone) {
        return res.status(400).json({ msg: "Telefone é obrigatório" });
    }
    if (!endereco) {
        return res.status(400).json({ msg: "Endereço é obrigatório" });
    }
    if (!senha) {
        return res.status(400).json({ msg: "Senha é obrigatório" });
    }
    if (!cpf) {
        return res.status(400).json({ msg: "Cpf é obrigatório" });
    }
    return netx();
}
exports.default = validantion;
