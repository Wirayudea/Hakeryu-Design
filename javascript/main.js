document.querySelectorAll('.btnDetail').forEach(item => {
    item.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;
        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga').innerText;
        let judul = parent.querySelector('.card-title').innerText;
        let deskawal = parent.querySelector('.card-text').innerText;
        let deskripsi = parent.querySelector('.deskripsi') ? parent.querySelector('.deskripsi').innerText : 'tidak ada informasi';

        // Bagian klik tombol modal 
        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        // Menampilkan Judul di modal
        document.querySelector('.modalTittle').innerText = judul;

        // Menampilkan gambar di modal
        let image = document.createElement('img');
        image.src = gambar;
        image.classList.add('w-100');
        document.querySelector('.modalImage').innerHTML = '';
        document.querySelector('.modalImage').appendChild(image);

        // Menampilkan Deskripsi
        document.querySelector('.modalDeskripsi').innerText = deskripsi;

        // Menampilkan harga
        document.querySelector('.modalharga').innerText = harga;

        // Tombol pesan WhatsApp
        function sendwhatsapp() {
            var phonenumber = "+6289625382065";

            // diambil dari class html
            var name = document.querySelector(".name").value;
            var alamat = document.querySelector(".alamat").value;
            var catatan = document.querySelector(".catatan").value;
            var metodepembayaran = document.querySelector(".metode-pembayaran").value;

            // Menggabungkan detail produk dan informasi pengguna
            var pesan = 
            `*Halo kak, mau pesan jasa ini*:
            =============================
            *Judul Desain:* ${judul}
            *Harga       :* ${harga}
            =============================
            *Data Diri*
            *Nama   :* ${name}
            *Alamat :* ${alamat}
            *Metode Pembayaran :* ${metodepembayaran}
            *Catatan:* ${catatan}
            =============================
            No Dana : 089625382065
            No Rek  : 17909014495(Sumsel)`;

            // Membuat URL WhatsApp
            var urlWhatsApp = `https://wa.me/${phonenumber}?text=${encodeURIComponent(pesan)}`;
            
            // Membuka WhatsApp dengan pesan
            window.open(urlWhatsApp, '_blank').focus();

            // Refresh halaman setelah 1 detik
            setTimeout(() => {
                location.reload();
            }, 1000); // waktu dalam milidetik  
        }
        
        // Menambahkan event listener untuk tombol sendwhatsapp
        document.querySelector('.sendwhatsapp').addEventListener('click', sendwhatsapp);

        // Event listener untuk merefresh halaman saat modal ditutup
        var exampleModal = document.getElementById('exampleModal');
        exampleModal.addEventListener('hidden.bs.modal', function () {
        location.reload(); // Merefresh halaman

        
        });
    });
});
