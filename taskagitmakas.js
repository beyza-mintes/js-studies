const oyun = {
    secenekler: ["tas", "kagit", "makas"],

    // bilgisayara seçtirme fonksiyonu
    bilgisayarSecim: function () {
        const rastgele = Math.floor(Math.random() * 3)
        return this.secenekler[rastgele]
    },

    //kazananı bulan fonksiyon
    kazananiBul: function (oyuncuSecimi, bilgisayarSecimi) {
        if (oyuncuSecimi === bilgisayarSecimi) {
            return "Berabere"
        }
        else if (
            (oyuncuSecimi === "tas" && bilgisayarSecimi === "makas") ||
            (oyuncuSecimi === "kagit" && bilgisayarSecimi === "tas") ||
            (oyuncuSecimi === "makas" && bilgisayarSecimi === "kagit")) {
            return "Kazandınız. Tebrikler"
        }
        else {
            return "Kaybettiniz, bilgisayar kazandı."
        }

    }
}

function oyna() {
    // oyuncudan input al
    let oyuncuSecimi = prompt("Tas,Kagit,Makas \nBunlardan birini seçiniz").toLowerCase()

    // Geçerlilik kontrolü
    if (!oyun.secenekler.includes(oyuncuSecimi)) {
        alert("Geçersiz seçim yaptınız")
        return;
    }

    // bilgisayarın seçimi
    const bilgisayarSecimi = oyun.bilgisayarSecim()

    //sonuçları göster
    alert(
        `sizin seçiminiz: ${oyuncuSecimi}
        bilgisayarın seçimi: ${bilgisayarSecimi}` +
        oyun.kazananiBul(oyuncuSecimi, bilgisayarSecimi)
    )

    // yeni oyun talebi
    if (confirm("Tekrar oynamak ister misiniz?")) {
        oyna()
    }
}

oyna()