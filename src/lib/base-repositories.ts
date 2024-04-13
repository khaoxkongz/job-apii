abstract class BaseRepository<T extends object> {
  protected readonly link: T;
  constructor(link: T) {
    this.link = link;
  }
}

export { BaseRepository };
