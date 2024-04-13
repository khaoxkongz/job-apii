import BaseUseCases from '../../../../lib/base-usecases';

import { IRepositoryJob } from '../interface/repository/interface-repository-job';
import { IUseCaseUpdateJobById } from '../interface/usecase/interface-usecase-job';

import { IUpdateCompanyDataDto } from '../../../companies/api/interfaces/dto/dto-company';
import { IWhereJob } from './utils/type';

class UseCaseUpdateJobById extends BaseUseCases<IRepositoryJob> implements IUseCaseUpdateJobById {
  constructor(repo: IRepositoryJob) {
    super(repo);
  }

  public execute: IUseCaseUpdateJobById['execute'] = async ({ jobId }: IWhereJob, data: IUpdateCompanyDataDto) => {
    return await this.repo.updateJobById({ jobId }, data);
  };
}

export default UseCaseUpdateJobById;
