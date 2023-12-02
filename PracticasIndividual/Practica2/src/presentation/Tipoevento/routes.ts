import { Router } from 'express';
import { TipoeventoController } from './controller';
import { TipoeventoDatasourceImpl } from '../../infraestructure/datasource/Tipoevento.datasource.impl';
import { TipoeventoRepositoryImpl } from '../../infraestructure/repositories/tipoevento.repository.impl';


export class TipoeventoRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new TipoeventoDatasourceImpl();
    const tipoeventoRepository = new TipoeventoRepositoryImpl( datasource );
    const tipoeventoController = new TipoeventoController(tipoeventoRepository);

    router.get('/', tipoeventoController.getTipoevento );
    router.get('/:id', tipoeventoController.getTipoeventoById );
    
    router.post('/', tipoeventoController.createTipoEvento );
    router.put('/:id', tipoeventoController.updatetipoevento );
    router.delete('/:id', tipoeventoController.deleteTipoevento );


    return router;
  }


}

