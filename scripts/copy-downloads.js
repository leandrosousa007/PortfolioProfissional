import { copyFile, mkdir } from "node:fs/promises";

await mkdir("dist/client/image", { recursive: true });
await copyFile("image/TartaMat.apk", "dist/client/image/TartaMat.apk");
