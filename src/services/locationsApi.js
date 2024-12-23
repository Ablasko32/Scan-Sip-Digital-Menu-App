import imageCompression from "browser-image-compression";
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

    // path creation for image
    const baseURL =
      "https://ksyctoiguomeuiavrbpf.supabase.co/storage/v1/object/public/locations/";
    const image = locationData.image[0];
    const imageName = locationData.image[0].name;
    console.log(image, imageName);

    const newName = `${Date.now()}-${imageName}`;

    // urlPath thats going to be stored to database
    const urlPath = baseURL + newName;

    // image compression
    const options = {
      maxSizeMB: 0.8,
      maxWidthOrHeight: 1500,
      useWebWorker: true,
    };
    const commpresedImage = await imageCompression(image, options);
    console.log(urlPath, commpresedImage);
    // TU SAM IMAGE UPLOAD

    // image uploading
    const { data: imgData, error: imgError } = await supabase.storage
      .from("locations")
      .upload(newName, commpresedImage);
    // console.log("data", imgData);
    // if no image upload then no content upload and error out
    if (imgError || !imgData) {
      throw new Error("Error uploading image");
    }
    console.log(imgData);

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

// https://ksyctoiguomeuiavrbpf.supabase.co/storage/v1/object/public/locations/1734990948988-logo-dark.webp
// https://ksyctoiguomeuiavrbpf.supabase.co/storage/v1/object/public/items/1734990948988-logo-dark.webp
