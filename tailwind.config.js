/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            fontSize:{
                base: "16px",

            },
            colors:{
                primary:"hsl(47, 88%, 63%)"
            }
        },
    },
    plugins: [],
};
