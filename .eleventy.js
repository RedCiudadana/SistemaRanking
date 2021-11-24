module.exports = function (eleventyConfig) {

    eleventyConfig.setTemplateFormats("njk");

    eleventyConfig.addPassthroughCopy('assets');

    eleventyConfig.addPassthroughCopy('layers');

    eleventyConfig.addCollection("databier", function(collectionApi) {
        return collectionApi.getFilteredByTag('databier');
    });



}