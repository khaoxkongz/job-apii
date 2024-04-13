"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const root_routes_1 = __importDefault(require("./root-routes"));
const main = async () => {
    const server = (0, express_1.default)();
    server.use(express_1.default.json());
    server.use('/', root_routes_1.default);
    server.listen(8000, () => console.log(`Express server is up at 8000`));
};
main();
//# sourceMappingURL=index.js.map