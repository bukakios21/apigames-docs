---
sidebar_position: 2
---

# Method POST

Melakukan pembelian produk menggunakan Metode POST

## Endpoint

```bash
https://v1.apigames.id/transaksi
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
| signature   | Signature dengan formula **md5(secret_key + merchant_id + ref_id + product_code + tujuan)**      | String    | Ya    |

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
    "ref_id": "TRX0004",
    "destination": "2522960267",
    "product_code": "BKFF10",
    "product_code_master": "FF10",
    "message": "R#TRX0004 BKFF10.2522960267, status SUKSES. SN/Ref: MR~~05~@. RefId : 2522960267/15522394740128892614. Sisa saldo 10019625",
    "status": "Sukses",
    "sn": "MR~~05~@. RefId : 2522960267/15522394740128892614",
    "last_balance": "10019625",
    "product_detail": {
      "name": "",
      "code": "FF10",
      "price": 6,
      "price_unit": "garena shell",
      "rate": 263,
      "price_rp": 1578
    }
  },
  "status": 1
}
```

### Contoh Response Gagal

```json
{
  "data": {
    "ref_id": "TRX0005",
    "destination": "2522960267",
    "product_code": "BKFF5",
    "product_code_master": "FF5",
    "message": "R#TRX0005 BKFF5.2522960267, status GAGAL. Expirated Login - Session Key Expirated. Sisa saldo 10019600",
    "status": "Gagal",
    "sn": "Expirated Login - Session Key Expirated",
    "last_balance": "10019600",
    "product_detail": {
      "name": "",
      "code": "FF5",
      "price": 3,
      "price_unit": "garena shell",
      "rate": 263,
      "price_rp": 789
    }
  },
  "status": 1
}
```
