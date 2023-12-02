import { prisma } from '../../data/postgres';
import { CreateMetodoPagoDTO, MetodoPagoDatasource, MetodopagoEntity, UpdateMetodoPagoDto } from '../../domain';




export class MetodoPagoDatasourceImpl implements MetodoPagoDatasource {

  async create( createMetodoPagoDTO: CreateMetodoPagoDTO ): Promise<MetodopagoEntity> {
    const metodopago = await prisma.metodoPago.create({
      data: createMetodoPagoDTO!
    });

    return MetodopagoEntity.fromObject( metodopago );
  }

  async getAll(): Promise<MetodopagoEntity[]> {
    const metodopago = await prisma.metodoPago.findMany();
    return metodopago.map( metodopagos => MetodopagoEntity.fromObject(metodopagos) );
  }

  async findById( id: number ): Promise<MetodopagoEntity> {
    const metodopago = await prisma.metodoPago.findFirst({
      where: { id }
    });

    if ( !metodopago ) throw `Metodopago with id ${ id } not found`;
    return MetodopagoEntity.fromObject(metodopago);
  }

  async updateById( updatemetodopagoDto: UpdateMetodoPagoDto ): Promise<MetodopagoEntity> {
    await this.findById( updatemetodopagoDto.id );
    
    const updatedpago = await prisma.pago.update({
      where: { id: updatemetodopagoDto.id },
      data: updatemetodopagoDto!.values
    });

    return MetodopagoEntity.fromObject(updatedpago);
  }

  async deleteById( id: number ): Promise<MetodopagoEntity> {
    await this.findById( id );
    const deleted = await prisma.metodoPago.delete({
      where: { id }
    });

    return MetodopagoEntity.fromObject( deleted );
  }

}