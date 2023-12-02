import { CreateMetodoPagoDTO, MetodoPagoDatasource, MetodopagoEntity, MetodopagoRepository, UpdateMetodoPagoDto } from '../../domain';


export class MetodopagoRepositoryImpl implements MetodopagoRepository {

  constructor(
    private readonly datasource: MetodoPagoDatasource,
  ) { }


  create( CreateMetodoPagoDTO: CreateMetodoPagoDTO ): Promise<MetodopagoEntity> {
    return this.datasource.create( CreateMetodoPagoDTO );
  }

  getAll(): Promise<MetodopagoEntity[]> {
    return this.datasource.getAll();
  }

  findById( id: number ): Promise<MetodopagoEntity> {
    return this.datasource.findById( id );
  }

  updateById( UpdateMetodoPagoDto: UpdateMetodoPagoDto ): Promise<MetodopagoEntity> {
    return this.datasource.updateById( UpdateMetodoPagoDto );
  }

  deleteById( id: number ): Promise<MetodopagoEntity> {
    return this.datasource.deleteById( id );
  }

}


