---
sidebar_position: 2
---

# Method POST

Pengecekan status transaksi versi 2 menggunakan **Ref ID**

:::warning
[BACA KETENTUAN](/docs/v2/pendahuluan)
:::

## Endpoint

```bash
https://v1.apigames.id/v2/transaksi/status
```

## HTTP Method

```
POST
```

## Request

### Deskripsi

Berikut adalah parameter yang di harapkan

| Parameter   | Deskripsi                                                                                        | Tipe Data | Wajib |
| ----------- | ------------------------------------------------------------------------------------------------ | --------- | ----- |
| merchant_id | Merchant ID Anda [Lihat Pengaturan Secret Key](https://member.apigames.id/pengaturan/secret-key) | String    | Ya    |
| ref_id      | Ref ID unik Anda                                                                                 | String    | Ya    |
| signature   | Signature dengan formula **md5(merchant_id:secret_key:ref_id)**      | String    | Ya    |




### Contoh Payload

```json
{
  "ref_id": "TRX0007",
  "merchant_id": "M220718CYXXXXX3KFF",
  "signature": "fa375f4e30dbe2cdcf5d1ee0e9d678ad"
}

```

## Response

### Contoh Response Error

```json
{
    "error_msg": "Signature not valid",
    "status": 0
}
```

### Contoh Response Gagal

```json
{
    "data": {
        "merchant_id": "M220718CYXXXXX3KFF",
        "trx_id": "T220926XXXXX00003",
        "ref_id": "sdfsdx2",
        "destination": "4645",
        "product_code": "ff5",
        "product_code_master": "ff5",
        "message": "R#sdfsdx2 ff5.4645, status GAGAL. error_require_login. Sisa saldo 99049000",
        "status": "Gagal",
        "sn": "error_require_login",
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

### Contoh Response Validasi Provider

```json
{
    "data": {
        "merchant_id": "M220718CYXXXXX3KFF",
        "trx_id": "T220926XXXXX00003",
        "ref_id": "sdfsdx2",
        "destination": "4645",
        "product_code": "ff5",
        "product_code_master": "ff5",
        "message": "R#sdfsdx2 ff5.4645, status VALIDASI PROVIDER. BSK.AFULP. RefId : 12067803053055289057. Sisa saldo 99049000",
        "status": "Validasi Provider",
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


### Contoh Response Sukses Sebagian

```json
{
    "data": {
        "merchant_id": "M220718CYXXXXX3KFF",
        "trx_id": "T220926XXXXX00003",
        "ref_id": "sdfsdx2",
        "destination": "4645",
        "product_code": "ff5",
        "product_code_master": "ff5",
        "message": "R#sdfsdx2 ff5.4645, status SUKSES SEBAGIAN. BSK.AFULP. RefId : 12067803053055289057. Sisa saldo 99049000",
        "status": "Sukses Sebagian",
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


### Contoh Response Proses

```json
{
    "data": {
        "merchant_id": "M220718CYXXXXX3KFF",
        "trx_id": "T220926XXXXX00003",
        "ref_id": "sdfsdx2",
        "destination": "4645",
        "product_code": "ff5",
        "product_code_master": "ff5",
        "message": "R#sdfsdx2 ff5.4645, status PROSES. BSK.AFULP. RefId : 12067803053055289057. Sisa saldo 99049000",
        "status": "Proses",
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

### Contoh Response Pending

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

### Contoh Response Sukses

```json
{
    "data": {
        "merchant_id": "M220718CYXXXXX3KFF",
        "trx_id": "T220926XXXXX00003",
        "ref_id": "sdfsdx2",
        "destination": "4645",
        "product_code": "ff5",
        "product_code_master": "ff5",
        "message": "R#sdfsdx2 ff5.4645, status SUKSES. SN/Ref: BSK.AFULP. RefId : 12067803053055289057. Sisa saldo 99049000",
        "status": "Sukses",
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




