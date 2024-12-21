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
