---
sidebar_position: 3
---

# Cek Status Transaksi v2 HTTP TEXT / IP

Pengecekan status transaksi versi 2 menggunakan **Ref ID**

:::warning
[BACA KETENTUAN](/docs/peringatan)
:::

## Endpoint

```bash
https://v1.apigames.id/v2/transaksi/status-get-text?merchant_id=[merchant_id]&ref_id=[ref_id]&secret=[secret]
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
| secret   | Secret Key Anda [Lihat Pengaturan Secret Key](https://member.apigames.id/pengaturan/secret-key)      | String    | Ya    |




### Contoh

```bash
https://v1.apigames.id/v2/transaksi/status-get-text?merchant_id=M220718CYCO7033KFF&ref_id=sdfsdx2&secret=30d19bbcd6c9784c020b135c818e8291c00e1a3d12e143c7bb924492c1e57cfb
```

## Response

### Deskripsi

### Contoh Response Error

```bash
status ERROR. Signature not valid
```

### Contoh Response Validasi Provider

```bash
R#sdfsdx2 ff5.4645, status VALIDASI PROVIDER. BSK.AFULP. RefId : 12067803053055289057. Sisa saldo 99049000
```


### Contoh Response Sukses Sebagian

```bash
R#sdfsdx2 ff5.4645, status SUKSES SEBAGIAN. BSK.AFULP. RefId : 12067803053055289057. Sisa saldo 99049000
```


### Contoh Response Proses

```bash
R#sdfsdx2 ff5.4645, status PROSES. BSK.AFULP. RefId : 12067803053055289057. Sisa saldo 99049000
```

### Contoh Response Pending

```bash
R#sdfsdx2 ff5.4645, status PENDING. . Sisa saldo 99049000
```

### Contoh Response Sukses

```bash
R#sdfsdx2 ff5.4645, status SUKSES. SN/Ref: BSK.AFULP. RefId : 12067803053055289057. Sisa saldo 99049000
```




