import { DeepPartial, FindConditions, Repository } from 'typeorm';

export class RootService<T> {
  private repo: Repository<T>;

  constructor(repository: Repository<T>) {
    this.repo = repository;
  }

  /**
   * Constructs an instance of an entity and fills it with the
   * data provided. Note that the data is not persisted to the database
   * at this point. To save the data, call the `save` method accordingly
   *
   * @param { T } EntityClass - An entity class
   * @param { Partial<T> } input - Data for the entity instance
   */
  constructEntityInstance(EntityClass: Partial<T> | any, input: Partial<T>): T {
    const entityInstance = new EntityClass() as T;
    for (let i in input) {
      entityInstance[i] = input[i];
    }
    return entityInstance;
  }

  async save(
    entityInstance: DeepPartial<T>,
  ): Promise<T> {
    return this.repo.save(entityInstance as DeepPartial<T>);
  }

  async remove(
    entityInstance: T,
  ): Promise<void> {
    await this.repo.remove(entityInstance);
  }

  async removeByCondition(
    conditions: FindConditions<T>,
  ) {
    await this.repo.delete(conditions);
  }
}
