interface ColorPallete {
  background: string;
  text: string;
}

export const colors: { [name: string]: ColorPallete } = {
  light: { background: "white", text: "black" },
  dark: { background: "#18181b", text: "white" },
};

export const setColorPallete = (colorPallete: ColorPallete) => {
  document.documentElement.style.setProperty(
    "--app-bg-color",
    colorPallete.background
  );
  document.documentElement.style.setProperty(
    "--app-text-color",
    colorPallete.text
  );
};
