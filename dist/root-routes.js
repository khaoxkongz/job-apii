"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route_company_1 = __importDefault(require("./modules/companies/api/routes/route-company"));
const route_job_1 = __importDefault(require("./modules/jobs/api/route/route-job"));
const rootRouter = (0, express_1.Router)();
rootRouter.use('/companies', route_company_1.default);
rootRouter.use('/jobs', route_job_1.default);
exports.default = rootRouter;
//# sourceMappingURL=root-routes.js.map