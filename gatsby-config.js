// All of the same usage patterns for `useGatsbyConfig` are valid for `useGatsbyNode`
// as well

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "whack-a-mole",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
  ],
};
