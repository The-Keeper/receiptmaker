import { persisted } from 'svelte-persisted-store'

export const settings = persisted('settings', {
    name: 'Название'
})
  