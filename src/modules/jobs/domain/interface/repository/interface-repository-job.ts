import {
  ICreateJobData,
  IJobData,
  IJobWithCompanyData,
  IJobsWithCompanyData,
  IUpdateJobData,
} from '../../entities/entity-job';

export interface IRepositoryJob {
  createJob: (data: ICreateJobData) => Promise<IJobData>;
  getJobById: ({ jobId }: { jobId: string }) => Promise<IJobWithCompanyData>;
  getAllJobs: ({ limit }: { limit?: number }) => Promise<IJobsWithCompanyData[]>;
  updateJobById: ({ jobId }: { jobId: string }, data: IUpdateJobData) => Promise<IJobData>;
  deleteJobById: ({ jobId }: { jobId: string }) => Promise<IJobData>;
}
