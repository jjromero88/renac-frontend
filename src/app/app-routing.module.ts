import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ListTipoasientoComponent } from './components/pages/tipoasiento/list-tipoasiento/list-tipoasiento.component';
import { ListAsientoComponent } from './components/pages/asientocircunscripcion/list-asiento/list-asiento.component';
import { ListInformesSubssiatComponent } from './components/pages/subsecretariossiat/list-informes-subssiat/list-informes-subssiat.component';
import { ListInformesEspssiatComponent } from './components/pages/especialistassiat/list-informes-espssiat/list-informes-espssiat.component';
import { ListInformesSubssatdotComponent } from './components/pages/subsecretariossatdot/list-informes-subssatdot/list-informes-subssatdot.component';
import { ListTipomodificacionasientoComponent } from './components/pages/tipomodificacionasiento/list-tipomodificacionasiento/list-tipomodificacionasiento.component';
import { ListTipodocumentorenacComponent } from './components/pages/tipodocumentorenac/list-tipodocumentorenac/list-tipodocumentorenac.component';
import { ListInformesEspssatdotComponent } from './components/pages/especialistassatdot/list-informes-espssatdot/list-informes-espssatdot.component';
import { ListInformesAnotacionComponent } from './components/pages/subsecretariossiat/list-informes-anotacion/list-informes-anotacion.component';
import { ListInformesDerivacionssatdotComponent } from './components/pages/subsecretariossatdot/list-informes-derivacionssatdot/list-informes-derivacionssatdot.component';
import { ListResparchivoAnotacionComponent } from './components/pages/responsablearchivo/list-resparchivo-anotacion/list-resparchivo-anotacion.component';
import { ListResparchivoSolicitudComponent } from './components/pages/responsablearchivo/list-resparchivo-solicitud/list-resparchivo-solicitud.component';
import { ConsultaCircunscripcionesComponent } from './components/pages/consultas/consulta-circunscripciones/consulta-circunscripciones.component';
import { ListInformesFormatosrespuestaComponent } from './components/pages/especialistassiat/list-informes-formatosrespuesta/list-informes-formatosrespuesta.component';

const routes: Routes = [
  { path: 'login'    , component: LoginComponent },
  { path: 'home'    , component: HomeComponent },
  { path: 'about'    , component: AboutComponent },
  { path: 'tipoasiento'    , component: ListTipoasientoComponent },
  { path: 'tipodocumento'    , component: ListTipodocumentorenacComponent },
  { path: 'tiposmodificacion'    , component: ListTipomodificacionasientoComponent },
  { path: 'registroinformes'    , component: ListInformesEspssiatComponent },
  { path: 'registroformatos'    , component: ListInformesFormatosrespuestaComponent },
  { path: 'subsecretariossiat'    , component: ListInformesSubssiatComponent },
  { path: 'subsecretariossatdot'    , component: ListInformesSubssatdotComponent },
  { path: 'especialistassatdot'    , component: ListInformesEspssatdotComponent },
  { path: 'subsecretariossiatanotacion'    , component: ListInformesAnotacionComponent },
  { path: 'subsecretariossatdotderivacion'    , component: ListInformesDerivacionssatdotComponent },
  { path: 'responsablearchivoanotacion'    , component: ListResparchivoAnotacionComponent },
  { path: 'responsablearchivosolicitud'    , component: ListResparchivoSolicitudComponent },
  { path: 'consultas'    , component: ConsultaCircunscripcionesComponent },
  { path: 'asientos/:id'    , component: ListAsientoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
