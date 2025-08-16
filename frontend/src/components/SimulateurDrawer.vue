<template>
    <teleport to="body">
      <div v-show="open" class="overlay" @click="emit('update:open', false)"></div>
      <aside :class="['drawer', {open}]" aria-modal="true" role="dialog">
        <div class="head">
          <strong>Simuler</strong>
          <button class="btn ghost" @click="emit('update:open', false)">Fermer</button>
        </div>
        <div class="pad" style="flex:1;overflow:auto;">
          <slot />
        </div>
      </aside>
    </teleport>
</template>
  
<script setup lang="ts">
    const props = defineProps<{ open: boolean }>()
    const emit = defineEmits(['update:open'])
    const open = props.open
</script>

<style scoped>
.overlay{position:fixed;inset:0;background:rgba(0,0,0,.25)}
.drawer{position:fixed;top:0;right:-420px;width:420px;max-width:100%;height:100vh;background:#fff;border-left:1px solid var(--gris-200);box-shadow:var(--shadow);transition:right .25s ease;display:flex;flex-direction:column}
.drawer.open{right:0}
.head{padding:14px;border-bottom:1px solid var(--gris-200);display:flex;justify-content:space-between;align-items:center}
</style>