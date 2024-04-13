import { RequestHandler } from 'express';
import {
  ICreateJobDataDto,
  IJobDataDto,
  IJobWithCompanyDataDto,
  IJobsWithCompanyDataDto,
  IUpdateJobDataDto,
} from '../dto/interface-dto-job';

export interface IHandlerJob {
  createJob: RequestHandler<{}, IJobDataDto | { message: string }, ICreateJobDataDto>;
  getAllJobs: RequestHandler<{}, IJobsWithCompanyDataDto[] | { message: string }, unknown, { _limit?: string }>;
  getJobById: RequestHandler<{ id: string }, IJobWithCompanyDataDto | { message: string }>;
  updateJobById: RequestHandler<{ id: string }, IJobDataDto | { message: string }, IUpdateJobDataDto>;
  deleteJobById: RequestHandler<{ id: string }, IJobDataDto | { message: string }>;
}
