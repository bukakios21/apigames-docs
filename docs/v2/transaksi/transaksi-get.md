---
sidebar_position: 1
---

# Method GET

Melakukan pembelian produk menggunakan Metode GET VERSI 2

:::warning
[BACA KETENTUAN](/docs/v2/pendahuluan)

:::

## Endpoint

```bash
https://v1.apigames.id/v2/transaksi?ref_id=[ref_id]&merchant_id=[merchant_id]&produk=[kode_produk]&tujuan=[tujuan]&signature=[signature]&server_id=[server_id]
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
| ref_id      | Ref ID unik Anda                                                                                 | String    | Ya    |
| merchant_id | Merchant ID Anda [Lihat Pengaturan Secret Key](https://member.apigames.id/pengaturan/secret-key) | String    | Ya    |
| produk      | Kode Produk [_Bisa menggunakan prefix custom misalnya **AGML80** untuk produk **ML80**_](#)      | String    | Ya    |
| tujuan      | Tujuan Pengisian                                                                                 | String    | Ya    |
| server_id      | Jika produk tidak memilik server_id, maka kosongkan saja                                                                                 | String    | Tidak    |
| signature   | Signature dengan formula **md5(merchant_id:secret_key:ref_id)**      | String    | Ya    |

### Contoh

```bash
https://v1.apigames.id/v2/transaksi?ref_id=sdfs&merchant_id=M220718CYXXXXX3KFF&produk=ff5&tujuan=4645&signature=30d19bbcd6c9784c020b135c818e8291c00e1a3d12e143c7bb924492c1e57cfb&server_id
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

