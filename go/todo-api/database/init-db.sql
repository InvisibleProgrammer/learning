create table Todos (
    Id serial,
    UserId int not null,
    Title varchar(50) not null,
    Description varchar(500) not null,
    RecordedAt date default(now() at time zone 'utc'),
    Completed boolean not null default(false),
    constraint PK_Todos primary key (Id)
);

create index NCL_Todos_UserId on Todos (UserId, Completed);
