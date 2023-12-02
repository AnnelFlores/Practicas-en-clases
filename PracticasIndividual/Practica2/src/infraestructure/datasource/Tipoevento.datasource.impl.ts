import { prisma } from '../../data/postgres';
import { CreateTipoEventoDto, TipoeventoDatasource, TipoeventoEntity, UpdateTipoEventoDto } from '../../domain';




export class TipoeventoDatasourceImpl implements TipoeventoDatasource {

  async create( createTipoEventoDto: CreateTipoEventoDto ): Promise<TipoeventoEntity> {
    const tipoeventos = await prisma.tipoEvento.create({
      data: createTipoEventoDto!
    });

    return TipoeventoEntity.fromObject( tipoeventos );
  }

  async getAll(): Promise<TipoeventoEntity[]> {
    const tipoeventos = await prisma.tipoEvento.findMany();
    return tipoeventos.map( tipoevento => TipoeventoEntity.fromObject(tipoevento) );
  }

  async findById( id: number ): Promise<TipoeventoEntity> {
    const tipoevento = await prisma.tipoEvento.findFirst({
      where: { id }
    });

    if ( !tipoevento ) throw `Tipoevento with id ${ id } not found`;
    return TipoeventoEntity.fromObject(tipoevento);
  }

  async updateById( updateTipoEventoDto: UpdateTipoEventoDto ): Promise<TipoeventoEntity> {
    await this.findById( updateTipoEventoDto.id );
    
    const updatedTipoevento = await prisma.tipoEvento.update({
      where: { id: updateTipoEventoDto.id },
      data: updateTipoEventoDto!.values
    });

    return TipoeventoEntity.fromObject(updatedTipoevento);
  }

  async deleteById( id: number ): Promise<TipoeventoEntity> {
    await this.findById( id );
    const deleted = await prisma.tipoEvento.delete({
      where: { id }
    });

    return TipoeventoEntity.fromObject( deleted );
  }

}