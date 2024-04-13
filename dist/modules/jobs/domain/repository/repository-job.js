"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RepositoryJob {
    constructor(link) {
        this.createJob = async (data) => {
            return await this.link.createJob(data);
        };
        this.getJobById = async ({ jobId }) => {
            return await this.link.getJobById({ jobId });
        };
        this.getAllJobs = async ({ limit }) => {
            return await this.link.getAllJobs({ limit });
        };
        this.updateJobById = async ({ jobId }, data) => {
            return await this.link.updateJobById({ jobId }, data);
        };
        this.deleteJobById = async ({ jobId }) => {
            return await this.link.deleteJobById({ jobId });
        };
        this.link = link;
    }
}
exports.default = RepositoryJob;
//# sourceMappingURL=repository-job.js.map