export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: "#f0fdfa",
                    100: "#ccfbf1",
                    200: "#99f6e4",
                    300: "#5eead4",
                    400: "#2dd4bf",
                    500: "#14b8a6",
                    600: "#0d9488",
                    700: "#0f766e",
                    800: "#115e59",
                    900: "#134e4a"
                },
                lime: {
                    400: "#a3e635",
                    500: "#84cc16"
                },
                ink: {
                    900: "#0a0f1a",
                    800: "#111827",
                    700: "#1f2937"
                }
            },
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
                display: [
                    '"Space Grotesk"',
                    "ui-sans-serif",
                    "system-ui",
                    "sans-serif"
                ]
            },
            boxShadow: {
                glow: "0 0 40px -10px rgba(20, 184, 166, 0.45)",
                card: "0 10px 30px -12px rgba(10, 15, 26, 0.15)"
            }
        }
    },
    plugins: []
};
