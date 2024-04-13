"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataModelJob {
    constructor() {
        this.createJob = (data) => {
            const { title, description, type, location, salary, company } = data;
            const { id } = company;
            return { title, description, type, location, salary, company: { connect: { id } } };
        };
        this.updateJob = (data, oldData) => {
            const { title: oldTitile, description: oldDesc, type: oldType, location: oldLocation, salary: oldSalary } = oldData;
            const { title, description, type, location, salary } = data;
            const newData = {
                title: title ? title : oldTitile,
                description: description ? description : oldDesc,
                type: type ? type : oldType,
                location: location ? location : oldLocation,
                salary: salary ? salary : oldSalary,
            };
            return newData;
        };
        this.selectJob = () => {
            return { id: true, title: true, description: true, type: true, location: true, salary: true };
        };
        this.selectCompany = () => {
            return { name: true, description: true, contactEmail: true, contactPhone: true };
        };
        this.selectJobWithCompany = () => {
            return {
                id: true,
                title: true,
                type: true,
                description: true,
                location: true,
                salary: true,
                company: { select: this.selectCompany() },
            };
        };
    }
}
exports.default = DataModelJob;
//# sourceMappingURL=data-model-job.js.map