export const theme = {
  color: {
    brand: {
      yellow: "#f9ca02",
      white: "#fcfcfd",
      black: "#242121",
    },
    ui: {
      text: {
        dark: {
          primary: "#000000",
          secondary: "#414141",
        },
        light: {
          primary: "#ffffff",
          secondary: "#d4d4d4",
        },
      },
    },
    bg: {
      light: {
        primary: "#ffffff",
        secondary: "#ececec",
      },
    },
    feedback: {
      error: "#d40d12",
      warning: "#FFA726",
      success: "#66BB6A",
      info: "#29B6F6",
      disabled: "#BDBDBD",
    },
  },
  spacing: [4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 112, 128, 144],
  shadow: {
    raised: `0px 1px 4px rgba(0, 0, 0, 0.1)`,
    hover: `0px 4px 8px rgba(0, 0, 0, 0.2)`,
    spotlight: `0 6px 12px 0 rgba(0,0,0,0.10)`,
    modal: `0px 14px 20px rgba(0, 0, 0, 0.1)`,
  },
  border: [0, 4, 8, 50, 100],
  typography: {
    header: {
      fontFace: "Roboto",
      weight: "bold",
      lineHeight: 120,
      size: [64, 48, 32, 28, 24],
    },
    subheader: {
      fontFace: "Roboto",
      weight: "600",
      lineHeight: 120,
      size: [20, 18],
    },
    body: {
      fontFace: "Fira Code",
      lineHeight: 150,
      variant: [
        {
          weight: "normal",
          size: [16, 14],
        },
        {
          weight: "bold",
          size: [16, 14],
        },
      ],
    },
    link: {
      fontFace: "Fira Code",
      lineHeight: 150,
      transform: "underline",
      variant: [
        {
          weight: "normal",
          size: [16, 14],
        },
        {
          weight: "bold",
          size: [16, 14],
        },
      ],
    },
    caption: {
      fontFace: "Fira Code",
      lineHeight: 150,
      variant: [
        {
          weight: "normal",
          size: [12, 10],
        },
        {
          weight: "bold",
          size: [12, 10],
        },
      ],
    },
  },
}
