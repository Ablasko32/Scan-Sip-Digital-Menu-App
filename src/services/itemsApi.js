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
  const { data, error } = await supabase.from("items").insert(itemData);
  if (error) {
    throw new Error("Error creating item");
  }
  return data;
}
