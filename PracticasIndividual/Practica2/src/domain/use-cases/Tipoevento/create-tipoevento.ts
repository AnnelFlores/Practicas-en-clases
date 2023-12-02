import { CreateTipoEventoDto } from '../../dtos';
import { TipoeventoEntity } from '../../entities/tipoevento.entity';
import { TipoeventoRepository } from '../../repositories/Tipoevento.repository';


export interface CreateTipoeventoUseCase {
  execute( dto: CreateTipoEventoDto ): Promise<TipoeventoEntity>
}

// ctrl+ shift + l
export class CreateTipoEvento implements CreateTipoeventoUseCase {
  
  constructor(
    private readonly repository: TipoeventoRepository,
  ) {}
  
  execute( dto: CreateTipoEventoDto ): Promise<TipoeventoEntity> {
    return this.repository.create(dto);
  }

}

