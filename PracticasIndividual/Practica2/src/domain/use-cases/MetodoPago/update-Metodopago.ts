import { UpdateMetodoPagoDto } from '../../dtos';
import { MetodopagoEntity } from '../../entities/Metodopago.entity';
import { MetodopagoRepository } from '../../repositories/Metodopago.repository';


export interface UpdateMetodopagoUseCase {
  execute( dto: UpdateMetodoPagoDto ): Promise<MetodopagoEntity>
}


export class UpdateMetodopago implements UpdateMetodopagoUseCase {
  
  constructor(
    private readonly repository: MetodopagoRepository,
  ) {}
  
  execute( dto: UpdateMetodoPagoDto ): Promise<MetodopagoEntity> {
    return this.repository.updateById(dto);
  }

}

