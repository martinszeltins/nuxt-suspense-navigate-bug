<template>
    <div v-if="$route.params.uuid" class="bg-blue-600 w-full rounded-lg h-16 text-white flex items-center px-4 font-medium mb-4 mt-4">Data Page</div>

    <div class="main-content" :class="{ 'bg-purple-200 p-6 rounded-xl': $route.params.uuid }">
        <h1 class="font-bold text-2xl mb-4" v-if="$route.params.uuid"># Data Page</h1>

        <div style="font-size: 11px; max-height:200px;overflow:auto;padding: 10px;background: #f8f8f8;border-radius: 4px;font-family: monospace;"><pre><b>storeItems:</b> {{ storeItems }}</pre></div><br><br>

        <div style="font-size: 11px; max-height:200px;overflow:auto;padding: 10px;background: #f8f8f8;border-radius: 4px;font-family: monospace;"><pre><b>storeShipments:</b> {{ storeShipments }}</pre></div><br><br>

        <div v-if="$route.params.uuid" class="bg-purple-300 p-4 rounded mb-4 text-xl">
            <pre class="font-mono">Route: "{{ $route.fullPath }}", params.uuid: {{ ($route.params.uuid) ? $route.params.uuid : `""` }}</pre>
        </div>
    </div>
</template>

<script setup lang="ts">
    const route = useRoute()
    const { items: storeItems, shipments: storeShipments } = storeToRefs(useAppStore())

    if (route.params.uuid) {
        // Fetch items
        const { data: items } = await useFetch('/api/items')
    
        if (items.value?.length) {
            storeItems.value = items.value
        }
    
        // Fetch shipments
        const { data: shipments } = await useFetch('/api/shipments')
    
        if (shipments.value?.length) {
            storeShipments.value = shipments.value
        }

        await new Promise(resolve => setTimeout(resolve, 1000))
    }
</script>
