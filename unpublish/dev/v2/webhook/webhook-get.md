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
  "merchant_id": "M220718CYCO7033KFF",
  "trx_id": "T220926WZQF000008",
  "ref_id": "xxdffcfxddab",
  "destination": "08sdf",
  "product_code": "FF5",
  "product_code_master": "FF5",
  "message": "R#xxdffcfxddab FF5.08sdf, status GAGAL. error_require_login. Sisa saldo 99048875",
  "status": "Gagal",
  "sn": "error_require_login",
  "last_balance": "99048875",
  "product_detail": {
    "name": "5 Diamond Free Fire",
    "code": "FF5",
    "price": 3,
    "price_unit": "garena shell",
    "rate": 250,
    "price_rp": 750
  }
}
```


