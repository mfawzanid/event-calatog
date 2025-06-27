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
  <div class="app">
    <div class="top-panel">
      Event Catalog
    </div>
    <main class="main-panel">
      <p v-if="events.length === 0">No events found</p>
      <EventCard
        v-for="(event, index) in events.slice(0,8)"
        :key="index"
        :event="event"
      />
    </main>
  </div>
</template>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
}

.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

.top-panel {
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  padding: 1rem;
}

.main-panel {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem;
}
</style>