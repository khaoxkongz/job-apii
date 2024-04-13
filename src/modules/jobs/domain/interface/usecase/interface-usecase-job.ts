import {
  ICreateJobDataDto,
  IJobDataDto,
  IJobsWithCompanyDataDto,
  IUpdateJobDataDto,
} from '../../../api/interface/dto/interface-dto-job';

export interface IUseCaseCreateJob {
  execute: (data: ICreateJobDataDto) => Promise<IJobDataDto>;
}

export interface IUsecaseGetJobById {
  execute: ({ jobId }: { jobId: string }) => Promise<IJobsWithCompanyDataDto>;
}

export interface IUseCaseGetAllJobs {
  execute: ({ limit }: { limit?: string }) => Promise<IJobsWithCompanyDataDto[]>;
}

export interface IUseCaseUpdateJobById {
  execute: ({ jobId }: { jobId: string }, data: IUpdateJobDataDto) => Promise<IJobDataDto>;
}

export interface IUseCaseDeleteJobById {
  execute: ({ jobId }: { jobId: string }) => Promise<IJobDataDto>;
}

interface IUseCaseJob {
  createJobUseCase: IUseCaseCreateJob;
  getJobByIdUseCase: IUsecaseGetJobById;
  getAllJobUseCase: IUseCaseGetAllJobs;
  updateJobByIdUseCase: IUseCaseUpdateJobById;
  deleteJobByIdUseCase: IUseCaseDeleteJobById;
}

export { IUseCaseJob };
