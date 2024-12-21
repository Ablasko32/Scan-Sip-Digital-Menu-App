import supabase from "./supabaseClient";

export async function getLocationData(locationID) {
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
