insert into city(Name, Zipcode, Updated) values ('Pompton Plains', '07444', now());
insert into city(Name, Zipcode, Updated) values ('Wayne', '07470', now());
insert into city(Name, Zipcode, Updated) values ('Winston Salem', '27127', now());
insert into city(Name, Zipcode, Updated) values ('Bangalore', '560025', now());

insert into country(Name, Updated) values ('United States', now());
insert into country(Name, Updated) values ('India', now());
insert into country(Name, Updated) values ('South Korea', now());
insert into country(Name, Updated) values ('Tanzania', now());

insert into deviceassignment values (1, 1, 1, 1, now());
insert into deviceassignment values (2, 1, 2, 2, now());
insert into deviceassignment values (3, 2, 1, 3, now());
insert into deviceassignment values (4, 2, 2, 4, now());

insert into devices(devicetypeid, leased, employeeid, updated) values (1, 0, 1, now());
insert into devices(devicetypeid, leased, employeeid, updated) values (2, 0, 2, now());
insert into devices(devicetypeid, leased, employeeid, updated) values (3, 1, 3, now());
insert into devices(devicetypeid, leased, employeeid, updated) values (4, 1, 4, now());

insert into devicetypes(devicetype, updated) values ('laptop', now());
insert into devicetypes(devicetype, updated) values ('desktop', now());
insert into devicetypes(devicetype, updated) values ('copier', now());
insert into devicetypes(devicetype, updated) values ('smartboard', now());

insert into employee(FirstName, LastName, Email, PhoneNumber, OfficeID, Password, address, CityID, CountryID, Updated)
	values('Mickey', 'Mouse', 'mick@email.com', 3839273, 1, 'password', '1 Disney rd', 1, 1, now());
insert into employee(FirstName, LastName, Email, PhoneNumber, OfficeID, Password, address, CityID, CountryID, Updated)
	values('Mini', 'Mouse', 'mini@email.com', 12345, 1, 'password', '2 Disney rd', 2, 2, now());
insert into employee(FirstName, LastName, Email, PhoneNumber, OfficeID, Password, address, CityID, CountryID, Updated)
	values('Joe', 'Shmoe', 'joe@email.com', 383354573, 2, 'password', '4 please st', 3, 3, now());
insert into employee(FirstName, LastName, Email, PhoneNumber, OfficeID, Password, address, CityID, CountryID, Updated)
	values('Jen', 'Aniston', 'mick@email.com', 9843479, 2, 'password', '9 help ln', 4, 4, now());

insert into inventory(stock, required, updated) values (2, 0, now());
insert into inventory(stock, required, updated) values (2, 0, now());
insert into inventory(stock, required, updated) values (2, 0, now());
insert into inventory(stock, required, updated) values (2, 0, now());

insert into maintenance(DeviceID, OfficeID, DeviceType, EmployeeID, Problem, Component, Price, Updated)
	values (1, 1, 'laptop', 1, 'frozen', 'screen', 6.78, now());
    
insert into office(address, CityID, countryid, updated)
	values('34 trout st', 1, 1, now());
insert into office(address, CityID, countryid, updated)
	values('3 bass st', 2, 2, now());

insert into reservation values(1, 1, 'laptop', 1, now(), 30, 1, now());
insert into reservation values(2, 1, 'desktop', 2, now(), 30, 1, now());
insert into reservation values(3, 2, 'copier', 3, now(), 30, 1, now());
insert into reservation values(4, 2, 'smartboard', 4, now(), 30, 1, now());

insert into vendor values(1, 'Machines Inc.', 1, now(), '2024-05-13 06:26:02', now());
insert into vendor values(1, 'Machines Inc.', 2, now(), '2024-05-13 06:26:02', now());
insert into vendor values(2, 'Computers Inc.', 3, now(), '2024-05-13 06:26:02', now());
insert into vendor values(2, 'Computers Inc.', 4, now(), '2024-05-13 06:26:02', now());

select * from city;
select * from country;
select * from deviceassignment;
select * from devices;
select * from devicetypes;
select * from employee;
select * from inventory;
select * from maintenance;
select * from office;
select * from reservation;
select * from vendor;
delete from deviceassignment;