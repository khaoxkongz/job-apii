import { Router } from 'express';

import routerCompany from './modules/companies/api/routes/route-company';
import routerJob from './modules/jobs/api/route/route-job';

const rootRouter = Router();

rootRouter.use('/companies', routerCompany);
rootRouter.use('/jobs', routerJob);

export default rootRouter;
