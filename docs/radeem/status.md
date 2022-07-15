---
sidebar_position: 5
---

# Cek Status Radeem

Melakukan radeem voucher secara bulk (lebih dari 1 voucher) menggunakan method POST

## Endpoint

```bash
https://v1.apigames.id/merchant/[merchant_id]/kiosgamer/project/detail
```

## HTTP Method

```
POST
```

## Request

### Deskripsi

Berikut adalah struktur JSON yang diharapkan:

| Parameter   | Deskripsi                                                                                        | Tipe Data | Wajib |
| ----------- | ------------------------------------------------------------------------------------------------ | --------- | ----- |
| session_key | Session Key Kiosgamer anda | String    | Ya    |
| signature   | Signature dengan formula **md5(merchant_id + secret_key)**      | String    | Ya    |

### Contoh

```json
{
    "projectid":"DW",
    "status":"", //kosong jika tidak melakukan pencarian by status
    "page":1,
    "limit":30,
    "signature":"fa375f4e30dbe2cdcf5d1ee0e9d678ef"
}
```

## Response

### Deskripsi

### Contoh Response Sukses

```json

```

### Contoh Response Gagal

```json

```
