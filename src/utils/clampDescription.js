const clipLength = 40;

export default function clampDescription(description) {
  // Clips description to given length via clipLength value
  let charList = description.split("");
  if (charList.length > clipLength) {
    charList = charList.slice(0, clipLength);
    let newDesription = charList.join("") + ",...";
    return newDesription;
  } else {
    return description;
  }
}
