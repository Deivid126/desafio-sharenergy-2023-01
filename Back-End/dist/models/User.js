"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    telefone: { type: String, required: true },
    endereco: { type: String, required: true },
    senha: { type: String, required: true },
    cpf: { type: String, required: true }
}, {
    timestamps: true,
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
