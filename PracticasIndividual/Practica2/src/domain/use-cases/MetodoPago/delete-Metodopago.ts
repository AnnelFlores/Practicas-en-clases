import { MetodopagoEntity } from '../../entities/Metodopago.entity';
import { MetodopagoRepository } from '../../repositories/Metodopago.repository';


export interface DeleteMetodoPagoUseCase {
  execute( id: number ): Promise<MetodopagoEntity>
}

export class DeleteMetodoPago implements DeleteMetodoPagoUseCase {
  
  constructor(
    private readonly repository: MetodopagoRepository,
  ) {}
  
  execute( id: number ): Promise<MetodopagoEntity> {
    return this.repository.deleteById(id);
  }

}

