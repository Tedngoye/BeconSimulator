<template>
    <div class="card pad" v-if="quote">
      <h3 class="title">Résultat</h3>
      <div style="display:grid;gap:8px;">
        <div class="line">
          <span>Frais</span>
          <span style="display:flex;align-items:center;gap:6px;">
            <img class="flag-sm" :src="flagSource" :alt="altSource"/>
            {{ quote.fee.computed }} {{ quote.currency_source }}
          </span>
        </div>
        <div class="line">
          <span>Montant converti</span>
          <span style="display:flex;align-items:center;gap:6px;">
            <img class="flag-sm" :src="flagTarget" :alt="altTarget"/>
            {{ quote.gross_converted }} {{ quote.currency_target }}
          </span>
        </div>
        <div class="line bordered">
          <span>Reçu estimé</span>
          <span class="value-strong" style="display:flex;align-items:center;gap:6px;">
            <img class="flag-sm" :src="flagTarget" :alt="altTarget"/>
            {{ quote.net_received }} {{ quote.currency_target }}
          </span>
        </div>
  
        <slot name="payout"></slot>
  
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:4px;">
          <button class="btn" @click="$emit('use-quote', quote)">Utiliser pour la transaction</button>
          <button class="btn ghost" @click="$emit('subscribe-rate')">Recevoir une alerte de taux</button>
        </div>
  
        <div class="card pad" style="margin-top:10px;">
          <div style="display:flex;align-items:center;gap:14px;">
            <div style="width:86px;height:86px;border:1px solid var(--gris-200);border-radius:8px;background:repeating-linear-gradient(45deg,#eee,#eee 6px,#ddd 6px,#ddd 12px);"></div>
            <div>
              <div class="muted">Assistance WhatsApp</div>
              <div style="font-family:var(--font-demi);">+241 74210659</div>
              <small class="muted">BeConnect Service</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import type { Quote } from '@/stores/useSimulateur'
  
  const props = defineProps<{ quote: Quote | null }>()
  
  const flagSource = computed(() => props.quote?.currency_source === 'XAF' ? '/flags/gabon.svg' : '/flags/china.svg')
  const flagTarget = computed(() => props.quote?.currency_target === 'CNY' ? '/flags/china.svg' : '/flags/gabon.svg')
  const altSource  = computed(() => props.quote?.currency_source === 'XAF' ? 'Gabon' : 'Chine')
  const altTarget  = computed(() => props.quote?.currency_target === 'CNY' ? 'Chine' : 'Gabon')
  </script>
  
  <style scoped>
  /* helpers dans theme.css */
  </style>
  

<!-- template>
    <div class="card pad" v-if="quote">
      <h3 class="title">Résultat</h3>
      <div style="display:grid;gap:8px;">
        <div class="line"><span>Frais</span><span>{{ quote.fee.computed }} {{ quote.currency_source }}</span></div>
        <div class="line"><span>Montant converti</span><span>{{ quote.gross_converted }} {{ quote.currency_target }}</span></div>
        <div class="line" style="border-top:1px dashed var(--gris-200);margin-top:6px;padding-top:10px;">
          <span>Reçu estimé</span><span style="font-family:var(--font-demi);font-size:20px">{{ quote.net_received }} {{ quote.currency_target }}</span>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:4px;">
          <button class="btn" @click="$emit('use-quote', quote)">Utiliser pour la transaction</button>
          <button class="btn ghost" @click="$emit('subscribe-rate')">Recevoir une alerte de taux</button>
        </div>
      </div>
    </div>
</template>
<script setup lang="ts">
import type { Quote } from '@/stores/useSimulateur'
defineProps<{ quote: Quote | null }>()
</script -->