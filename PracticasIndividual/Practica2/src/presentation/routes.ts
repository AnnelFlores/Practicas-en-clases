import { Router } from 'express';

import { MetodopagoRoutes } from './Metodopago/routes';
import { TipoeventoRoutes } from './Tipoevento/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/Metodopago', MetodopagoRoutes.routes );
    router.use('/api/tipoevento', TipoeventoRoutes.routes );
    
    return router;
  }


}

