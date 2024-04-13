import BaseUseCases from '../../../../lib/base-usecases';

import { IRepositoryCompany } from '../interfaces/repositories/interfaces-repository-company';
import { IUseCaseGetAllCompanies } from '../interfaces/usecases/usecases-company';

class UseCaseGetAllCompanies extends BaseUseCases<IRepositoryCompany> implements IUseCaseGetAllCompanies {
  constructor(repo: IRepositoryCompany) {
    super(repo);
  }

  public execute: IUseCaseGetAllCompanies['execute'] = async () => {
    return await this.repo.getAllCompanies();
  };
}

export { UseCaseGetAllCompanies };
