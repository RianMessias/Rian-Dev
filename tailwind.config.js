/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        card: "0 10px 28px rgba(15, 23, 42, 0.2)",
        project: "0 20px 50px rgba(15, 23, 42, 0.35)",
        form: "0 14px 40px rgba(15, 23, 42, 0.25)",
      },
    },
  },
  plugins: [],
};
