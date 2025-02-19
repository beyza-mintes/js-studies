let bakiye = 1000

function menuGoster() {
    return prompt(
        "ATM'ye hoşgeldiniz. Lütfen yapmak istediğiniz işlem numarasını giriniz.\n" +
        "1-Bakiye göster\n" +
        "2-Para yatır\n" +
        "3-Para çekme\n" +
        "4-Çıkış\n"
    );
}

function atm() {

    while (true) {
        let secim = menuGoster();

        if (secim === "1") {
            alert(`Mevcut bakiyeniz: ${bakiye}`)
        } else if (secim === "2") {
            let miktar = parseFloat(prompt("Yatırmak istediğiniz tutarı girin"))
            if (miktar > 0) {
                bakiye += miktar;
                alert(`Hesabınıza ${miktar} TL yatırıldı. Güncel bakiyeniz: ${bakiye} TL'dir`)
            } else {
                alert("Geçersiz tutar !");
            }

        } else if (secim === "3") {
            let miktar = parseFloat(prompt("Çekmek istediğiniz tutarı girin"));
            if (miktar > 0 && miktar <= bakiye) {
                bakiye -= miktar;
                alert(`Hesabınızdan ${miktar} Tl para çekildi. Güncel bakiyeniz : ${bakiye} TL'dir`)
            } else {
                alert("Hesabınızda yeterli bakiye yok ")
            }

        } else if (secim === "4") {
            alert("Çıkış yapılıyor. Hoşçakalın...")
            break;
        } else {
            alert("Geçersiz seçim. 1-4 arasında bir değer seçin");
        }

    }

}

atm()
