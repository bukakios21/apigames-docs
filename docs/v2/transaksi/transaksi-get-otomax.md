---
sidebar_position: 3
---

# Otomax

Melakukan pembelian produk menggunakan Metode GET (versi 2) Khusus untuk software pulsa otomax bisa menggunakan jalur transaksi ini

:::warning
[BACA KETENTUAN](/docs/v2/pendahuluan)
:::

## Endpoint

```bash
https://v1.apigames.id/v2/transaksi-otomax?ref_id=[ref_id]&merchant_id=[merchant_id]&produk=[kode_produk]&tujuan=[tujuan]&secret=[secret]&server_id=
```

## HTTP Method

```
GET
```

## Request

### Deskripsi

Berikut adalah parameter yang di harapkan


| Parameter   | Deskripsi                                                                                        | Tipe Data | Wajib |
| ----------- | ------------------------------------------------------------------------------------------------ | --------- | ----- |
| ref_id      | Ref ID unik Anda                                                                                 | String    | Ya    |
| merchant_id | Merchant ID Anda [Lihat Pengaturan Secret Key](https://member.apigames.id/pengaturan/secret-key) | String    | Ya    |
| produk      | Kode Produk [_Bisa menggunakan prefix custom misalnya **AGML80** untuk produk **ML80**_](#)      | String    | Ya    |
| tujuan      | Tujuan Pengisian                                                                                 | String    | Ya    |
| server_id      | Jika produk tidak memilik server_id, maka kosongkan saja                                                                                 | String    | Tidak    |
| secret   | Secret Key anda [Lihat Pengaturan Secret Key](https://member.apigames.id/pengaturan/secret-key)      | String    | Ya    |
### Contoh

```bash
https://v1.apigames.id/v2/transaksi-http-get-text?ref_id=sdfsdx2x&merchant_id=M220718CYXXXXX3KFF&produk=ff5&tujuan=4645&secret=30d19bbcd6c9784c020b135c818e8291c00e1a3d12e143c7bb924492c1e57cfb&server_id=
```

## Response

### Contoh Response

```bash
R#sdfsd ff5.4645, status PROSES. dx. Sisa saldo 99049800
```
