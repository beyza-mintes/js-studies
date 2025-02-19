//1 ile 100 arasında sayı oluşturma
let hedefSayi = Math.floor(Math.random() * 100) + 1

// oyun değiskenleri
let tahminSayisi = 0;
let maxTahmin = 10;
let oyunDevam = true;

// oyun fonksiyonu
function sayiTahminOyunu() {
    while (oyunDevam) {

        //kalan hakkı göster
        let kalanTahmin = maxTahmin - tahminSayisi;

        //kullanıcıdan tahmin al
        let tahmin = prompt(`1 ile 100 arasında bir sayı tahmin ediniz. \nKalan tahmin hakkınız:${kalanTahmin}`)

        //kullanıcının iptal etme durumu
        if (tahmin === null) {
            alert("oyundan çıkıldı")
            break;
        }

        tahmin = Number(tahmin);

        if (isNaN(tahmin) || tahmin < 1 || tahmin > 100) {
            alert("Geçerli bir sayı giriniz")
            continue;
        }

        tahminSayisi++

        //tahmin kontrolü
        if (tahmin === hedefSayi) {
            alert(`Harika! ${tahminSayisi} denemede sonucu buldun.`)

            //yeni oyun sorma
            let yeniOyun = confirm("Yeni oyun oynamak ister misiniz?")
            if (yeniOyun) {
                hedefSayi = Math.floor(Math.random() * 100) + 1;
                tahminSayisi = 0;
            } else {
                oyunDevam = false
                alert("Görüşürüz")
            }

        } else {
            if (tahminSayisi >= maxTahmin) {
                alert(`Tahmin hakkınız bitti, cevap: ${hedefSayi}`)

                let yeniOyun = confirm("Yeni oyun oynamak ister misiniz?")
                if (yeniOyun) {
                    hedefSayi = Math.floor(Math.random() * 100) + 1;
                    tahminSayisi = 0;
                } else {
                    oyunDevam = false
                    alert("Görüşürüz")
                }

            } else if (tahmin < hedefSayi) {
                alert(`Daha yüksek değer giriniz \nKalan tahmin hakkınız: ${kalanTahmin - 1}`)
            } else {
                alert(`Daha düşük değer giriniz \nKalan tahmin hakkınız: ${kalanTahmin - 1}`)
            }
        }
    }
}

alert("Oyunumuza hoşgeldiniz, bir sayı girerek başlayabilirsiniz. Toplam 10 hakkınız var.")
sayiTahminOyunu()