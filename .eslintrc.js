module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    plugins: ["@html-eslint"],
    overrides: [
        {
           files: ["*.html"],
           parser: "@html-eslint/parser",
           extends: ["plugin:@html-eslint/recommended"],
           rules: {
            "max-len": "off"
           }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        
    }
}