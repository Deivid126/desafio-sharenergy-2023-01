"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
function authenticaded(req, res, netx) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ msg: "Acesso não autorizado" });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decodedtoken = (0, jsonwebtoken_1.verify)(token, 'afshfiahsoifhaoisfhoa6464');
        return netx();
    }
    catch (error) {
        return res.status(401).json({ msg: "Acesso não autorizado" });
    }
}
exports.default = authenticaded;
