const compromisos = [
    "Gobierno Digital y Modernización de la Gestión Pública",
    "Educación, Salud, Seguridad Alimentaria y Nutricional",
    "Medio Ambiente, Cambio Climático y Gestión Integral del Riesgo de Desastres",
    "Reducción de la Pobreza y Migración",
    "Inclusión Social y Poblaciones en Condiciones de Vulnerabilidad",
    "Gestión y seguimiento de Iniciativas, Tratados y Convenios Internacionales en materia de Transparencia, Anticorrupción y Rendición de Cuentas"
];

const idcompromisos = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
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

    idcompromisos.forEach((idcomp) => {
        eleventyConfig.addCollection(idcomp, function (collectionApi) {

            let collection = collectionApi.getFilteredByTags('hitos').filter(function (item) {
                return item.data.hitos.idCompromiso === idcomp;
            });

            return collection;

        });
    });

}