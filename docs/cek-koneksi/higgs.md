---
sidebar_position: 5
---

# Cek Koneksi Higgs

Melakukan pengecekan koneksi higgs menggunakan metode **GET**


## Endpoint

```bash
https://v1.apigames.id/merchant/[merchant_id]/cek-koneksi?engine=higgs&signature=[signature_redeem]
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
| signature      | Signature Radeem dengan formula **md5(merchant_id+secret_key**)                                                                               | String    | Ya    |

### Contoh

```bash
https://v1.apigames.id/merchant/M220122DEWA6374A/cek-koneksi?engine=higgs&signature=e27e38e3f9gd78dfe93t2898b74982b9
```

## Response

### Contoh Response Sukses

```json
{
    "status": 1,
    "rc": 0,
    "message": "Terkoneksi dengan akun mitra higgs MD1790873",
    "data": {
        "data": {
            "coin_1m": 277,
            "coin_60m": 122,
            "coin_200m": 80,
            "coin_600m": 130,
            "coin_1b": 1,
            "coin_2b": 0
        },
        "is_valid": true
    },
    "ts": 1646973543
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
