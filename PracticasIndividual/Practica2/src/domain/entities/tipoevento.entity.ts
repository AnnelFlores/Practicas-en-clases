export class TipoeventoEntity {

  constructor(
    public  id: number,
    public  nombre  : string,
    public  descripcion  : Date,
    public  precioBase  : string,
    public  aforoMaximo  : Date,
    public  duracion  : number,
  ) {}

  public static fromObject( object: {[key: string]: any} ): TipoeventoEntity {
    const { id, nombre, descripcion, precioBase, aforoMaximo, duracion } = object;
    if ( !id ) throw 'Id is required';
    if (!nombre) throw 'nombre  property is required';
    if (!descripcion) throw 'descripcion  property is required';
    if (!precioBase) throw 'precioBase  property is required';
    if (!aforoMaximo) throw 'aforoMaximo  property is required';
    if (!duracion) throw 'duracion property is required';

      return new TipoeventoEntity(id, nombre, descripcion, precioBase, aforoMaximo, duracion)
  }

}


