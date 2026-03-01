#!/bin/bash

# ==========================================================
# aaPanel CI/CD Webhook Deployment Script
# Description: Automatically trigger Git pull and Docker build
# Target Environment: Ubuntu/Debian / aaPanel Shell
# ==========================================================

# 1. Configuration (Sesuaikan path repo Anda di dalam aaPanel)
PROJECT_DIR="/www/wwwroot/hris.domainanda.com" # Ganti dengan path directory Git / Project Anda
BRANCH="main"

echo "=== Memulai Deploy Otomatis: $(date) ==="

# 2. Pindah ke direktori proyek
cd $PROJECT_DIR || { echo "[ERROR] Gagal berpindah ke $PROJECT_DIR. Pastikan path benar."; exit 1; }

# 3. Membersihkan permission issue bila terjadi (opsional di aaPanel)
# chown -R www:www . 

# 4. Melakukan Git Pull dari repository (Zero-Downtime Fetch)
echo "[INFO] Menarik pembaruan terbaru dari branch $BRANCH..."
git reset --hard HEAD
git pull origin $BRANCH

# 5. Jalankan Docker Compose Build secara background (-d) rupa Zero-Downtime
echo "[INFO] Re-building Image Docker dan Start Container..."
docker-compose up --build -d

# 6. Pembersihan Docker Image lama (Dangling images yang makan disk server)
echo "[INFO] Membersihkan file sisa (*Dangling Images*)..."
docker image prune -f

echo "=== Selesai! Deploy Berhasil: $(date) ==="
exit 0
