// priority: 99
onEvent("recipes", (event) => {
    event.recipes.immersiveengineering.metal_press(
        "thermal:nickel_plate",
        "#forge:ingots/nickel",
        "immersiveengineering:mold_plate"
    );
    event.recipes.immersiveengineering.metal_press(
        "thermal:signalum_plate",
        "#forge:ingots/signalum",
        "immersiveengineering:mold_plate"
    );
    event.recipes.immersiveengineering.metal_press(
        "thermal:lumium_plate",
        "#forge:ingots/lumium",
        "immersiveengineering:mold_plate"
    );
    event.recipes.immersiveengineering.metal_press(
        "thermal:enderium_plate",
        "#forge:ingots/enderium",
        "immersiveengineering:mold_plate"
    );

    event.recipes.immersiveengineering.metal_press(
        "minecraft:blaze_rod",
        "3x minecraft:blaze_powder",
        "immersiveengineering:mold_rod"
    );

    event.recipes.immersiveengineering.crusher("5x draconicevolution:draconium_dust", "#forge:ores/draconium");
    event.recipes.immersiveengineering.crusher("2x rid:titanium_dust", "#forge:clusters/titanium");
    event.recipes.immersiveengineering.crusher("rid:titanium_dust", "#forge:ingots/titanium");
    event.recipes.immersiveengineering.crusher(
        "2x rftoolsbase:dimensionalshard",
        "rftoolsbase:dimensionalshard_overworld"
    );
    event.recipes.immersiveengineering.crusher("2x rftoolsbase:dimensionalshard", "rftoolsbase:dimensionalshard_end");
    event.recipes.immersiveengineering.crusher("draconicevolution:draconium_dust", "#forge:ingots/draconium");
    event.recipes.immersiveengineering.crusher(
        "draconicevolution:awakened_draconium_dust",
        "#forge:ingots/draconium_awakened"
    );

    const soil = [
        {
            soil: "minecraft:dirt",
            timeMulti: 1,
        },
        {
            soil: "mysticalagriculture:inferium_farmland",
            timeMulti: 0.8,
        },
        {
            soil: "mysticalagriculture:prudentium_farmland",
            timeMulti: 0.7,
        },
        {
            soil: "mysticalagriculture:tertium_farmland",
            timeMulti: 0.65,
        },
        {
            soil: "mysticalagriculture:imperium_farmland",
            timeMulti: 0.6,
        },
        {
            soil: "mysticalagriculture:supremium_farmland",
            timeMulti: 0.55,
        },
        {
            soil: "mysticalagradditions:insanium_farmland",
            timeMulti: 0.35,
        },
    ];

    const baseTime = [1200, 2400, 3600, 4000, 4500, 4600];

    const mysticalSeeds = [
        {
            level: 0,
            crops: ["air", "water", "earth", "fire", "inferium", "stone", "dirt", "wood", "ice"],
        },
        {
            level: 1,
            crops: [
                "nature",
                "dye",
                "nether",
                "coal",
                "coral",
                "honey",
                "pig",
                "chicken",
                "cow",
                "sheep",
                "squid",
                "fish",
                "slime",
                "turtle",
                "rubber",
                "silicon",
                "sulfur",
                "aluminum",
                "copper",
                "saltpeter",
                "apatite",
                "mystical_flower",
                "marble",
                "limestone",
                "basalt",
            ],
        },
        {
            level: 2,
            crops: [
                "iron",
                "nether_quartz",
                "glowstone",
                "redstone",
                "obsidian",
                "prismarine",
                "zombie",
                "skeleton",
                "creeper",
                "spider",
                "rabbit",
                "tin",
                "bronze",
                "zinc",
                "brass",
                "silver",
                "lead",
                "graphite",
                "blizz",
                "blitz",
                "basalz",
                "tinkers_bronze",
                "slimesteel",
                "pig_iron",
                "manasteel",
                "sky_stone",
                "certus_quartz",
                "quartz_enriched_iron",
            ],
        },
        {
            level: 3,
            crops: [
                "gold",
                "lapis_lazuli",
                "end",
                "experience",
                "blaze",
                "ghast",
                "enderman",
                "steel",
                "nickel",
                "constantan",
                "ruby",
                "chrome",
                "uranium",
                "titanium",
                "tungsten",
                "mithril",
                "invar",
                "electrum",
                "sapphire",
                "signalum",
                "lumium",
                "hop_graphite",
                "cobalt",
                "rose_gold",
                "elementium",
                "osmium",
                "fluorite",
                "refined_glowstone",
                "refined_obsidian",
                "fluix",
                "energized_steel",
                "blazing_crystal",
            ],
        },
        {
            level: 4,
            crops: [
                "diamond",
                "emerald",
                "netherite",
                "wither_skeleton",
                "platinum",
                "iridium",
                "enderium",
                "manyullyn",
                "queens_slime",
                "hepatizon",
                "terrasteel",
                "draconium",
                "niotic_crystal",
                "spirited_crystal",
                "uraninite",
            ],
        },
    ];

    mysticalSeeds.forEach((tier) => {
        for (let i = tier.level; i < soil.length; i++) {
            tier.crops.forEach((crop) => {
                event.recipes
                    .immersiveengineeringCloche(
                        ["mysticalagriculture:" + crop + "_essence"],
                        "mysticalagriculture:" + crop + "_seeds",
                        soil[i].soil,
                        { type: "crop", block: "mysticalagriculture:" + crop + "_crop" }
                    )
                    .time(baseTime[tier.level] * soil[i].timeMulti);
            });
        }
    });
});
