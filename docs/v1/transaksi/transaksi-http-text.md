---
sidebar_position: 3
---

# HTTP Text

Melakukan pembelian produk menggunakan Metode GET Khusus untuk software pulsa, otomax, irs, dan software pulsa lainnya, bisa menggunakan jalur transaksi ini

## Endpoint

```bash
https://v1.apigames.id/transaksi/http-get-v1-text?merchant=[merchant_id]&secret=[secret_key]&produk=[kode_produk]&tujuan=[tujuan]&ref=[ref_id]
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
| merchant_id | Merchant ID Anda [Lihat Pengaturan Secret Key](https://member.apigames.id/pengaturan/secret-key) | String    | Ya    |
| secret_key  | Secret Key [Lihat Pengaturan Secret Key](https://member.apigames.id/pengaturan/secret-key)       | String    | Ya    |
| ref_id      | Ref ID unik Anda                                                                                 | String    | Ya    |
| produk      | Kode Produk [_Bisa menggunakan prefix custom misalnya **AGML80** untuk produk **ML80**_](#)      | String    | Ya    |
| tujuan      | Tujuan Pengisian                                                                                 | String    | Ya    |

### Contoh

```bash
https://v1.apigames.id/transaksi/http-get-v1-text?merchant=YOUR-MERCHANT-IDsecret=YOUR-SECRET-KEY&produk=FF5&tujuan=5011314646&ref=TRX0002
```

## Response

### Contoh Response Sukses

```bash
R#117627112 FF5.3221759823, status SUKSES. SN/Ref: DOWI@■●♡♡12. RefId : 14472368765887161144. Sisa saldo 5121750
```

### Contoh Response Gagal


```bash
R#112716622 FF5.322175, status GAGAL. Wrong player id. Sisa saldo 5121475
```
