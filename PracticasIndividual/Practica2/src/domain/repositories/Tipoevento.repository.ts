import { CreateTipoEventoDto, UpdateTipoEventoDto } from '../dtos';
import { TipoeventoEntity} from '../entities/tipoevento.entity';



export abstract class TipoeventoRepository {

  abstract create( createTipoeventoDto: CreateTipoEventoDto ): Promise<TipoeventoEntity>;

  abstract getAll(): Promise<TipoeventoEntity[]>;

  abstract findById( id: number ): Promise<TipoeventoEntity>;
  abstract updateById( updateTipoEventoDto: UpdateTipoEventoDto ): Promise<TipoeventoEntity>;
  abstract deleteById( id: number ): Promise<TipoeventoEntity>;

}