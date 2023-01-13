drop database if exists plantParent_db;
create database plantParent_db;

use plantParent_db;

create table parent(
        id int not null auto_increment primary key,
        parent_name varchar(30) not null
    );
    create table plant(
        id int not null auto_increment primary key,
        plant_name varchar(30) not null,
    );
      
   