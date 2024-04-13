import postgres from '../../../lib/prisma';

import DataLinkJob from '../data/sources/data-link/data-link-job';
import DataModelJob from '../data/sources/data-model/data-model-job';

import RepositoryJob from '../domain/repository/repository-job';

import UseCaseCreateJob from '../domain/usecases/create-job';
import UseCaseDeleteJobById from '../domain/usecases/delete-job-by-id';
import UseCaseGetAllJobs from '../domain/usecases/get-all-jobs';
import UseCaseGetJobById from '../domain/usecases/get-job-by-id';
import UseCaseUpdateJobById from '../domain/usecases/update-job-by-id';

import HandlerJob from '../api/handler/handler-job';

const dataModelJob = new DataModelJob();
const dataLinkJob = new DataLinkJob(postgres, dataModelJob);

const repoJob = new RepositoryJob(dataLinkJob);

const usecaseCreateJob = new UseCaseCreateJob(repoJob);
const usecaseGetJobById = new UseCaseGetJobById(repoJob);
const usecaseGetAllJobs = new UseCaseGetAllJobs(repoJob);
const usecaseUpdateJobById = new UseCaseUpdateJobById(repoJob);
const usecaseDeleteJobById = new UseCaseDeleteJobById(repoJob);

const useCasesJob = {
  createJobUseCase: usecaseCreateJob,
  getJobByIdUseCase: usecaseGetJobById,
  getAllJobUseCase: usecaseGetAllJobs,
  updateJobByIdUseCase: usecaseUpdateJobById,
  deleteJobByIdUseCase: usecaseDeleteJobById,
};

export const handlerJob = new HandlerJob(useCasesJob);
