import { persisted } from 'svelte-persisted-store';
import { writable, derived } from 'svelte/store';

export interface StoreItem {
    id: string,
    title: string,
    price: number
}

export const order = writable([] as { item_id: string, qty: number}[]);

export const settings = persisted('settings', {
    name: 'Название',
    address: 'Адрес',
    phone: '+7-номер-телефона',
    currency: 'KZT',
    locale: 'ru-RU',
})

export const currencyFormatter = derived(settings, (settings) => new Intl.NumberFormat(settings.locale, { style: 'currency', currency: settings.currency }))

export const items = persisted('items', [
        {
            id: '123',
            title: 'Товар 1',
            price: 10,
        },
        {
            id: '345',
            title: 'Товар 2',
            price: 20,
        },
    ] as StoreItem[]
)

export const list = derived([items, order], ([items, order]) => {
    return [...order].map((o) => {
        let data = items.find(i => i.id == o.item_id)
        return { ...o, ...data, sum: ( data?.price || 0 ) * o.qty }
    })
})

export const addOrderItem = ( item: StoreItem ) => {
    order.update( prev => {
        let newOrder = prev;

        let currentIndex = newOrder.findIndex(o => o.item_id == item.id);
    
        if (currentIndex == -1) {
            currentIndex = newOrder.length;
            newOrder.push({ item_id: item.id, qty: 1})
        } else {
            newOrder[currentIndex].qty++;
        }
        return newOrder
    })
}
