import {MetodopagoEntity } from '../../entities/Metodopago.entity';
import { MetodopagoRepository } from '../../repositories/Metodopago.repository';


export interface GetMetodoPagoUseCase {
  execute( id: number ): Promise<MetodopagoEntity>
}


export class GetMetodoPago implements GetMetodoPagoUseCase {
  
  constructor(
    private readonly repository: MetodopagoRepository,
  ) {}
  
execute( id: number ): Promise<MetodopagoEntity> {
    return this.repository.findById(id);
  }

}

