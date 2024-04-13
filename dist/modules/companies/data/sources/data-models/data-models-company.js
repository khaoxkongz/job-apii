"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataModelCompany = void 0;
class DataModelCompany {
    constructor() {
        this.createCompany = (data) => {
            const { name, description, contactEmail, contactPhone } = data;
            const newData = { name, description, contactEmail, contactPhone };
            return newData;
        };
        this.updateCompanyInfo = (data, oldData) => {
            const { name: oldName, description: oldDescription, contactEmail: oldEmail, contactPhone: oldPhone } = oldData;
            const { name, description, contactEmail, contactPhone } = data;
            const newData = {
                name: name ? name : oldName,
                description: description ? description : oldDescription,
                contactEmail: contactEmail ? contactEmail : oldEmail,
                contactPhone: contactPhone ? contactPhone : oldPhone,
            };
            return newData;
        };
        this.selectedCompanyInfo = () => {
            const newSelected = { name: true, description: true, contactEmail: true, contactPhone: true };
            return newSelected;
        };
    }
}
exports.DataModelCompany = DataModelCompany;
//# sourceMappingURL=data-models-company.js.map