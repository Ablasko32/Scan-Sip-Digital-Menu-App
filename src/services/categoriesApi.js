import supabase from "./supabaseClient.js";

export async function getAllCategories(locationId) {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .eq("locationId", locationId);
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
  // console.log("ID", categoryID);
  const { error } = await supabase
    .from("categories")
    .delete()
    .eq("id", categoryID);
  if (error) {
    throw new Error("Error deleting category");
  }
  return;
}

export async function updateCategory(updateData) {
  const categoryID = updateData.categoryID;
  const categoryData = updateData.data;

  const { data, error } = await supabase
    .from("categories")
    .update(categoryData)
    .eq("id", categoryID)
    .select();
  if (error) {
    throw new Error("Error updating category");
  }
  return data;
}
