abstract class BaseHandler<T extends object> {
  protected readonly useCases: T;
  constructor(useCases: T) {
    this.useCases = useCases;
  }
}

export { BaseHandler };
