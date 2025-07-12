import { connection } from "next/server";
import { fetchImage } from "./fetchImage";
import CatImage from "./CatImage";

export default async function Home() {
  await connection();
  const image = await fetchImage();
  console.log("Home:猫画像を取得しました", image);
  return <CatImage url={image.url} />;
}
