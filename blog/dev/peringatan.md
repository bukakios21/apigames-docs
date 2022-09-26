<!-- ---
sidebar_position: 1
--- -->

# ⚠️ Peringatan
:::warning
Ada beberapa poin yang perlu di pahami:
- Error network jadi pending
- Flow transaksi, pada awal transaksi respon diberikan pending, untuk update status transaksi dilakukan via webhook dan merchant wajib menambahkan webhook
- status transaksi : PENDING, SUKSES,  GAGAL, PROSES, SUKSES SEBAGAIAN, VALIDASI PROVIDER
:::


:::warning
Cek status transaksi jangan hit ke api transaksi, tapi lakukan dengan api cek status transaksi atau menunggu dari webhook/report yang kami kirimkan. Apabila terjadi **transaksi dobel**, di **luar tanggung jawab kami**
:::

:::danger
Status transaksi yang di percaya hanya dari **WEBHOOK / REPORT** dan **API CEK STATUS TRANSAKSI** berdasarkan status yang sudah tertera di atas.
:::

