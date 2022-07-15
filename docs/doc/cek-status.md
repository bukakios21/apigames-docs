---
sidebar_position: 3
---

# Cek Status Transaksi

Pengecekan status transaksi menggunakan **Ref ID**

## Endpoint

```bash
https://v1.apigames.id/merchant/[merchant_id]/cektrx/[ref_id]
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
| ref_id      | Ref ID unik Anda                                                                                 | String    | Ya    |


### Contoh

```bash
https://v1.apigames.id/merchant/M220122DEWA6374A/cektrx/dfaw27860w1yb3
```

## Response

### Deskripsi

### Contoh Response Sukses

```json
{
  "data": {
    "merchant_id": "M220122DEWA6374A",
    "trx_id": "T220405SKBK002930",
    "ref_id": "dfaw27860w1yb3",
    "destination": "2418798876",
    "product_code": "DGF100",
    "product_code_master": "DGF100",
    "message": "R#dfaw27860w1yb3 DGF100.2418798876, status SUKSES. SN/Ref: STㅤARESㅤGZ. RefId : R20220405112510269057. Sisa saldo 43434",
    "status": "Sukses",
    "sn": "NamaAKunUser. RefId : R20220405112510269057",
    "last_balance": "3756650",
    "product_detail": {
      "name": "",
      "code": "DGF100",
      "price": 12000,
      "price_unit": "Rp",
      "rate": 1,
      "price_rp": 12000
    }
  },
  "status": 1
}
```
