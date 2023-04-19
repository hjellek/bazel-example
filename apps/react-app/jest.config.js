module.exports = {
    "moduleNameMapper": {
        // "\\.(css|less|scss|sass)$": "identity-obj-proxy"
        '\\.(css|less|scss)$': '<rootDir>/src/__mocks__/styleMock.js',
    },
    transformIgnorePatterns: ["<rootDir>/node_modules/.pnpm/(?!react-lib)"],
    testEnvironment: "jsdom"
}
