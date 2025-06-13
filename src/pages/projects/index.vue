<script setup lang="ts">
import { useErrorStore } from '@/stores/error'
import { usePageStore } from '@/stores/page'
import { ProjectsQuery, type Projects } from '@/utils/supaQueries'
import { columns } from '@/utils/TableColumns/ProjectsColumns'

usePageStore().pageData.title = 'projects'

const projects = ref<Projects | null>(null)
const fetchProjects = async () => {
  const { data, error, status } = await ProjectsQuery
  if (error) useErrorStore().setError({ error: error, customCode: status })
  projects.value = data
}
await fetchProjects()
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>
