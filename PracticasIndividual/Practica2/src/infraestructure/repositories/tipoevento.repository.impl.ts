import { CreateTipoEventoDto, TipoeventoDatasource, TipoeventoEntity, TipoeventoRepository, UpdateTipoEventoDto } from '../../domain';


export class TipoeventoRepositoryImpl implements TipoeventoRepository {

  constructor(
    private readonly datasource: TipoeventoDatasource,
  ) { }


  create( createTipoEventoDto: CreateTipoEventoDto ): Promise<TipoeventoEntity> {
    return this.datasource.create( createTipoEventoDto );
  }

  getAll(): Promise<TipoeventoEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<TipoeventoEntity> {
    return this.datasource.findById( id );
  }

  updateById( updateTipoEventoDto: UpdateTipoEventoDto ): Promise<TipoeventoEntity> {
    return this.datasource.updateById( updateTipoEventoDto );
  }

  deleteById( id: number ): Promise<TipoeventoEntity> {
    return this.datasource.deleteById( id );
  }

}


