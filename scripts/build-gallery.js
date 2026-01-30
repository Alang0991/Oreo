import fs from "fs";
import path from "path";

const photosDir = "photos";
const pagePath = "photos.html";

const html = fs.readFileSync(pagePath, "utf8");

const images = fs
  .readdirSync(photosDir)
  .filter(file => /\.(png|jpe?g|webp|gif)$/i.test(file))
  .map(file => `<img src="photos/${file}" alt="Photo">`)
  .join("\n");

const result = html.replace("<!-- GALLERY -->", images);
fs.writeFileSync(pagePath, result);

console.log("✅ Photo gallery built");
