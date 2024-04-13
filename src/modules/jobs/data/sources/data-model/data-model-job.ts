import { ICreateJobData, IJobData, IUpdateJobData } from '../../../domain/entities/entity-job';

class DataModelJob {
  public createJob = (data: ICreateJobData) => {
    const { title, description, type, location, salary, company } = data;
    const { id } = company;
    return { title, description, type, location, salary, company: { connect: { id } } };
  };

  public updateJob = (data: IUpdateJobData, oldData: IJobData) => {
    const { title: oldTitile, description: oldDesc, type: oldType, location: oldLocation, salary: oldSalary } = oldData;
    const { title, description, type, location, salary } = data;
    const newData = {
      title: title ? title : oldTitile,
      description: description ? description : oldDesc,
      type: type ? type : oldType,
      location: location ? location : oldLocation,
      salary: salary ? salary : oldSalary,
    };
    return newData;
  };

  public selectJob = () => {
    return { id: true, title: true, description: true, type: true, location: true, salary: true };
  };

  public selectCompany = () => {
    return { name: true, description: true, contactEmail: true, contactPhone: true };
  };

  public selectJobWithCompany = () => {
    return {
      id: true,
      title: true,
      type: true,
      description: true,
      location: true,
      salary: true,
      company: { select: this.selectCompany() },
    };
  };
}

export default DataModelJob;
