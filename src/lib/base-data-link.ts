import { DbDriver } from './prisma';

abstract class BaseDataLink {
  protected readonly db: DbDriver;
  constructor(db: DbDriver) {
    this.db = db;
  }
}

export { BaseDataLink };
