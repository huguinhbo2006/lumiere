import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { auntenticacionGuard } from '../guardianes/autenticacion.guard';
import { BancosComponent } from '../catalogos/bancos/bancos.component';
import { CalendariosComponent } from '../catalogos/calendarios/calendarios.component';
import { CampaniasComponent } from '../catalogos/campanias/campanias.component';
import { UniversidadesComponent } from '../catalogos/universidades/universidades.component';
import { CentrosUniversitariosComponent } from '../catalogos/centros-universitarios/centros-universitarios.component';
import { CarrerasComponent } from '../catalogos/carreras/carreras.component';
import { CategoriasComponent } from '../catalogos/categorias/categorias.component';
import { ConceptosAbonosComponent } from '../catalogos/conceptos-abonos/conceptos-abonos.component';
import { ConceptosCargosComponent } from '../catalogos/conceptos-cargos/conceptos-cargos.component';
import { ConceptosDedcuccionesComponent } from '../catalogos/conceptos-dedcucciones/conceptos-dedcucciones.component';
import { ConceptosDescuentosComponent } from '../catalogos/conceptos-descuentos/conceptos-descuentos.component';
import { ConceptosPercepcionesComponent } from '../catalogos/conceptos-percepciones/conceptos-percepciones.component';
import { ConceptosDevolucionesComponent } from '../catalogos/conceptos-devoluciones/conceptos-devoluciones.component';
import { ConceptosExtrasComponent } from '../catalogos/conceptos-extras/conceptos-extras.component';
import { CuentasComponent } from '../catalogos/cuentas/cuentas.component';
import { DepartamentosComponent } from '../catalogos/departamentos/departamentos.component';
import { EmpresasCursosComponent } from '../catalogos/empresas-cursos/empresas-cursos.component';
import { EscuelasComponent } from '../catalogos/escuelas/escuelas.component';
import { TiposEscuelasComponent } from '../catalogos/tipos-escuelas/tipos-escuelas.component';
import { EstadosComponent } from '../catalogos/estados/estados.component';
import { FormasPagosComponent } from '../catalogos/formas-pagos/formas-pagos.component';
import { TurnosComponent } from '../catalogos/turnos/turnos.component';
import { HorariosComponent } from '../catalogos/horarios/horarios.component';
import { MediosContactosComponent } from '../catalogos/medios-contactos/medios-contactos.component';
import { MediosPublicitariosComponent } from '../catalogos/medios-publicitarios/medios-publicitarios.component';
import { MetodosPagosComponent } from '../catalogos/metodos-pagos/metodos-pagos.component';
import { ModalidadesComponent } from '../catalogos/modalidades/modalidades.component';
import { MotivosBachilleratosComponent } from '../catalogos/motivos-bachilleratos/motivos-bachilleratos.component';
import { MotivosInscripcionesComponent } from '../catalogos/motivos-inscripciones/motivos-inscripciones.component';
import { MunicipiosComponent } from '../catalogos/municipios/municipios.component';
import { CursosComponent } from '../catalogos/cursos/cursos.component';
import { NivelesComponent } from '../catalogos/niveles/niveles.component';
import { ParidadesComponent } from '../catalogos/paridades/paridades.component';
import { PuestosComponent } from '../catalogos/puestos/puestos.component';
import { RubrosEgresosComponent } from '../catalogos/rubros-egresos/rubros-egresos.component';
import { RubrosComponent } from '../catalogos/rubros/rubros.component';
import { SedesComponent } from '../catalogos/sedes/sedes.component';
import { SexosComponent } from '../catalogos/sexos/sexos.component';
import { SubnivelesComponent } from '../catalogos/subniveles/subniveles.component';
import { SucursalesComponent } from '../catalogos/sucursales/sucursales.component';
import { TiposEgresosComponent } from '../catalogos/tipos-egresos/tipos-egresos.component';
import { TiposPagosComponent } from '../catalogos/tipos-pagos/tipos-pagos.component';
import { TiposUsuariosComponent } from '../catalogos/tipos-usuarios/tipos-usuarios.component';
import { TiposIngresosComponent } from '../catalogos/tipos-ingresos/tipos-ingresos.component';
import { ViasPublicitariasComponent } from '../catalogos/vias-publicitarias/vias-publicitarias.component';
import { ComponentesWebComponent } from '../desarrollo/componentes-web/componentes-web.component';
import { ModulosComponent } from '../desarrollo/modulos/modulos.component';
import { PaginasComponent } from '../desarrollo/paginas/paginas.component';
import { AltaCursosComponent } from '../directivos/alta-cursos/alta-cursos.component';
import { IngresosDirectivosComponent } from '../directivos/ingresos-directivos/ingresos-directivos.component';
import { EgresosDirectivosComponent } from '../directivos/egresos-directivos/egresos-directivos.component';
import { BalanceSucursalComponent } from '../directivos/balance-sucursal/balance-sucursal.component';
import { PermisosComponent } from '../directivos/permisos/permisos.component';
import { MetasIngresosComponent } from '../directivos/metas-ingresos/metas-ingresos.component';
import { AutorizacionNominasComponent } from '../directivos/autorizacion-nominas/autorizacion-nominas.component';
import { RecepcionValesComponent } from '../directivos/recepcion-vales/recepcion-vales.component';
import { SolicitudesModificacionIngresosComponent } from '../directivos/solicitudes-modificacion-ingresos/solicitudes-modificacion-ingresos.component';
import { CobroNominasComponent } from '../administrador/cobro-nominas/cobro-nominas.component';
import { CorteCajaComponent } from '../administrador/corte-caja/corte-caja.component';
import { CursosCongeladosComponent } from '../administrador/cursos-congelados/cursos-congelados.component';
import { EgresosAdministrativosComponent } from '../administrador/egresos-administrativos/egresos-administrativos.component';

const routes: Routes = [
  {path: '', canActivate: [auntenticacionGuard], component: InicioComponent, children: [
    //{ path: '', canActivate: [AutenticacionGuard], component: EstadisticasCalendarioComponent },
    { path: 'bancos', canActivate: [auntenticacionGuard], component: BancosComponent },
    { path: 'calendarios', canActivate: [auntenticacionGuard], component: CalendariosComponent },
    { path: 'campanias', canActivate: [auntenticacionGuard], component: CampaniasComponent },
    { path: 'universidades', canActivate: [auntenticacionGuard], component: UniversidadesComponent },
    { path: 'centrosUniversitarios', canActivate: [auntenticacionGuard], component: CentrosUniversitariosComponent },
    { path: 'carreras', canActivate: [auntenticacionGuard], component: CarrerasComponent },
    { path: 'categorias', canActivate: [auntenticacionGuard], component: CategoriasComponent },
    { path: 'conceptosAbonos', canActivate: [auntenticacionGuard], component: ConceptosAbonosComponent },
    { path: 'conceptosCargos', canActivate: [auntenticacionGuard], component: ConceptosCargosComponent },
    { path: 'conceptosDeducciones', canActivate: [auntenticacionGuard], component: ConceptosDedcuccionesComponent },
    { path: 'conceptosDescuentos', canActivate: [auntenticacionGuard], component: ConceptosDescuentosComponent },
    { path: 'conceptosPercepciones', canActivate: [auntenticacionGuard], component: ConceptosPercepcionesComponent },
    { path: 'conceptosDevoluciones', canActivate: [auntenticacionGuard], component: ConceptosDevolucionesComponent },
    { path: 'conceptosExtras', canActivate: [auntenticacionGuard], component: ConceptosExtrasComponent },
    { path: 'cuentas', canActivate: [auntenticacionGuard], component: CuentasComponent },
    { path: 'departamentos', canActivate: [auntenticacionGuard], component: DepartamentosComponent },
    { path: 'empresasCursos', canActivate: [auntenticacionGuard], component: EmpresasCursosComponent },
    { path: 'escuelas', canActivate: [auntenticacionGuard], component: EscuelasComponent },
    { path: 'tipoEscuelas', canActivate: [auntenticacionGuard], component: TiposEscuelasComponent },
    { path: 'estados', canActivate: [auntenticacionGuard], component: EstadosComponent },
    { path: 'formasPago', canActivate: [auntenticacionGuard], component: FormasPagosComponent },
    { path: 'turnos', canActivate: [auntenticacionGuard], component: TurnosComponent },
    { path: 'horarios', canActivate: [auntenticacionGuard], component: HorariosComponent },
    { path: 'mediosContactos', canActivate: [auntenticacionGuard], component: MediosContactosComponent },
    { path: 'mediosPublicitarios', canActivate: [auntenticacionGuard], component: MediosPublicitariosComponent },
    { path: 'metodosPago', canActivate: [auntenticacionGuard], component: MetodosPagosComponent },
    { path: 'modalidades', canActivate: [auntenticacionGuard], component: ModalidadesComponent },
    { path: 'motivosBachilleratos', canActivate: [auntenticacionGuard], component: MotivosBachilleratosComponent },
    { path: 'motivosInscripciones', canActivate: [auntenticacionGuard], component: MotivosInscripcionesComponent },
    { path: 'municipios', canActivate: [auntenticacionGuard], component: MunicipiosComponent },
    { path: 'cursos', canActivate: [auntenticacionGuard], component: CursosComponent },
    { path: 'niveles', canActivate: [auntenticacionGuard], component: NivelesComponent },
    { path: 'paridades', canActivate: [auntenticacionGuard], component: ParidadesComponent },
    { path: 'puestos', canActivate: [auntenticacionGuard], component: PuestosComponent },
    { path: 'rubrosEgresos', canActivate: [auntenticacionGuard], component: RubrosEgresosComponent },
    { path: 'rubrosIngresos', canActivate: [auntenticacionGuard], component: RubrosComponent },
    { path: 'sedes', canActivate: [auntenticacionGuard], component: SedesComponent },
    { path: 'sexos', canActivate: [auntenticacionGuard], component: SexosComponent },
    { path: 'subniveles', canActivate: [auntenticacionGuard], component: SubnivelesComponent },
    { path: 'sucursales', canActivate: [auntenticacionGuard], component: SucursalesComponent },
    { path: 'tiposEgreso', canActivate: [auntenticacionGuard], component: TiposEgresosComponent },
    { path: 'tiposPago', canActivate: [auntenticacionGuard], component: TiposPagosComponent },
    { path: 'tipoUsuario', canActivate: [auntenticacionGuard], component: TiposUsuariosComponent },
    { path: 'tiposIngreso', canActivate: [auntenticacionGuard], component: TiposIngresosComponent },
    { path: 'viasPublicitarias', canActivate: [auntenticacionGuard], component: ViasPublicitariasComponent },
    { path: 'componentes', canActivate: [auntenticacionGuard], component: ComponentesWebComponent },
    { path: 'modulos', canActivate: [auntenticacionGuard], component: ModulosComponent },
    { path: 'paginas', canActivate: [auntenticacionGuard], component: PaginasComponent },
    { path: 'altaCursos', canActivate: [auntenticacionGuard], component: AltaCursosComponent },
    { path: 'ingresosDirectivos', canActivate: [auntenticacionGuard], component: IngresosDirectivosComponent },
    { path: 'egresosDirectivos', canActivate: [auntenticacionGuard], component: EgresosDirectivosComponent },
    { path: 'balanceDirectivos', canActivate: [auntenticacionGuard], component: BalanceSucursalComponent },
    { path: 'permisos', canActivate: [auntenticacionGuard], component: PermisosComponent },
    { path: 'metasIngresosEstadisticas', canActivate: [auntenticacionGuard], component: MetasIngresosComponent },
    { path: 'metasIngresosEstadisticas', canActivate: [auntenticacionGuard], component: MetasIngresosComponent },
    { path: 'aceptacionNominasDirectivos', canActivate: [auntenticacionGuard], component: AutorizacionNominasComponent},
    { path: 'recepcionVales', canActivate: [auntenticacionGuard], component: RecepcionValesComponent},
    { path: 'solicitudesModificacionIngresos', canActivate: [auntenticacionGuard], component: SolicitudesModificacionIngresosComponent},
    { path: 'cobroNominas', canActivate: [auntenticacionGuard], component: CobroNominasComponent},
    { path: 'balanceAdministrativos', canActivate: [auntenticacionGuard], component: CorteCajaComponent},
    { path: 'cursosCongelados', canActivate: [auntenticacionGuard], component: CursosCongeladosComponent},
    { path: 'egresosAdministrativos', canActivate: [auntenticacionGuard], component: EgresosAdministrativosComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
