<template>
  <div class="p-10 h-screen" :class="{ 'bg-purple-50': $route.params.uuid }">
    <div class="bg-blue-100 p-4 rounded mb-4 text-xl">
        <pre class="font-mono">Route: "{{ $route.fullPath }}", params.uuid: {{ ($route.params.uuid) ? $route.params.uuid : `""` }}</pre>
    </div>

    <NuxtLink @click="resetData" class="p-2 bg-green-100 underline" to="/">Go to /</NuxtLink> | 
    <NuxtLink class="p-2 bg-green-100 underline" to="/123">Go to /123</NuxtLink>

    <div class="mt-4">
        <NuxtLoadingIndicator :height="7" />

        <!-- SUSPENSE -->
        <NuxtPage />
        <!-- SUSPENSE -->
    </div>
  </div>
</template>

<script setup lang="ts">
    const { items: storeItems, shipments: storeShipments } = storeToRefs(useAppStore())

    const resetData = () => {
        storeItems.value = []
        storeShipments.value = []
    }
</script>
