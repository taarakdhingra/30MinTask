

create table Users(Name varchar(255) primary key,Password varchar(16), Points int)
insert into Users values('taarak',3434343,50);
insert into Users(Name,Password) values('risasssbh',5353);

ALTER TABLE Users ADD DEFAULT 50 FOR Points


delete from Users where Points IS NULL;
select * from Users;

alter table Users drop column Password;
