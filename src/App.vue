<template>
    <v-app>
        <div class="bg-dacxi-white h-full">
            <Content></Content>
        </div>
    </v-app>
</template>

<script>
import Content from './components/Content.vue'

export default {
    name: 'App',
    components: {
        Content,
    },
}
</script>
