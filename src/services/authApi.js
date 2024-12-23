import supabase from "./supabaseClient.js";

export async function loginUser(userData) {
  const { data, error } = await supabase.auth.signInWithPassword(userData);
  // console.log(data);
  if (data.user === null) {
    throw new Error("Invalid email or password");
  }
  if (error) {
    console.log(error);
    throw new Error("Error loging in");
  }

  return data;
}

export async function logoutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error("Error logging out");
  }
  return;
}
