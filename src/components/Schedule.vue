<script lang="ts" setup>
import { ref } from 'vue';

const index = ref(0);
</script>

<template>
    <div class="px-12 py-6">
        <div class="grid grid-cols-4">
            <div class="">
                <div>
                    <button @click="index = 0">February 16, 2023</button>
                </div>
                <div>
                    <button @click="index = 1">February 17, 2023</button>
                </div>
                <div><button @click="index = 2">February 18, 2023</button></div>
                <div><button @click="index = 3">February 19, 2023</button></div>
            </div>
            <div class="col-span-3">
                <div>
                    <div v-if="index === 0">February 16, 2023</div>
                    <div v-if="index === 1">February 17, 2023</div>
                    <div v-if="index === 2">February 18, 2023</div>
                    <div v-if="index === 3">February 19, 2023</div>
                </div>
            </div>
        </div>
    </div>
</template>