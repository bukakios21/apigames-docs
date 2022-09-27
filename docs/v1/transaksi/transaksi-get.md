---
sidebar_position: 1
---

# Method GET

Melakukan pembelian produk menggunakan Metode GET 

## Endpoint

```bash
https://v1.apigames.id/transaksi/http-get-v1?merchant=[merchant_id]&secret=[secret_key]produk=[produk]&tujuan=[tujuan]&ref=[ref_id]
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
https://v1.apigames.id/transaksi/http-get-v1?merchant=M220122DEWA6374A&secret=YOURSECRETKEY&produk=AGFF5&tujuan=5011314646&ref=TRX0002
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
