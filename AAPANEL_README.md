# Deployment Guide: aaPanel & Docker Compose

This guide explains how to deploy the `Smart-Attend AI` application onto your aaPanel server using the provided Docker configuration.

## 1. Persiapan Server aaPanel
Sebelum memulai, pastikan Anda telah menginstall beberapa fitur esensial dari App Store bawaan aaPanel:
- **Docker Manager** (Wajib ter-install dan _Running_).
- **Website/Nginx** (Untuk kebutuhan Reverse Proxy domain Anda nanti).

## 2. Struktur Direktori Server
Pindahkan seluruh isi dari proyek ini (termasuk folder `dashboard`, `HRIS-API`, `mobile`, `docker-compose.yml`, dan `deploy.sh`) ke server aaPanel Anda, contohnya di `/www/wwwroot/hris.domainanda.com`.

## 3. Konfigurasi CI/CD Otomatis (WebHook) dengan Github/Gitlab
File `deploy.sh` digunakan untuk otomatisasi setiap kali Anda melakukan `Push` ke *branch* utama (main).

1. Buka dan sesuaikan variabel koneksi direktori di dalam `deploy.sh`:
```bash
PROJECT_DIR="/www/wwwroot/hris.domainanda.com" # GANTI KE PATH ANDA DI AAPANEL
BRANCH="main"
```
2. Dari menu aaPanel, buka fitur **"Crons"** atau **"WebHook"** (jika mendownload plugin WebHook).
3. Buat hook baru yang mengeksekusi script bash file tersebut. Arahkan direktori script exec ke `/www/wwwroot/hris.domainanda.com/deploy.sh`.
4. Copy link URL Triggernya, lalu letakkan di bagian **Settings -> Code Repository -> Webhook** Github/Gitlab Anda.

## 4. Port Eksekusi (Zero Configuration Mode)
Setelan `docker-compose.yml` sudah dikonfigurasi secara otomatis sesuai instruksi:

- **Frontend (Web Dashboard React)**: Berjalan di Node+Nginx terisolasi di Port **`3030`**
- **Backend (Golang API)**: Berjalan di container Fiber terisolasi di Port **`8082`**
- **Database (PostgreSQL)**: Internal Port `5432`.

Anda tidak perlu menginstall Golang atau Node.js langsung di OS Ubuntu/CentOS aaPanel Anda. Semuanya sudah dimasukkan ke dalam Docker secara otomatis dan super ringan.

## 5. Menjalankan Docker Pertama Kali
Buka Terminal SSH / aaPanel Terminal, lalu jalankan:

```bash
cd /www/wwwroot/hris.domainanda.com # Atau direktori tempat Anda meletakkannya
docker-compose up --build -d
```

### 6. Reverse Proxy Nginx aaPanel (Opsional)
Jika Anda ingin menyambungkan langsung ke Domain publik (contoh `hris.domainanda.com`), buat Website baru dari menu aaPanel. Lalu gunakan fitur **"Reverse Proxy"**:

1. Tambahkan Reverse proxy baru.
2. Target URL: `http://127.0.0.1:3030`
3. Simpan dan website dashboard SPA Anda langsung mengudara! 
*(Lakukan hal yang sama untuk API di Port 8082 misal `api.domainanda.com`).*
