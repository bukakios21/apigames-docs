---
sidebar_position: 5
---

# Cek Koneksi Smile One

Melakukan pengecekan koneksi smileone menggunakan metode **GET**


## Endpoint

```bash
https://v1.apigames.id/merchant/[merchant_id]/cek-koneksi?engine=smileone&signature=[signature_redem]
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
| engine       | Koneksi engine. Misal: smileone, kiosgamer, higgs         | String    | Ya    |
| signature      | Signature Radeem  dengan formula **md5(merchant_id+secret_key**)                                                                               | String    | Ya    |

### Contoh

```bash
https://v1.apigames.id/merchant/M220122DEWA6374A/cek-koneksi?engine=smileone&signature=e27e38e3f9gd78dfe93t2898b74982b9
```

## Response

### Contoh Response Sukses

```json
{
    "status": 1,
    "rc": 50,
    "message": "Data Found",
    "data": {
        "data": {
            "loginStatus": true,
            "favorite": false,
            "favorite_product_count": 0,
            "customer_name": "Apigames.id"
        },
        "is_valid": true
    },
    "ts": 1647398685
}
```

### Contoh Response Gagal

```json
{
    "status": 0,
    "rc": 50,
    "error_msg": "Engine higgsj belum tersedia"
}
```
