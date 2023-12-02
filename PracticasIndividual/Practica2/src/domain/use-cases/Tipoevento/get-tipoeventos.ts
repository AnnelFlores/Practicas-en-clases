import { TipoeventoEntity } from '../../entities/tipoevento.entity';
import { TipoeventoRepository } from '../../repositories/Tipoevento.repository';


export interface GetTipoeventosUseCase {
  execute(): Promise<TipoeventoEntity[]>
}


export class GetTipoeventos implements GetTipoeventosUseCase {
  
  constructor(
    private readonly repository: TipoeventoRepository,
  ) {}
  
  execute(): Promise<TipoeventoEntity[]> {
    return this.repository.getAll();
  }

}

