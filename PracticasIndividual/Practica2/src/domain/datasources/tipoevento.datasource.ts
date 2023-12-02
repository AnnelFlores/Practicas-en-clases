import { CreateTipoEventoDto, UpdateTipoEventoDto  } from '../dtos';
import { TipoeventoEntity } from '../entities/tipoevento.entity';



export abstract class TipoeventoDatasource {

  abstract create( CreateTipoEventoDto: CreateTipoEventoDto ): Promise<TipoeventoEntity>;

  abstract getAll(): Promise<TipoeventoEntity[]>;

  abstract findById( id: number ): Promise<TipoeventoEntity>;
  abstract updateById( UpdateTipoEventoDto: UpdateTipoEventoDto ): Promise<TipoeventoEntity>;
  abstract deleteById( id: number ): Promise<TipoeventoEntity>;

}