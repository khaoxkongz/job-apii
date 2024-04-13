import {
  ICreateJobData,
  IJobData,
  IJobWithCompanyData,
  IJobsWithCompanyData,
  IUpdateJobData,
} from '../../domain/entities/entity-job';
import { IWhereJob } from '../../domain/usecases/utils/type';

export interface IDataLinkJob {
  createJob: (data: ICreateJobData) => Promise<IJobData>;
  getJobById: ({ jobId }: IWhereJob) => Promise<IJobWithCompanyData>;
  getAllJobs: ({ limit }: { limit?: number }) => Promise<IJobsWithCompanyData[]>;
  updateJobById: ({ jobId }: IWhereJob, data: IUpdateJobData) => Promise<IJobData>;
  deleteJobById: ({ jobId }: IWhereJob) => Promise<IJobData>;
}
