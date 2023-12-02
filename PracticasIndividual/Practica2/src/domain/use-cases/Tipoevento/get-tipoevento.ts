import {TipoeventoEntity } from '../../entities/tipoevento.entity';
import { TipoeventoRepository } from '../../repositories/Tipoevento.repository';


export interface GetTipoeventoUseCase {
  execute( id: number ): Promise<TipoeventoEntity>
}


export class GetTipoevento implements GetTipoeventoUseCase {
  
  constructor(
    private readonly repository: TipoeventoRepository,
  ) {}
  
  execute( id: number ): Promise<TipoeventoEntity> {
    return this.repository.findById(id);
  }

}

