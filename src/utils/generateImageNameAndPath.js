export default function generateImageNameAndPath(image, bucket) {
  // generates image name by combining it with date now,and returns public url of image
  const imageName = image.name;
  const baseURL = `https://ksyctoiguomeuiavrbpf.supabase.co/storage/v1/object/public/${bucket}/`;
  // new name as combination of date and image name
  const newName = `${Date.now()}-${imageName}`;
  const urlPath = baseURL + newName;
  return { newName, urlPath };
}
