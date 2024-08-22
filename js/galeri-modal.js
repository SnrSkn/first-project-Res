function openModal(imageSrc) {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modal-img').src = imageSrc;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}