"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_data_link_1 = require("../../../../../lib/base-data-link");
class DataLinkJob extends base_data_link_1.BaseDataLink {
    constructor(db, dataModelJob) {
        super(db);
        this.createJob = async (data) => {
            return await this.db.job.create({
                data: this.dataModelJob.createJob(data),
                select: this.dataModelJob.selectJob(),
            });
        };
        this.getJobById = async ({ jobId }) => {
            return await this.db.job.findUniqueOrThrow({
                where: { id: jobId },
                select: this.dataModelJob.selectJobWithCompany(),
            });
        };
        this.getJobByName = async ({ name }) => {
            return this.db.job.findMany({
                where: { title: name },
            });
        };
        this.getAllJobs = async ({ limit }) => {
            return await this.db.job.findMany({
                take: limit ? limit : 10,
                select: this.dataModelJob.selectJobWithCompany(),
            });
        };
        this.updateJobById = async ({ jobId }, data) => {
            const oldData = await this.getJobById({ jobId });
            return await this.db.job.update({
                where: { id: jobId },
                data: this.dataModelJob.updateJob(data, oldData),
                select: this.dataModelJob.selectJob(),
            });
        };
        this.deleteJobById = async ({ jobId }) => {
            return await this.db.job.delete({
                where: { id: jobId },
                select: this.dataModelJob.selectJob(),
            });
        };
        this.dataModelJob = dataModelJob;
    }
}
exports.default = DataLinkJob;
//# sourceMappingURL=data-link-job.js.map