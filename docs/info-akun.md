---
sidebar_position: 3
---

# Info Akun

Untuk melakukan pengecekan informasi akun apigames kamu

## Endpoint

```bash
https://v1.apigames.id/merchant/[merchant_id]?signature=[singature]
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
| signature  |    Signature Cek akun  dengan formula **md5(merchant_id+secret_key**)                               | String    | Ya    |

### Contoh

```bash
https://v1.apigames.id/merchant/YOUR-MERCHANT-ID?signature=YOUR-SIGNATURE-HERE
```

## Response Info Akun

```json
{
    "status": 1,
    "rc": 200,
    "message": "Sukses",
    "data": {
        "id": 1,
        "merchant_id": "M2YOURMERCHANTID",
        "email": "youremail@gmail.com",
        "hp": "0839834938",
        "nama": "YOUR NAME",
        "saldo": 19690000
    },
    "ts": 1657527892
}
```

