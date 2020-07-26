import { EntityRepository, Repository } from 'typeorm';
import OfferedClass from '../entities/OfferedClass.entity';

@EntityRepository(OfferedClass)
class OfferedClassRepository extends Repository<OfferedClass> {
  async getAllOffClass(): Promise<OfferedClass[]> {
    const allOffClass = await this.find();

    return allOffClass;
  }

  async checkClassExists(id: string | number): Promise<boolean> {
    const classExists = await this.find({ where: { id } });

    if (classExists.length !== 0) {
      return true;
    }
    return false;
  }

  async createOfferedClass(
    offeredClass: OfferedClass,
  ): Promise<OfferedClass | boolean> {
    const offClassExists = await this.checkClassExists(offeredClass.id);

    if (offClassExists) {
      return false;
    }

    const createdOffClass = await this.save(offeredClass);

    return createdOffClass;
  }
}

export default OfferedClassRepository;
