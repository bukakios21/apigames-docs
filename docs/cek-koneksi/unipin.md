---
sidebar_position: 5
---

# Cek Koneksi Unipin

Melakukan pengecekan koneksi unipin menggunakan metode **GET**


## Endpoint

```bash
https://v1.apigames.id/merchant/[merchant_id]/cek-koneksi?engine=unipin&signature=[signature_redem]
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
| engine       | Koneksi engine. Misal: smileone, unipin, kiosgamer, higgs         | String    | Ya    |
| signature      | Signature Radeem  dengan formula **md5(merchant_id+secret_key**)                                                                                | String    | Ya    |

### Contoh

```bash
https://v1.apigames.id/merchant/M220122DEWA6374A/cek-koneksi?engine=unipin&signature=e27e38e3f9gd78dfe93t2898b74982b9
```

## Response

### Contoh Response Sukses

```json
{
    "status": 1,
    "rc": 200,
    "message": "Connected",
    "data": [{
        "name": "Apigames",
        "email": "cs@apigames.id",
        "up_balance": 343,
        "uc_balance": 43434
    }],
    "ts": 1649386566
}
```

### Contoh Response Gagal

```json
{
    "status": 0,
    "rc": 50,
    "error_msg": "Engine unipin belum tersedia"
}
```
