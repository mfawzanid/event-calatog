<script setup lang="ts">
import EventCard from './components/EventCard.vue'
import type { Event } from './types/event'

const events: Event[] = [ 
  {
    name: "Event 1",
    startAt: "2025-06-20T14:30:00Z",
    location: { name: "Location 1"},
  },
  {
    name: "Event 1",
    startAt: "2025-06-20T14:30:00Z",
    location: { name: "Location 1"},
  },
  {
    name: "Event 1",
    startAt: "2025-06-20T14:30:00Z",
    location: { name: "Location 1"},
  },
  {
    name: "Event 1",
    startAt: "2025-06-20T14:30:00Z",
    location: { name: "Location 1"},
  },
  {
    name: "Event 1",
    startAt: "2025-06-20T14:30:00Z",
    location: { name: "Location 1"},
  },
  {
    name: "Event 1",
    startAt: "2025-06-20T14:30:00Z",
    location: { name: "Location 1"},
  },
]
</script>

<template>
  <header class="top-panel">
    Event Catalog
  </header>
  <main class="main-panel">
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