---
sidebar_position: 4
---

# Cek Akun Game

Melakukan pengecekan akun game, saat ini tersedia untuk **Free Fire**, **Mobile Legend**, dan **Higgs**

## Endpoint

```bash
https://v1.apigames.id/merchant/[merchant_id]/cek-account/[game_code]?user_id=[user_id]&signature=[singature]
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
| game_code | Kode game yang ingin dicek tersedia **mobilelegend** , **freefire**, **higgs**           | String    | Ya    |
| user_id      | User ID akun yang akan dicek                                                                                 | String    | Ya    |
| signature  |    Signature Cek akun  dengan formula **md5(merchant_id+secret_key**)                               | String    | Ya    |

### Contoh

```bash
https://v1.apigames.id/merchant/YOUR-MERCHANT-ID/cek-account/mobilelegend?username=101990303&signature=e27e38e3f9gd78dfe93t2898b74982b9
```

## Response Cek Akun Freefire

```json
{
    "status": 1,
    "rc": 0,
    "message": "Data Found",
    "data": {
        "is_valid": true,
        "username": "¥Vino_TZY™"
    },
    "ts": 1650529219
}"status": 1
}
```


## Response Cek Akun Mobile Legend

```json
{
    "status": 1,
    "rc": 0,
    "message": "Data Found",
    "data": {
        "is_valid": true,
        "username": "•CUMAN BISA MM•"
    },
    "ts": 1650529102
}
```

## Response Cek Akun Higgs

```json
{
    "status": 1,
    "rc": 0,
    "message": "Data Username Found",
    "data": {
        "is_valid": true,
        "username": "RMX2180"
    },
    "ts": 1650533187
}"ts": 1650529102
}
```


## Response Gagal

```json
{
    "status": 1,
    "rc": 0,
    "message": "Data Not Found",
    "data": {
        "is_valid": false,
        "username": ""
    },
    "ts": 1650529145
}
```



