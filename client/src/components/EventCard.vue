<template>
    <div class="event-card">
        <div class="event">
            <div class="event-title">{{  event.name }}</div>
            <div class="separator"></div>
            <div class="event-info">
                <p class="event-date">{{ formatDate(event.startAt) }}</p>
                <p class="event-location"> {{ event.locationName }}</p>
            </div>
        </div>
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
  /* box-shadow: #ccc 0px 1px 4px; */
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
  flex: 2;
  font-size: 0.75rem;
  font-weight: bold;
  justify-content: center;
}

.event-info {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  font-size: 0.75rem;
}

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