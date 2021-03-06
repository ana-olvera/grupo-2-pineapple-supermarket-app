import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
//Service
import { CatalogosService } from '../../services/catalogos.service';
import { SeguridadService } from '../../services/seguridad.service';
import { StorageService } from '../../services/storage.service';
//Models
import { Categoria } from '../../model/catalogos/categoria';
import { Unidadmedida } from 'src/app/model/catalogos/unidadmedida';
import { Producto } from 'src/app/model/productos/producto';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductoService } from 'src/app/services/producto-service';
import { switchAll } from 'rxjs';

@Component({
  selector: 'app-edita-producto',
  templateUrl: './edita-producto.component.html',
  styleUrls: ['./edita-producto.component.css']
})
export class EditaProductoComponent implements OnInit {

  private categoriaSeleccionada:Categoria= new Categoria();
  private unidadSeleccionada:Unidadmedida= new Unidadmedida();
  public previsualizacion: string="";
  public archivos: any = [];
  public loading: boolean = false;
  public formSubmitted = false;
  public editPage:boolean = false;

  public productoForm = this.fb.group({
    file: ['', [Validators.required]],
    nombre: ['', Validators.required],
    serial: ['', Validators.required],
    catCategorias: ['', Validators.required],
    descripcion: ['', Validators.required],
    cantidad: [0, Validators.required],
    catUnidadMedida: ['', Validators.required],
    precio: [0, Validators.required]
  });
  private producto:Producto = new Producto();

  listaCategorias:Categoria[] = [];
  categoriaTmp:Categoria = new Categoria();
  listaUnidadMedida:Unidadmedida[] = [];
  unidadMedidaTmp:Unidadmedida = new Unidadmedida();

  constructor(private _catalogosService:CatalogosService,
              private _router: Router,
              private fb: FormBuilder,
              private _seguridadService:SeguridadService,
              private _storageService:StorageService,
              private sanitizer: DomSanitizer,
              private _productoService: ProductoService) { }


  ngOnInit(): void {
    this.producto = this._storageService.getCurrentAnyItemSession("producto");
    if(this.producto.idProducto !== 0){
      this.productoForm.patchValue({
        nombre: this.producto.nombreProducto,
        serial: this.producto.serialProducto,
        catCategorias: this.producto.idCategoria,
        descripcion: this.producto.descripcionProducto,
        cantidad: this.producto.cantidadProducto,
        catUnidadMedida: this.producto.idUnidadMedida,
        precio: this.producto.precioUnitario
      });
      this.editPage = true;
    }
    this.cargarProducto();
  }

  cargarProducto(){
    this._catalogosService.getCategoriasProductos()
    .subscribe((data:any[]) => {
      data.forEach(element => {
        this.categoriaTmp = element;
        this.listaCategorias.push(this.categoriaTmp);
      });
      this._catalogosService.getUnidadMedidaProductos()
    .subscribe((data:any[]) => {
      data.forEach(element => {
        this.unidadMedidaTmp = element;
        this.listaUnidadMedida.push(this.unidadMedidaTmp);
      });
    });
    });
  }

  compararCategoria(cat1:Categoria, cat2:Categoria){
    if(cat1==null || cat2==null){
      return false;
    }
    return cat1.idCategoria===cat2.idCategoria;
  }

  compararUnidad(cat1:Unidadmedida, cat2:Unidadmedida){
    if(cat1==null || cat2==null){
      return false;
    }
    return cat1.idUnidadMedida===cat2.idUnidadMedida;
  }

  capturarFile(event:any) {
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log(imagen);

    })
    this.archivos.push(archivoCapturado)
    //
    // console.log(event.target.files);

  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
      return;

    } catch (e) {
      return null;
    }
  })

  guardar() {
    this.formSubmitted = true;

    let rol = this.productoForm.get('catCategorias')?.valueChanges
              .subscribe( region => {
                console.log(region);
              });

    if( this.productoForm.invalid){ return;
    console.log('formulario invalido');
     }

    const {nombre, serial, descripcion, cantidad, precio,
      catCategorias, catUnidadMedida} = this.productoForm.value;
    this.producto.urlImagen=this.archivos[0].name;
    this.producto.nombreProducto =  nombre;
    this.producto.serialProducto = serial;
    this.producto.descripcionProducto = descripcion;
    this.producto.cantidadProducto = cantidad;
    this.producto.precioUnitario = precio;
    this.producto.idCategoria = catCategorias;
    this.producto.idUnidadMedida = catUnidadMedida;
    this._productoService.uploadFile(this.archivos[0])
        .subscribe((data:any)=>{
        this._productoService.guardaProduc(this.producto)
          .subscribe((data:any)=>{
            Swal.fire({
              title: 'Exito!',
              text: 'Producto guardado correctamente.',
              icon: 'success',
              confirmButtonText: 'Aceptar'
            })
            console.log("data");
            console.log(data);
          });
      });
     /* this._productoService.guardaProduc(this.producto)
      .subscribe((data:any)=>{

      });*/
  }

  regresar(){
    this._storageService.removeAnyItemSession("producto");
    this._router.navigate(['/productos']);
  }

  campoNoValido( campo: string ): boolean {
    return ( this.productoForm.get(campo)?.invalid && this.formSubmitted ? true : false);
  }
}
