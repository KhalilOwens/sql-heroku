DROP DATABASE IF EXISTS JawsDB;
create database JawsDB;
use JawsDB;

create table todos (
id INT auto_increment not null,
description varchar(255),
createdAt timestamp not null,
primary key(id)
);