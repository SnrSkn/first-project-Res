let urunler = [
    { id: 1, aciklama: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, doloribus suscipit odit blanditiis beatae animi architecto pariatur sed dolorum impedit!", imgSrc: "img/a.jpg" },
    { id: 2, aciklama: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, doloribus suscipit odit blanditiis beatae animi architecto pariatur sed dolorum impedit!", imgSrc: "img/a.jpg" },
    { id: 3, aciklama: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, doloribus suscipit odit blanditiis beatae animi architecto pariatur sed dolorum impedit!", imgSrc: "img/a.jpg" },
    { id: 4, aciklama: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, doloribus suscipit odit blanditiis beatae animi architecto pariatur sed dolorum impedit!", imgSrc: "img/a.jpg" }
];

let sayfaBasinaUrun = 4;
let mevcutSayfa = 1;
let mevcutIndeks = 0;

function urunleriGoster(sayfa) {
    let container = document.getElementById('index-urun-container');
    container.innerHTML = '';
    let baslangicIndeksi = (sayfa - 1) * sayfaBasinaUrun;
    let bitisIndeksi = Math.min(baslangicIndeksi + sayfaBasinaUrun, urunler.length);

    for (let i = baslangicIndeksi; i < bitisIndeksi; i++) {
        let urun = urunler[i];
        let urunElement = document.createElement('div');
        urunElement.className = 'urun';
        urunElement.innerHTML = `
    <img src="${urun.imgSrc}" alt="${urun.ad}">
    <div class="urun-aciklama">
        <p>${urun.aciklama}</p>
        <button>Sepete Ekle</button>
    </div>
`;
        container.appendChild(urunElement);
    }
    sayfalamaGoster(sayfa);
    sliderUrunleriGoster(sayfa);
}

function sliderUrunleriGoster(sayfa) {
    let slider = document.getElementById('urun-slider');
    slider.innerHTML = '';
    let baslangicIndeksi = (sayfa - 1) * sayfaBasinaUrun;
    let bitisIndeksi = Math.min(baslangicIndeksi + sayfaBasinaUrun, urunler.length);

    for (let i = baslangicIndeksi; i < bitisIndeksi; i++) {
        let urun = urunler[i];
        let urunElement = document.createElement('div');
        urunElement.className = 'urun';
        urunElement.innerHTML = `
    <img src="${urun.imgSrc}" alt="${urun.ad}">
    <div class="urun-aciklama">
        <p>${urun.aciklama}</p>
        <button>Sepete Ekle</button>
    </div>
`;
        slider.appendChild(urunElement);
    }
    mevcutIndeks = 0;
    slider.style.transform = `translateX(-${mevcutIndeks * 100}%)`;
}

function sayfalamaGoster(sayfa) {
    let sayfalama = document.getElementById('sayfalama');
    sayfalama.innerHTML = '';
    let toplamSayfa = Math.ceil(urunler.length / sayfaBasinaUrun);
}

document.getElementById('sonrakiBtn').addEventListener('click', () => {
    const slider = document.getElementById('urun-slider');
    const maxIndeks = slider.childElementCount - 1;
    if (mevcutIndeks < maxIndeks) {
        mevcutIndeks++;
        slider.style.transform = `translateX(-${mevcutIndeks * 100}%)`;
    }
});

document.getElementById('oncekiBtn').addEventListener('click', () => {
    const slider = document.getElementById('urun-slider');
    if (mevcutIndeks > 0) {
        mevcutIndeks--;
        slider.style.transform = `translateX(-${mevcutIndeks * 100}%)`;
    }
});

urunleriGoster(mevcutSayfa);