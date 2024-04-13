import { BaseRepository } from '../../../../lib/base-repositories';
import { IDataLinkJob } from '../../data/interfaces/interfaces-data-link-job';
import { ICreateJobData, IUpdateJobData } from '../entities/entity-job';
import { IRepositoryJob } from '../interface/repository/interface-repository-job';
import { IWhereJob } from '../usecases/utils/type';

class RepositoryJob extends BaseRepository<IDataLinkJob> implements IRepositoryJob {
  constructor(link: IDataLinkJob) {
    super(link);
  }

  public createJob: IRepositoryJob['createJob'] = async (data: ICreateJobData) => {
    return await this.link.createJob(data);
  };

  public getJobById: IRepositoryJob['getJobById'] = async ({ jobId }: IWhereJob) => {
    return await this.link.getJobById({ jobId });
  };

  public getAllJobs: IRepositoryJob['getAllJobs'] = async ({ limit }: { limit?: number }) => {
    return await this.link.getAllJobs({ limit });
  };

  public updateJobById: IRepositoryJob['updateJobById'] = async ({ jobId }: IWhereJob, data: IUpdateJobData) => {
    return await this.link.updateJobById({ jobId }, data);
  };

  public deleteJobById: IRepositoryJob['deleteJobById'] = async ({ jobId }: IWhereJob) => {
    return await this.link.deleteJobById({ jobId });
  };
}

export default RepositoryJob;
