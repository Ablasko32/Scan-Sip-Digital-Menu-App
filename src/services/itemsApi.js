import imageCompression from "browser-image-compression";
import supabase from "./supabaseClient";

export async function getAllItemsForCategory(categoryId) {
  const { data, error } = await supabase
    .from("items")
    .select("*")
    .eq("categoryId", categoryId);

  if (error) {
    throw new Error("Error loading items");
  }
  return data;
}

export async function saveNewItem(itemData) {
  // path creation for image
  const baseURL =
    "https://ksyctoiguomeuiavrbpf.supabase.co/storage/v1/object/public/items/";
  const image = itemData.image;
  const imageName = itemData.image.name;

  const newName = `${crypto.randomUUID()}-${imageName}`;

  // urlPath thats going to be stored to database
  const urlPath = baseURL + newName;

  // image compression
  const options = {
    maxSizeMB: 0.2,
    maxWidthOrHeight: 200,
    useWebWorker: true,
  };
  const commpresedImage = await imageCompression(image, options);

  // image uploading
  const { data: imgData, error: imgError } = await supabase.storage
    .from("items")
    .upload(newName, commpresedImage);
  // console.log("data", imgData);
  // if no image upload then no content upload and error out
  if (imgError || !imgData) {
    throw new Error("Error uploading image");
  }

  // uploading of item with path given by us
  const { data, error } = await supabase
    .from("items")
    .insert({ ...itemData, image: urlPath });
  if (error) {
    throw new Error("Error creating item");
  }
  return data;
}
