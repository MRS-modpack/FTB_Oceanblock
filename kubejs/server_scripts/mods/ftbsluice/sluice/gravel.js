onEvent("recipes", (event) => {
    const sluice = event.recipes.ftbsluice.sluice;

    sluice(["cloth"], "#forge:gravel", [
        ["rid:iron_chunk", 0.44],
        ["minecraft:flint", 0.17],
        ["minecraft:coal", 0.14],
        ["rid:copper_chunk", 0.64],
        ["thermal:apatite", 0.24],
        ["thermal:cinnabar", 0.24],
        ["thermal:niter", 0.24],
        ["thermal:sulfur", 0.24],
        ["rid:lead_chunk", 0.07],
        ["rid:tin_chunk", 0.1],
        ["rid:fluorite_chunk", 0.1],
        ["rid:osmium_chunk", 0.06],
        ["rid:aluminum_chunk", 0.09],
    ]).max(2); //.time().mb();

    sluice(["iron"], "#forge:gravel", [
        ["rid:iron_chunk", 0.54],
        ["minecraft:flint", 0.22],
        ["minecraft:coal", 0.18],
        ["rid:copper_chunk", 0.14],
        ["thermal:apatite", 0.34],
        ["thermal:cinnabar", 0.34],
        ["thermal:niter", 0.34],
        ["thermal:sulfur", 0.34],
        ["rid:lead_chunk", 0.1],
        ["rid:tin_chunk", 0.12],
        ["rid:fluorite_chunk", 0.15],
        ["rid:osmium_chunk", 0.09],
        ["rid:aluminum_chunk", 0.13],
    ]);

    sluice(["gold"], "#forge:gravel", [
        ["rid:iron_chunk", 0.64],
        ["minecraft:coal", 0.22],
        ["rid:lapis_chunk", 0.14],
        ["rid:diamond_chunk", 0.03],
        ["rid:emerald_chunk", 0.04],
        ["rid:copper_chunk", 0.18],
        ["thermal:apatite", 0.44],
        ["thermal:cinnabar", 0.44],
        ["thermal:niter", 0.44],
        ["thermal:sulfur", 0.44],
        ["rid:lead_chunk", 0.13],
        ["rid:tin_chunk", 0.14],
        ["powah:uraninite_raw_poor", 0.13],
        ["powah:uraninite_raw", 0.1],
        ["powah:uraninite_raw_dense", 0.07],
        ["mysticalagriculture:inferium_essence", 0.2],
        ["rid:osmium_chunk", 0.13],
        ["rid:aluminum_chunk", 0.16],
        ["projectred-core:sapphire", 0.1],
        ["projectred-core:ruby", 0.12],
        ["rid:titanium_chunk", 0.11],
    ]);

    sluice(["diamond"], "#forge:gravel", [
        ["rid:iron_chunk", 0.69],
        ["minecraft:coal", 0.26],
        ["rid:lapis_chunk", 0.16],
        ["rid:diamond_chunk", 0.04],
        ["rid:emerald_chunk", 0.05],
        ["rid:copper_chunk", 0.22],
        ["thermal:apatite", 0.49],
        ["thermal:cinnabar", 0.49],
        ["thermal:niter", 0.49],
        ["thermal:sulfur", 0.49],
        ["rid:lead_chunk", 0.16],
        ["rid:tin_chunk", 0.16],
        ["powah:uraninite_raw_poor", 0.15],
        ["powah:uraninite_raw", 0.12],
        ["powah:uraninite_raw_dense", 0.09],
        ["mysticalagriculture:inferium_essence", 0.3],
        ["rid:osmium_chunk", 0.17],
        ["rid:aluminum_chunk", 0.19],
        ["projectred-core:sapphire", 0.13],
        ["projectred-core:ruby", 0.17],
        ["rid:titanium_chunk", 0.14],
    ]);
});
