import { UpdateTipoEventoDto } from '../../dtos';
import { TipoeventoEntity } from '../../entities/tipoevento.entity';
import { TipoeventoRepository } from '../../repositories/Tipoevento.repository';


export interface UpdateTipoeventoUseCase {
  execute( dto: UpdateTipoEventoDto ): Promise<TipoeventoEntity>
}


export class Updatetipoevento implements UpdateTipoeventoUseCase {
  
  constructor(
    private readonly repository: TipoeventoRepository,
  ) {}
  
  execute( dto: UpdateTipoEventoDto ): Promise<TipoeventoEntity> {
    return this.repository.updateById(dto);
  }

}

