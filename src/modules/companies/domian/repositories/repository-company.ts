import { BaseRepository } from '../../../../lib/base-repositories';
import { IDataLinkCompany } from '../../data/interfaces/data-links';
import { ICreateCompanyData, IUpdateCompanyData } from '../entities/company';
import { IRepositoryCompany } from '../interfaces/repositories/interfaces-repository-company';

class RepositoryCompany extends BaseRepository implements IRepositoryCompany {
  constructor(link: IDataLinkCompany) {
    super(link);
  }

  public createCompany: IRepositoryCompany['createCompany'] = async (data: ICreateCompanyData) => {
    return await this.link.createCompany(data);
  };

  public getCompanyById: IRepositoryCompany['getCompanyById'] = async ({ companyId }: { companyId: string }) => {
    return await this.link.getCompanyById({ companyId });
  };

  public getAllCompanies: IRepositoryCompany['getAllCompanies'] = async () => {
    return await this.link.getAllCompanies();
  };

  public updateCompanyById: IRepositoryCompany['updateCompanyById'] = async (
    { companyId }: { companyId: string },
    data: IUpdateCompanyData
  ) => {
    return await this.link.updateCompanyById({ companyId }, data);
  };

  public deleteCompanyById: IRepositoryCompany['deleteCompanyById'] = async ({ companyId }: { companyId: string }) => {
    return await this.link.deleteCompanyById({ companyId });
  };
}

export { RepositoryCompany };
