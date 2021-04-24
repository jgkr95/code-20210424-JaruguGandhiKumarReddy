module.exports = {
    "verbose": true,
    "collectCoverage": true,
    "collectCoverageFrom":[
        "<rootDir>/**/*.js*"
    ],
    "coveragePathIgnorePatterns":[
        "<rootDir>/node_modules",
        "<rootDir>/coverage",
        "<rootDir>/package.json",
        "<rootDir>/package-lock.json",
        "<rootDir>/jest.config.js",
        "<rootDir>/.vscode",
    ]
}