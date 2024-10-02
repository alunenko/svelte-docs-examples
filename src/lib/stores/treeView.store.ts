import { type Writable, writable } from 'svelte/store';

export const cleanedPathname: Writable<string[]> = writable([]);
