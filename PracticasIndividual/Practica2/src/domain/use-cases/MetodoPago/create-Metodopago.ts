import { CreateMetodoPagoDTO } from '../../dtos';
import { MetodopagoEntity } from '../../entities/Metodopago.entity';
import { MetodopagoRepository } from '../../repositories/Metodopago.repository';


export interface CreateMetodopagoUseCase {
  execute( dto: CreateMetodoPagoDTO ): Promise<MetodopagoEntity>
}

// ctrl+ shift + l
export class CreateMetodopago implements CreateMetodopagoUseCase {
  
  constructor(
    private readonly repository: MetodopagoRepository,
  ) {}
  
  execute( dto: CreateMetodoPagoDTO ): Promise<MetodopagoEntity> {
    return this.repository.create(dto);
  }

}

