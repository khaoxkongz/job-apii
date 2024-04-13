import BaseUseCases from '../../../../lib/base-usecases';

import { IRepositoryCompany } from '../interfaces/repositories/interfaces-repository-company';
import { IUseCaseUpdateCompanyById } from '../interfaces/usecases/usecases-company';

import { IUpdateCompanyDataDto } from '../../api/interfaces/dto/dto-company';
import { IWhereCompany } from './utils/type';

class UseCaseUpdateCompanyById extends BaseUseCases<IRepositoryCompany> implements IUseCaseUpdateCompanyById {
  constructor(repo: IRepositoryCompany) {
    super(repo);
  }

  public execute: IUseCaseUpdateCompanyById['execute'] = async (
    { companyId }: IWhereCompany,
    data: IUpdateCompanyDataDto
  ) => {
    return await this.repo.updateCompanyById({ companyId }, data);
  };
}

export { UseCaseUpdateCompanyById };
