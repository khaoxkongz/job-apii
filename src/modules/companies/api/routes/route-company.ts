import { Router } from 'express';
import { handlerCompany } from '../../bootstrap/bootstrap-company';

const routerCompany = Router();

routerCompany.post('/', handlerCompany.createCompany);
routerCompany.get('/', handlerCompany.getAllCompanies);
routerCompany.get('/:id', handlerCompany.getCompanyById);
routerCompany.patch('/:id', handlerCompany.updateCompanyById);
routerCompany.delete('/:id', handlerCompany.deleteCompanyById);

export default routerCompany;
