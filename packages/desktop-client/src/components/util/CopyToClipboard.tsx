
// https://jonathancrozier.com/blog/using-javascript-to-copy-text-to-the-clipboard
export function copyTextToClipboard(text: string) {
  if (navigator.clipboard) {
    // Modern versions of Chromium browsers, Firefox, etc.
    navigator.clipboard.writeText(text).then(function() {
      console.log(`Text [${text}] successfully copied to clipboard!`);
    }, function(error) {
      console.log('Failed to copy text to clipboard: ' + error.message);
    });
  } else {
    // Fallback method using Textarea.
    var textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '-999999px';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand('copy');
      if (successful) {
        console.log(`Text [${text}] successfully copied (fallback) to clipboard!`);
      }
      else {
        console.log('Could not copy text (fallback) to clipboard');
      }
    } catch (error) {
      console.log('Failed to copy text (fallback) to clipboard: ' + error.message);
    }
    document.body.removeChild(textArea);
  }
};
