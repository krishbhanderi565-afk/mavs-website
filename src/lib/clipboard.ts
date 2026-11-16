export async function copyToClipboard(text: string): Promise<boolean> {
  if (navigator?.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fallback to legacy execCommand
      return fallbackCopyTextToClipboard(text);
    }
  } else {
    return fallbackCopyTextToClipboard(text);
  }
}

function fallbackCopyTextToClipboard(text: string): boolean {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  textArea.style.pointerEvents = 'none';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  let successful = false;
  try {
    successful = document.execCommand('copy');
  } catch (err) {
    console.error('Fallback copy error', err);
    successful = false;
  }

  document.body.removeChild(textArea);
  return successful;
}
