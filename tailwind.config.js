/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            fontSize: {
                base: "16px",
            },
            colors: {
                primary: "hsl(47, 88%, 63%)",
            },
            boxShadow: {
                "custom-black": "10px 10px 0px 0px rgba(0,0,0,1)",
            },
        },
    },
    plugins: [],
};
