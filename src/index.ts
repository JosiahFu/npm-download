/**
 * Creates an object URL from text content.
 * 
 * @param content The text content of the file.
 * @returns The URL to download the file. You can use this as the `href` for an anchor tag.
 */
function getDownloadURI(content: string): string {
    const blob = new Blob([content], { type: 'text/plain; encoding=utf8' });
    const url = window.URL.createObjectURL(blob);
    return url;
}

/**
 * @deprecated use `getDownloadURI` instead
 */
const getDownloadURL = getDownloadURI;

/** Automatically downloads a file from text content.
 * 
 * WARNING: Chrome will prevent downloading of files in quick succession if not
 * triggered by a user event, or downloading simultaneously. It is recommended
 * to use a button or anchor if you want to download multiple files.
 * 
 * @param content The text content of the file. @param filename The name of the file.
 */
function download(content: string, filename: string): void {
    const link = document.createElement('a');
    link.href = getDownloadURI(content);
    link.download = filename; link.click();
    link.remove();
}

export { getDownloadURI, getDownloadURL, download };
