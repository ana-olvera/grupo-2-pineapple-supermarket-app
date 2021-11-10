import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { ProductosComponent } from './components/productos/productos.component';
import { UsuarioComponent } from './components/usuario/usuarios/usuario.component';
import { NuevoUsuarioComponent } from './components/usuario/nuevo-usuario/nuevo-usuario.component';
import { LoginComponent } from './components/auth/login/login.component';
import { EditaProductoComponent } from './components/edita-producto/edita-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    UsuariosComponent,
    FooterComponent,
    IndexComponent,
    ProductosComponent,
    UsuarioComponent,
    NuevoUsuarioComponent,
    LoginComponent,
    EditaProductoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
