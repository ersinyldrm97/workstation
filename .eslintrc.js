module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    plugins: [
        "@html-eslint",
        "sql"
        ],
    overrides: [
        {
           files: ["*.html"],
           parser: "@html-eslint/parser",
        //    extends: ["plugin:@html-eslint/recommended"],
           rules: {
            "max-len": [
                "error", {
                    "code": 120,
                    "ignoreStrings": true,
                    "ignoreTemplateLiterals": true
                }
            ],
            "sql/format": [
                2,
                {
                    "ignoreExpressions": false,
                    "ignoreInline": true,
                    "ignoreTagless": true
                }
            ],
            "sql/no-unsafe-query": [
                2,
                {
                    "allowLiteral": false
                }
            ]
           }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {

    }
}