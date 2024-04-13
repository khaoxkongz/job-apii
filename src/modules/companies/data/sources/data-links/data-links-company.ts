import { DbDriver } from '../../../../../lib/prisma';
import { BaseDataLink } from '../../../../../lib/base-data-link';

import { IDataLinkCompany } from '../../interfaces/data-links';

import { ICreateCompanyData, IUpdateCompanyData } from '../../../domian/entities/company';
import { DataModelCompany } from '../data-models/data-models-company';

import { IWhereCompany } from '../../../domian/usecases/utils/type';

class DataLinkCompany extends BaseDataLink implements IDataLinkCompany {
  private dataModelCompany: DataModelCompany;
  constructor(db: DbDriver, dataModelCompany: DataModelCompany) {
    super(db);
    this.dataModelCompany = dataModelCompany;
  }

  public createCompany: IDataLinkCompany['createCompany'] = async (data: ICreateCompanyData) => {
    return await this.db.company.create({
      data: this.dataModelCompany.createCompany(data),
      select: this.dataModelCompany.selectedCompanyInfo(),
    });
  };

  public getCompanyById: IDataLinkCompany['getCompanyById'] = async ({ companyId }: IWhereCompany) => {
    return await this.db.company.findUniqueOrThrow({
      where: { id: companyId },
      select: this.dataModelCompany.selectedCompanyInfo(),
    });
  };

  public getAllCompanies: IDataLinkCompany['getAllCompanies'] = async () => {
    return await this.db.company.findMany({
      select: this.dataModelCompany.selectedCompanyInfo(),
    });
  };

  public updateCompanyById: IDataLinkCompany['updateCompanyById'] = async (
    { companyId }: IWhereCompany,
    data: IUpdateCompanyData
  ) => {
    const oldData = await this.getCompanyById({ companyId });
    return await this.db.company.update({
      where: { id: companyId },
      data: this.dataModelCompany.updateCompanyInfo(data, oldData),
      select: this.dataModelCompany.selectedCompanyInfo(),
    });
  };

  public deleteCompanyById: IDataLinkCompany['deleteCompanyById'] = async ({ companyId }: IWhereCompany) => {
    return await this.db.company.delete({
      where: { id: companyId },
      select: this.dataModelCompany.selectedCompanyInfo(),
    });
  };
}

export { DataLinkCompany };
