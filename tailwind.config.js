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
        'color-2': "var(--color-2)",
        'color-3': 'var(--color-3)',
        'color-4': 'var(--color-4)',
        'color-5': 'var(--color-5)',
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
