<template>
    <div class="event-card">
        <div class="event">
            <div class="event-title">{{  event.name }}</div>
            <div class="event-info">
                <p class="event-speaker">{{  event.speakerName }}</p>
                <p class="event-date">{{ formatDate(event.startAt) }}</p>
                <p class="event-location"> {{ event.locationName }}</p>
            </div>
            <div class="separator"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Event } from '../types/event'

defineProps<{
    event: Event
}>()

const formatDate = (date: string | Date) =>
    new Intl.DateTimeFormat("id-ID", {
        dateStyle: "medium",
        timeStyle: "short",
    }).format(new Date(date))

</script>

<style scoped>
.event-card {
  height: 150px;
  width: 300px;
  padding: 16px;
  border-radius: 10px;
  background-color: white;
}

.event {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  color: black;
}

.event-title {
  display: flex;
  font-size: 0.75rem;
  font-weight: bold;
  margin-left: 0.5rem;
}

.event-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 0.75rem;
  align-items: flex-start;
  margin-left: 0.5rem;
}

.event-speaker,
.event-date,
.event-location {
  font-size: 0.75rem;
  margin: 0;
}

.separator {
  height: 3px;
  background-color: #d6d6d6;
  margin: 0.5rem;
}
</style>