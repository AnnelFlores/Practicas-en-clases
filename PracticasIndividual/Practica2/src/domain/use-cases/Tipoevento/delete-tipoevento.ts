import { TipoeventoEntity } from '../../entities/tipoevento.entity';
import { TipoeventoRepository } from '../../repositories/Tipoevento.repository';


export interface DeleteTipoeventoUseCase {
  execute( id: number ): Promise<TipoeventoEntity>
}

export class deleteTipoevento implements DeleteTipoeventoUseCase {
  
  constructor(
    private readonly repository: TipoeventoRepository,
  ) {}
  
  execute( id: number ): Promise<TipoeventoEntity> {
    return this.repository.deleteById(id);
  }

}

