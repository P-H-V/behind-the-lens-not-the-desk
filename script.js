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
