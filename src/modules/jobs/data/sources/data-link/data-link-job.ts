import { DbDriver } from '../../../../../lib/prisma';
import { BaseDataLink } from '../../../../../lib/base-data-link';

import { IDataLinkJob } from '../../interfaces/interfaces-data-link-job';

import { ICreateJobData, IUpdateJobData } from '../../../domain/entities/entity-job';
import { IWhereJob } from '../../../domain/usecases/utils/type';

import DataModelJob from '../data-model/data-model-job';

class DataLinkJob extends BaseDataLink implements IDataLinkJob {
  private dataModelJob: DataModelJob;
  constructor(db: DbDriver, dataModelJob: DataModelJob) {
    super(db);
    this.dataModelJob = dataModelJob;
  }

  public createJob: IDataLinkJob['createJob'] = async (data: ICreateJobData) => {
    return await this.db.job.create({
      data: this.dataModelJob.createJob(data),
      select: this.dataModelJob.selectJob(),
    });
  };

  public getJobById: IDataLinkJob['getJobById'] = async ({ jobId }: IWhereJob) => {
    return await this.db.job.findUniqueOrThrow({
      where: { id: jobId },
      select: this.dataModelJob.selectJobWithCompany(),
    });
  };

  public getJobByName = async ({ name }: { name: string }) => {
    return this.db.job.findMany({
      where: { title: name },
    });
  };

  public getAllJobs: IDataLinkJob['getAllJobs'] = async ({ limit }: { limit?: number }) => {
    return await this.db.job.findMany({
      take: limit ? limit : 10,
      select: this.dataModelJob.selectJobWithCompany(),
    });
  };

  public updateJobById: IDataLinkJob['updateJobById'] = async ({ jobId }: IWhereJob, data: IUpdateJobData) => {
    const oldData = await this.getJobById({ jobId });
    return await this.db.job.update({
      where: { id: jobId },
      data: this.dataModelJob.updateJob(data, oldData),
      select: this.dataModelJob.selectJob(),
    });
  };

  public deleteJobById: IDataLinkJob['deleteJobById'] = async ({ jobId }: IWhereJob) => {
    return await this.db.job.delete({
      where: { id: jobId },
      select: this.dataModelJob.selectJob(),
    });
  };
}

export default DataLinkJob;
