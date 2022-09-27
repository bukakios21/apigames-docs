---
sidebar_position: 3
---

# Trx via GET/POST

:::info
Ini merupakan sample webhook yang kami kirimkan kepada anda jika menggunakan transaksi melalui metode POST / GET
:::

:::info
Kami akan mengirimkan report ke webhook anda setiap ada perubahan status transaksi Pastikan untuk Whitelist IP Kami : 107.155.65.115
:::



## Sample

### Sample Webhook Sukses

```json
{
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
}
```

### Sample Webhook Gagal

```json
{
  "merchant_id": "M220718CYXXXXX3KFF",
  "trx_id": "T220927DVXS000006",
  "ref_id": "122xxe3322221",
  "destination": "2772860208223211111",
  "product_code": "ff5",
  "product_code_master": "ff5",
  "message": "R#122xxe3322221 ff5.2772860208223211111, status GAGAL. error_require_login. Sisa saldo 99048675",
  "status": "Gagal",
  "sn": "error_require_login",
  "last_balance": "99048675",
  "product_detail": {
    "name": "5 Diamond Free Fire",
    "code": "ff5",
    "price": 3,
    "price_unit": "garena shell",
    "rate": 250,
    "price_rp": 750
  }
}
```


