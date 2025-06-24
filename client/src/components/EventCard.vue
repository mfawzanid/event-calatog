<template>
    <div class="event-card">
        <h3 class="event-title">{{  event.name }}</h3>
        <p class="event-date">{{ formatDate(event.startAt) }}</p>
        <p class="event-location"> {{ event.locationName }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    event: {
        name: string
        startAt: string | Date
        locationName: string,
    }
}>()

const formatDate = (date: string | Date) =>
    new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
    }).format(new Date(date))

</script>

<style scoped>
.event-card {
  padding: 16px;
  border: 1px solid grey;
  border-radius: 8px;       
}

.event-title {
    font-size: 2rem;
}

.event-date {
    font-size: 1rem;
}

.event-location {
    font-size: 1rem;
}
</style>