module.exports = function (eleventyConfig) {

    eleventyConfig.setTemplateFormats("njk");

    eleventyConfig.addPassthroughCopy('assets');

    /*eleventyConfig.addCollection("proyectos", function(collectionApi) {
        return collectionApi.getFilteredByTag('proyectos');
    });*/



}