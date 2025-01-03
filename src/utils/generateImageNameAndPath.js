export default function generateImageNameAndPath(image, bucket) {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  // generates image name by combining it with date now,and returns public url of image
  const imageName = image.name;
  const baseURL = `${supabaseUrl}/storage/v1/object/public/${bucket}/`;
  // new name as combination of date and image name
  const newName = `${Date.now()}-${imageName}`;
  const urlPath = baseURL + newName;
  return { newName, urlPath };
}
