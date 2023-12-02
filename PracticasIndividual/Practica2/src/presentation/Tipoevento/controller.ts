import { Request, Response } from 'express';
import { CreateTipoEventoDto, UpdateTipoEventoDto } from '../../domain/dtos';
import { CreateTipoEvento, deleteTipoevento, GetTipoevento, GetTipoeventos, TipoeventoRepository, Updatetipoevento } from '../../domain';


export class TipoeventoController {

  //* DI
  constructor(
    private readonly TipoeventoRepository: TipoeventoRepository,
  ) { }


  public getTipoevento = ( req: Request, res: Response ) => {

    new GetTipoeventos( this.TipoeventoRepository )
      .execute()
      .then( curso => res.json( curso ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getTipoeventoById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetTipoevento( this.TipoeventoRepository )
      .execute( id )
      .then( vehicle => res.json( vehicle ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public createTipoEvento = ( req: Request, res: Response ) => {
    const [ error, createTipoEventoDto ] = CreateTipoEventoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateTipoEvento( this.TipoeventoRepository )
      .execute( createTipoEventoDto! )
      .then( curso => res.json( curso ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updatetipoevento = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updatetipoeventoDto ] = UpdateTipoEventoDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new Updatetipoevento( this.TipoeventoRepository )
      .execute( updatetipoeventoDto! )
      .then( curso => res.json( curso ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteTipoevento = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new deleteTipoevento( this.TipoeventoRepository )
      .execute( id )
      .then( curso => res.json( curso ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 