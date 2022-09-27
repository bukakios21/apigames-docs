---
sidebar_position: 1
---

# Syarat & Ketentuan ! 🆕

:::warning
Ada beberapa poin yang perlu di pahami:
- **Semua HTTP Error** harus diset sebagai transaksi **PENDING**
- **NETWORK TIMEOUT** harus diset sebagai transaksi **PENDING**
- Flow transaksi, pada awal transaksi respon diberikan **PENDING**, untuk update status transaksi dilakukan via webhook dan merchant wajib menambahkan webhook
- status transaksi dari apigames : **PENDING, SUKSES,  GAGAL, PROSES, SUKSES SEBAGAIAN, VALIDASI PROVIDER**
:::

:::warning
Cek status transaksi JANGAN hit ke API transaksi, tapi lakukan dengan API cek status transaksi atau menunggu dari webhook/report yang kami kirimkan.

Apabila terjadi **transaksi double**, di **luar tanggung jawab kami**
:::

:::warning
Status transaksi yang di percaya hanya dari **WEBHOOK / REPORT** dan **API CEK STATUS TRANSAKSI** berdasarkan status yang sudah tertera di atas.
:::

