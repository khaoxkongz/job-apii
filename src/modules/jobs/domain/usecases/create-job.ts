import BaseUseCases from '../../../../lib/base-usecases';

import { IRepositoryJob } from '../interface/repository/interface-repository-job';
import { IUseCaseCreateJob } from '../interface/usecase/interface-usecase-job';

import { ICreateJobDataDto } from '../../api/interface/dto/interface-dto-job';

class UseCaseCreateJob extends BaseUseCases<IRepositoryJob> implements IUseCaseCreateJob {
  constructor(repo: IRepositoryJob) {
    super(repo);
  }

  public execute: IUseCaseCreateJob['execute'] = async (data: ICreateJobDataDto) => {
    return await this.repo.createJob(data);
  };
}

export default UseCaseCreateJob;
