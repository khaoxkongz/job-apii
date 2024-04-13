import { IJobsWithCompanyData } from '../../entities/entity-job';

export interface IHelperFunction {
  mapperJobDto: (data: IJobsWithCompanyData) => IJobsWithCompanyData;
  mapperArrayJobDto: (datas: IJobsWithCompanyData[]) => IJobsWithCompanyData[];
}

class HelperFunction implements IHelperFunction {
  public mapperJobDto = (data: IJobsWithCompanyData): IJobsWithCompanyData => {
    const { id, title, description: jobDesc, location, salary, type, company } = data;
    const { name, description: companyDesc, contactEmail, contactPhone } = company;

    const newMapData = {
      id,
      title,
      type,
      description: jobDesc,
      location,
      salary,
      company: { name, description: companyDesc, contactEmail, contactPhone },
    };

    return newMapData;
  };

  public mapperArrayJobDto = (datas: IJobsWithCompanyData[]): IJobsWithCompanyData[] => {
    const mapData = datas.map((data) => {
      return this.mapperJobDto(data);
    });

    return mapData;
  };
}

export default new HelperFunction();
