// DDD
import { Request, Response } from 'express';
import { CreateTipoEventoDto, UpdateTipoEventoDto } from '../../domain/dtos';
import { TipoeventoRepository } from '../../domain';


export class TipoeventoController {

  //* DI
  constructor(
    private readonly TipoeventoRepository: TipoeventoRepository,
  ) { }


  public getTipoevento = async ( req: Request, res: Response ) => {
    const tipoevento = await this.TipoeventoRepository.getAll();
    return res.json( tipoevento );
  };

  public getTipoeventoById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const tipoevento = await this.TipoeventoRepository.findById( id );
      res.json( tipoevento );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createTipoevento = async ( req: Request, res: Response ) => {
    const [ error, createTipoEventoDto ] = CreateTipoEventoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const tipoevento = await this.TipoeventoRepository.create( createTipoEventoDto! );
    res.json( tipoevento );

  };

  public updateTipoevento = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateTipoEventoDto ] = UpdateTipoEventoDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updatedTipoevento = await this.TipoeventoRepository.updateById( updateTipoEventoDto! );
    return res.json( updatedTipoevento );

  };


  public deleteTipoevento = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedTipoevento = await this.TipoeventoRepository.deleteById( id );
    res.json( deletedTipoevento );

  };



}