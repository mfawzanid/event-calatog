<script setup lang="ts">
import { getEvents } from './api/eventService'
import EventCard from './components/EventCard.vue'
import type { Event } from './types/event'
import { onMounted, ref } from 'vue'

const events = ref<Event[]>([])

onMounted(async () => {
  const today = new Date().toISOString().split("T")[0]
  const data = await(getEvents(today))
  events.value = data
})

</script>

<template>
  <header class="top-panel">
    Event Catalog
  </header>
  <main class="main-panel">
    <p v-if="events.length === 0">No events found</p>
    <EventCard
      v-for="(event, index) in events.slice(0,8)"
      :key="index"
      :event="event"
    />
  </main>
</template>

<style scoped>
.top-panel {
  font-size: 2rem;
  font-weight: bold;
}

.main-panel {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem;
}
</style>