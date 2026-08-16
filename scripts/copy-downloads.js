const { copyFile, mkdir } = require("node:fs/promises");

async function copyDownloads() {
  await mkdir("public/downloads", { recursive: true });
  await copyFile("app/assets/downloads/TartaMat.apk", "public/downloads/TartaMat.apk");
}

copyDownloads();
