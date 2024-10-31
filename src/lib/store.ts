import { persisted } from 'svelte-persisted-store';
import { writable } from 'svelte/store';

export interface StoreItem {
    id: string,
    title: string,
    price: number
}

export const order = writable([] as { item_id: string, qty: number}[])


export const settings = persisted('settings', {
    name: 'Название',
    address: 'Адрес',
    phone: '+7-номер-телефона'
})
  
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
