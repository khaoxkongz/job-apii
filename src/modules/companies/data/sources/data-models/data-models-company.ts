import { ICompanyData, ICreateCompanyData, IUpdateCompanyData } from '../../../domian/entities/company';

class DataModelCompany {
  public createCompany = (data: ICreateCompanyData) => {
    const { name, description, contactEmail, contactPhone } = data;
    const newData = { name, description, contactEmail, contactPhone };
    return newData;
  };

  public updateCompanyInfo = (data: IUpdateCompanyData, oldData: ICompanyData) => {
    const { name: oldName, description: oldDescription, contactEmail: oldEmail, contactPhone: oldPhone } = oldData;
    const { name, description, contactEmail, contactPhone } = data;
    const newData = {
      name: name ? name : oldName,
      description: description ? description : oldDescription,
      contactEmail: contactEmail ? contactEmail : oldEmail,
      contactPhone: contactPhone ? contactPhone : oldPhone,
    };
    return newData;
  };

  public selectedCompanyInfo = () => {
    const newSelected = { name: true, description: true, contactEmail: true, contactPhone: true };
    return newSelected;
  };
}

export { DataModelCompany };
