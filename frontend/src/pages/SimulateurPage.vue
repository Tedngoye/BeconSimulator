<template>
    <header class="card pad" style="margin:12px 0;">
      <div style="display:flex;align-items:center;gap:12px;justify-content:space-between;">
        <div style="display:flex;align-items:center;gap:12px;">
          <img src="/logo_becon.jpg" alt="Logo BeConnect" style="height:40px" />
          <div style="font-family:var(--font-demi);letter-spacing:.5px;">BeConnect</div>
        </div>
        <div class="muted">Simulateur d’envoi – MVP</div>
      </div>
    </header>
  
    <main class="container">
      <section class="grid-2">
        <SimulateurForm @reset="onReset" />
        <SimulateurResult :quote="store.quote">
          <!-- Exemple d’options de retrait pour CN→GAB (si vous avez plusieurs nets) -->
          <template #payout>
            <div v-if="store.corridor==='CN-GAB'" class="card pad" style="margin-top:6px;">
              <div class="muted" style="margin-bottom:6px;">Comparatif de retrait</div>
              <div style="display:flex;justify-content:space-between;padding:4px 0;">
                <span>Cash</span>
                <span>{{ store.quote?.net_received ?? '—' }} XAF</span>
              </div>
              <div style="display:flex;justify-content:space-between;padding:4px 0;border-top:1px dashed var(--gris-200);margin-top:6px;">
                <span>Mobile Money (ex. retrait)</span>
                <span>— XAF</span>
              </div>
            </div>
          </template>
        </SimulateurResult>
      </section>
    </main>
  </template>
  
  <script setup lang="ts">
  import { useSimulator } from '@/stores/useSimulateur'
  import SimulateurForm from '@/components/SimulateurForm.vue'
  import SimulateurResult from '@/components/SimulateurResult.vue'
  
  const store = useSimulator()
  function onReset(){ store.amount = null; store.quote = null }
  </script>
  
  <style scoped>
  /* styles additionnels si besoin */
  </style>

