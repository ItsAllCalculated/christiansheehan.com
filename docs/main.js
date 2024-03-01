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

function toggleLink4(element) {
    document.querySelectorAll('.nav').forEach(function (el) {
      el.classList.remove('active');
    });
    element.classList.toggle('active');
}

/*game*/

window.addEventListener('resize', toggleVisibility);
window.addEventListener('load', toggleVisibility);

  function toggleVisibility() {
    var iframe = document.getElementById('game-iframe');
    var mobileMessage = document.querySelector('.mobile-message');
    var fullscreen = document.querySelector('.fullscreen.btn');

    if (window.innerWidth <= 975) {
      iframe.style.display = 'none';
      mobileMessage.style.display = 'block';
      fullscreen.style.display = 'none';
    } else {
      iframe.style.display = 'block';
      mobileMessage.style.display = 'none';
      fullscreen.style.display = 'block';
    }
  }

  window.addEventListener('resize', toggleVisibility);

  window.addEventListener('load', toggleVisibility);