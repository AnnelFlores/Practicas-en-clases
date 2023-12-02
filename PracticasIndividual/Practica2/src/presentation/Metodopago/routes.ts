import { Router } from 'express';
import { MetodoPagoController } from './controller';
import { MetodoPagoDatasourceImpl } from '../../infraestructure/datasource/Metodopago.datasource.impl';
import { MetodopagoRepositoryImpl } from '../../infraestructure/repositories/Metodopago.repository.impl';


export class MetodopagoRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new MetodoPagoDatasourceImpl();
    const MetodopagoRepository = new MetodopagoRepositoryImpl( datasource );
    const metodopagoController = new MetodoPagoController(MetodopagoRepository);

    router.get('/', metodopagoController.getMetodoPago );
    router.get('/:id', metodopagoController.getMetodopagoById );
    
    router.post('/', metodopagoController.createMetodopago);
    router.put('/:id', metodopagoController.updateMetodopago );
    router.delete('/:id', metodopagoController.deleteMetodopago );


    return router;
  }


}

