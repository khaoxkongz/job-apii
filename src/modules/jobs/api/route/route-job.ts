import express from 'express';
import { handlerJob } from '../../bootstrap/bootstrap-job';

const routerJob = express.Router();

routerJob.post('/', handlerJob.createJob);
routerJob.get('/', handlerJob.getAllJobs);
routerJob.get('/:id', handlerJob.getJobById);
routerJob.patch('/:id', handlerJob.updateJobById);
routerJob.delete('/:id', handlerJob.deleteJobById);

export default routerJob;
