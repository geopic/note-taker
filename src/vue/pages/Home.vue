<template>
  <div class="home">
    <section><h1>Notes</h1></section>
    <section>
      <h1>Add new note</h1>
      <form @submit.prevent="handleNoteForm"></form>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  handleNoteForm(e: Event) {
    const targ = e.target as HTMLFormElement;
  }
}
</script>
