export const imgUrl = (main: string) => {
  const img = new window.Image();
  img.src = main;
  return img;
};
