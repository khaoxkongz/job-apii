import { IDataLinkCompany } from '../modules/companies/data/interfaces/data-links';

abstract class BaseRepository {
  protected readonly link: IDataLinkCompany;
  constructor(link: IDataLinkCompany) {
    this.link = link;
  }
}

export { BaseRepository };
