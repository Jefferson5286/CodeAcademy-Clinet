import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    appType: 'mpa',
    plugins: [tailwindcss()]
});
