import supabase from "./supabaseClient.js";

export async function getAllCategories() {
  const { data, error } = await supabase.from("categories").select("*");
  if (error) {
    throw new Error("Error loading categories");
  }
  return data;
}

export async function addNewCategory(categoryData) {
  const { data, error } = await supabase
    .from("categories")
    .insert(categoryData);
  if (error) {
    throw new Error("Error creating category");
  }

  return data;
}

export async function deleteCategory(categoryID) {
  console.log("ID", categoryID);
  const { error } = await supabase
    .from("categories")
    .delete()
    .eq("id", categoryID);
  if (error) {
    throw new Error("Error deleting category");
  }
  return;
}
