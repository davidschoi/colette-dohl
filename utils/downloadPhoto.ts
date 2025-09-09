function forceDownload(blobUrl: string, filename: string) {
  const a: HTMLAnchorElement = document.createElement('a')
  a.download = filename
  a.href = blobUrl
  document.body.appendChild(a)
  a.click()
  a.remove()
}

export default function downloadPhoto(url: string, filename: string) {
  if (!filename) filename = url.split('\\').pop().split('/').pop()
  fetch(url, {
    headers: new Headers({
      Origin: location.origin,
    }),
    mode: 'cors',
  })
    .then((response) => response.blob())
    .then((blob) => {
      const blobUrl = window.URL.createObjectURL(blob)
      const file = new File([blob], filename, { type: blob.type })
      if (
        typeof navigator !== 'undefined' &&
        'canShare' in navigator &&
        navigator.canShare({ files: [file] })
      ) {
        navigator
          .share({ files: [file], title: filename })
          .catch((e) => {
            console.error(e)
            forceDownload(blobUrl, filename)
          })
      } else {
        forceDownload(blobUrl, filename)
      }
    })
    .catch((e) => console.error(e))
}
