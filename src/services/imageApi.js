import generateImageNameAndPath from "../utils/generateImageNameAndPath";
import imageCompression from "browser-image-compression";
import supabase from "./supabaseClient";

export async function uploadImage(bucket, image, maxSizeMB, maxWidthOrHeight) {
  // Accepts bucket,newName,image,maxSizeMB,maxWidthOrHeight

  // image name and path generation
  const { newName, urlPath } = generateImageNameAndPath(image, bucket);
  // Compression options
  const options = {
    maxSizeMB: maxSizeMB,
    maxWidthOrHeight: maxWidthOrHeight,
    useWebWorker: true,
  };
  // compressing image with options
  const commpresedImage = await imageCompression(image, options);

  // uploading part
  const { data: imgData, error: imgError } = await supabase.storage
    .from(bucket)
    .upload(newName, commpresedImage);

  // returns data & error
  return { imgData, imgError, urlPath };
}
