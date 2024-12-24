import { deleteImage, uploadImage } from "./imageApi";
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

export async function getItemById(itemID) {
  const { data, error } = await supabase
    .from("items")
    .select("*")
    .eq("id", itemID)
    .single();

  return { data, error };
}

export async function deleteItem(itemID) {
  const { data, error } = await getItemById(itemID);
  const image = data.image;

  const imagePath = image.split("/items/")[1].trim();
  // console.log(imagePath);

  try {
    const { error: imgError } = await supabase
      .from("items")
      .delete()
      .eq("id", itemID);
    if (error || imgError) {
      throw new Error("Error deleting item");
    }

    await deleteImage("items", imagePath);

    return;
  } catch (error) {
    console.error(error);
    throw new Error("Error deleting item");
  }
}

export async function updateItem(updateData) {
  const itemID = updateData.itemID;
  const rawData = updateData.data;
  console.log("ITEM UPDATE DATA", itemID, rawData);

  // IS UPLOADING NEW IMAGE?
  const isUploadingImage = rawData.image.length !== 0;
  // console.log("IS UPLOADING", isUploadingImage);
  if (!isUploadingImage) {
    const { data: itemData } = await getItemById(itemID);
    const imagePath = itemData.image;

    const { data, error } = await supabase
      .from("items")
      .update({ ...rawData, image: imagePath })
      .eq("id", itemID)
      .select();
    if (error) {
      throw new Error("Error updating item");
    }
    return data;
  } else {
    // HERE USER IS UPLOADING NEW IMAGE
    const image = rawData.image[0];
    // console.log(image);
    // geting data and deleting image
    const { data: itemData } = await getItemById(itemID);

    const imagePath = itemData.image.split("/items/")[1].trim();

    await deleteImage("items", imagePath);

    // UPLOADING NEW IMAGE
    const { imgData, imgError, urlPath } = await uploadImage(
      "items",
      image,
      0.2,
      200,
    );

    if (imgError || !imgData) {
      throw new Error("Error uploading image");
    }

    // UPDATE DATA FINALLY
    const { data, error } = await supabase
      .from("items")
      .update({ ...rawData, image: urlPath })
      .eq("id", itemID)
      .select();

    // console.log(data);
    if (error) {
      throw new Error("Error updating item");
    }

    return data;
  }
}
