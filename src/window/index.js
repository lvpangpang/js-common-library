export function loadScript(url) {
  return new Promise((resolve, reject) => {
    if (!url) {
      return reject();
    }

    const node = document.querySelector(`[data-url="${url}"]`);
    if (node) {
      return resolve();
    }

    const script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
    script.onload = () => {
      script.dataset.url = url;
      resolve();
    };
    script.onerror = reject;
  });
}
