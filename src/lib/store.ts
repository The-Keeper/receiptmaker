import { persisted } from 'svelte-persisted-store'

export const settings = persisted('settings', {
    name: 'Название',
    address: 'Адрес',
    phone: '+7-номер-телефона'
})
  
export const items = persisted('items', [
        {
            title: 'Товар 1',
            price: 10,
        },
        {
            title: 'Товар 2',
            price: 20,
        },
    ]
)
