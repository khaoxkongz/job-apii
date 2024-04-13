"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HelperFunction {
    constructor() {
        this.mapperJobDto = (data) => {
            const { id, title, description: jobDesc, location, salary, type, company } = data;
            const { name, description: companyDesc, contactEmail, contactPhone } = company;
            const newMapData = {
                id,
                title,
                type,
                description: jobDesc,
                location,
                salary,
                company: { name, description: companyDesc, contactEmail, contactPhone },
            };
            return newMapData;
        };
        this.mapperArrayJobDto = (datas) => {
            const mapData = datas.map((data) => {
                return this.mapperJobDto(data);
            });
            return mapData;
        };
    }
}
exports.default = new HelperFunction();
//# sourceMappingURL=helper.js.map