import { uploadImage } from "./imageApi";
import supabase from "./supabaseClient";

export async function getLocationData(locationID) {
  // by location ID for use inside menu ,by feeding url param
  const { data, error } = await supabase
    .from("location")
    .select("*")
    .eq("id", locationID)
    .single();

  if (error) {
    throw new Error("Error loading location data");
  }
  return data;
}

export async function getLocationDataForUser(userID) {
  // by user ID for use in app
  const { data, error } = await supabase
    .from("location")
    .select("*")
    .eq("userId", userID)
    .single();

  if (error) {
    throw new Error("Error loading location data");
  }

  return data;
}

export async function getLocationUserAndCategory(userId) {
  // by user ID for use in app
  const { data, error } = await supabase
    .from("location")
    .select("*,categories(*)")
    .eq("userId", userId)
    .single();
  if (error) {
    if (error.code === "PGRST116") return null;
    throw new Error("Error loading location data");
  }

  return data;
}

export async function updateLocation(updateData) {
  const locationID = updateData.id;
  const locationData = updateData.data;

  // check to see if user is uploading or keeping same image FALSE if didnt pick new image
  const isUploading = locationData.image.length !== 0;

  // console.log(isUploading);

  if (isUploading) {
    console.log("UPLOADING IMAGE");

    // image extraction from formdata
    const image = locationData.image[0];

    // uploads image function and returns urlPath for db storing
    const { imgData, imgError, urlPath } = await uploadImage(
      "locations",
      image,
      0.8,
      1500,
    );

    // if no image upload then no content upload and error out
    if (imgError || !imgData) {
      throw new Error("Error uploading image");
    }

    // SADA SEJV

    const { data, error } = await supabase
      .from("location")
      .update({ ...locationData, image: urlPath })
      .eq("id", locationID)
      .select();

    if (error) {
      throw new Error("Error updating location");
    }
    return data;
  } else {
    const { data: fetchLocationData, error: locationError } = await supabase
      .from("location")
      .select("*")
      .eq("id", locationID)
      .single();
    if (locationError) {
      throw new Error("Error updating location");
    }

    const { data, error } = await supabase
      .from("location")
      .update({ ...locationData, image: fetchLocationData.image })
      .eq("id", locationID)
      .select();

    if (error) {
      throw new Error("Error updating location");
    }

    return data;
  }
}
