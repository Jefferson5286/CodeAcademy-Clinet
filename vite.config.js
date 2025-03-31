import {defineConfig} from 'vite'
import tailwindcss from '@tailwindcss/vite'
import viteSimpleMPA from 'vite-simple-mpa/src'

export default defineConfig({
    appType: 'mpa',
    plugins: [
        tailwindcss(),
        viteSimpleMPA({
            pages: {
                leading: {target: './src/pages/leading.html', route: '/'},
                cursos: {target: './src/pages/cursos.html', route: '/cursos'}
            }
        })
    ]
});
