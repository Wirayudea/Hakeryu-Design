document.querySelectorAll('.btnDetail').forEach(item=>{
    item.addEventListener('click', (e) => {
        let parent = e.target.parentNode.parentNode;
        let gambar = parent.querySelector('.card-img-top').src;
        let harga = parent.querySelector('.harga').innerText;
        let judul = parent.querySelector('.card-title').innerText;
        let deskawal = parent.querySelector('.card-text').innerText;
        //untuk ktrngan jika tidak ada deskripsi
        let deskripsi = parent.querySelector('.deskripsi')? parent.querySelector('.deskripsi').innerText:'tidak ada infomrasi'; 

        //console.log(`judul ${judul}`);
        //console.log(`gambar ${gambar}`);
        //console.log(`harga: ${harga}`);
        //console.log(`deskawal: ${deskawal}`);
        //console.log(`deskripsi: ${deskripsi}`);
        

        //bagian klik tombol modal 

        let tombolModal = document.querySelector('.btnModal');
        tombolModal.click();

        //menampilkan Judul di modal
        document.querySelector('.modalTittle').innerText = judul;

        //menampilkan gambar di modal
        let image = document.createElement('img');
        image.src = gambar;
        image.classList.add('w-100');
        document.querySelector('.modalImage').innerHTML = '' ;
        document.querySelector('.modalImage').appendChild(image);

        //Menampilkan Deskripsi
        document.querySelector('.modalDeskripsi').innerText = deskripsi;

        //Menampilkan harga
        document.querySelector('.modalharga').innerText = harga;

        const nohp = '6289625382065';
        let pesan = `https://api.whatsapp.com/send?phone=${nohp}&text=Halo kak, saya mau pesan produk dengan detail berikut:%0A
        *Isi Data* %0A
        Nama: %0A
        Alamat: %0A
        Judul Desain: ${judul}%0A
        Harga: ${harga} %0A
        Metode Pembayaran DANA/REK/COD : `;

        document.querySelector('.btnPesan').href = pesan;


     });

});