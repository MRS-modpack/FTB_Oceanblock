// priority: 100
onEvent("item.tags", (event) => {
    event.add("tconstruct:tables/station", /^tconstruct:tinker_station/g);
    event.add("tconstruct:tables/builder", /^tconstruct:part_builder/g);
    event.add("forge:rubber", "thermal:rubber");
    event.add("itemfilters:check_nbt", ["extendedcrafting:singularity", "botania:mana_tablet", "patchouli:guide_book"]);
    event.add("forge:ingots/inferium", "mysticalagriculture:inferium_ingot");
    event.add("forge:uraninite", "powah:uraninite");
    event.add("forge:dusts/ender", ["appliedenergistics2:ender_dust", "thermal:ender_pearl_dust"]);

    event.add("ftbob:oak_drawers", [
        "storagedrawers:oak_full_drawers_1",
        "storagedrawers:oak_full_drawers_2",
        "storagedrawers:oak_full_drawers_4",
        "storagedrawers:oak_half_drawers_1",
        "storagedrawers:oak_half_drawers_2",
        "storagedrawers:oak_half_drawers_4",
        "storagedrawers:oak_trim",
    ]);

    event.add("ftbob:dark_oak_drawers", [
        "storagedrawers:dark_oak_full_drawers_1",
        "storagedrawers:dark_oak_full_drawers_2",
        "storagedrawers:dark_oak_full_drawers_4",
        "storagedrawers:dark_oak_half_drawers_1",
        "storagedrawers:dark_oak_half_drawers_2",
        "storagedrawers:dark_oak_half_drawers_4",
        "storagedrawers:dark_oak_trim",
    ]);

    event.add("ftbob:jungle_drawers", [
        "storagedrawers:jungle_full_drawers_1",
        "storagedrawers:jungle_full_drawers_2",
        "storagedrawers:jungle_full_drawers_4",
        "storagedrawers:jungle_half_drawers_1",
        "storagedrawers:jungle_half_drawers_2",
        "storagedrawers:jungle_half_drawers_4",
        "storagedrawers:jungle_trim",
    ]);

    event.add("ftbob:birch_drawers", [
        "storagedrawers:birch_full_drawers_1",
        "storagedrawers:birch_full_drawers_2",
        "storagedrawers:birch_full_drawers_4",
        "storagedrawers:birch_half_drawers_1",
        "storagedrawers:birch_half_drawers_2",
        "storagedrawers:birch_half_drawers_4",
        "storagedrawers:birch_trim",
    ]);

    event.add("ftbob:acacia_drawers", [
        "storagedrawers:acacia_full_drawers_1",
        "storagedrawers:acacia_full_drawers_2",
        "storagedrawers:acacia_full_drawers_4",
        "storagedrawers:acacia_half_drawers_1",
        "storagedrawers:acacia_half_drawers_2",
        "storagedrawers:acacia_half_drawers_4",
        "storagedrawers:acacia_trim",
    ]);

    event.add("ftbob:spruce_drawers", [
        "storagedrawers:spruce_full_drawers_1",
        "storagedrawers:spruce_full_drawers_2",
        "storagedrawers:spruce_full_drawers_4",
        "storagedrawers:spruce_half_drawers_1",
        "storagedrawers:spruce_half_drawers_2",
        "storagedrawers:spruce_half_drawers_4",
        "storagedrawers:spruce_trim",
    ]);

    event.add("ftbob:common_trinkets", [
        "losttrinkets:magneto",
        "losttrinkets:slingshot",
        "losttrinkets:butchers_cleaver",
        "losttrinkets:horseshoe",
        "losttrinkets:creepo",
        "losttrinkets:piggy",
    ]);

    event.add("ftbob:uncommon_trinkets", [
        "losttrinkets:turtle_shell",
        "losttrinkets:ice_shard",
        "losttrinkets:miners_pick",
        "losttrinkets:tha_cloud",
        "losttrinkets:luck_coin",
        "losttrinkets:lunch_bag",
        "losttrinkets:rock_candy",
    ]);

    event.add("ftbob:rare_trinkets", [
        "losttrinkets:empty_amulet",
        "losttrinkets:tha_spider",
        "losttrinkets:glass_shard",
        "losttrinkets:blaze_heart",
        "losttrinkets:tha_wizard",
        "losttrinkets:tha_ghost",
        "losttrinkets:treble_hooks",
        "losttrinkets:tha_bat",
        "losttrinkets:blank_eyes",
        "losttrinkets:big_foot",
    ]);

    event.add("ftbob:master_trinkets", [
        "losttrinkets:mad_piggy",
        "losttrinkets:serpent_tooth",
        "losttrinkets:wither_nail",
        "losttrinkets:golden_melon",
        "losttrinkets:warm_void",
        "losttrinkets:book_o_enchanting",
        "losttrinkets:dragon_breath",
        "losttrinkets:tha_golem",
        "losttrinkets:fire_mind",
        "losttrinkets:sticky_mind",
        "losttrinkets:golden_swatter",
        "losttrinkets:minds_eye",
    ]);

    event.add("ftbob:elite_trinkets", [
        "losttrinkets:golden_skull",
        "losttrinkets:oxalis",
        "losttrinkets:coffee_bean",
        "losttrinkets:tea_leaf",
        "losttrinkets:ember",
        "losttrinkets:drop_spindle",
        "losttrinkets:starfish",
        "losttrinkets:dark_dagger",
        "losttrinkets:karma",
    ]);

    event.add("ftbob:epic_trinkets", [
        "losttrinkets:glory_shards",
        "losttrinkets:silver_nail",
        "losttrinkets:treasure_ring",
        "losttrinkets:mossy_belt",
        "losttrinkets:mossy_ring",
        "losttrinkets:mirror_shard",
        "losttrinkets:tha_spirit",
        "losttrinkets:pillow_of_secrets",
        "losttrinkets:dark_egg",
    ]);

    event.add("ftbob:legendary_trinkets", [
        "losttrinkets:broken_heart_5",
        "losttrinkets:broken_heart_4",
        "losttrinkets:broken_heart_3",
        "losttrinkets:broken_heart_2",
        "losttrinkets:broken_heart_1",
        "losttrinkets:golden_tooth",
        "losttrinkets:golden_horseshoe",
        "losttrinkets:ruby_heart",
        "losttrinkets:ash_gloves",
        "losttrinkets:broken_totem",
        "losttrinkets:mad_aura",
        "losttrinkets:magical_herbs",
        "losttrinkets:octopus_leg",
    ]);

    event.add("chisel:basalt", ["minecraft:basalt", "minecraft:polished_basalt"]);

    event.add("chisel:sandstone", [
        "minecraft:sandstone",
        "minecraft:chiseled_sandstone",
        "minecraft:cut_sandstone",
        "minecraft:smooth_sandstone",
    ]);
    event.add("chisel:metals/aluminum", ["immersiveengineering:storage_aluminum"]);
    event.add("chisel:metals/bronze", ["thermal:bronze_block"]);
    event.add("chisel:emerald", ["minecraft:emerald_block"]);
    event.add("chisel:redstone", ["minecraft:redstone_block"]);
});

onEvent("block.tags", (event) => {
    event.add("ftbultimine:excluded_blocks", ["cb_multipart:multipart"]);
});
