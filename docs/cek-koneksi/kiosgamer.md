---
sidebar_position: 5
---

# Cek Koneksi Kiosgamer

Melakukan pengecekan koneksi kiosgamer menggunakan metode **GET**


## Endpoint

```bash
https://v1.apigames.id/merchant/[merchant_id]/cek-koneksi?engine=kiosgamer&signature=[signature_redem]
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
| signature      | Signature Radeem  dengan formula **md5(merchant_id+secret_key**)                                                                                | String    | Ya    |

### Contoh

```bash
https://v1.apigames.id/merchant/M220122DEWA6374A/cek-koneksi?engine=kiosgamer&signature=e27e38e3f9gd78dfe93t2898b74982b9
```

## Response

### Contoh Response Sukses

```json
{
    "status": 1,
    "rc": 200,
    "message": "Data Found",
    "data": {
        "data": {
            "garena_id": "544231487",
            "username": "apigames",
            "uuid": "60a7e99cfb524673a00b5c52ddaabb1f",
            "topup_to_friend": true,
            "shell_balance": 746660,
            "icon": "https://cdngarenanow-a.akamaihd.net/webmain/static/images/avatars/default.jpg",
            "expiry_time": 1648196000,
            "expiry_date": ""
        },
        "is_valid": true
    },
    "ts": 1647398605
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
