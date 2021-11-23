<p align="center">
  <img width=350px src="https://user-images.githubusercontent.com/68023969/142963908-ae749661-69ff-4696-90ac-fc53be23dc22.png" alt="IBM">
  <a title="IBM" target="_blank" href= "https://github.com/ana-olvera/grupo-2-pineapple-supermarket-app">
    <img width=400px src="https://user-images.githubusercontent.com/68023969/142961202-dbfa84a9-7157-4429-9fbe-1c4136498de5.jpg" alt="IBM">
  </a>
  
</p>

# Pineapple Supermarket App 👩‍💻
### Made by [Ana Olvera](https://github.com/ana-olvera), [Gala Reyes](https://github.com/GalaKarinaRP), [Melissa Arango](https://github.com/emae1712) & [Nora Alvarez](https://github.com/NoraAlvarezCovarrubias)
>Winning Women JA
## Index

* [1. Sobre el proyecto](#1-sobre-el-proyecto)
* [2. Sobre Pineapple](#2-sobre-pineapple)
* [3. Configuracion](#3-configuracion)
* [4. Esquema](#4-esquema)
* [5. Arquitectura](#5-arquitectura)
* [6. Tecnologías](#6-tecnologias)
* [7. Métodos desarrollados](#7-metodos)

## 1. Sobre el proyecto

John Smith es el presidente del Pineapple Supermarket, un negocio que comenzó como una pequeña tienda de abarrotes familiar y que hasta ahora ha llevado la contabilidad de su inventario de forma manual y escrita. El negocio ha prosperado los últimos meses y ahora inaugurarán su primer supermercado.

## 2. Sobre Pineapple

Pineapple Supermarket es una aplicación web que permite administrar el inventario de productos de un Supermercado online.

El proyecto tiene como objetivo desarrollar un microservicio que permita crear, actualizar, borrar y listar productos (CRUD), de un inventario de supermercado, además que pueda ser visualizado en la web, para poder hacer una búsqueda, ordenar y exportar los productos en un archivo Excel.

## 3. Configuracion

## 4. Esquema

<p align="center">
  <img width=600px src="https://user-images.githubusercontent.com/68023969/142964935-4d11d6f3-4b65-46c2-9f2f-62fea19f478a.jpg" alt="Schema">
</p>


## 5. Arquitectura

<p align="center">
  <img  height="400px" src="https://user-images.githubusercontent.com/68023969/142970884-a199f450-fb50-4d1f-8099-dfc92c18895c.jpg">
</p>

 El sistema contiene 5 páginas de navegación
 
 * **Home**: Página informativa inicial, contiene el	*Nombre del proyecto, Nombre del equipo, Nombre de los integrantes y	URL de Github*
 * **Login**: Los usuarios que deseen ver navegar por la página, deberán autenticarse con su usuario y su contraseña. Asimismo, podrán hacer la recuperación de contraseña.
 * **Menú principal**: Página que contiene el índice de las páginas que conforman la aplicación web.
 * **Productos**: Contiene el listado de productos del Supermercado (name, product category, description, quantity, unit price, picture), y según el usuario podrá crear, editar, eliminar, ver y exportar la tabla.
 * **Usuarios**: Visible solo para usuarios administradores y permite la administración de usuarios en el sistema.
 
 ## 6. Tenologías
 
 <p >
  <img align="right" height="180px" src="https://user-images.githubusercontent.com/68023969/124051684-90328b80-d9e2-11eb-8ad6-0e960fdcb4a5.png">
</p>

- [x] Spring Boot (spring-boot-starter-web, spring-boot-starter-data-jpa, spring-boot-starter-test, spring-boot-starter-validation)
- [x] Java 11
- [x] Gradle
- [x] JPA
- [x] MySQL
- [x] JUnit and Mockito

### Tests

 1. **Integration Test (for the Controller):** it uses the Spring Boot Test framework with mockMvc and Jupyter
 2. **Unit Test**
    * **for the Service:** it uses the Mockito framework with hamcrest matchers, mock and injectMocks annotations 
    * **for the Repository:**
 
 ## 7. Métodos desarrollados
 
 ```
http://localhost:8081/api/book
```
 
 <p >
  <img align="left" height= 30px src="https://user-images.githubusercontent.com/68023969/124558685-7c32c380-de00-11eb-84b8-cf2fdbd4f4c0.JPG">
</p>

 **HTTP Method: GET**
 
 *_Get all books_*

```
http://localhost:8081/api/book/getAllBooks
```
 
 *_Get book by Id_*

```
http://localhost:8081/api/book/getBookById/{bookId}
```
  
 *_Get books by State_*

```
http://localhost:8081/api/book/getBookByState/{state}
```

<p >
  <img align="left" height= 30px src="https://user-images.githubusercontent.com/68023969/124558273-09c1e380-de00-11eb-9b3d-8f6e5a093b6a.JPG">
</p>

 **HTTP Method: POST**

*_Create book_*

```
http://localhost:8080/api/book/createBook
```
```
{
  "title": "Title A",
  "author": "Anonymous",
  "editorialYear": 2000,
  "state": "AVAILABLE",
  "reservation": null
}
```

<p >
  <img align="left" height= 30px src="https://user-images.githubusercontent.com/68023969/124559128-f8c5a200-de00-11eb-9db3-180e6e6481c7.JPG">
</p>

 **HTTP Method: PUT**
 
*_Update book by Id_*
```
http://localhost:8080/api/book/updateBook/{bookId}
```
```
{
  "title": "Title B",
  "author": "Somebody",
  "editorialYear": 2021,
  "state": "AVAILABLE",
  "reservation": null
}
```
*_Update reservation by book Id_*
```
http://localhost:8080/api/book/updateReservationByBookId/{bookId}
```
```
{
  "startDate": "10-05-2021",
  "endDate": "26-06-2021"
}
```

<p >
  <img align="left" height= 30px src="https://user-images.githubusercontent.com/68023969/124559504-6a055500-de01-11eb-9952-a3a73d9b1d0e.JPG">
</p>

**HTTP Method: DELETE**
 
 *_Delete book by Id_*

```
http://localhost:8081/api/book/deleteBookById/{bookId}
```


