import { defineStore } from 'pinia'
import api from '@/services/axios'

type Corridor = 'GAB-CN' | 'CN-GAB'
export interface Quote {
  corridor: Corridor
  amount: number
  currency_source: string
  currency_target: string
  rate: number
  rate_timestamp: string
  fee: { fixed: number; percent: number; computed: number }
  gross_converted: number
  net_received: number
  total_cost: number
  limits: { min: number; max: number }
  config_version: string
  server_time: string
}

export const useSimulator = defineStore('simulator', {
  state: () => ({
    corridor: 'GAB-CN' as Corridor,
    amount: null as number | null,
    quote: null as Quote | null,
    loading: false,
    error: '' as string | ''
  }),
  getters: {
    currencySource: (s) => s.corridor === 'GAB-CN' ? 'XAF' : 'CNY',
    currencyTarget: (s) => s.corridor === 'GAB-CN' ? 'CNY' : 'XAF',
  },
  actions: {
    async getQuote(){
      if (!this.amount || this.amount <= 0){ this.error = 'Veuillez saisir un montant valide'; return }
      this.loading = true; this.error = ''; this.quote = null
      try{
        const { data } = await api.get('/app/v1/simulations/quote', {
          params: { corridor: this.corridor, amount: this.amount }
        })
        this.quote = data
      }catch(e:any){
        this.error = e?.response?.data?.error || e.message
      }finally{
        this.loading = false
      }
    }
  }
})
