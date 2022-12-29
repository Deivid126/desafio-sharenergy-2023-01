"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = __importDefault(require("../controller/User"));
const Login_1 = __importDefault(require("../controller/Login"));
const auth_1 = __importDefault(require("../middlewares/auth"));
const validation_1 = __importDefault(require("../middlewares/validation"));
const routes = (0, express_1.Router)();
routes.post("/user", auth_1.default, validation_1.default, User_1.default.create);
routes.get("/user", auth_1.default, User_1.default.findAll);
routes.get("/user/:id", auth_1.default, User_1.default.findOne);
routes.put("/user/:id", auth_1.default, User_1.default.uptade);
routes.delete("/user/:id", auth_1.default, User_1.default.delete);
routes.post("/login", Login_1.default.login);
exports.default = routes;
