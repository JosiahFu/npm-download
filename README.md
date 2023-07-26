# `@tater-archives/file-dl`

A simple utility to create a file from a string and download it in the browser.

## Example Usage

With an `<a>` element:

```js
// Get the anchor
const downloadAnchor = document.getElementById('download');
// Generate URL
const uri = getDownloadURI('Lorem ipsum dolor sit amet');
// Set the URL
downloadAnchor.href = uri;
// Set the filename
downloadAnchor.download = 'lorem.txt';
```

As a triggered event:

```js
// Get the button
const downloadButton = document.getElementById('download');
// Add an event to download the file on click
downloadButton.addEventListner('click', () => {
    download('Lorem ipsum dolor sit amet', 'lorem.txt');
});
```

You can use it in the browser via [esm.sh](https://esm.sh) or [unpkg](https://unpkg.com).

```js
import { download, getDownloadURI } from 'https://esm.sh/@tater-archives/file-dl';
// or
import { download, getDownloadURI } from 'https://unpkg.com/@tater-archives/file-dl';
```

**WARNING:** When using the `download()` function, Chrome will prevent
downloading of files in quick succession if not triggered by a user event, or
downloading simultaneously. It is recommended to use a button or anchor if you
want to download multiple files.
