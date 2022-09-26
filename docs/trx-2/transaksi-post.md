---
sidebar_position: 2
---

# Menggunakan Method POST Versi 2

Melakukan pembelian produk menggunakan Metode POST melalui api versi 2

## Endpoint

```bash
https://v1.apigames.id/v2/transaksi
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
| ref_id      | Ref ID unik Anda                                                                                 | String    | Ya    |
| merchant_id | Merchant ID Anda [Lihat Pengaturan Secret Key](https://member.apigames.id/pengaturan/secret-key) | String    | Ya    |
| produk      | Kode Produk [_Bisa menggunakan prefix custom misalnya **AGML80** untuk produk **ML80**_](#)      | String    | Ya    |
| tujuan      | Tujuan Pengisian                                                                                 | String    | Ya    |
| signature   | Signature dengan formula **md5(merchant_id:secret_key:ref_id)**      | String    | Ya    |

### Contoh

```json
{
  "ref_id": "TRX0007",
  "merchant_id": "M220122BUKA1954B",
  "produk": "ML86",
  "tujuan": "77698934212097",
  "signature": "fa375f4e30dbe2cdcf5d1ee0e9d678ad"
}
```

## Response

### Deskripsi

### Contoh Response Sukses

```json
{
    "data": {
        "merchant_id": "M220122BUKA1954B",
        "trx_id": "T220920XHPG000006",
        "ref_id": "sdfs",
        "destination": "4645",
        "product_code": "ff5",
        "product_code_master": "ff5",
        "message": "R#sdfs ff5.4645, status PENDING. . Sisa saldo 99049800",
        "status": "Pending",
        "sn": "",
        "last_balance": "99049800",
        "product_detail": {
            "name": "",
            "code": "ff5",
            "price": 3,
            "price_unit": "garena shell",
            "rate": 250,
            "price_rp": 750
        }
    },
    "status": 1
}
```

### Contoh Response Gagal

```json

```
