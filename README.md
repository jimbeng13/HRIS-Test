# Smart-Attend AI 🚀

Sistem informasi Manajemen Sumber Daya Manusia (HRIS) dan absensi modern berbasis AI, dirancang dengan arsitektur microservices menggunakan Golang, React, dan React Native.

## 📦 Struktur Proyek

Proyek ini terdiri dari tiga komponen utama:

1. **`HRIS-API` (Backend)**: RESTful API yang dibangun menggunakan **Golang** dan framework Fiber. Menangani logika bisnis, koneksi database PostgreSQL, dan autentikasi.
2. **`dashboard` (Frontend Web)**: Aplikasi web interaktif untuk admin/HR, dibangun menggunakan **React** dan Vite.
3. **`mobile` (Frontend Mobile)**: Aplikasi mobile cross-platform untuk absensi karyawan, dibangun menggunakan **React Native** (Expo).

---

## 🚀 Panduan Menjalankan di Komputer Lokal (Localhost)

Cara paling direkomendasikan untuk menjalankan project ini secara lokal adalah menggunakan **Docker Compose**. Pastikan Anda sudah menginstall [Docker Desktop](https://www.docker.com/products/docker-desktop/).

### Langkah-langkah:
1. Clone repository ini ke komputer Anda:
   ```bash
   git clone https://github.com/jimbeng13/HRIS-Test.git
   cd HRIS-Test
   ```
2. Jalankan perintah Docker Compose:
   ```bash
   docker-compose up --build -d
   ```
3. Akses aplikasi melalui browser:
   - **Web Dashboard**: `http://localhost:3030`
   - **Backend API**: `http://localhost:8082`
   - **Database (PostgreSQL)**: Berjalan di background pada port `5432`

> **Note**: Jika Anda ingin menghentikan project, jalankan `docker-compose down`.

---

## 🌍 Panduan Deploy ke Server aaPanel (CI/CD Otomatis)

Project ini sudah dilengkapi dengan script autodeploy agar setiap kali Anda melakukan `git push` ke branch `main`, server akan otomatis update (*Zero Downtime*).

### 1. Persiapan Server aaPanel
Pastikan Anda telah menginstall fitur ini dari **App Store** bawaan aaPanel:
- **Docker Manager** (Wajib ter-install dan running).
- **WebHook** (Untuk menerima trigger auto-deploy dari GitHub).
- **Website/Nginx** (Untuk setup domain).

### 2. Taruh File Proyek ke Server
1. Clone / pindahkan seluruh isi folder proyek ini ke direktori server aaPanel Anda.
   *(Contoh: `/www/wwwroot/hris.domainanda.com`)*

### 3. Konfigurasi CI/CD Webhook 
1. Buka file `deploy.sh` di codebase Anda.
2. Ubah variabel `PROJECT_DIR` agar sesuai dengan path proyeck Anda di server aaPanel:
   ```bash
   PROJECT_DIR="/www/wwwroot/hris.domainanda.com" # Sesuaikan path ini
   ```
3. Di dashboard aaPanel, buka fitur **"WebHook"**.
4. Buat hook baru yang mengeksekusi script bash. Arahkan eksekusinya ke file `deploy.sh` Anda (misal: `bash /www/wwwroot/hris.domainanda.com/deploy.sh`).
5. **Copy "Link URL Trigger"** yang diberikan oleh aaPanel.
6. Buka **GitHub** > Ke repo project ini > **Settings** > **Webhooks** > **Add webhook**.
7. Paste Link URL Trigger tadi ke kolom **Payload URL** dan simpan.

Sekarang, setiap kali Anda melakukan `git push origin main`, server aaPanel Anda akan otomatis menarik pembaruan dan me-restart container Docker! 🎉

---

## 🔌 Expose App dengan Domain Public (Reverse Proxy)

Jika Anda ingin mengakses aplikasi menggunakan nama domain asli (misal: `hris.domainanda.com`) tanpa mengetik angka IP / port `3030`:

1. Buka menu **Website** pada aaPanel dan buat website baru (dengan nama domain Anda).
2. Pergi ke pengaturan Website tersebut > menu **Reverse Proxy**.
3. Tambahkan Reverse proxy baru:
   - **Target URL**: `http://127.0.0.1:3030`
4. Simpan, dan sekarang Dashboard Anda sudah mengudara secara online!
*(Anda dapat mengulangi langkah serupa jika Backend API ingin diberi akses public domain, arahkan Target URL ke `http://127.0.0.1:8082`)*.
