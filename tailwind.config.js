const defaultTheme = require("tailwindcss/defaultTheme");
const { join } = require("path");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`;
    }
    return `hsl(var(${variableName}))`;
  };
}

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  mode: "jit",
  purge: {
    enabled: isProduction,
    content: [join(__dirname, "src/**/*.{html,ts}")],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      // create custom fonts here
      fontFamily: {
        heading: "'Raleway', 'serif'",
        mono: ["'Open Sans'", ...defaultTheme.fontFamily.mono],
      },
      // create custom text colors here
      textColor: {
        fill: withOpacity("--text-fill"),
        muted: withOpacity("--text-muted"),
        success: withOpacity("--text-success"),
        inverted: withOpacity("--text-inverted"),
      },
      placeholderColor: {
        muted: withOpacity("--text-muted"),
      },
      // create custom background colors here
      backgroundColor: {
        fill: withOpacity("--bg-fill"),
        muted: withOpacity("--bg-muted"),
        primary: withOpacity("--bg-primary"),
        footer: withOpacity("--bg-footer"),
        early: withOpacity("--bg-early"),
      },
      borderColor: {
        fill: withOpacity("--border-fill"),
        success: withOpacity("--border-success"),
        muted: withOpacity("--border-muted"),
      },
      // create custom gradient color here
      gradientColorStops: {
        hue: withOpacity("--color-fill"),
      },
    },
  },
  // custom variants
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // require("@tailwindcss/line-clamp"),
    // require("@tailwindcss/aspect-ratio"),
  ],
};
