import { uploadImage } from "./imageApi";
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

export async function insertNewItemHelper(rawData, image = null) {
  const { data, error } = await supabase
    .from("items")
    .insert({ ...rawData, image: image });
  if (error) {
    throw new Error("Error creating item");
  }
  return { data, error };
}

export async function saveNewItem(itemData) {
  // check to see if is uploading
  const isUploading = itemData.image.length !== 0;

  if (isUploading) {
    const image = itemData.image[0];
    const { imgData, imgError, urlPath } = await uploadImage(
      "items",
      image,
      0.2,
      200,
    );

    // if error error out
    if (imgError || !imgData) {
      throw new Error("Error uploading image");
    }
    const { data, error } = await insertNewItemHelper(itemData, urlPath);
    if (error) {
      throw new Error("Error creating item");
    }
    return data;
  } else {
    // console.log("NOT UPLOADING");
    const { data, error } = await insertNewItemHelper(itemData);
    if (error) {
      throw new Error("Error creating item");
    }
    return data;
  }
}

export async function deleteItem(itemID) {
  console.log("im here");
  const { error } = await supabase.from("items").delete().eq("id", itemID);
  if (error) {
    throw new Error("Error deleting item");
  }
  return;
}
