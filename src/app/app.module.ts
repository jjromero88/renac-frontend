import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { MensajeConfirmacionComponent } from './components/shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';
import { AddEditTipoasientoComponent } from './components/pages/tipoasiento/add-edit-tipoasiento/add-edit-tipoasiento.component';
import { ListTipoasientoComponent } from './components/pages/tipoasiento/list-tipoasiento/list-tipoasiento.component';
import { HttpClientModule } from '@angular/common/http';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { DateTimeFormatPipe } from './pipes/datetime-format.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';
import { BulletListPipe } from './pipes/bullet-list.pipe';
import { CapitalizarPipe } from './pipes/capitalizar.pipe';
import { CustomDatePipe } from './pipes/customDate.pipe';
import { ListInformerenacComponent } from './components/pages/informerenac/list-informerenac/list-informerenac.component';
import { AddEditInformerenacComponent } from './components/pages/informerenac/add-edit-informerenac/add-edit-informerenac.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { FieldsetComponent } from './components/shared/fieldset/fieldset.component';
import { ListAsientoComponent } from './components/pages/asientocircunscripcion/list-asiento/list-asiento.component';
import { AddEditAsientoComponent } from './components/pages/asientocircunscripcion/add-edit-asiento/add-edit-asiento.component';
import { ListNormaModalComponent } from './components/pages/norma/list-norma-modal/list-norma-modal.component';
import { ListNormaComponent } from './components/pages/norma/list-norma/list-norma.component';
import { AddEditNormaComponent } from './components/pages/norma/add-edit-norma/add-edit-norma.component';
import { DerivarInformeSubssiatComponent } from './components/pages/subsecretariossiat/derivar-informe-subssiat/derivar-informe-subssiat.component';
import { AjustesSubssiatComponent } from './components/pages/subsecretariossiat/ajustes-subssiat/ajustes-subssiat.component';
import { ListInformesSubssiatComponent } from './components/pages/subsecretariossiat/list-informes-subssiat/list-informes-subssiat.component';
import { AprobarAnotacionSubssiatComponent } from './components/pages/subsecretariossiat/aprobar-anotacion-subssiat/aprobar-anotacion-subssiat.component';
import { ListInformesEspssiatComponent } from './components/pages/especialistassiat/list-informes-espssiat/list-informes-espssiat.component';
import { DerivarInformeEspssiatComponent } from './components/pages/especialistassiat/derivar-informe-espssiat/derivar-informe-espssiat.component';
import { ListInformacionSsiatComponent } from './components/pages/informacion-ssiat/list-informacion-ssiat/list-informacion-ssiat.component';
import { ListDocumentosSsiatComponent } from './components/pages/informacion-ssiat/list-documentos-ssiat/list-documentos-ssiat.component';
import { ListInformesSubssatdotComponent } from './components/pages/subsecretariossatdot/list-informes-subssatdot/list-informes-subssatdot.component';
import { DerivarInformeSubssatdotComponent } from './components/pages/subsecretariossatdot/derivar-informe-subssatdot/derivar-informe-subssatdot.component';
import { CargarInformeSubssatdotComponent } from './components/pages/subsecretariossatdot/cargar-informe-subssatdot/cargar-informe-subssatdot.component';
import { AddEditTipomodificacionasientoComponent } from './components/pages/tipomodificacionasiento/add-edit-tipomodificacionasiento/add-edit-tipomodificacionasiento.component';
import { ListTipomodificacionasientoComponent } from './components/pages/tipomodificacionasiento/list-tipomodificacionasiento/list-tipomodificacionasiento.component';
import { AddEditTipodocumentorenacComponent } from './components/pages/tipodocumentorenac/add-edit-tipodocumentorenac/add-edit-tipodocumentorenac.component';
import { ListTipodocumentorenacComponent } from './components/pages/tipodocumentorenac/list-tipodocumentorenac/list-tipodocumentorenac.component';
import { DerivarInformeEspssatdotComponent } from './components/pages/especialistassatdot/derivar-informe-espssatdot/derivar-informe-espssatdot.component';
import { AjustesEspssatdotComponent } from './components/pages/especialistassatdot/ajustes-espssatdot/ajustes-espssatdot.component';
import { ListInformesEspssatdotComponent } from './components/pages/especialistassatdot/list-informes-espssatdot/list-informes-espssatdot.component';
import { ListInformesAnotacionComponent } from './components/pages/subsecretariossiat/list-informes-anotacion/list-informes-anotacion.component';
import { ListInformesDerivacionssatdotComponent } from './components/pages/subsecretariossatdot/list-informes-derivacionssatdot/list-informes-derivacionssatdot.component';
import { EditEvaluacionfavorableComponent } from './components/pages/especialistassatdot/edit-evaluacionfavorable/edit-evaluacionfavorable.component';
import { EditInformesOpinionFavorableComponent } from './components/pages/especialistassatdot/edit-informes-opinion-favorable/edit-informes-opinion-favorable.component';
import { AjustesSubssatdotComponent } from './components/pages/subsecretariossatdot/ajustes-subssatdot/ajustes-subssatdot.component';
import { ConsultaCircunscripcionesComponent } from './components/pages/consultas/consulta-circunscripciones/consulta-circunscripciones.component';
import { ConsultaAsientosComponent } from './components/pages/consultas/consulta-asientos/consulta-asientos.component';
import { ConsultaFicharegistralComponent } from './components/pages/consultas/consulta-ficharegistral/consulta-ficharegistral.component';
import { ConsultaDocumentosComponent } from './components/pages/consultas/consulta-documentos/consulta-documentos.component';
import { ListResparchivoAnotacionComponent } from './components/pages/responsablearchivo/list-resparchivo-anotacion/list-resparchivo-anotacion.component';
import { ListResparchivoSolicitudComponent } from './components/pages/responsablearchivo/list-resparchivo-solicitud/list-resparchivo-solicitud.component';
import { AsignarEspecialistaComponent } from './components/pages/subsecretariossatdot/asignar-especialista/asignar-especialista.component';
import { AdjuntarSolicitudinformacionComponent } from './components/pages/responsablearchivo/adjuntar-solicitudinformacion/adjuntar-solicitudinformacion.component';
import { ListInformesFormatosrespuestaComponent } from './components/pages/especialistassiat/list-informes-formatosrespuesta/list-informes-formatosrespuesta.component';
import { AddEditConstanciaanotacionComponent } from './components/pages/especialistassiat/add-edit-constanciaanotacion/add-edit-constanciaanotacion.component';
import { AddEditRespgoreComponent } from './components/pages/especialistassiat/add-edit-respgore/add-edit-respgore.component';
import { RetornarInformesComponent } from './components/pages/especialistassiat/retornar-informes/retornar-informes.component';
import { DerivarInformesAnotacionComponent } from './components/pages/especialistassiat/derivar-informes-anotacion/derivar-informes-anotacion.component';
import { AddEditConstanciafirmadaComponent } from './components/pages/subsecretariossiat/add-edit-constanciafirmada/add-edit-constanciafirmada.component';
import { DerivarInformeResparchivoComponent } from './components/pages/subsecretariossiat/derivar-informe-resparchivo/derivar-informe-resparchivo.component';
import { AdjuntarAnotacionComponent } from './components/pages/responsablearchivo/adjuntar-anotacion/adjuntar-anotacion.component';

@NgModule({
  declarations: [
    AppComponent,
    MensajeConfirmacionComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    ResetPasswordComponent,
    AddEditTipoasientoComponent,
    ListTipoasientoComponent,
    DateFormatPipe,
    DateTimeFormatPipe,
    HighlightPipe,
    BulletListPipe,
    CapitalizarPipe,
    CustomDatePipe,
    ListInformerenacComponent,
    AddEditInformerenacComponent,
    FieldsetComponent,
    ListAsientoComponent,
    AddEditAsientoComponent,
    ListNormaModalComponent,
    ListNormaComponent,
    AddEditNormaComponent,
    DerivarInformeSubssiatComponent,
    AjustesSubssiatComponent,
    ListInformesSubssiatComponent,
    AprobarAnotacionSubssiatComponent,
    ListInformesEspssiatComponent,
    DerivarInformeEspssiatComponent,
    ListInformacionSsiatComponent,
    ListDocumentosSsiatComponent,
    ListInformesSubssatdotComponent,
    DerivarInformeSubssatdotComponent,
    CargarInformeSubssatdotComponent,
    AddEditTipomodificacionasientoComponent,
    ListTipomodificacionasientoComponent,
    AddEditTipodocumentorenacComponent,
    ListTipodocumentorenacComponent,
    DerivarInformeEspssatdotComponent,
    AjustesEspssatdotComponent,
    ListInformesEspssatdotComponent,
    ListInformesAnotacionComponent,
    ListInformesDerivacionssatdotComponent,
    EditEvaluacionfavorableComponent,
    EditInformesOpinionFavorableComponent,
    AjustesSubssatdotComponent,
    ConsultaCircunscripcionesComponent,
    ConsultaAsientosComponent,
    ConsultaFicharegistralComponent,
    ConsultaDocumentosComponent,
    ListResparchivoAnotacionComponent,
    ListResparchivoSolicitudComponent,
    AsignarEspecialistaComponent,
    AdjuntarSolicitudinformacionComponent,
    ListInformesFormatosrespuestaComponent,
    AddEditConstanciaanotacionComponent,
    AddEditRespgoreComponent,
    RetornarInformesComponent,
    DerivarInformesAnotacionComponent,
    AddEditConstanciafirmadaComponent,
    DerivarInformeResparchivoComponent,
    AdjuntarAnotacionComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DatePipe,
    { provide: MAT_DATE_LOCALE, useValue: 'es-PE' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
