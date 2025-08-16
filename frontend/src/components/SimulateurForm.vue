<template>
    <div class="card pad">
      <h2 class="title">Simulation – {{ store.corridor === 'GAB-CN' ? 'Gabon → Chine' : 'Chine → Gabon' }}</h2>
  
      <!-- Segmented control avec drapeaux -->
      <div class="pad" style="display:flex;align-items:center;gap:12px;justify-content:flex-start;padding-left:0;">
        <div class="segments">
          <button class="seg" :class="{active: store.corridor==='GAB-CN'}" @click="store.corridor='GAB-CN'">
            <img class="flag-sm" src="/flags/gabon.svg" alt="Gabon"/> Gabon →
            <img class="flag-sm" src="/flags/china.svg" alt="Chine"/>
          </button>
          <button class="seg" :class="{active: store.corridor==='CN-GAB'}" @click="store.corridor='CN-GAB'">
            <img class="flag-sm" src="/flags/china.svg" alt="Chine"/> Chine →
            <img class="flag-sm" src="/flags/gabon.svg" alt="Gabon"/>
          </button>
        </div>
      </div>
  
      <div class="row" style="display:grid;grid-template-columns:1fr;gap:10px;">
        <label class="muted">Montant à envoyer</label>
        <div class="field">
          <input class="input" type="number" :placeholder="store.corridor==='GAB-CN' ? '100000' : '1000'" v-model.number="store.amount" />
          <span class="currency">
            <img class="flag-sm" :src="flagSource" :alt="altSource"/>
            {{ store.currencySource }}
          </span>
        </div>
  
        <!-- Champs dérivés (lecture seule) -->
        <label class="muted">Frais (estimés)</label>
        <div class="field">
          <input class="input" type="text" :value="store.quote ? store.quote.fee.computed : ''" placeholder="—" readonly />
          <span class="currency">
            <img class="flag-sm" :src="flagSource" :alt="altSource"/>
            {{ store.currencySource }}
          </span>
        </div>
  
        <label class="muted">Montant à recevoir (estimé)</label>
        <div class="field">
          <input class="input" type="text" :value="store.quote ? store.quote.net_received : ''" placeholder="—" readonly />
          <span class="currency">
            <img class="flag-sm" :src="flagTarget" :alt="altTarget"/>
            {{ store.currencyTarget }}
          </span>
        </div>
  
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:6px;">
          <button class="btn" :disabled="store.loading" @click="store.getQuote">{{ store.loading ? 'Calcul…' : 'Simuler' }}</button>
          <button class="btn ghost" @click="$emit('reset')">Réinitialiser</button>
        </div>
  
        <p v-if="store.error" class="muted" style="color:#c00">{{ store.error }}</p>
        <p v-if="store.quote" class="muted">Taux: {{ store.quote.rate }} (maj {{ new Date(store.quote.rate_timestamp).toLocaleString() }}) • Barème {{ store.quote.config_version }}</p>
      </div>
    </div>
</template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import { useSimulator } from '@/stores/useSimulateur'
  const store = useSimulator()
  
  const flagSource = computed(() => store.corridor === 'GAB-CN' ? '/flags/gabon.svg' : '/flags/china.svg')
  const flagTarget = computed(() => store.corridor === 'GAB-CN' ? '/flags/china.svg' : '/flags/gabon.svg')
  const altSource  = computed(() => store.corridor === 'GAB-CN' ? 'Gabon' : 'Chine')
  const altTarget  = computed(() => store.corridor === 'GAB-CN' ? 'Chine' : 'Gabon')
  </script>
  
  <style scoped>
  /* styles globaux dans theme.css */
  </style>

<!-- template>
    <div style="border:1px solid #e5e7eb;border-radius:12px;padding:12px">
      <h2>Formulaire simulateur</h2>
    </div>
</template>
<script setup lang="ts"></script -->
  

<!-- template>
    <div class="card pad">
      <h2 class="title">Simulation – {{ store.corridor === 'GAB-CN' ? 'Gabon → Chine' : 'Chine → Gabon' }}</h2>
      <div style="display:flex;gap:12px;margin-bottom:8px;">
        <div class="segments">
          <button class="seg" :class="{active: store.corridor==='GAB-CN'}" @click="store.corridor='GAB-CN'">Gabon vers Chine</button>
          <button class="seg" :class="{active: store.corridor==='CN-GAB'}" @click="store.corridor='CN-GAB'">Chine vers Gabon</button>
        </div>
      </div>
      <div class="row" style="display:grid;grid-template-columns:1fr;gap:10px;">
        <label class="muted">Montant à envoyer</label>
        <div class="field">
          <input class="input" type="number" :placeholder="store.corridor==='GAB-CN' ? '100000' : '1000'" v-model.number="store.amount" />
          <span class="currency">{{ store.currencySource }}</span>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:6px;">
          <button class="btn" :disabled="store.loading" @click="store.getQuote">{{ store.loading ? 'Calcul…' : 'Simuler' }}</button>
          <button class="btn ghost" @click="$emit('reset')">Réinitialiser</button>
        </div>
        <p v-if="store.error" class="muted" style="color:#c00">{{ store.error }}</p>
        <p v-if="store.quote" class="muted">Taux: {{ store.quote.rate }} (maj {{ new Date(store.quote.rate_timestamp).toLocaleString() }}) • Barème {{ store.quote.config_version }}</p>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import { useSimulateur } from '@/stores/useSimulateur'
  const store = useSimulateur()
  </script -->