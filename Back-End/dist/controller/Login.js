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
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const Login = {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { senha, nome } = req.body;
            const user = yield User_1.default.findOne({ nome });
            if (!user) {
                return res.status(400).json({ msg: "Usúario não encontrado" });
            }
            const comparePassword = yield (0, bcrypt_1.compare)(senha, user.senha);
            if (!comparePassword) {
                return res.status(400).json({ msg: "A senha está incorreta" });
            }
            const token = (0, jsonwebtoken_1.sign)({}, 'afshfiahsoifhaoisfhoa6464', {
                subject: String(user.id),
                expiresIn: "1d"
            });
            return res.json({ user, token });
        });
    }
};
exports.default = Login;
