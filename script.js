function copyPromptText() {
  const text = document.getElementById('prompt-text').innerText;
  navigator.clipboard.writeText(text).then(() => {
    const copyTextSpan = document.getElementById('copy-text');
    copyTextSpan.innerText = 'Copied!';
    setTimeout(() => {
      copyTextSpan.innerText = 'Copy';
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
}

function copyWorkflowPrompt() {
  copyPromptText();
}

(function initLoginGate() {
  const STORAGE_KEY = 'btl-unlocked';
  const ACCESS_WORD = 'analyze';
  const form = document.getElementById('login-form');
  const input = document.getElementById('login-input');
  const error = document.getElementById('login-error');
  const screen = document.getElementById('login-screen');

  function unlock() {
    document.body.classList.remove('is-locked');
    document.body.classList.add('is-unlocked');
    error.hidden = true;
  }

  document.addEventListener('DOMContentLoaded', function () {
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === '1') {
        unlock();
        return;
      }
    } catch (e) {
      /* ignore storage errors */
    }
    if (input) input.focus();
  });

  if (form && input) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const value = input.value.trim();
      if (value.toLowerCase() === ACCESS_WORD) {
        try {
          sessionStorage.setItem(STORAGE_KEY, '1');
        } catch (e) {
          /* ignore storage errors */
        }
        unlock();
      } else {
        error.hidden = false;
        input.select();
      }
    });
  }
})();
