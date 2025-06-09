drop table if exists tasks;

drop type if exists current_status;
create type current_status as enum ('in-progress', 'completed');
create table 
  tasks (
    id bigint primary key generated always as identity not null,
    created_at timestamptz default now() not null,
    name text not null,
    status current_status default 'in-progress' not null,
    description text not null,
    due_date date default null,
    project_id bigint references projects (id) default null,
    collaborators text array default array[]::varchar[] not null
  );