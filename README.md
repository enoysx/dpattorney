# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    # DP Attorney — Frontend

    Situs single-page application (React + TypeScript + Vite) untuk profil firma hukum.

    **Sekilas**
    - Tech stack: `React`, `TypeScript`, `Vite`, `Tailwind CSS`, `Radix UI`, `Framer Motion`.
    - Tujuan: tampilan landing, halaman practice, team, insights, careers, dan kontak.

    ## Persyaratan
    - Node.js 18+ dan `npm` (atau `pnpm`/`yarn` jika Anda pilih alternatif package manager).

    ## Instalasi

    Clone repository lalu install dependensi:

    ```bash
    git clone https://github.com/enoysx/dpattorney.git
    cd dpattorney
    npm ci
    ```

    Jika Anda ingin menggunakan `npm install` (untuk menambah/ubah deps):

    ```bash
    npm install
    ```

    ## Menjalankan dalam mode development

    ```bash
    npm run dev
    ```

    Buka http://localhost:5173/ untuk melihat aplikasi.

    ## Build & preview produksi

    Build untuk produksi:

    ```bash
    npm run build
    ```

    Preview hasil build (lokal):

    ```bash
    npm run preview
    ```

    ## Linting

    Gunakan ESLint untuk cek statis:

    ```bash
    npm run lint
    ```

    Catatan: repo ini tidak menyertakan skrip `test` standar. Untuk testing direkomendasikan menambahkan `vitest` + `@testing-library/react`.

    ## Perubahan terbaru (ringkasan)

    - Memperbaiki beberapa peringatan ESLint dan menghilangkan panggilan fungsi impure saat render.
    - Memindahkan logika acak ke effect, dan menandai parameter yang belum dipakai agar lint bersih.

    ## Cara berkontribusi singkat

    - Buat branch baru: `git checkout -b feat/nama-fitur`
    - Commit perubahan: `git add . && git commit -m "feat: jelaskan perubahan"`
    - Push dan buat PR: `git push origin feat/nama-fitur` lalu buka Pull Request di GitHub.

    ## Tips & debugging

    - Jika bundle produksi besar, pertimbangkan code-splitting (`import()` dynamic) untuk modul berat.
    - Cek vulnerability: `npm audit` dan perbaiki dengan `npm audit fix` jika sesuai.

    ---
    _README ini dibuat/diupdate secara otomatis. Silakan sesuaikan lagi sesuai kebutuhan tim._
