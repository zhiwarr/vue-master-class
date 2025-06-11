<script setup lang="ts">
import { usePageStore } from '@/stores/page'
import { ProjectsQuery, type Projects } from '@/utils/supaQueries'
import { columns } from '@/utils/TableColumns/ProjectsColumns'

usePageStore().pageData.title = 'projects'

const projects = ref<Projects | null>(null)
const fetchProjects = async () => {
  const { data, error } = await ProjectsQuery
  projects.value = data
}
await fetchProjects()
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>
