---
sidebar_position: 2
---

# Method POST

Melakukan pembelian produk menggunakan Metode POST melalui api versi 2


:::warning
[BACA KETENTUAN](/docs/v2/pendahuluan)

:::

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
| server_id      | Isi string kosong "" jika produk tidak memiliki Server ID                                     | String    | Ya    |
| signature   | Signature dengan formula **md5(merchant_id:secret_key:ref_id)**      | String    | Ya    |

### Contoh

```json
{
  "ref_id": "T220926XXXXX00003",
  "merchant_id": "M220718CYXXXXX3KFF",
  "produk": "ff5",
  "tujuan": "4645",
  "signature": "fa375f4e3dsdbe2cdcf5d1ee0e9d678ad"
}
```

## Response

### Deskripsi
### Contoh Response 
```json
{
    "data": {
        "merchant_id": "M220718CYXXXXX3KFF",
        "trx_id": "T220926XXXXX00003",
        "ref_id": "sdfsdx2",
        "destination": "4645",
        "product_code": "ff5",
        "product_code_master": "ff5",
        "message": "R#sdfsdx2 ff5.4645, status PENDING. BSK.AFULP. RefId : 12067803053055289057. Sisa saldo 99049000",
        "status": "Pending",
        "sn": "BSK.AFULP. RefId : 12067803053055289057",
        "last_balance": "99049000",
        "product_detail": {
            "name": "5 Diamond Free Fire",
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

### Contoh Response Error

```json
{
    "error_msg": "Signature not valid",
    "status": 0
}
