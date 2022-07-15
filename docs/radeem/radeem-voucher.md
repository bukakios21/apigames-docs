---
sidebar_position: 5
---

# Radeem Voucher Garena Shell Kiosgamer

Melakukan radeem voucher secara bulk (lebih dari 1 voucher) menggunakan method POST

## Endpoint

```bash
https://v1.apigames.id/merchant/[merchant_id]/kiosgamer/redem/bulk
```

## HTTP Method

```
POST
```

## Request

### Deskripsi

Berikut adalah struktur JSON yang diharapkan:

| Parameter   | Deskripsi                                                                                        | Tipe Data | Wajib |
| ----------- | ------------------------------------------------------------------------------------------------ | --------- | ----- |
| kode_voucher      | Base64 dari list voucher anda, bisa menggunakan bantuan [Base64Encode] (https://www.base64encode.org/) atau library dari bahasa yang anda gunakan. **Jangan lupa pisahkan dengan enter di setiap kode voucher       **                                                                           | String    | Ya    |
| session_key | Session Key Kiosgamer anda,  jika di kosongkan akan mengambil data session key dari koneksi akun | String    | Tidak    |
| signature   | Signature dengan formula **md5(merchant_id + secret_key)**      | String    | Ya    |

### Contoh

```json

{
    "kode_voucher":"d2VmZXdmd2Vmd2VmZXdmCndlZmV3ZndlZndlZndlZndlZgp3ZWZ3ZWZ3ZWZld2Zld2Y=",
    "signature":"fa375f4e30dbe2cdcf5d1ee0e9d678ef",
    "session_key":"nfeiwin34nin43infi3f"

}
```

## Response

### Deskripsi

### Contoh Response Sukses

```json

```

### Contoh Response Gagal

```json

```
