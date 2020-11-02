# Servicios Angular

1.- Validar que el api exista y esté retornando información.
* http://localhost:8080/api/empleados OK.

2.- Generar Servicio.
* ng generate service services/nombre_servicio

3.- Importamos HttClient
* servicio.ts
* app.module.ts

4.- Configuración de nuestro servicio.
* apiURL: string = 'api a consultar' (http://localhost:8080/api/empleados)
* agregamos httpclient al constructor del servicio
	- private http: HttpClientModule

5.- Agregamos la interfaz del objeto que consultamos
* ng generate interface interfaces/empleados

5.- Generar el o los metodos en nuestro servicio (agregar interfaz de retorno).
* getEmpleados(): Observable<interfaz_creada[]>

6.- Generamos un componente para el servicio (si es que no existe) .
* ng generate component empleado.

7.- Agregar metodo en nuestro component.
* generamos un método que llame a nuestro servicio.

8.- Consumimos los datos en nuestro Html.

<hr>

# Personal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
#   P r o y e c t o - t r u e q u e  
 