const structuresData = java("dev.ftb.mods.ftbstructures.FTBStructuresData");

structuresData.reset();

structuresData.oceanStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/overworld/raft_01_01";
    structure.y = -1;
    structure.weight = 12;
});

structuresData.oceanStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/overworld/raft_02_01";
    structure.y = -1;
    structure.weight = 8;
});

structuresData.oceanStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/overworld/raft_03_01";
    structure.y = -1;
    structure.weight = 8;
});

structuresData.oceanStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/overworld/raft_04_01";
    structure.y = -1;
    structure.weight = 12;
});

structuresData.oceanStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/overworld/raft_05_01";
    structure.y = -1;
    structure.weight = 8;
});

structuresData.oceanStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/overworld/raft_06_01";
    structure.y = -1;
    structure.weight = 8;
});

structuresData.oceanStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/overworld/raft_07_01";
    structure.y = -1;
    structure.weight = 5;
});

structuresData.oceanStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/overworld/raft_08_01";
    structure.y = -1;
    structure.weight = 8;
});

structuresData.oceanStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/overworld/raft_09_01";
    structure.y = -1;
    structure.weight = 8;
});

structuresData.oceanStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/overworld/raft_10_01";
    structure.y = -1;
    structure.weight = 12;
});

structuresData.oceanStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/overworld/underwater/raft_11_01";
    structure.y = 1;
    structure.oceanFloor = true;
    structure.weight = 8;
});

structuresData.oceanStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/overworld/underwater/raft_12_01";
    structure.y = 1;
    structure.oceanFloor = true;
    structure.weight = 8;
});

structuresData.oceanStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/overworld/raft_13_01";
    structure.y = -1;
    structure.weight = 5;
});

structuresData.oceanStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/overworld/underwater/overworld_lone_01";
    structure.y = -14;

    structure.weight = 5;
    structure.oceanFloor = true;
});

structuresData.oceanStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/overworld/underwater/overworld_lone_02";
    structure.y = -14;

    structure.weight = 5;
    structure.oceanFloor = true;
});

structuresData.oceanStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/overworld/underwater/comp/underwater_globe";
    structure.y = -16;

    structure.weight = 3;
    structure.oceanFloor = true;
});

structuresData.oceanStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/overworld/underwater/comp/monument";
    structure.y = 0;

    structure.weight = 3;
    structure.oceanFloor = true;
});

structuresData.oceanStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/overworld/comp/turtles_waterdungeon";
    structure.y = -1;

    structure.weight = 2;
});

structuresData.oceanStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/overworld/earth_slime_island";
    structure.y = -10;

    structure.weight = 3;
});

structuresData.addPalette("barrel_01_01", (blocks) => {
    blocks.add("ftbstructures:crate", 5).add("ftbstructures:white_barrel", 2);
});

structuresData.addPalette("barrel_02_01", (blocks) => {
    blocks.add("ftbstructures:crate", 5).add("ftbstructures:white_barrel", 2);
});

structuresData.addPalette("barrel_02_02", (blocks) => {
    blocks.add("ftbstructures:crate", 5).add("ftbstructures:white_barrel", 4).add("ftbstructures:green_barrel", 2);
});

structuresData.addPalette("barrel_03_01", (blocks) => {
    blocks.add("ftbstructures:crate", 5).add("ftbstructures:white_barrel", 4).add("ftbstructures:purple_barrel", 1);
});

structuresData.addPalette("barrel_03_02", (blocks) => {
    blocks.add("ftbstructures:crate", 5).add("ftbstructures:white_barrel", 4).add("ftbstructures:green_barrel", 2);
});

structuresData.addPalette("barrel_04_01", (blocks) => {
    blocks
        .add("ftbstructures:crate", 10)
        .add("ftbstructures:white_barrel", 6)
        .add("ftbstructures:black_barrel", 3)
        .add("ftbstructures:golden_barrel", 1);
});

structuresData.addPalette("barrel_05_01", (blocks) => {
    blocks
        .add("ftbstructures:crate", 9)
        .add("ftbstructures:white_barrel", 7)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1);
});

structuresData.addPalette("barrel_05_02", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:white_barrel", 7).add("ftbstructures:green_barrel", 4);
});

structuresData.addPalette("barrel_06_01", (blocks) => {
    blocks
        .add("ftbstructures:crate", 9)
        .add("ftbstructures:white_barrel", 7)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1);
});

structuresData.addPalette("barrel_06_02", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:white_barrel", 7).add("ftbstructures:green_barrel", 4);
});

structuresData.addPalette("barrel_07_01", (blocks) => {
    blocks
        .add("ftbstructures:crate", 9)
        .add("ftbstructures:white_barrel", 7)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1);
});

structuresData.addPalette("barrel_07_02", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:white_barrel", 7).add("ftbstructures:green_barrel", 4);
});

structuresData.addPalette("barrel_07_03", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:white_barrel", 7).add("ftbstructures:green_barrel", 4);
});

structuresData.addPalette("barrel_08_01", (blocks) => {
    blocks
        .add("ftbstructures:crate", 9)
        .add("ftbstructures:white_barrel", 7)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1);
});

structuresData.addPalette("barrel_08_02", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:white_barrel", 7).add("ftbstructures:green_barrel", 4);
});

structuresData.addPalette("barrel_09_01", (blocks) => {
    blocks
        .add("ftbstructures:crate", 9)
        .add("ftbstructures:white_barrel", 7)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1);
});

structuresData.addPalette("barrel_09_02", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:white_barrel", 7).add("ftbstructures:green_barrel", 4);
});

structuresData.addPalette("barrel_10_01", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:white_barrel", 7).add("ftbstructures:green_barrel", 4);
});

structuresData.addPalette("barrel_11_01", (blocks) => {
    blocks
        .add("ftbstructures:crate", 9)
        .add("ftbstructures:blue_barrel", 7)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1)
        .add("ftbstructures:small_crate", 1);
});

structuresData.addPalette("barrel_11_02", (blocks) => {
    blocks
        .add("ftbstructures:crate", 9)
        .add("ftbstructures:blue_barrel", 7)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:small_crate", 1);
});

structuresData.addPalette("barrel_12_01", (blocks) => {
    blocks
        .add("ftbstructures:crate", 9)
        .add("ftbstructures:blue_barrel", 7)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1)
        .add("ftbstructures:small_crate", 1);
});

structuresData.addPalette("barrel_12_02", (blocks) => {
    blocks
        .add("ftbstructures:crate", 9)
        .add("ftbstructures:blue_barrel", 7)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:small_crate", 1);
});

structuresData.addPalette("barrel_13_01", (blocks) => {
    blocks
        .add("ftbstructures:crate", 9)
        .add("ftbstructures:white_barrel", 7)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1);
});

structuresData.addPalette("barrel_13_02", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:white_barrel", 7).add("ftbstructures:green_barrel", 4);
});

structuresData.addPalette("barrel_13_03", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:white_barrel", 7).add("ftbstructures:green_barrel", 4);
});

structuresData.addPalette("barrel_o01_1", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:blue_barrel", 7).add("ftbstructures:green_barrel", 3);
});

structuresData.addPalette("barrel_o01_2", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:blue_barrel", 7).add("ftbstructures:green_barrel", 3);
});

structuresData.addPalette("barrel_o01_3", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:blue_barrel", 7).add("ftbstructures:green_barrel", 3);
});

structuresData.addPalette("barrel_o01_4", (blocks) => {
    blocks
        .add("ftbstructures:blue_barrel", 5)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1);
});

structuresData.addPalette("barrel_o01_5", (blocks) => {
    blocks.add("ftbstructures:crate", 6).add("ftbstructures:blue_barrel", 7).add("ftbstructures:green_barrel", 3);
});

structuresData.addPalette("barrel_o01_6", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:blue_barrel", 7).add("ftbstructures:green_barrel", 3);
});

structuresData.addPalette("barrel_o01_7", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:blue_barrel", 7).add("ftbstructures:green_barrel", 3);
});

structuresData.addPalette("barrel_o02_1", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:blue_barrel", 7).add("ftbstructures:green_barrel", 3);
});

structuresData.addPalette("barrel_o02_2", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:blue_barrel", 7).add("ftbstructures:green_barrel", 4);
});

structuresData.addPalette("barrel_o02_3", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:blue_barrel", 7).add("ftbstructures:green_barrel", 4);
});

structuresData.addPalette("barrel_o02_4", (blocks) => {
    blocks
        .add("ftbstructures:blue_barrel", 4)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1);
});

structuresData.addPalette("barrel_o02_5", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:blue_barrel", 7).add("ftbstructures:green_barrel", 4);
});

structuresData.addPalette("barrel_oc_11", (blocks) => {
    blocks
        .add("ftbstructures:crate", 6)
        .add("ftbstructures:blue_barrel", 6)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1);
});

structuresData.addPalette("barrel_oc_01", (blocks) => {
    blocks
        .add("ftbstructures:crate", 6)
        .add("ftbstructures:blue_barrel", 6)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2);
});

structuresData.addPalette("barrel_oc_02", (blocks) => {
    blocks
        .add("ftbstructures:blue_barrel", 6)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1);
});

structuresData.addPalette("barrel_oc_03", (blocks) => {
    blocks
        .add("ftbstructures:blue_barrel", 6)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1);
});

structuresData.addPalette("barrel_oc_21", (blocks) => {
    blocks
        .add("ftbstructures:crate", 6)
        .add("ftbstructures:white_barrel", 6)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2);
});

structuresData.addPalette("barrel_oc_22", (blocks) => {
    blocks
        .add("ftbstructures:crate", 6)
        .add("ftbstructures:white_barrel", 6)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:black_barrel", 2);
});

structuresData.addPalette("barrel_oc_23", (blocks) => {
    blocks
        .add("ftbstructures:crate", 6)
        .add("ftbstructures:white_barrel", 6)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2);
});

structuresData.addPalette("barrel_oc_24", (blocks) => {
    blocks
        .add("ftbstructures:crate", 6)
        .add("ftbstructures:white_barrel", 6)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2);
});

structuresData.addPalette("barrel_oc_25", (blocks) => {
    blocks
        .add("ftbstructures:crate", 6)
        .add("ftbstructures:white_barrel", 6)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2);
});

structuresData.addPalette("barrel_oc_21", (blocks) => {
    blocks
        .add("minecraft:air", 6)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1);
});

structuresData.netherStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/nether/nether_slime_island";
    structure.y = 40;
    structure.weight = 8;
});

structuresData.netherStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/nether/nether_large_tower";
    structure.y = -1;
    structure.weight = 8;
});

structuresData.netherStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/nether/nether_small_tower";
    structure.y = -1;
    structure.weight = 2;
});

structuresData.netherStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/nether/nether_lone_01";
    structure.y = -7;
    structure.weight = 6;
});

structuresData.netherStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/nether/nether_lone_02";
    structure.y = -13;
    structure.weight = 6;
});

structuresData.netherStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/nether/nether_lone_03";
    structure.y = -11;
    structure.weight = 6;
});

structuresData.netherStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/nether/comp/nether_globe";
    structure.y = -16;
    structure.weight = 3;
});

structuresData.netherStructures.add((structure) => {
    structure.id = "ftboceanblock:ftb/nether/comp/nether_temple";
    structure.y = -1;
    structure.weight = 2;
});

structuresData.addPalette("barrel_n1_01", (blocks) => {
    blocks
        .add("ftbstructures:crate", 9)
        .add("ftbstructures:red_barrel", 7)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1)
        .add("ftbstructures:small_crate", 1);
});

structuresData.addPalette("barrel_n1_02", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:red_barrel", 7).add("ftbstructures:green_barrel", 4);
});

structuresData.addPalette("barrel_l1_01", (blocks) => {
    blocks
        .add("ftbstructures:crate", 9)
        .add("ftbstructures:red_barrel", 7)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1)
        .add("ftbstructures:small_crate", 1);
});

structuresData.addPalette("barrel_l1_02", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:red_barrel", 7).add("ftbstructures:green_barrel", 4);
});

structuresData.addPalette("barrel_l1_03", (blocks) => {
    blocks
        .add("ftbstructures:red_barrel", 7)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1)
        .add("ftbstructures:small_crate", 1);
});

structuresData.addPalette("barrel_n01_1", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:red_barrel", 7).add("ftbstructures:green_barrel", 4);
});

structuresData.addPalette("barrel_n01_2", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:red_barrel", 7).add("ftbstructures:green_barrel", 4);
});

structuresData.addPalette("barrel_n01_3", (blocks) => {
    blocks
        .add("ftbstructures:red_barrel", 7)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2)
        .add("ftbstructures:golden_barrel", 1)
        .add("ftbstructures:small_crate", 1);
});

structuresData.addPalette("barrel_n01_4", (blocks) => {
    blocks
        .add("ftbstructures:red_barrel", 7)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2)
        .add("ftbstructures:golden_barrel", 1)
        .add("ftbstructures:small_crate", 1);
});

structuresData.addPalette("barrel_n01_5", (blocks) => {
    blocks
        .add("ftbstructures:red_barrel", 7)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1)
        .add("ftbstructures:small_crate", 1);
});

structuresData.addPalette("barrel_n01_6", (blocks) => {
    blocks
        .add("ftbstructures:red_barrel", 7)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1)
        .add("ftbstructures:small_crate", 1);
});

structuresData.addPalette("barrel_n02_1", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:red_barrel", 7).add("ftbstructures:green_barrel", 4);
});

structuresData.addPalette("barrel_n02_2", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:red_barrel", 7).add("ftbstructures:green_barrel", 4);
});

structuresData.addPalette("barrel_n02_3", (blocks) => {
    blocks
        .add("ftbstructures:red_barrel", 7)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2)
        .add("ftbstructures:golden_barrel", 1)
        .add("ftbstructures:small_crate", 1);
});

structuresData.addPalette("barrel_n02_4", (blocks) => {
    blocks
        .add("ftbstructures:red_barrel", 7)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2)
        .add("ftbstructures:golden_barrel", 1)
        .add("ftbstructures:small_crate", 1);
});

structuresData.addPalette("barrel_n02_5", (blocks) => {
    blocks
        .add("ftbstructures:red_barrel", 7)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1)
        .add("ftbstructures:small_crate", 1);
});

structuresData.addPalette("barrel_n02_6", (blocks) => {
    blocks
        .add("ftbstructures:red_barrel", 7)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1)
        .add("ftbstructures:small_crate", 1);
});

structuresData.addPalette("barrel_n03_1", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:red_barrel", 7).add("ftbstructures:green_barrel", 4);
});

structuresData.addPalette("barrel_n03_2", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:red_barrel", 7).add("ftbstructures:green_barrel", 4);
});

structuresData.addPalette("barrel_n03_3", (blocks) => {
    blocks.add("ftbstructures:crate", 9).add("ftbstructures:red_barrel", 7).add("ftbstructures:green_barrel", 4);
});

structuresData.addPalette("barrel_n03_4", (blocks) => {
    blocks
        .add("ftbstructures:crate", 9)
        .add("ftbstructures:red_barrel", 7)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:black_barrel", 2)
        .add("ftbstructures:golden_barrel", 1)
        .add("ftbstructures:small_crate", 1);
});

structuresData.addPalette("barrel_n03_5", (blocks) => {
    blocks
        .add("ftbstructures:crate", 9)
        .add("ftbstructures:red_barrel", 7)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1)
        .add("ftbstructures:small_crate", 1);
});

structuresData.addPalette("barrel_nc_01", (blocks) => {
    blocks
        .add("ftbstructures:red_barrel", 7)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1)
        .add("ftbstructures:small_crate", 1);
});

structuresData.addPalette("barrel_nc_02", (blocks) => {
    blocks
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1)
        .add("ftbstructures:small_crate", 1);
});

structuresData.addPalette("barrel_nc_11", (blocks) => {
    blocks
        .add("ftbstructures:red_barrel", 7)
        .add("ftbstructures:green_barrel", 4)
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1)
        .add("ftbstructures:small_crate", 1);
});

structuresData.addPalette("barrel_nc_12", (blocks) => {
    blocks
        .add("ftbstructures:purple_barrel", 2)
        .add("ftbstructures:pulsating_crate", 1)
        .add("ftbstructures:golden_barrel", 1)
        .add("ftbstructures:small_crate", 1);
});

structuresData.setLoot("ftbstructures:crate", (loot) => {
    loot.minRolls = 1;
    loot.maxRolls = 3;

    loot.add("8x minecraft:chiseled_quartz_block", 6);
    loot.add("7x minecraft:oak_log", 6);
    loot.add("6x minecraft:cactus", 6);
    loot.add("4x minecraft:carrot", 6);
    loot.add("4x minecraft:dried_kelp_block", 6);
    loot.add("4x minecraft:glass", 6);
    loot.add("3x minecraft:vine", 6);
    loot.add("3x minecraft:mycelium", 6);
    loot.add("3x ftbjarmod:cast_iron_nugget", 6);
    loot.add("3x minecraft:apple", 6);
    loot.add("2x rid:1x_compressed_cobblestone", 6);
    loot.add("2x minecraft:lily_pad", 5);
    loot.add("2x rid:1x_compressed_sand", 5);
    loot.add("2x minecraft:chain", 5);
    loot.add("2x minecraft:hay_block", 5);
    loot.add("2x minecraft:string", 5);
    loot.add("2x rid:1x_compressed_gravel", 4);
    loot.add("1x minecraft:saddle", 3);
    loot.add("1x minecraft:name_tag", 3);
    loot.add("1x minecraft:leather_helmet", 3);
    loot.add("1x minecraft:music_disc_cat", 3);
    loot.add("1x minecraft:leather_boots", 3);
    loot.add("1x losttrinkets:creepo", 1);
    loot.add("1x minecraft:leather_leggings", 3);
    loot.add("1x better_diving:diving_mask", 3);
    loot.add("1x minecraft:music_disc_13", 3);
    loot.add("1x better_diving:fins", 3);
    loot.add("1x tconstruct:drowned_head", 3);
    loot.add("1x better_diving:wetsuit_leggings", 3);
    loot.add("1x botania:cosmetic_groucho_glasses", 3);
    loot.add("1x minecraft:leather_chestplate", 3);
    loot.add("1x better_diving:standard_o2_tank", 3);
    loot.add("1x minecraft:leather_horse_armor", 3);
    loot.add("1x minecraft:golden_chestplate", 3);
    loot.add("1x minecraft:music_disc_blocks", 3);
    loot.add("1x losttrinkets:piggy", 1);
    loot.add("1x losttrinkets:horseshoe", 1);
    loot.add("1x minecraft:enchanted_golden_apple", 3);
    loot.add("1x minecraft:lead", 3);
    loot.add("1x miniutilities:wooden_spikes", 3);
    loot.add("1x minecraft:pumpkin", 3);
});

structuresData.setLoot("ftbstructures:white_barrel", (loot) => {
    loot.minRolls = 1;
    loot.maxRolls = 3;

    loot.add("1x minecraft:cobblestone", 6);
    loot.add("1x minecraft:white_bed", 6);
    loot.add("1x minecraft:blue_bed", 6);
    loot.add("1x minecraft:red_bed", 6);
    loot.add("3x minecraft:leather", 6);
    loot.add("1x minecraft:chainmail_helmet", 6);
    loot.add("1x minecraft:chainmail_chestplate", 6);
    loot.add("1x minecraft:chainmail_leggings", 6);
    loot.add("1x minecraft:chainmail_boots", 6);
    loot.add("1x better_diving:diving_mask", 1);
    loot.add("1x better_diving:standard_o2_tank", 3);
    loot.add("2x ftbjarmod:cast_iron_ingot", 3);
    loot.add("3x minecraft:lily_pad", 6);
    loot.add("1x minecraft:golden_helmet", 5);
    loot.add("5x minecraft:glass", 5);
    loot.add("1x minecraft:turtle_egg", 4);
    loot.add("1x minecraft:iron_horse_armor", 4);
    loot.add("4x tconstruct:pattern", 5);
    loot.add("1x losttrinkets:magneto", 1);
    loot.add("1x losttrinkets:slingshot", 1);
    loot.add("8x powah:dielectric_paste", 3);
    loot.add("4x mysticalagriculture:mystical_fertilizer", 3);
    loot.add("1x minecraft:music_disc_chirp", 5);
    loot.add("1x minecraft:music_disc_far", 5);
    loot.add("1x minecraft:music_disc_mall", 5);
    loot.add("1x tconstruct:sky_slime_sapling", 4);
    loot.add("2x minecraft:iron_ingot", 4);
    loot.add("1x industrialforegoing:straw", 4);
    loot.add("6x chisel:carpet/purple/llama", 4);
    loot.add("3x minecraft:iron_bars", 4);
    loot.add("2x minecraft:melon", 4);
    loot.add("1x better_diving:wetsuit_leggings", 3);
    loot.add("1x better_diving:fins", 3);
    loot.add("16x minecraft:stone", 5);
    loot.add("1x obsidianboat:obsidianboat", 5);
    loot.add("8x minecraft:chiseled_quartz_block", 4);
});

structuresData.setLoot("ftbstructures:blue_barrel", (loot) => {
    loot.minRolls = 1;
    loot.maxRolls = 3;

    loot.add("32x minecraft:gravel", 2);
    loot.add("16x chisel:carpet/gray/llama", 2);
    loot.add("5x minecraft:prismarine_shard", 2);
    loot.add("5x minecraft:prismarine_crystals", 2);
    loot.add("4x storagedrawers:upgrade_template", 2);
    loot.add("2x minecraft:brown_mushroom", 2);
    loot.add("2x minecraft:iron_ingot", 2);
    loot.add("2x botania:terrasteel_ingot", 2);
    loot.add("2x minecraft:obsidian", 2);
    loot.add("2x minecraft:slime_ball", 2);
    loot.add("2x minecraft:red_mushroom", 2);
    loot.add("2x farmersdelight:bacon", 1);
    loot.add("2x minecraft:campfire", 1);
    loot.add("1x losttrinkets:dragon_breath", 1);
    loot.add("1x mysticalagriculture:inferium_watering_can", 1);
    loot.add("1x mysticalagriculture:prudentium_shovel", 1);
    loot.add("1x ftbsluice:gold_hammer", 1);
    loot.add("1x minecraft:music_disc_mellohi", 1);
    loot.add("1x cfm:cyan_cooler", 1);
    loot.add("1x minecraft:bell", 1);
    loot.add("1x minecraft:music_disc_strad", 1);
    loot.add("1x losttrinkets:tha_cloud", 1);
    loot.add("1x losttrinkets:luck_coin", 1);
    loot.add("1x minecraft:music_disc_stal", 1);
    loot.add("1x tconstruct:earth_slime_sapling", 1);
    loot.add("1x obsidianboat:obsidianboat", 1);
    loot.add("1x losttrinkets:treasure_bag", 1);
    loot.add("1x ironchest:iron_chest", 1);
    loot.add("1x minecraft:minecart", 1);
});

structuresData.setLoot("ftbstructures:red_barrel", (loot) => {
    loot.minRolls = 1;
    loot.maxRolls = 3;

    loot.add("32x minecraft:netherrack", 2);
    loot.add("16x minecraft:basalt", 2);
    loot.add("16x minecraft:soul_sand", 2);
    loot.add("14x minecraft:crying_obsidian", 2);
    loot.add("12x tconstruct:nether_grout", 2);
    loot.add("12x minecraft:chiseled_quartz_block", 2);
    loot.add("8x minecraft:stone", 2);
    loot.add("8x minecraft:sponge", 2);
    loot.add("7x minecraft:nether_wart", 2);
    loot.add("6x powah:steel_energized", 1);
    loot.add("4x mekanism:advanced_control_circuit", 1);
    loot.add("4x minecraft:quartz", 1);
    loot.add("4x fluxnetworks:flux_core", 1);
    loot.add("3x minecraft:chain", 1);
    loot.add("3x minecraft:crimson_fungus", 1);
    loot.add("3x minecraft:soul_campfire", 1);
    loot.add("3x minecraft:warped_fungus", 1);
    loot.add("2x minecraft:crimson_nylium", 1);
    loot.add("2x miniutilities:experience_pearl_3x", 1);
    loot.add("2x minecraft:soul_lantern", 1);
    loot.add("2x minecraft:crimson_stem", 1);
    loot.add("2x minecraft:gold_ingot", 1);
    loot.add("2x minecraft:lantern", 1);
    loot.add("2x minecraft:warped_nylium", 1);
    loot.add("2x minecraft:blaze_rod", 1);
    loot.add("1x tconstruct:flint_and_bronze", 1);
    loot.add("1x minecraft:golden_horse_armor", 1);
    loot.add("1x miniutilities:flame_lily_seeds", 1);
    loot.add("1x losttrinkets:mad_piggy", 1);
    loot.add("1x minecraft:music_disc_pigstep", 3);
    loot.add("1x minecraft:jukebox", 1);
    loot.add("1x losttrinkets:ice_shard", 1);
    loot.add("1x losttrinkets:treasure_bag", 1);
    loot.add("1x losttrinkets:tha_golem", 1);
    loot.add("1x losttrinkets:golden_swatter", 1);
    loot.add("1x farmersdelight:iron_knife", 1);
});

structuresData.setLoot("ftbstructures:green_barrel", (loot) => {
    loot.minRolls = 1;
    loot.maxRolls = 3;

    loot.add("12x minecraft:white_wool", 2);
    loot.add("13x minecraft:chiseled_quartz_block", 2);
    loot.add("11x minecraft:stone", 2);
    loot.add("8x minecraft:sponge", 2);
    loot.add("4x mekanism:basic_control_circuit", 1);
    loot.add("4x integrateddynamics:menril_log", 1);
    loot.add("3x farmersdelight:fruit_salad", 1);
    loot.add("2x thermal:rf_coil", 1);
    loot.add("2x rid:1x_compressed_cobblestone", 2);
    loot.add("2x rid:1x_compressed_sand", 2);
    loot.add("2x botania:manasteel_ingot", 1);
    loot.add("2x storagedrawers:oak_full_drawers_1", 1);
    loot.add("2x krate:krate_small", 2);
    loot.add("2x botania:mana_diamond", 2);
    loot.add("2x projectred-illumination:white_fixture_light", 1);
    loot.add("2x rid:1x_compressed_gravel", 2);
    loot.add("1x thermal:spice_cake", 1);
    loot.add("1x thermal:eggplant_block", 1);
    loot.add("1x trashcans:item_trash_can", 1);
    loot.add("1x cfm:fridge_dark", 3);
    loot.add(Item.of("tconstruct:small_axe_head", '{Material:"tconstruct:silver"}'), 1);
    loot.add("1x losttrinkets:lunch_bag", 1);
    loot.add("1x mysticalagriculture:infusion_crystal", 1);
    loot.add("1x botania:hourglass", 1);
    loot.add("1x miniutilities:experience_pearl_1x", 1);
    loot.add("1x losttrinkets:butchers_cleaver", 1);
    loot.add("1x cfm:fridge_light", 3);
    loot.add("1x miniutilities:iron_spikes", 1);
    loot.add("1x tconstruct:earth_slime_boots", 1);
    loot.add("1x losttrinkets:rock_candy", 1);
    loot.add("1x tconstruct:ender_slime_sapling", 1);
    loot.add("1x trashcans:liquid_trash_can", 1);
    loot.add("1x tconstruct:earth_slime_sling", 1);
    loot.add("1x minecraft:music_disc_ward", 3);
    loot.add("1x cfm:post_box", 3);
    loot.add("1x mekanismtools:iron_paxel", 1);
    loot.add("1x losttrinkets:miners_pick", 1);
    loot.add("1x chisel:iron_chisel", 1);
    loot.add("1x chiselsandbits:chisel_iron", 1);
    loot.add("1x thermal:strawberry_block", 1);
    loot.add("1x pipez:wrench", 1);
    loot.add("1x trashcans:energy_trash_can", 1);
    loot.add("1x thermal:flux_magnet", 1);
    loot.add("1x minecraft:music_disc_wait", 3);
    loot.add("1x losttrinkets:treasure_bag", 2);
    loot.add(Item.of("tconstruct:pickaxe_head", '{Material:"tconstruct:iron"}'), 1);
});

structuresData.setLoot("ftbstructures:purple_barrel", (loot) => {
    loot.minRolls = 1;
    loot.maxRolls = 2;

    loot.add("1x minecraft:diamond_horse_armor", 2);
    loot.add("1x losttrinkets:turtle_shell", 1);
    loot.add("1x losttrinkets:warm_void", 1);
    loot.add("1x losttrinkets:book_o_enchanting", 1);
    loot.add("1x losttrinkets:sticky_mind", 1);
    loot.add("1x losttrinkets:minds_eye", 1);
    loot.add("1x losttrinkets:serpent_tooth", 1);
    loot.add("1x losttrinkets:wither_nail", 1);
    loot.add("1x losttrinkets:fire_mind", 1);
    loot.add("1x losttrinkets:broken_heart_4", 1);
    loot.add("1x losttrinkets:broken_heart_5", 1);
    loot.add("1x losttrinkets:broken_heart_3", 1);
    loot.add("1x losttrinkets:broken_heart_2", 1);
    loot.add("1x losttrinkets:broken_heart_1", 1);
    loot.add("1x storagedrawers:emerald_storage_upgrade", 1);
    loot.add("1x mekanismtools:diamond_paxel", 1);
    loot.add("1x botanypots:hopper_botany_pot", 1);
    loot.add("1x notenoughwands:capturing_wand", 1);
    loot.add("1x enderstorage:ender_pouch", 1);
    loot.add("1x ftbsluice:iron_hammer", 1);
    loot.add("32x minecraft:golden_carrot", 2);
    loot.add("1x simplybackpacks:rarebackpack", 1);
    loot.add("2x immersiveengineering:floodlight", 1);
    loot.add("1x betterendforge:guidebook", 3);
    loot.add("1x losttrinkets:treasure_bag", 1);
    loot.add("4x glassential:glass_light", 2);
    loot.add("4x glassential:glass_dark", 2);
    loot.add("4x glassential:glass_ethereal_reverse", 2);
    loot.add("8x minecraft:crying_obsidian", 2);
    loot.add("8x minecraft:sponge", 2);
    loot.add("19x minecraft:chiseled_quartz_block", 2);
    loot.add("32x minecraft:white_wool", 2);
    loot.add("21x minecraft:stone", 2);
    loot.add("16x minecraft:gravel", 2);
});

structuresData.setLoot("ftbstructures:golden_barrel", (loot) => {
    loot.minRolls = 1;
    loot.maxRolls = 2;

    loot.add("64x minecraft:cobblestone", 2);
    loot.add("32x minecraft:spruce_log", 2);
    loot.add("16x minecraft:gravel", 2);
    loot.add("8x minecraft:crying_obsidian", 2);
    loot.add("3x minecraft:gold_ingot", 2);
    loot.add("3x draconicevolution:draconium_ingot", 1);
    loot.add("3x tconstruct:netherite_nugget", 1);
    loot.add("2x ftbsluice:sluice_speed_upgrade", 1);
    loot.add("2x ftbsluice:sluice_fortune_upgrade", 1);
    loot.add("2x enderstorage:ender_tank", 1);
    loot.add("2x ftbsluice:sluice_consumption_upgrade", 1);
    loot.add(Item.of("minecraft:enchanted_book").enchant("minecraft:projectile_protection", 4), 1);
    loot.add(Item.of("minecraft:enchanted_book").enchant("minecraft:protection", 4), 1);
    loot.add(Item.of("minecraft:enchanted_book").enchant("minecraft:mending", 1), 1);
    loot.add("1x losttrinkets:starfish", 1);
    loot.add("1x tconstruct:debris_nugget", 1);
    loot.add("1x losttrinkets:ruby_heart", 1);
    loot.add("1x losttrinkets:mirror_shard", 1);
    loot.add("1x trashcans:ultimate_trash_can", 1);
    loot.add("1x losttrinkets:karma", 1);
});

structuresData.setLoot("ftbstructures:small_crate", (loot) => {
    loot.minRolls = 1;
    loot.maxRolls = 2;

    loot.add("64x minecraft:clay_ball", 2);
    loot.add("3x tconstruct:netherite_nugget", 1);
    loot.add("3x minecraft:iron_ingot", 2);
    loot.add("2x minecraft:ender_pearl", 2);
    loot.add("1x losttrinkets:silver_nail", 1);
    loot.add("1x losttrinkets:golden_tooth", 1);
    loot.add("1x losttrinkets:drop_spindle", 1);
    loot.add("1x losttrinkets:octopus_leg", 1);
    loot.add("1x minecraft:diamond", 1);
    loot.add("1x losttrinkets:treasure_ring", 1);
    loot.add("1x losttrinkets:golden_horseshoe", 1);
    loot.add("2x draconicevolution:wyvern_energy_core", 1);
    loot.add("1x minecraft:beacon", 1);
    loot.add("2x enderstorage:ender_chest", 1);
    loot.add("1x simplybackpacks:epicbackpack", 1);
    loot.add("24x betterendforge:glowing_pillar_luminophor", 1);
    loot.add("1x botania:pinkinator", 1);
    loot.add("1x itemcollectors:advanced_collector", 1);
    loot.add("1x cobblefordays:tier_3", 1);
    loot.add("24x minecraft:sponge", 2);
    loot.add("24x minecraft:crying_obsidian", 2);
    loot.add("32x minecraft:sandstone", 2);
    loot.add(Item.of("minecraft:enchanted_book").enchant("minecraft:feather_falling", 4), 1);
    loot.add(Item.of("minecraft:enchanted_book").enchant("minecraft:blast_protection", 4), 1);
    loot.add(Item.of("minecraft:enchanted_book").enchant("minecraft:fire_protection", 4), 1);
});

structuresData.setLoot("ftbstructures:pulsating_crate", (loot) => {
    loot.minRolls = 1;
    loot.maxRolls = 1;

    loot.add("16x minecraft:crying_obsidian", 1);
    loot.add("6x minecraft:ender_pearl", 1);
    loot.add("4x minecraft:end_rod", 1);
    loot.add("6x minecraft:shulker_shell", 1);
    loot.add("16x minecraft:blaze_rod", 1);
    loot.add("1x losttrinkets:broken_totem", 1);
    loot.add("4x minecraft:ancient_debris", 1);
    loot.add("1x minecraft:wither_rose", 1);
    loot.add("2x botania:life_essence", 1);
    loot.add("8x minecraft:sponge", 1);
    loot.add("1x minecraft:nether_star", 1);
});

structuresData.setLoot("ftbstructures:black_barrel", (loot) => {
    loot.minRolls = 1;
    loot.maxRolls = 3;

    loot.add("1x minecraft:sea_pickle", 1);
});
