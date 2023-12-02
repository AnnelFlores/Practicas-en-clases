import { Public } from "@prisma/client/runtime/library";

export class MetodopagoEntity {

    constructor(
    public id: number,
    public nombre  : string,
    ) {}
  
    public static fromObject( object: {[key: string]: any} ): MetodopagoEntity {
      const { id, nombre } = object;
      if ( !id ) throw 'id is required';
      if ( !nombre ) throw 'nombre is required';
  
        return new MetodopagoEntity(id, nombre )
    }
  
  }
  
  
  