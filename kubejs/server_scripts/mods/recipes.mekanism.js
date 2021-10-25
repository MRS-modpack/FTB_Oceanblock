// priority: 100
onEvent("recipes", (event) => {
    event.recipes.mekanism.enriching("2x thermal:nickel_dust", "#forge:clusters/nickel");
    event.recipes.mekanism.enriching("2x thermal:silver_dust", "#forge:clusters/silver");
    event.recipes.mekanism.enriching("2x immersiveengineering:dust_aluminum", "#forge:clusters/aluminum");
    event.recipes.mekanism.enriching("5x draconicevolution:draconium_dust", "#forge:ores/draconium");
    event.recipes.mekanism.enriching("2x rid:titanium_dust", "#forge:clusters/titanium");
    event.recipes.mekanism.enriching("rid:titanium_dust", "#forge:ingots/titanium");

    event.recipes.mekanism.enriching("2x rftoolsbase:dimensionalshard", "rftoolsbase:dimensionalshard_overworld");
    event.recipes.mekanism.enriching("2x rftoolsbase:dimensionalshard", "rftoolsbase:dimensionalshard_end");

    event.recipes.mekanism.crushing("thermal:silver_dust", "#forge:ingots/silver");
    event.recipes.mekanism.crushing("thermal:nickel_dust", "#forge:ingots/nickel");
    event.recipes.mekanism.crushing("thermal:electrum_dust", "#forge:ingots/electrum");
    event.recipes.mekanism.crushing("thermal:invar_dust", "#forge:ingots/invar");
    event.recipes.mekanism.crushing("thermal:constantan_dust", "#forge:ingots/constantan");
    event.recipes.mekanism.crushing("thermal:signalum_dust", "#forge:ingots/signalum");
    event.recipes.mekanism.crushing("thermal:lumium_dust", "#forge:ingots/lumium");
    event.recipes.mekanism.crushing("thermal:enderium_dust", "#forge:ingots/enderium");
    event.recipes.mekanism.crushing("draconicevolution:draconium_dust", "#forge:ingots/draconium");
    event.recipes.mekanism.crushing("draconicevolution:awakened_draconium_dust", "#forge:ingots/draconium_awakened");
    event.recipes.mekanism.crushing("3x minecraft:blaze_powder", "#forge:rods/blaze");
});
