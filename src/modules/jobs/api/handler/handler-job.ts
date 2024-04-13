import { BaseHandler } from '../../../../lib/base-handlers';
import { IUseCaseJob } from '../../domain/interface/usecase/interface-usecase-job';
import { IHandlerJob } from '../interface/handler/interface-handler-job';

class HandlerJob extends BaseHandler<IUseCaseJob> implements IHandlerJob {
  constructor(useCase: IUseCaseJob) {
    super(useCase);
  }

  public createJob: IHandlerJob['createJob'] = async (req, res) => {
    const { title, description, location, salary, type, company } = req.body;
    const { id } = company;
    return await this.useCases.createJobUseCase
      .execute({ title, description, location, type, salary, company: { id } })
      .then((data) => {
        return res.status(201).json(data).end();
      })
      .catch((error) => {
        const errMsg = `failed to create data`;
        console.error(`${errMsg}: ${error}`);
        return res.status(500).json({ message: 'Something went wrong' }).end();
      });
  };

  public getAllJobs: IHandlerJob['getAllJobs'] = async (req, res) => {
    const { _limit } = req.query;
    return await this.useCases.getAllJobUseCase
      .execute({ limit: _limit })
      .then((datas) => {
        return res.status(200).json(datas).end();
      })
      .catch((error) => {
        const errMsg = `failed to retrieve all data`;
        console.error(`${errMsg}: ${error}`);

        if (error instanceof TypeError) {
          return res.status(400).json({ message: error.message }).end();
        }

        return res.status(500).json({ message: 'Something went wrong' }).end();
      });
  };

  public getJobById: IHandlerJob['getJobById'] = async (req, res) => {
    const { id: jobId } = req.params;
    return await this.useCases.getJobByIdUseCase
      .execute({ jobId })
      .then((data) => {
        return res.status(200).json(data).end();
      })
      .catch((error) => {
        const errMsg = `failed to retrieve data with company id: ${jobId}`;
        console.error(`${errMsg}: ${error}`);

        if (error.code === 'P2025') {
          return res.status(500).json({ message: error.message }).end();
        }

        return res.status(500).json({ message: 'Something went wrong' }).end();
      });
  };

  public updateJobById: IHandlerJob['updateJobById'] = async (req, res) => {
    const { id: jobId } = req.params;
    const requestUpdateJob = req.body;
    return await this.useCases.updateJobByIdUseCase
      .execute({ jobId }, requestUpdateJob)
      .then((data) => {
        return res.status(200).json(data).end();
      })
      .catch((error) => {
        const errMsg = `failed to update data with id: ${jobId}`;
        console.error(`${errMsg}: ${error}`);

        if (error.code === 'P2025') {
          return res.status(500).json({ message: error.message }).end();
        }

        return res.status(500).json({ message: 'Something went wrong' }).end();
      });
  };

  public deleteJobById: IHandlerJob['deleteJobById'] = async (req, res) => {
    const { id: jobId } = req.params;
    return await this.useCases.deleteJobByIdUseCase
      .execute({ jobId })
      .then((data) => {
        return res.status(200).json(data).end();
      })
      .catch((error) => {
        const errMsg = `failed to delete data with id: ${jobId}`;
        console.error(`${errMsg}: ${error}`);

        if (error.code === 'P2025') {
          return res.status(500).json({ message: error.message }).end();
        }

        return res.status(500).json({ message: 'Something went wrong' }).end();
      });
  };
}

export default HandlerJob;
