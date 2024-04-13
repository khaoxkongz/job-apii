import BaseUseCases from '../../../../lib/base-usecases';

import { IRepositoryJob } from '../interface/repository/interface-repository-job';
import { IUseCaseGetAllJobs } from '../interface/usecase/interface-usecase-job';

import HelperFunction, { IHelperFunction } from './utils/helper';

class UseCaseGetAllJobs extends BaseUseCases<IRepositoryJob> implements IUseCaseGetAllJobs {
  private helperFunction: IHelperFunction;
  constructor(repo: IRepositoryJob) {
    super(repo);
    this.helperFunction = HelperFunction;
  }

  public execute: IUseCaseGetAllJobs['execute'] = async ({ limit }: { limit?: string }) => {
    const limitNumeric = Number(limit);
    if (limit) {
      if (isNaN(limitNumeric)) {
        throw new TypeError('require field string');
      }
    }
    const datas = await this.repo.getAllJobs({ limit: limitNumeric });
    const mapData = this.helperFunction.mapperArrayJobDto(datas);
    return mapData;
  };
}

export default UseCaseGetAllJobs;
