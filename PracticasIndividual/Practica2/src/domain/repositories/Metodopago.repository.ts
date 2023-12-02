import { CreateMetodoPagoDTO, UpdateMetodoPagoDto } from '../dtos';
import { MetodopagoEntity } from '../entities/Metodopago.entity';



export abstract class MetodopagoRepository {

  abstract create( createCustomerDto: CreateMetodoPagoDTO ): Promise<MetodopagoEntity>;

  abstract getAll(): Promise<MetodopagoEntity[]>;

  abstract findById( id: number ): Promise<MetodopagoEntity>;
  abstract updateById( UpdateMetodoPagoDto: UpdateMetodoPagoDto ): Promise<MetodopagoEntity>;
  abstract deleteById( id: number ): Promise<MetodopagoEntity>;

}