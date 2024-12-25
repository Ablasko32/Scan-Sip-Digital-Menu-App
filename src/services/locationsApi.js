import { deleteImage, uploadImage } from "./imageApi";
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
  if (!data) return null;
  if (error) {
    if (error.code === "PGRST116") return null;
    throw new Error("Error loading location data");
  }

  return data;
}

export async function getLocationImageByID(locationID) {
  const { data: fetchLocationData, error: locationError } = await supabase
    .from("location")
    .select("image")
    .eq("id", locationID)
    .single();
  if (locationError) {
    throw new Error("Error geting location data");
  }
  return { fetchLocationData, locationError };
}

export async function updateLocation(updateData) {
  const locationID = updateData.id;
  const locationData = updateData.data;

  // check to see if user is uploading or keeping same image FALSE if didnt pick new image
  const isUploading = locationData.image.length !== 0;

  // console.log(isUploading);

  if (isUploading) {
    console.log("UPLOADING IMAGE");

    // fetch location image data so it can be deleted later
    const { fetchLocationData, locationError } =
      await getLocationImageByID(locationID);

    if (locationError) {
      throw new Error("Error updating location");
    }

    // if there is locationData image then proced to delete it since new is stored
    if (fetchLocationData.image) {
      const imagePath = fetchLocationData.image.split("/locations/")[1].trim();
      await deleteImage("locations", imagePath);
    }

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

export async function addNewLocation(locationData) {
  // console.log("LOCATION DATA", locationData);

  const image = locationData.image[0];

  const { imgData, imgError, urlPath } = await uploadImage(
    "locations",
    image,
    0.8,
    1500,
  );

  if (!imgData || imgError) {
    throw new Error("Error uploading image");
  }

  const { data, error } = await supabase
    .from("location")
    .insert({ ...locationData, image: urlPath })
    .select()
    .single(); //placeholder for image
  if (error) {
    throw new Error("Error creating location");
  }
  // console.log("CREATED DATA", data);

  return data;
}
