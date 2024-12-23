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
