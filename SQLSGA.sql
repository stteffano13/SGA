/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     7/4/2021 4:53:58 PM                          */
/*==============================================================*/


drop table if exists ADMINISTRADOR;

drop table if exists ESTUDIANTE;

/*==============================================================*/
/* Table: ADMINISTRADOR                                         */
/*==============================================================*/
create table ADMINISTRADOR
(
   ID_ADMINISTRADOR     int not null auto_increment,
   CORREO_ADMINISTRADOR text not null,
   CONTRASENA_ADMINISTRADOR varchar(100) not null,
   primary key (ID_ADMINISTRADOR)
);

/*==============================================================*/
/* Table: ESTUDIANTE                                            */
/*==============================================================*/
create table ESTUDIANTE
(
   ID_ESTUDIANTE        int not null auto_increment,
   CODIGO_ESTUDIANTE    varchar(1000) not null,
   NOMBRE_ESTUDIANTE    text not null,
   APELLIDO_ESTUDIANTE  text not null,
   CORREO_ESTUDIANTE    text not null,
   CONTRASENA_ESTUDIANTE text not null,
   CEDULA_ESTUDIANTE    text not null,
   CELULAR_ESTUDIANTE   varchar(10) not null,
   ESTADO_ESTUDIANTE    int not null,
   primary key (ID_ESTUDIANTE)
);

