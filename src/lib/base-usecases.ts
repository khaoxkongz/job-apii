abstract class BaseUseCase<T extends object> {
  protected readonly repo: T;
  constructor(repo: T) {
    this.repo = repo;
  }
}

export default BaseUseCase;
