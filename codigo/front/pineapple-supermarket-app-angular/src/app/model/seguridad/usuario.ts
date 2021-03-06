import { miembrosGrupo } from './miembro-grupo';
import { UsuarioDetalle } from './usuario-detalle';
export class Usuario {
  idUsuario: number;
  nombreUsuario: String;
  pwdUsuario: String;
  estatusUsuario: boolean;
  idUsuarioDetalle: UsuarioDetalle;
  fechaRegistroUsuario:string;
  miembrosGrupoCollection : miembrosGrupo[];

  constructor(){
    this.idUsuario = 0;
    this.nombreUsuario = "";
    this.pwdUsuario = "";
    this.fechaRegistroUsuario = "";
    this.estatusUsuario = false;
    this.idUsuarioDetalle = new UsuarioDetalle();
    this.miembrosGrupoCollection = [];
  }

}
