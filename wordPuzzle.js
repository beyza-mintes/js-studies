// KELİME BULMA OYUNU

// KURGU

// KULLANICI OYUNA BAŞLADI MI?
// KULLANICI OYUNA DEVAM ETMEK İSTİYOR MU?
// KULLANICININ HARF TAHMİNİ DOĞRU MU?
// KULLANICI TÜM HARFLERİ DOĞRU BULDU MU?
// KAZANDI MI?
// YENİ OYUN OYNAMAK İSTİYOR MU?

// OYUNDA KULLANILCAK KELİMELER
const kelimeler = ["bilgisayar", "matematik", "çikolata", "defter", "astronot"]

// OYUN DEĞİŞKENLERİ
let secilenKelime = "";
let secilenHarfler = [];
let kalanHak = 10;
let kullanilanHarfler = [];
let oyunaDevam = true;

// OYUN FONKSİYONU

function wordGame() {
    kalanHak = 10
    kullanilanHarfler = []
    oyunaDevam = true

    // oyun başlangıç mesajı
    alert("Kelime bulma oyununa hoşgeldiniz \nRastgele bir kelime seçilecek ve hangi kelime olduğunu bulmaya çalışacaksınız. Toplamda 10 harf hakkınız var.")

    // oyuna girmek isteyip istemediğini kullanıcıya sor
    if (!confirm("Oyuna başlamak ister misiniz?")) {
        alert("Oyundan çıkılıyor...")
        return;
    }

    // kelimeleri seç
    const randomIndex = Math.floor(Math.random() * kelimeler.length)
    secilenKelime = kelimeler[randomIndex]

    // kelimedeki harf sayısı kadar _ koyma
    secilenHarfler = [];
    for (let i = 0; i < secilenKelime.length; i++) {
        secilenHarfler[i] = "_"
    }

    while (oyunaDevam && kalanHak > 0) {

        // mevcut oyun durumunu gösteren bilgi:
        const oyunDurumu = `
        Kelime: ${secilenHarfler.join(" ")}
        Kalan hak: ${kalanHak}
        Kullanılan harfler: ${kullanilanHarfler.join(",")}
        `
        // kullanıcının tahminini al
        const tahmin = prompt(`${oyunDurumu} \nBir harf giriniz:`)

        // kullanıcı iptale basarsa
        if (tahmin === null) {
            alert("Oyundan çıkılıyor...")
            oyunaDevam = false
            return;
        }

        if (tahmin.length !== 1) {
            alert("Lütfen sadece 1 harf giriniz")
            continue;
        }

        // kullanıcının tahminini küçük harfe çevir
        const harf = tahmin.toLowerCase();

        // aynı harfi girmemesi için
        if (kullanilanHarfler.includes(harf)) {
            alert("bu harf daha önce kullanıldı")
            continue;
        }

        kullanilanHarfler.push(harf)

        // kullanıcının girdiği doğru harfi kontrol et
        let harfbulundu = false

        for (let i = 0; i < secilenKelime.length; i++) {
            if (secilenKelime[i] === harf) {
                secilenHarfler[i] = harf;
                harfbulundu = true
            }
        }

        // kullanıcının tahmin sonuçları
        if (harfbulundu) {
            alert(`Doğru tahmin ettiniz.${kalanHak} hakkınız kaldı.`)
        } else {
            kalanHak--;
            alert(`Yanlış tahmin ettiniz.${kalanHak} hakkınız kaldı.`)
        }

        // kullanıcı oyunu kazandı mı?
        let kazandi = true

        for (let i = 0; i < secilenHarfler.length; i++) {
            if (secilenHarfler[i] === "_") {
                kazandi = false
                break;
            }
        }

        // kullanıcı oyunu kazandıysa
        if (kazandi) {
            alert(`Tebrikler oyunu kazandınız. seçilen kelime :${secilenKelime}`)
            if (confirm("Yeni oyuna başlamak ister misiniz?")) {
                wordGame()
            }
            return;
        }

    }

    alert("Oyunu kaybettiniz...")
    if (confirm("Yeni oyuna başlamak ister misiniz?")) {
        wordGame()
    }

}

wordGame()


