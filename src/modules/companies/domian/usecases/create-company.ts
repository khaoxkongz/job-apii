import BaseUseCases from '../../../../lib/base-usecases';

import { IRepositoryCompany } from '../interfaces/repositories/interfaces-repository-company';
import { IUseCaseCreateCompany } from '../interfaces/usecases/usecases-company';

import { ICreateCompanyDataDto } from '../../api/interfaces/dto/dto-company';

class UseCaseCreateCompany extends BaseUseCases<IRepositoryCompany> implements IUseCaseCreateCompany {
  constructor(repo: IRepositoryCompany) {
    super(repo);
  }

  public execute: IUseCaseCreateCompany['execute'] = async (data: ICreateCompanyDataDto) => {
    return await this.repo.createCompany(data);
  };
}

export { UseCaseCreateCompany };
