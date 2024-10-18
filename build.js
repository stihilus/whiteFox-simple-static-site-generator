const fs = require('fs-extra');
const path = require('path');
const marked = require('marked');

const sourceDir = './';
const buildDir = './build';

// Function to convert YouTube links to embed code
function convertYouTubeLinks(content) {
    const youtubeRegex = /{{youtube:([a-zA-Z0-9_-]+)}}/g;
    return content.replace(youtubeRegex, (match, videoId) => {
        return `<div class="video-container"><iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;
    });
}

// Function to convert custom horizontal line syntax to HTML
function convertHorizontalLines(content) {
    const hrRegex = /{{hr}}/g;
    return content.replace(hrRegex, '<hr class="custom-hr">');
}

// Function to read and convert markdown to HTML
async function convertMarkdownToHtml(filePath) {
    const markdown = await fs.readFile(filePath, 'utf-8');
    // First, parse the markdown to HTML
    let htmlContent = marked.parse(markdown);
    // Then, convert YouTube links in the HTML
    htmlContent = convertYouTubeLinks(htmlContent);
    // Finally, convert custom horizontal line syntax
    htmlContent = convertHorizontalLines(htmlContent);
    return htmlContent;
}

// Function to build the full HTML page
async function buildHtmlPage(content, title) {
    const header = await convertMarkdownToHtml(path.join(sourceDir, 'modules', 'header.md'));
    const footer = await convertMarkdownToHtml(path.join(sourceDir, 'modules', 'footer.md'));

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - My Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="image/png" href="images/favicon.png">
    <meta property="og:title" content="${title} - My Portfolio">
    <meta property="og:description" content="Check out my portfolio and projects">
    <meta property="og:image" content="images/shareImage.jpg">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title} - My Portfolio">
    <meta name="twitter:description" content="Check out my portfolio and projects">
    <meta name="twitter:image" content="images/shareImage.jpg">
</head>
<body>
    <header id="header">${header}</header>
    <main id="content">${content}</main>
    <footer id="footer">${footer}</footer>
</body>
</html>
    `;
}

// Main build function
async function build() {
    // Clear and recreate build directory
    await fs.emptyDir(buildDir);

    // Copy static assets
    await fs.copy(path.join(sourceDir, 'style.css'), path.join(buildDir, 'style.css'));
    await fs.copy(path.join(sourceDir, 'images'), path.join(buildDir, 'images'));

    // Get all markdown files from the pages directory
    const pageFiles = await fs.readdir(path.join(sourceDir, 'pages'));
    const markdownFiles = pageFiles.filter(file => file.endsWith('.md'));

    // Build pages
    for (const file of markdownFiles) {
        const pageName = path.basename(file, '.md');
        const content = await convertMarkdownToHtml(path.join(sourceDir, 'pages', file));
        const html = await buildHtmlPage(content, pageName.charAt(0).toUpperCase() + pageName.slice(1));
        await fs.writeFile(path.join(buildDir, `${pageName}.html`), html);
    }

    console.log('Build completed successfully!');
}

build().catch(console.error);
