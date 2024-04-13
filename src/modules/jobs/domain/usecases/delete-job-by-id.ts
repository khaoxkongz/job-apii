import BaseUseCases from '../../../../lib/base-usecases';

import { IRepositoryJob } from '../interface/repository/interface-repository-job';
import { IUseCaseDeleteJobById } from '../interface/usecase/interface-usecase-job';

import { IWhereJob } from './utils/type';

class UseCaseDeleteJobById extends BaseUseCases<IRepositoryJob> implements IUseCaseDeleteJobById {
  constructor(repo: IRepositoryJob) {
    super(repo);
  }

  public execute: IUseCaseDeleteJobById['execute'] = async ({ jobId }: IWhereJob) => {
    return await this.repo.deleteJobById({ jobId });
  };
}

export default UseCaseDeleteJobById;
