export default function getClickLocation(e) {
  // positions element right on top of clicked button
  const rect = e.target.closest("button").getBoundingClientRect();

  return {
    x: window.innerWidth - rect.width - rect.x - rect.width / 1.4,
    y: rect.y + rect.height - rect.height / 1.1,
  };
}
