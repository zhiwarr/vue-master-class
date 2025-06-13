import { supabase } from '@/lib/supabaseClient'
import type { QueryData } from '@supabase/supabase-js'

export const tasksWithProjectsQuery = supabase.from('tasks').select(`
  *,
  projects(
  id,
  name,
  slug
  )
  `)

export type tasksWithProjects = QueryData<typeof tasksWithProjectsQuery>

export const ProjectsQuery = supabase.from('projects').select()
export type Projects = QueryData<typeof ProjectsQuery>

export const ProjectQuery = (slug: string) =>
  supabase
    .from('projects')
    .select(
      `
   *,
   tasks (
    id,
    name,
    status,
    due_date
   )
  `,
    )
    .eq('slug', slug)
    .single()

export type Project = QueryData<ReturnType<typeof ProjectQuery>>

export const TaskQuery = (id: number) =>
  supabase
    .from('tasks')
    .select(
      `*,
projects(id,name,slug,status, description, collaborators)
`,
    )
    .eq('id', id)
    .single()
export type Task = QueryData<ReturnType<typeof TaskQuery>>
