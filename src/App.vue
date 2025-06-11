<script setup lang="ts"></script>

<template>
  <AuthLayout>
    <RouterView v-slot="{ Component, route }">
      <Suspense v-if="Component" :timeout="0">
        <Component :is="Component" :key="route.name" />
        <template #fallback>
          <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div
              class="w-12 h-12 rounded-full animate-spin border-4 border-solid border-blue-500 border-t-transparent"
            ></div>
          </div>
        </template>
      </Suspense>
    </RouterView>
  </AuthLayout>
</template>
