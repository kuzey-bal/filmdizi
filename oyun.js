// Basit Film Veri Yapısı Simülasyonu
const categories = [
    {
        title: "Berfin İçin Özel Öneriler",
        type: "ozel",
        data: [
            { id: 1, title: "Zaman Yolcusu", imgUrl: 'https://picsum.photos/250/140?random=1' },
            { id: 2, title: "Karanlık Bölge", imgUrl: 'https://picsum.photos/250/140?random=2' },
            { id: 3, title: "Gizemli Ada", imgUrl: 'https://picsum.photos/250/140?random=3' },
            { id: 4, title: "Sonsuz Uzay", imgUrl: 'https://picsum.photos/250/140?random=4' },
            { id: 5, title: "Kızıl Gezegen", imgUrl: 'https://picsum.photos/250/140?random=5' },
            { id: 6, title: "Rüya Avcısı", imgUrl: 'https://picsum.photos/250/140?random=6' },
            { id: 7, title: "Hız Tuzağı", imgUrl: 'https://picsum.photos/250/140?random=7' },
        ]
    },
    {
        title: "Trend Olanlar",
        type: "trend",
        data: [
            { id: 8, title: "Yeni Başlangıç", imgUrl: 'https://picsum.photos/250/140?random=8' },
            { id: 9, title: "Büyük Plan", imgUrl: 'https://picsum.photos/250/140?random=9' },
            { id: 10, title: "Son Şans", imgUrl: 'https://picsum.photos/250/140?random=10' },
            { id: 11, title: "Dördüncü Boyut", imgUrl: 'https://picsum.photos/250/140?random=11' },
            { id: 12, title: "Döngü", imgUrl: 'https://picsum.photos/250/140?random=12' },
            { id: 13, title: "Kralın Dönüşü", imgUrl: 'https://picsum.photos/250/140?random=13' },
        ]
    }
    // Gerçek uygulamada bu veriler API'dan gelecektir.
];

const mainContent = document.getElementById('main-content');

// Film kartını oluşturan fonksiyon
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.title = movie.title;
    card.style.backgroundImage = `url(${movie.imgUrl})`;
    
    // Tıklama olayını simüle et
    card.addEventListener('click', () => {
        alert(`${movie.title} filmi detayına gidiliyor.`);
    });
    
    return card;
}

// Film şeridini (row) oluşturan fonksiyon
function createMovieRow(category) {
    const rowContainer = document.createElement('div');
    rowContainer.className = 'movie-row';
    
    // Şerit başlığı
    const title = document.createElement('h2');
    title.className = 'row-title';
    title.textContent = category.title;
    
    // Kartların yerleşeceği kaydırılabilir alan
    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'row-cards';
    
    // Filmleri kart olarak ekleme
    category.data.forEach(movie => {
        const card = createMovieCard(movie);
        cardsContainer.appendChild(card);
    });
    
    rowContainer.appendChild(title);
    rowContainer.appendChild(cardsContainer);
    
    return rowContainer;
}

// Tüm şeritleri ana içeriğe yükleme
function renderContent() {
    categories.forEach(category => {
        const row = createMovieRow(category);
        mainContent.appendChild(row);
    });
}

// Sayfa yüklendiğinde içeriği render et
document.addEventListener('DOMContentLoaded', renderContent);
