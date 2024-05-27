const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1240px",
        // => @media (min-width: 1024px) { ... }

        xl: "1580px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {
        "purple-dark": {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            background: "#0D001A",
            foreground: "#ffffff",
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#DD62ED",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
          layout: {
            fontWeight: {
              hairline: "100",
              thin: "200",
              light: "300",
              normal: "400",
              medium: "500",
              semibold: "600",
              bold: "700",
              extrabold: "800",
              black: "900",
            },
            fontSize: {
              "2xs": "0.625rem", // text-2xs
              xs: "0.75rem", // text-xs
              sm: "0.875rem", // text-sm
              base: "1rem", // text-base
              lg: "1.125rem", // text-lg
              xl: "1.25rem", // text-xl
              "2xl": "1.5rem", // text-2xl
              "3xl": "1.875rem", // text-3xl
              "4xl": "2.25rem", // text-4xl
              "5xl": "3rem", // text-5xl
              "6xl": "4rem", // text-6xl
              "7xl": "5rem", // text-7xl
              "8xl": "6rem", // text-8xl
              "9xl": "7rem", // text-9xl
            },
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      }, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {
            hoverOpacity: 0.8, //  this value is applied as opacity-[value] when the component is hovered
            boxShadow: {
              // shadow-small
              small:
                "0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
              // shadow-medium
              medium:
                "0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
              // shadow-large
              large:
                "0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
            },
            dividerWeight: "1px", // h-divider the default height applied to the divider component
            disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
            fontSize: {
              tiny: "0.75rem", // text-tiny
              small: "0.875rem", // text-small
              medium: "1rem", // text-medium
              large: "1.125rem", // text-large
            },
            lineHeight: {
              tiny: "1rem", // text-tiny
              small: "1.25rem", // text-small
              medium: "1.5rem", // text-medium
              large: "1.75rem", // text-large
            },
            radius: {
              small: "8px", // rounded-small
              medium: "12px", // rounded-medium
              large: "14px", // rounded-large
            },
            borderWidth: {
              small: "1px", // border-small
              medium: "2px", // border-medium (default)
              large: "3px", // border-large
            },
          }, // light theme layout tokens
          colors: {
            white: "#FFFFFF",
            black: "#000000",
            blue: {
              50: "#e6f1fe",
              100: "#cce3fd",
              200: "#99c7fb",
              300: "#66aaf9",
              400: "#338ef7",
              500: "#006FEE",
              600: "#005bc4",
              700: "#004493",
              800: "#002e62",
              900: "#001731",
            },

            Zinc: {
              50: "#FAFAFA",
              100: "#F4F4F5",
              200: "#E4E4E7",
              300: "#D4D4D8",
              400: "#A1A1AA",
              500: "#71717A",
              600: "#52525B",
              700: "#3F3F46",
              800: "#27272A",
              900: "#18181B",
            },
          }, // light theme colors
        },
        dark: {
          layout: {
            hoverOpacity: 0.9, //  this value is applied as opacity-[value] when the component is hovered
            boxShadow: {
              // shadow-small
              small:
                "0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
              // shadow-medium
              medium:
                "0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
              // shadow-large
              large:
                "0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
            },
            dividerWeight: "1px", // h-divider the default height applied to the divider component
            disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
            fontSize: {
              tiny: "0.75rem", // text-tiny
              small: "0.875rem", // text-small
              medium: "1rem", // text-medium
              large: "1.125rem", // text-large
            },
            lineHeight: {
              tiny: "1rem", // text-tiny
              small: "1.25rem", // text-small
              medium: "1.5rem", // text-medium
              large: "1.75rem", // text-large
            },
            radius: {
              small: "8px", // rounded-small
              medium: "12px", // rounded-medium
              large: "14px", // rounded-large
            },
            borderWidth: {
              small: "1px", // border-small
              medium: "2px", // border-medium (default)
              large: "3px", // border-large
            },
          }, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
};
