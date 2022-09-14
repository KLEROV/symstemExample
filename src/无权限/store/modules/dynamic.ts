import { defineStore } from 'pinia';
import { store } from '@/store';
import { number } from 'vue-types';

export interface Model {
    src?: string,
    name?: string,
    content: string,
    show:boolean,
    title:string,
    type:number
}

export const setModel = defineStore({
    id: 'model',
    state: (): Model => ({
        src: '',
        content: '',
        show:false,
        title:"",
        type:0
    }),
    getters: {

    },
    actions: {

    },
});

// Need to be used outside the setup
export function useModel() {
    return setModel(store);
}
