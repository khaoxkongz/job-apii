import BaseUseCases from '../../../../lib/base-usecases';

import { IRepositoryJob } from '../interface/repository/interface-repository-job';
import { IUsecaseGetJobById } from '../interface/usecase/interface-usecase-job';

import { IWhereJob } from './utils/type';

class UseCaseGetJobById extends BaseUseCases<IRepositoryJob> implements IUsecaseGetJobById {
  constructor(repo: IRepositoryJob) {
    super(repo);
  }

  public execute: IUsecaseGetJobById['execute'] = async ({ jobId }: IWhereJob) => {
    const data = await this.repo.getJobById({ jobId });

    const { id, title, description: jobDesc, location, salary, type, company } = data;
    const { name, description: companyDesc, contactEmail, contactPhone } = company;

    const newMapData = {
      id,
      title,
      type,
      description: jobDesc,
      location,
      salary,
      company: {
        name,
        description: companyDesc,
        contactEmail,
        contactPhone,
      },
    };

    return newMapData;
  };
}

export default UseCaseGetJobById;
