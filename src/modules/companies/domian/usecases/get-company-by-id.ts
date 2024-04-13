import BaseUseCases from '../../../../lib/base-usecases';

import { IRepositoryCompany } from '../interfaces/repositories/interfaces-repository-company';
import { IUseCaseGetCompanyById } from '../interfaces/usecases/usecases-company';

import { IWhereCompany } from './utils/type';

class UseCaseGetCompanyById extends BaseUseCases<IRepositoryCompany> implements IUseCaseGetCompanyById {
  constructor(repo: IRepositoryCompany) {
    super(repo);
  }

  public execute: IUseCaseGetCompanyById['execute'] = async ({ companyId }: IWhereCompany) => {
    return await this.repo.getCompanyById({ companyId });
  };
}

export { UseCaseGetCompanyById };
