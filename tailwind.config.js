module.exports = {
  darkMode: ["selector", '[zaui-theme="dark"]'],
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      colors: {
        'color-1': "var(--color-1)",
        'color-2': "var(--color-2)"
      },
      fontFamily: {
        mono: ["Roboto Mono", "monospace"],
      },

      spacing: {
        st: "var(--safe-top)",
        sb: "var(--safe-bottom)",
      },
    },
  },
};
