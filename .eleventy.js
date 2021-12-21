const compromisos = [
    "Gobierno Digital y Modernización de la Gestión Pública",
    "Migracion",
];

module.exports = function (eleventyConfig) {

    eleventyConfig.setTemplateFormats("njk");

    eleventyConfig.addPassthroughCopy('assets');

    eleventyConfig.addPassthroughCopy('layers');

    eleventyConfig.addPassthroughCopy('descargables');

    eleventyConfig.addCollection("databier", function(collectionApi) {
        return collectionApi.getFilteredByTag('databier');
    });

    compromisos.forEach((compromiso) => {
        eleventyConfig.addCollection(compromiso, function (collectionApi) {

            let collection = collectionApi.getFilteredByTags('hitos').filter(function (item) {
                return item.data.hitos.Compromiso === compromiso;
            });

            return collection;

        });
    });

}