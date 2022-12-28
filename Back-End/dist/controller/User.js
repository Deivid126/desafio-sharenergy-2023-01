"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const Controller = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, email, telefone, endereco, senha, cpf } = req.body;
            const newUser = yield User_1.default.create({
                nome,
                email,
                telefone,
                endereco,
                senha,
                cpf
            });
            return res.status(201).json(newUser);
        });
    },
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield User_1.default.find();
            return res.json(users);
        });
    },
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield User_1.default.findById(id);
            return res.json(user);
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield User_1.default.findByIdAndDelete(id);
            return res.sendStatus(204);
        });
    },
    uptade(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { nome, email, telefone, endereco, senha, cpf } = req.body;
            yield User_1.default.updateOne({
                _id: id
            }, {
                $set: {
                    nome,
                    email,
                    telefone,
                    endereco,
                    senha,
                    cpf
                }
            });
            return res.sendStatus(204);
        });
    }
};
exports.default = Controller;
