import { Request, Response } from 'express';
import { CreateMetodoPagoDTO, UpdateMetodoPagoDto  } from '../../domain/dtos';
import { CreateMetodopago, DeleteMetodoPago, GetMetodoPago, GetMetodoPagos , MetodopagoRepository, UpdateMetodopago } from '../../domain';


export class MetodoPagoController {

  //* DI
  constructor(
    private readonly MetodopagoRepository: MetodopagoRepository,
  ) { }


  public getMetodoPago = ( req: Request, res: Response ) => {

    new GetMetodoPagos( this.MetodopagoRepository )
      .execute()
      .then( metodopago => res.json( metodopago ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getMetodopagoById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetMetodoPago( this.MetodopagoRepository )
      .execute( id )
      .then( metodopago => res.json( metodopago ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createMetodopago = ( req: Request, res: Response ) => {
    const [ error, createMetodoPagoDTO ] = CreateMetodoPagoDTO.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateMetodopago( this.MetodopagoRepository )
      .execute( createMetodoPagoDTO! )
      .then( metodopago => res.json( metodopago ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateMetodopago = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateMetodoPagoDto ] = UpdateMetodoPagoDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateMetodopago( this.MetodopagoRepository )
      .execute( updateMetodoPagoDto! )
      .then( metodopago => res.json( metodopago ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteMetodopago = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeleteMetodoPago( this.MetodopagoRepository )
      .execute( id )
      .then( metodopago => res.json( metodopago ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 