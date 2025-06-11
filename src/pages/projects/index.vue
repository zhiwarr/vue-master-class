<script setup lang="ts">
import type { ColumnDef } from '@tanstack/vue-table'
import { RouterLink } from 'vue-router'
import { usePageStore } from '@/stores/page'
import { ProjectsQuery, type Projects } from '@/utils/SupaQueries'

usePageStore().pageData.title = 'projects'

const projects = ref<Projects | null>(null)
const fetchProjects = async () => {
  const { data, error } = await ProjectsQuery
  projects.value = data
}
await fetchProjects()

const columns: ColumnDef<Projects[0]>[] = [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
    cell: ({ row }) => {
      return h(
        RouterLink,
        {
          to: `projects/${row.original.slug}`,
          class: 'text-left font-medium w-full block bg-mute',
        },
        () => row.getValue('name'),
      )
    },
  },
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-left' }, 'Status'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium' }, row.getValue('status'))
    },
  },
  {
    accessorKey: 'collaborators',
    header: () => h('div', { class: 'text-left' }, 'Collaborators'),
    cell: ({ row }) => {
      return h(
        'div',
        { class: 'text-left font-medium' },
        JSON.stringify(row.getValue('collaborators')),
      )
    },
  },
]
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>
