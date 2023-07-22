# @tater-archive/download

Simple utility to download a file in the browser.

## Example Usage

```js
// Get the anchor
const downloadAnchor = document.getElementById('download');
// Generate URL
const url = getDownloadUrl('Lorem ipsum dolor sit amet');
// Set the URL
downloadAnchor.href = url;
// Set the filename
downloadAnchor.download = 'lorem.txt';
```

```js
// Get the button
const downloadButton = document.getElementById('download');
// Add an event to download the file on click
downloadButton.addEventListner('click', () => {
    download('Lorem ipsum dolor sit amet', 'lorem.txt');
});
```

**WARNING:** When using the `download()` function, Chrome will prevent
downloading of files in quick succession if not triggered by a user event, or
downloading simultaneously. It is recommended to use a button or anchor if you
want to download multiple files.
