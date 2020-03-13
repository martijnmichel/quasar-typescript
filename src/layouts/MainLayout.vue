<template>
  <q-layout view="lHh Lpr lFf">
    <q-dialog v-model="bar" position="bottom" color="transparent" seamless>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>New tab</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>New incognito tab</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Recent tabs</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>History</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Downloads</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Settings</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section>Help &amp; Feedback</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-btn @click="add()" label="new" />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-dialog>

    <q-page-container>
      <router-view />
      <window-manager />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import WindowManager from 'src/components/WindowManager.vue';

import Vue from 'vue';

export default Vue.extend({
  name: 'MainLayout',

  components: {
    WindowManager
  },

  methods: {
    add() {
      this.$store.commit('wm/addWindow');
    }
  },

  data() {
    return {
      bar: true
    };
  }
});
</script>
