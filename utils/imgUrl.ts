export const imgUrl = (main: string) => {
  const img: any = new window.Image();
  img.src = main;
  return img;
};
