# White Fox: Simple Static Site Generator

White Fox is a lightweight, Node.js-based static site generator that transforms Markdown files into beautifully crafted HTML pages. It's designed for simplicity and ease of use, making content creation and management a breeze.

Check in action : https://www.lomz.net/index.html

## 🚀 Features

- **Markdown to HTML Conversion**: Effortlessly turn your Markdown content into polished web pages
- **Custom YouTube Embeds**: Seamlessly integrate YouTube videos into your pages
- **Modular Components**: Utilize reusable header and footer modules for consistent design
- **Responsive Design**: Built-in custom CSS ensures your site looks great on all devices
- **Easy Customization**: Flexible architecture allows for easy tweaks and additions

## 📁 File Structure

```
white-fox/
├── build/           # Generated site output
├── images/          # Image assets
├── modules/         # Reusable components
│   ├── header.md
│   └── footer.md
├── pages/           # Main content (Markdown)
│   ├── index.md
│   ├── about.md
│   └── ...
├── build.js         # Main build script
├── package.json     # Project configuration
├── style.css        # Main stylesheet
├── .gitignore       # Git ignore file
└── README.md        # Project documentation
```

## 🛠 Getting Started

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/white-fox.git
   cd white-fox
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Add your content:**
   - Place Markdown files in the `pages/` directory
   - Add images to the `images/` directory
   - Customize `modules/header.md` and `modules/footer.md`

4. **Build your site:**
   ```
   npm run build
   ```

5. **Find your generated site in the `build/` directory**

## 📝 Markdown Syntax

White Fox supports standard Markdown syntax. Here are some examples:

- Headers: Use `#` for h1, `##` for h2, `###` for h3, etc.
- Lists: Use `-` or `*` for unordered lists, and `1.`, `2.`, etc. for ordered lists
- Links: `[Link Text](https://example.com)`
- Images: `![Alt Text](path/to/image.jpg)`
- Code blocks: Use triple backticks (```) before and after your code
- YouTube Embeds: Use the `{{youtube:VIDEO_ID}}` format to embed YouTube videos
- Horizontal Rule: Use `{{hr}}` for a horizontal line
- Iframe from p5js editor use: `{{p5js:username/mode/sketchId}}`. Example: `{{p5js:lomz/full/mE9bzGTmp}}` get this in p5js editor: File > Share and then you will see.

For more advanced Markdown features, refer to the [GitHub Markdown Guide](https://guides.github.com/features/mastering-markdown/).

## 🚀 Deployment

After building your site:

1. Upload the contents of the `build/` directory to your web server
2. Ensure your server is configured to serve static files
3. Your White Fox site is now live!

## 🎨 Customization

- **Styling**: Modify `style.css` to change your site's appearance
- **Build Process**: Edit `build.js` to add new features or alter the build workflow
- **Content**: Update Markdown files in `pages/` and `modules/` to change your site's content

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgements

- [Marked](https://github.com/markedjs/marked) - Markdown parser and compiler
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [npm](https://www.npmjs.com/) - Package manager

---

Built with ❤️ using White Fox Static Site Generator
