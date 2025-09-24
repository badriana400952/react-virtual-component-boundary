
# 🧠 React Virtual Component

> Komponen React yang powerful dan reusable untuk menjadi Error Boundary sekaligus wrapper modular. Cocok untuk menjaga kode React tetap rapi, aman, dan mudah digunakan ulang tanpa membuat banyak file kecil.

---

## Fitur Unggulan
-  ✅ Memecah Komponen Tanpa File Baru – bungkus bagian UI mana pun dengan MyComponent tanpa harus membuat file

- ✅ Error Boundary – mencegah crash pada aplikasi jika salah satu komponen anak mengalami error. Hanya bagian yang error yang menampilkan fallback UI.

- ✅ Wrapper modular – bungkus bagian UI mana pun agar kode tetap terorganisir dan mudah digunakan ulang.

- ✅ Mudah dikustomisasi – bisa menambahkan animasi, logging, styling, atau behavior lain di satu tempat.

- ✅ Siap untuk React + TypeScript – tipe aman dan mudah digunakan di proyek TypeScript.

- ✅ Ringan – tidak mempengaruhi performa aplikasi.

-  ✅ Ringan dan Aman – tidak mempengaruhi performa aplikasi, kompatibel dengan React dan TypeScript.

---

## Instalasi

Gunakan NPM:

```bash
npm i react-virtual-component-boundary
```
## Penggunaan Visual Component


Menggunakan Boundray
```
import React from "react";
import Boundray from "react-virtual-component-boundary";

export const App = () => (
  <section className="flex gap-8">
    <Boundray>
      <div >Konten Kiri</div>
    </Boundray>

    <Boundray>
      <div >Konten Kanan</div>
    </Boundray>
  </section>
);


```

Menggunakan virtual Componen
```
import { Virtual } from "react-virtual-component-boundary";

function App() {
  return (
    <div>
      <Virtual.VirtualCard>
        <p>Hello World!</p>
      </Virtual.VirtualCard>

      <Virtual.VirtualTable>
        <table>
          <tr><td>A</td><td>B</td></tr>
        </table>
      </Virtual.VirtualTable>
    </div>
  );
}



```
## Cek komponent yang di pecah 

Gunakan React Developer Tools Extension => inspect => sejajar dengan element, console pilih Components lalu cari component mudah





![Logo](https://lh3.googleusercontent.com/TNijZW_Gp9MZ3eqXkve0YWDEiHV-a2IpSpD6IJzrV3Y76GJcLEyzX2regTLemXzBHbHVqkKuxnnWDT34Cp4sNh-Y=s120)



 - [Install Extension](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)


