# Express TypeScript Prisma API

Proyek ini adalah API backend yang menggunakan Express, TypeScript, dan Prisma dengan pengaturan cookie yang aman serta fungsi enkripsi menggunakan bcryptjs dan JWT untuk autentikasi.

## Struktur Proyek

```
src/
├── config/
│   └── prisma.ts        # Konfigurasi Prisma Client
├── controller/          # Controller untuk logika bisnis dan pemrosesan permintaan
│   └── userController.ts
├── middleware/          # Middleware untuk memeriksa Content-Type dan lainnya
│   └── jsonOnlyMiddleware.ts
├── model/               # Model Prisma dan fungsi CRUD
│   └── userModel.ts
├── routes/              # Rute API
│   └── userRoutes.ts
├── utils/               # Utilitas untuk enkripsi dan JWT
│   ├── encryptUtil.ts   # Fungsi enkripsi menggunakan bcryptjs
│   └── jwtUtil.ts       # Fungsi JWT menggunakan jsonwebtoken
├── index.ts             # Titik masuk aplikasi
.env                     # File konfigurasi lingkungan
prisma/
└── schema.prisma        # Skema Prisma untuk database
```

## Instalasi

1. **Klon Repository:**

   ```bash
   git clone https://github.com/rvnkrwn-dev/express-ts-prisma-starter.git
   cd express-ts-prisma-starter
   ```

2. **Instal Dependencies:**

   ```bash
   npm install
   ```

3. **Konfigurasi Prisma:**

   - Update file `prisma/schema.prisma` sesuai dengan kebutuhan database Anda.
   - Jalankan migrasi untuk menyiapkan database:

     ```bash
     npx prisma migrate dev --name init
     ```

4. **Konfigurasi Lingkungan:**

   Buat file `.env` di direktori root dan tambahkan konfigurasi berikut:

   ```bash
   DATABASE_URL="your-database-url"
   JWT_SECRET="your-jwt-secret"
   ```

5. **Jalankan Aplikasi:**

   ```bash
   npm run dev
   ```

   Aplikasi akan berjalan pada `http://localhost:3000`.

## Endpoints API

### 1. Create User

- **URL:** `/api/users`
- **Method:** `POST`
- **Headers:**
  - `Content-Type: application/json`
- **Body:**

  ```json
  {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "password": "securepassword"
  }
  ```

- **Response:**

  ```json
  {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "created_at": "2024-08-29T00:00:00.000Z",
    "updated_at": "2024-08-29T00:00:00.000Z"
  }
  ```

### 2. Get User

- **URL:** `/api/users/:id`
- **Method:** `GET`
- **Params:**
  - `id`: ID pengguna yang ingin diambil.
- **Response:**

  ```json
  {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "created_at": "2024-08-29T00:00:00.000Z",
    "updated_at": "2024-08-29T00:00:00.000Z"
  }
  ```

### 3. Update User

- **URL:** `/api/users/:id`
- **Method:** `PUT`
- **Headers:**
  - `Content-Type: application/json`
- **Params:**
  - `id`: ID pengguna yang ingin diperbarui.
- **Body:**

  ```json
  {
    "first_name": "Jane",
    "last_name": "Doe",
    "email": "jane.doe@example.com",
    "password": "newpassword"
  }
  ```

- **Response:**

  ```json
  {
    "id": 1,
    "first_name": "Jane",
    "last_name": "Doe",
    "email": "jane.doe@example.com",
    "created_at": "2024-08-29T00:00:00.000Z",
    "updated_at": "2024-08-29T00:00:00.000Z"
  }
  ```

### 4. Delete User

- **URL:** `/api/users/:id`
- **Method:** `DELETE`
- **Params:**
  - `id`: ID pengguna yang ingin dihapus.
- **Response:** `204 No Content`

### 5. List Users

- **URL:** `/api/users`
- **Method:** `GET`
- **Query Parameters:**
  - `itemsPerPage`: Jumlah item per halaman.
  - `skip`: Jumlah item yang akan dilewati.
- **Response:**

  ```json
  [
    {
      "id": 1,
      "first_name": "Jane",
      "last_name": "Doe",
      "email": "jane.doe@example.com",
      "created_at": "2024-08-29T00:00:00.000Z",
      "updated_at": "2024-08-29T00:00:00.000Z"
    }
  ]
  ```

## Middleware

### JSON Only Middleware

- **Tujuan:** Memastikan hanya permintaan dengan `Content-Type: application/json` yang diterima.
- **Lokasi:** `src/middleware/jsonOnlyMiddleware.ts`

## Konfigurasi Cookie

- **httpOnly:** Menentukan bahwa cookie hanya dapat diakses melalui HTTP(S) dan tidak oleh JavaScript.
- **secure:** Mengatur cookie hanya dikirim melalui HTTPS jika di lingkungan produksi.
- **sameSite:** Mengontrol pengiriman cookie dalam permintaan lintas situs untuk melindungi dari serangan CSRF.
- **maxAge:** Durasi cookie dalam milidetik.

## Utilitas

### EncryptUtil

- **Fungsi:** Menggunakan bcryptjs untuk melakukan hashing password.
- **Lokasi:** `src/utils/encryptUtil.ts`

### JwtUtil

- **Fungsi:** Menggunakan jsonwebtoken untuk membuat dan memverifikasi token JWT.
- **Lokasi:** `src/utils/jwtUtil.ts`

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan fork repository ini dan kirim pull request dengan perubahan Anda.

## Lisensi

MIT License. Lihat LICENSE untuk detail lebih lanjut.
