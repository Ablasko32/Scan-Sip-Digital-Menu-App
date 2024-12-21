import supabase from "./supabaseClient.js";

export async function getAllCategories() {
  const { data, error } = await supabase.from("categories").select("*");
  if (error) {
    throw new Error("Error loading categories");
  }
  return data;
}
