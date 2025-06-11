<script setup lang="ts">
import { usePageStore } from '@/stores/page'
import { tasksWithProjectsQuery, type tasksWithProjects } from '@/utils/supaQueries'
import { columns } from '@/utils/TableColumns/TasksColumns'

usePageStore().pageData.title = 'Tasks'

const tasks = ref<tasksWithProjects | null>(null)
const fetchTasks = async () => {
  const { data, error } = await tasksWithProjectsQuery

  if (error) console.log(error)

  tasks.value = data
}

await fetchTasks()
</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>
