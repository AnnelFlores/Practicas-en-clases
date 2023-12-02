import { MetodopagoEntity } from '../../entities/Metodopago.entity';
import { MetodopagoRepository } from '../../repositories/Metodopago.repository';


export interface GetMetodopagoUseCase {
  execute(): Promise<MetodopagoEntity[]>
}


export class GetMetodoPagos implements GetMetodopagoUseCase {
  
  constructor(
    private readonly repository: MetodopagoRepository,
  ) {}
  
  execute(): Promise<MetodopagoEntity[]> {
    return this.repository.getAll();
  }

}

