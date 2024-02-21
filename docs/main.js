function changeImage() {
    document.querySelector('.paintbrush').src = 'images/catwithascarf.jpg';
    document.querySelector('.paintbrush').classList.add('active');
}

function restoreImage() {
    document.querySelector('.paintbrush').src = 'images/paintbrush.png';
    document.querySelector('.paintbrush').classList.remove('active');
}

function toggleEmailForm() {
    var emailFormContainer = document.getElementById('emailFormContainer');
    var emailForm = document.getElementById('emailForm');

    if (emailFormContainer.classList.contains('hidden')) {
        emailFormContainer.classList.remove('hidden');
        emailForm.style.display = 'block';
    } else {
        emailFormContainer.classList.add('hidden');
        emailForm.style.display = 'none';
    }
}

function copyToClipboard() {
    var emailAddress = document.getElementById('emailAddress');
    var textarea = document.createElement('textarea');
    textarea.value = emailAddress.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

function toggleActive(element) {
    document.querySelectorAll('.container').forEach(function (el) {
      el.classList.remove('active');
    });
    element.classList.toggle('active');
}

function toggleLink(element) {
    document.querySelectorAll('.homenav').forEach(function (el) {
      el.classList.remove('active');
    });
    element.classList.toggle('active');
}

function toggleLink2(element) {
    document.querySelectorAll('.link-list').forEach(function (el) {
      el.classList.remove('active');
    });
    element.classList.toggle('active');
}

function toggleLink3(element) {
    document.querySelectorAll('.hidden').forEach(function (el) {
      el.classList.remove('active');
    });
    element.classList.toggle('active');
}