"use client";
import { useState } from "react";
import { fetchImage } from "./fetchImage";
import styles from "./page.module.css";

type CatImageProps = {
  url: string;
};

export default function CatImage({ url }: CatImageProps) {
  const [imageUrl, setImageUrl] = useState(url);

  const getImage = async () => {
    setImageUrl("");
    const newImage = await fetchImage();
    setImageUrl(newImage.url);
  };

  return (
    <div className={styles.page}>
      <button onClick={getImage} className={styles.button}>
        他のにゃんこも見る
      </button>
      <div className={styles.frame}>
        {imageUrl && <img src={imageUrl} alt="猫画像" className={styles.img} />}
      </div>
    </div>
  );
}
