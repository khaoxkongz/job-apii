import BaseUseCases from '../../../../lib/base-usecases';

import { IRepositoryCompany } from '../interfaces/repositories/interfaces-repository-company';
import { IUseCaseDeleteCompanyById } from '../interfaces/usecases/usecases-company';

import { IWhereCompany } from './utils/type';

class UseCaseDeleteCompanyById extends BaseUseCases<IRepositoryCompany> implements IUseCaseDeleteCompanyById {
  constructor(repo: IRepositoryCompany) {
    super(repo);
  }

  public execute: IUseCaseDeleteCompanyById['execute'] = async ({ companyId }: IWhereCompany) => {
    return await this.repo.deleteCompanyById({ companyId });
  };
}

export { UseCaseDeleteCompanyById };
