function validationKontrol() {
    const isim = document.getElementById('isim').value.trim();
    const soyisim = document.getElementById('soyisim').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phone-number').value.trim();
    const aciklama = document.getElementById('aciklama').value.trim();

    let mesaj = "";

    if (!isim) {
        mesaj += "Lütfen isim alanını doldurun.";
    }
    else if (!soyisim) {
        mesaj += "Lütfen soyisim alanını doldurun.";
    }
    else if (!email) {
        mesaj += "Lütfen e-mail alanını doldurun.";
    }
    else if (!phoneNumber) {
        mesaj += "Lütfen telefon numarası alanını doldurun.";
    }
    else if (!aciklama) {
        mesaj += "Lütfen açıklama alanını doldurun.";
    }

    const bosAlanKontrol = document.getElementById('bosAlanKontrol');
    bosAlanKontrol.innerHTML = mesaj;

    if (mesaj) {
        return false;
    }

    return true;
}