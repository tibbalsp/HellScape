const levelOne = {
    music: "./assets/sounds/music/intro.mp3",
    background: ["./assets/Overworld_Level_1_blue.png","./assets/Overworld_Level_1.png"],
    foreground: ["./assets/Level1ParallaxFlowers.png",],
    pillars: [],
    worldSize: 2,
    spawnPoint: [350 , 0],
    groundType: GrassGround,
    wallType: GrassWall,
    ground: [
        {x:0, y:params.canvasHeight-32+768, size: 300 }, // base flat ground
        {x:32*10, y:params.canvasHeight-32*1+768, size: 8 },
        {x:32*10, y:params.canvasHeight-32*5+768, size: 8 },
        {x:32*10, y:params.canvasHeight-32*9+768, size: 8 },
        {x:32*100, y:params.canvasHeight-32*13+768, size: 8 },
        {x:32*10, y:32*1+768, size: 8 },
        {x:32*12, y:32*5+768, size: 8 },
        {x:32*14, y:32*9+768, size: 8 },
        {x:32*16, y:32*13+768, size: 8 },
        {x:32*10, y:32*1+450, size: 8 },
        {x:32*12, y:32*5+450, size: 8 },
        {x:32*14, y:32*9+450, size: 8 },
        {x:32*16, y:32*13+450, size: 8 },

      
        // added for MVD
        {x:32*46, y:32*13, size: 8 },
        {x:32*72, y:32*5, size: 8 },
        {x:32*815, y:32*9, size: 8 },
        {x:32*95, y:32*12, size: 8 },
        {x:32*105, y:32*27, size: 2 },
        {x:32*120, y:32*35, size: 8 },
        {x:32*135, y:32*18, size: 6 },
        {x:32*138, y:32*29, size: 8 },
        {x:32*40, y:32*40, size: 2 },
        {x:32*24, y:32*39, size: 8 },
        {x:32*36, y:32*43, size: 8 },
        {x:32*49, y:32*33, size: 8 },
        {x:32*79, y:32*36, size: 5 },
        {x:32*85, y:32*9, size: 8 },
        {x:32*95, y:32*12, size: 8 },
        {x:32*105, y:32*33, size: 8 },
        {x:32*120, y:32*25, size: 3 },
        {x:32*139, y:32*39, size: 8 },
        {x:32*140, y:32*22, size: 8 },

        //second half. just multiplied the x by 2
        {x:32*46*2, y:32*13, size: 8 },
        {x:32*72*2, y:32*5, size: 8 },
        {x:32*815*2, y:32*9, size: 8 },
        {x:32*95*2, y:32*12, size: 8 },
        {x:32*105*2, y:32*27, size: 2 },
        {x:32*120*2, y:32*35, size: 8 },
        {x:32*135*2, y:32*18, size: 6 },
        {x:32*128*2, y:32*29, size: 8 },
        {x:32*40*2, y:32*40, size: 12 },
        {x:32*24*2, y:32*39, size: 8 },
        {x:32*36*2, y:32*43, size: 8 },
        {x:32*49*2, y:32*33, size: 8 },
        {x:32*79*2, y:32*36, size: 5 },
        {x:32*85*2, y:32*9, size: 8 },
        {x:32*95*2, y:32*12, size: 8 },
        {x:32*105*2, y:32*33, size: 8 },
        {x:32*120*2, y:32*25, size: 3 },
        {x:32*139*2, y:32*39, size: 8 },
        {x:32*140*2, y:32*22, size: 8 },

        

    ],
    wall:[{x:-32,y:0,size: 47}],

    targetblock: [{x: 9500, y: params.canvasHeight*2-32*4+600, xScale: 30 , yScale: 1},
        {x: 32*300, y:params.canvasHeight*2 + 600, xScale: 1 , yScale: 1}
    ],

    pitglow: [{x: 9600, y: params.canvasHeight*2-32*4, xScale: 1 , yScale: 1},
        {x: 32*300, y:params.canvasHeight*2 + 600, xScale: 1 , yScale: 1}], // just put it on the block for now.

    enemies: [
        {name: "Uoma" , x: 1200, y:550},
        {name: "Uoma" , x: 1400, y:450},
        {name: "Uoma" , x: 1600, y:350},
        {name: "Uoma" , x: 1200*2, y:1250},
        {name: "Uoma" , x: 1400*3, y:1250},
        {name: "Uoma" , x: 1600*4, y:1250},
        {name: "Uoma" , x: 1800, y:1250},

        {name: "Uoma" , x: 1700*2, y:950},
        {name: "Uoma" , x: 1800*3, y:850},
        {name: "Uoma" , x: 1900*4, y:750},

        {name: "Uoma" , x: 2400, y:1250},
        {name: "Uoma" , x: 1900, y:1190},
        {name: "Uoma" , x: 1200, y:1110},
        {name: "Uoma" , x: 1800, y:1250},

        {name: "Uoma" , x: 5400, y:1250},
        {name: "Uoma" , x: 4900, y:1190},
        {name: "Uoma" , x: 4200, y:1110},
        {name: "Uoma" , x: 4800, y:1250},

        {name: "Uoma" , x: 6400, y:1250},
        {name: "Uoma" , x: 5900, y:1190},
        {name: "Uoma" , x: 5200, y:1110},
        {name: "Uoma" , x: 5800, y:1250},

        {name: "Uoma" , x: 9400, y:1250},
        {name: "Uoma" , x: 10900, y:1190},
        {name: "Uoma" , x: 10200, y:1110},
        {name: "Uoma" , x: 10800, y:1250},

        
        {name: "Uoma" , x: 11000, y:1350},
        {name: "Uoma" , x: 11540, y:1190},
        {name: "Uoma" , x: 12040, y:1010},
        {name: "Uoma" , x: 12500, y:1250},
        {name: "Uoma" , x: 11070, y:250},
        {name: "Uoma" , x: 11500, y:180},
        {name: "Uoma" , x: 12070, y:110},
        {name: "Uoma" , x: 12500, y:290},

        {name: "Uoma" , x: 5000, y:1350},
        {name: "Uoma" , x: 9000, y:1350},
        {name: "Uoma" , x: 10000, y:1350},
        {name: "Uoma" , x: 3000, y:1350},
    ],
    powerUps:  [
        {name: "Lightseed", x: 299, y:402},
        {name: "Lightseed", x: 811, y:1404},
        {name: "Lightseed", x: 811, y:1404},
        {name: "Lightseed", x: 2500, y:500},
        {name: "Lightseed", x: 7000, y:60},
    ],

}
const levelTwo = {
    music: "./assets/sounds/music/main-1-quiet.mp3",
    background: ["./assets/Underground_Level_2.png","./assets/Underground_Level_2.png"],
    foreground: [], //["./assets/Level2ParallaxBoulders.png",], no longer works now that floor is gone.
    pillars: [],
    worldSize: 2,
    spawnPoint: [350 , 1200],
    groundType: UnderGround,
    wallType: UnderWall,
    ground: [
        //Starting
        {x:32*9, y:47*32, size: 10 }, 
        {x:32*95, y:47*32, size: 1 }, 
        {x:32*100, y:47*32, size: 1 }, 
        {x:32*105, y:47*32, size: 1 }, 
        {x:32*110, y:47*32, size: 1 }, 
        {x:32*115, y:47*32, size: 1 }, 
        {x:32*120, y:47*32, size: 1 }, 
        {x:32*125, y:47*32, size: 1 }, 
        {x:32*130, y:47*32, size: 1 },         
        {x:32*135, y:47*32, size: 1 }, 
        {x:32*140, y:47*32, size: 1 }, 
        {x:32*145, y:47*32, size: 1 }, 
        {x:32*150, y:47*32, size: 1 },         
        {x:32*155, y:47*32, size: 1 }, 
        {x:32*160, y:47*32, size: 240 }, 
      
        {x:32*20, y:44*32, size: 10 }, 
        {x:32*34, y:42*32, size: 10 }, 
        {x:32*48, y:40*32, size: 9 }, 
        {x:32*60, y:39*32, size: 14 },
        {x:32*77, y:43*32, size: 6 }, 
        {x:32*86, y:45*32, size: 4 }, 
        {x:32*73, y:36*32, size: 4 }, 
        {x:32*78, y:34*32, size: 8 }, 
        {x:32*70, y:31*32, size: 7 }, 
        {x:32*65, y:29*32, size: 4 }, 
        {x:32*9, y:26*32, size: 105 }, 

        //Stairs down
        {x:32*117, y:28*32, size: 3 }, 
        {x:32*120, y:29*32, size: 3 }, 
        {x:32*123, y:30*32, size: 3 }, 
        {x:32*126, y:31*32, size: 4 }, 
        {x:32*130, y:32*32, size: 4 }, 
        {x:32*134, y:33*32, size: 4 }, 
        {x:32*138, y:34*32, size: 4 }, 
        {x:32*142, y:35*32, size: 4 }, 
        {x:32*146, y:36*32, size: 4 }, 
        {x:32*150, y:37*32, size: 4 }, 
        {x:32*154, y:38*32, size: 4 }, 
        {x:32*158, y:39*32, size: 4 }, 

        //Straigt away
        {x:32*221, y:26*32, size: 89 }, 
        {x:32*315, y:26*32, size: 1 }, 
        {x:32*321, y:26*32, size: 18 }, 
        {x:32*345, y:26*32, size: 16 },
        {x:32*399, y:40*32, size: 21 },
        {x:32*393, y:46*32, size: 1 }, 
        {x:32*394, y:45*32, size: 1 }, 
        {x:32*395, y:44*32, size: 1 }, 
        {x:32*396, y:43*32, size: 1 }, 
        {x:32*397, y:42*32, size: 1 }, 
        {x:32*398, y:41*32, size: 1 }, 

        //Bottom right corner
        {x:32*414, y:37*32, size: 4 }, 
        {x:32*409, y:35*32, size: 4 }, 
        {x:32*415, y:34*32, size: 4 }, 
        {x:32*404, y:33*32, size: 4 }, 
        {x:32*404, y:30*32, size: 4 }, 
        {x:32*411, y:28*32, size: 5 }, 
        {x:32*414, y:23*32, size: 5 }, 
        {x:32*407, y:20*32, size: 4 }, 
        {x:32*404, y:18*32, size: 4 }, 
        {x:32*401, y:16*32, size: 4 }, 
        {x:32*398, y:14*32, size: 4 }, 
        {x:32*395, y:12*32, size: 4 }, 
        {x:32*398, y:10*32, size: 4 }, 
        {x:32*401, y:8*32, size: 4 }, 
        {x:32*408, y:7*32, size: 10 }, 

        //Top Right
        {x:32*16, y:7*32, size: 4 }, 
        {x:32*22, y:6*32, size: 3 }, 
        {x:32*27, y:3*32, size: 3 }, 
        {x:32*28, y:7*32, size: 5 }, 
        {x:32*33, y:2*32, size: 2 }, 
        {x:32*37, y:5*32, size: 3 }, 
        {x:32*40, y:7*32, size: 5 }, 
        {x:32*46, y:9*32, size: 4 }, 
        {x:32*51, y:7*32, size: 3 }, 
        {x:32*55, y:4*32, size: 3 }, 
        {x:32*59, y:6*32, size: 3 }, 
        {x:32*66, y:8*32, size: 4 }, 
        {x:32*73, y:7*32, size: 5 }, 
        {x:32*85, y:7*32, size: 4 }, 
        {x:32*97, y:7*32, size: 5 }, 
        {x:32*103, y:3*32, size: 5 }, 
        {x:32*113, y:0*32, size: 7 }, 
        {x:32*127, y:7*32, size: 6 }, 
        {x:32*138, y:7*32, size: 6 }, 
        {x:32*150, y:7*32, size: 6 }, 
        {x:32*162, y:7*32, size: 6 }, 
        {x:32*175, y:7*32, size: 8 }, 
        {x:32*187, y:7*32, size: 7 }, 
        {x:32*197, y:7*32, size: 1 }, 
        {x:32*201, y:7*32, size: 1 }, 
        {x:32*205, y:7*32, size: 1 }, 
        {x:32*209, y:7*32, size: 1 }, 
        {x:32*214, y:7*32, size: 1 }, 
        {x:32*217, y:7*32, size: 51 }, 

        //Top middle to right
        {x:32*270, y:4*32, size: 5 }, 
        {x:32*270, y:12*32, size: 5 }, 
        {x:32*272, y:8*32, size: 1 }, 
        {x:32*276, y:7*32, size: 9 }, 
        {x:32*289, y:5*32, size: 1 }, 
        {x:32*293, y:7*32, size: 11 }, 
        {x:32*309, y:9*32, size: 1 }, 
        {x:32*313, y:7*32, size: 7 }, 
        {x:32*323, y:9*32, size: 2 }, 
        {x:32*328, y:7*32, size: 5 }, 
        {x:32*336, y:5*32, size: 1 }, 
        {x:32*341, y:7*32, size: 7 }, 
        {x:32*350, y:5*32, size: 2 }, 
        {x:32*354, y:7*32, size: 7 }, 
        {x:32*364, y:5*32, size: 1 }, 
        {x:32*368, y:7*32, size: 5 }, 
        {x:32*374, y:5*32, size: 2 }, 
        {x:32*377, y:7*32, size: 4 }, 
        {x:32*382, y:5*32, size: 3 }, 
        {x:32*386, y:7*32, size: 4 }, 
        {x:32*362, y:23*32, size: 5 }, 
        {x:32*369, y:19*32, size: 5 }, 
        {x:32*375, y:16*32, size: 4 }, 
        {x:32*381, y:12*32, size: 4 }, 



        {x:32*398, y:7*32, size: 1 }, 

    // easily can add a "platform" or "obstacle" option here too
    ],
    wall:[{x:0, y:0, size: 70},
        {x:8*32, y:8*32, size: 70},
        {x:9*32, y:7*32, size: 2},
        {x:10*32, y:6*32, size: 2},
        {x:11*32, y:4*32, size: 3},
        {x:399*32,y:40*32,size: 7},
        {x:420*32,y:0,size: 41},
        {x:221*32,y:8*32 ,size: 18}],

    targetblock: [{x: 0, y: 65*32, xScale: 4.5 , yScale: 1}],
    pitglow: [{x: 64, y: 47*32, xScale: 1 , yScale: 1}],
    enemies: [{name: "Heavy_Sentry" , x: 800, y:400},
        {name: "Uoma" , x: 1200, y:550},
        {name: "Uoma" , x: 1400, y:450},
        {name: "Uoma" , x: 1600, y:350},
        {name: "Uoma" , x: 1200*2, y:1250},
        {name: "Uoma" , x: 1700*2, y:950},
        {name: "Uoma" , x: 1800*3, y:850},
        {name: "Uoma" , x: 1900*4, y:750},
        {name: "Uoma" , x: 6400, y:1250},
        {name: "Uoma" , x: 5900, y:1190},
        {name: "Uoma" , x: 5200, y:1110},
        {name: "Uoma" , x: 5800, y:1250},
        {name: "Uoma" , x: 11000, y:1350},
        {name: "Uoma" , x: 11540, y:1190},
        {name: "Uoma" , x: 12040, y:1010},
        {name: "Uoma" , x: 12500, y:1250},
        {name: "Uoma" , x: 11070, y:250},
        {name: "Uoma" , x: 11500, y:180},
        {name: "Uoma" , x: 12070, y:110},
        {name: "Uoma" , x: 12500, y:290},
        {name: "Heavy_Sentry" , x: 2200, y:400},
        {name: "Heavy_Sentry" , x: 3200, y:400},

    ],
    powerUps:  [{name: "Lightseed" , x: 800, y:400},
        {name: "Gathering_Swarm" , x: 1200 , y:1000  }]

}
const levelThree = {
    music: "./assets/sounds/music/main-2-quiet.mp3",
    spawnPoint: [150 , 0],
    background: ["./assets/IceLevel_3_black.png","./assets/IceLevel3.png"],
    foreground: [],
    pillars: ["./assets/Level3ParallaxPillars.png",],
    worldSize: 2,
    groundType: IceGround,
    wallType: IceWall,
    ground: [{x:0, y:params.canvasHeight*2-32, size: 300 }, 
        {x:32*12, y:params.canvasHeight*2-32*5, size: 8 },
        {x:32*12, y:params.canvasHeight*2-32*9, size: 8 },
        {x:32*46, y:params.canvasHeight*2-32*13, size: 8 },

        {x:32*36, y:params.canvasHeight*2-32*13, size: 8 },
        {x:32*72, y:params.canvasHeight*2-32*5, size: 8 },
        {x:32*85, y:params.canvasHeight*2-32*9, size: 8 },
        {x:32*95, y:params.canvasHeight*2-32*12, size: 8 },

        {x:32*200, y:params.canvasHeight*2-32*1, size: 8 },
        {x:32*202, y:params.canvasHeight*2-32*5, size: 8 },
        {x:32*204, y:params.canvasHeight*2-32*9, size: 8 },
        {x:32*206, y:params.canvasHeight*2-32*13, size: 8 },

        {x:32*226, y:params.canvasHeight*2-32*13, size: 8 },
        {x:32*246, y:params.canvasHeight*2-32*13, size: 8 },
        {x:32*276, y:params.canvasHeight*2-32*13, size: 8 },

         // added for MVD
         {x:32*46, y:32*13, size: 8 },
         {x:32*72, y:32*5, size: 8 },
         {x:32*815, y:32*9, size: 8 },
         {x:32*95, y:32*12, size: 8 },
         {x:32*105, y:32*27, size: 2 },
         {x:32*120, y:32*35, size: 8 },
         {x:32*135, y:32*18, size: 6 },
         {x:32*138, y:32*29, size: 8 },
         {x:32*40, y:32*40, size: 2 },
         {x:32*24, y:32*39, size: 8 },
         {x:32*36, y:32*43, size: 8 },
         {x:32*49, y:32*33, size: 8 },
         {x:32*79, y:32*36, size: 5 },
         {x:32*85, y:32*9, size: 8 },
         {x:32*95, y:32*12, size: 8 },
         {x:32*105, y:32*33, size: 8 },
         {x:32*120, y:32*25, size: 3 },
         {x:32*139, y:32*39, size: 8 },
         {x:32*140, y:32*22, size: 8 },
 
         //second half. just multiplied the x by 2
         {x:32*46*2, y:32*13, size: 8 },
         {x:32*72*2, y:32*5, size: 8 },
         {x:32*815*2, y:32*9, size: 8 },
         {x:32*95*2, y:32*12, size: 8 },
         {x:32*105*2, y:32*27, size: 2 },
         {x:32*120*2, y:32*35, size: 8 },
         {x:32*135*2, y:32*18, size: 6 },
         {x:32*128*2, y:32*29, size: 8 },
         {x:32*40*2, y:32*40, size: 12 },
         {x:32*24*2, y:32*39, size: 8 },
         {x:32*36*2, y:32*43, size: 8 },
         {x:32*49*2, y:32*33, size: 8 },
         {x:32*79*2, y:32*36, size: 5 },
         {x:32*85*2, y:32*9, size: 8 },
         {x:32*95*2, y:32*12, size: 8 },
         {x:32*105*2, y:32*33, size: 8 },
         {x:32*120*2, y:32*25, size: 3 },
         {x:32*139*2, y:32*39, size: 8 },
         {x:32*140*2, y:32*22, size: 8 },
        
    ],

    wall: [{x:-32,y:0,size: 24}],
    
    targetblock: [{x: 9500, y: params.canvasHeight*2-32*4+600, xScale: 30 , yScale: 1},
        {x: 32*300, y:params.canvasHeight*2 + 600, xScale: 1 , yScale: 1}
    ],

    pitglow: [{x: 9600, y: params.canvasHeight*2-32*4, xScale: 1 , yScale: 1},
        {x: 32*300, y:params.canvasHeight*2 + 600, xScale: 1 , yScale: 1}], // just put it on the block for now.

    enemies: [{name: "Heavy_Sentry" , x: 1200, y:550*2},
    {name: "Heavy_Sentry" , x: 2200, y:550*2},
    {name: "Heavy_Sentry" , x: 3200, y:550*2}, 
    {name: "Uoma" , x: 1200, y:550},
    {name: "Uoma" , x: 1400, y:450},
    {name: "Uoma" , x: 1600, y:350},
    {name: "Uoma" , x: 1200*2, y:1250},
    {name: "Uoma" , x: 1700*2, y:950},
    {name: "Uoma" , x: 1800*3, y:850},
    {name: "Uoma" , x: 1900*4, y:750},
    {name: "Uoma" , x: 6400, y:1250},
    {name: "Uoma" , x: 5900, y:1190},
    {name: "Uoma" , x: 5200, y:1110},
    {name: "Uoma" , x: 5800, y:1250},
    {name: "Uoma" , x: 11000, y:1350},
    {name: "Uoma" , x: 11540, y:1190},
    {name: "Uoma" , x: 12040, y:1010},
    {name: "Uoma" , x: 12500, y:1250},
    {name: "Uoma" , x: 11070, y:250},
    {name: "Uoma" , x: 11500, y:180},
    {name: "Uoma" , x: 12070, y:110},
    {name: "Uoma" , x: 12500, y:290},
    {name: "Heavy_Sentry" , x: 2200, y:550*2},
    {name: "Heavy_Sentry" , x: 3200, y:550*2},
    {name: "Heavy_Sentry" , x: 5200, y:400},
    {name: "Heavy_Sentry" , x: 6200, y:400},
    {name: "Heavy_Sentry" , x: 7200, y:400},
    ],
    powerUps:  [{name: "Lightseed" , x: 800, y:400},{name: "Gathering_Swarm" , x: 1200 , y:1000  }]

}

const levelFour = {
    music: "./assets/sounds/music/drumloop.mp3",
    background: ["./assets/HellLevel4.png"],
    foreground: [],
    pillars: [],
    worldSize: 1,
    spawnPoint: [150 , 0],
    groundType: HellGround,
    wallType: HellWall,
    ground: [
        {x:0, y:params.canvasHeight-32, size: 736 }, 
        {x:32*12, y:params.canvasHeight-32*5, size: 8 },
        {x:32*24, y:params.canvasHeight-32*9, size: 8 },
        {x:32*36, y:params.canvasHeight-32*13, size: 8 },

        {x:32*46, y:params.canvasHeight-32*13, size: 8 },
        {x:32*72, y:params.canvasHeight-32*5, size: 8 },
        {x:32*85, y:params.canvasHeight-32*9, size: 8 },
        {x:32*95, y:params.canvasHeight-32*12, size: 8 },

        {x:32*105, y:params.canvasHeight-32*13, size: 8 },
        {x:32*120, y:params.canvasHeight-32*5, size: 8 },
        {x:32*135, y:params.canvasHeight-32*9, size: 8 },
        {x:32*138, y:params.canvasHeight-32*12, size: 8 },

        {x:5976, y:params.canvasHeight-32*1, size: 4 },  // stairs to boss room
        {x:6232, y:params.canvasHeight-32*3, size: 4 }, 
        {x:6488, y:params.canvasHeight-32*5, size: 4 }, 
        {x:6744, y:params.canvasHeight-32*7, size: 4 }, 
        {x:6860, y:params.canvasHeight-32*12, size: 4 },

        {x:7700, y:32*2, size: 4 },  // Boss room platforms  
        {x:8000, y:32*5, size: 4 }, 
        {x:8500, y:32*12, size: 6 }, 
        {x:9225, y:32*13, size: 2 },
        {x:9000, y:32*6, size: 4 },
        {x:9500, y:32*10, size: 4 },

    ],

    wall: [{x:-32,y:0,size: 24},

        {x:7000, y:32*2, size: 22}, // Assumed end wall...

        {x:10500, y:0, size: 24}, // Actuall end wall.
        {x:10500+(32*1), y:0, size: 24}, // extended wall
        {x:10500+(32*2), y:0, size: 24}, 
        {x:10500+(32*3), y:0, size: 24}, 
        {x:10500+(32*4), y:0, size: 24}, 
        {x:10500+(32*5), y:0, size: 24}, 
        {x:10500+(32*6), y:0, size: 24}, 
        {x:10500+(32*7), y:0, size: 24}, 
        {x:10500+(32*8), y:0, size: 24}, 
        {x:10500+(32*9), y:0, size: 24}, 
        {x:10500+(32*10), y:0, size: 24}, 
        {x:10500+(32*11), y:0, size: 24}, 
        {x:10500+(32*12), y:0, size: 24}, 
        {x:10500+(32*13), y:0, size: 24}, 
        {x:10500+(32*14), y:0, size: 24}, 
        {x:10500+(32*15), y:0, size: 24}, 
        {x:10500+(32*16), y:0, size: 24}, 
        {x:10500+(32*17), y:0, size: 24}, 
        {x:10500+(32*18), y:0, size: 24}, 
        {x:10500+(32*19), y:0, size: 24}, 
        {x:10500+(32*20), y:0, size: 24}, 
        {x:10500+(32*21), y:0, size: 24}, 
        {x:10500+(32*22), y:0, size: 24}, 
        {x:10500+(32*23), y:0, size: 24}, 
        {x:10500+(32*24), y:0, size: 24}, 
        {x:10500+(32*25), y:0, size: 24}, 
        {x:10500+(32*26), y:0, size: 24},
        {x:10500+(32*27), y:0, size: 24},
        {x:10500+(32*28), y:0, size: 24},
        {x:10500+(32*29), y:0, size: 24},
        {x:10500+(32*30), y:0, size: 24},
        {x:10500+(32*31), y:0, size: 24},
        {x:10500+(32*32), y:0, size: 24},
        {x:10500+(32*33), y:0, size: 24},
        {x:10500+(32*34), y:0, size: 24},
        {x:10500+(32*35), y:0, size: 24},
        {x:10500+(32*36), y:0, size: 24},
        {x:10500+(32*37), y:0, size: 24},
        {x:10500+(32*38), y:0, size: 24},
        {x:10500+(32*39), y:0, size: 24},
        {x:10500+(32*40), y:0, size: 24},
        {x:10500+(32*41), y:0, size: 24},
        {x:10500+(32*42), y:0, size: 24},
        {x:10500+(32*43), y:0, size: 24},
        {x:10500+(32*44), y:0, size: 24},
        {x:10500+(32*45), y:0, size: 24},
        {x:10500+(32*46), y:0, size: 24},
        {x:10500+(32*47), y:0, size: 24},
        {x:10500+(32*48), y:0, size: 24},
        {x:10500+(32*49), y:0, size: 24},
        {x:10500+(32*50), y:0, size: 24}, // secret restart with all stats. Good for if you can't beat the boss? You can go through the whole thing again and get more power ups.

    ],

    targetblock: [{x: 10500+(32*100), y: params.canvasHeight-32*4, xScale: 1 , yScale: 1}],
    pitglow: [{x: 10500+(32*100), y: params.canvasHeight-32*4, xScale: 1 , yScale: 1}],
    enemies: [
        {name: "Heavy_Sentry" , x: 10000, y: 32*10},
        {name: "Uoma" , x: 1200, y:550},
        {name: "Uoma" , x: 2200, y:450},
        {name: "Uoma" , x: 3200, y:350},
        {name: "Uoma" , x: 4200, y:550},
        {name: "Uoma" , x: 5200, y:450},
        {name: "Uoma" , x: 6200, y:350},
        {name: "Uoma" , x: 1200, y:550},
        {name: "Uoma" , x: 1400, y:450},
        {name: "Uoma" , x: 1600, y:350},
        {name: "Uoma" , x: 1200*2, y:150},
        {name: "Uoma" , x: 6400, y:150},
        {name: "Uoma" , x: 5900, y:190},
        {name: "Uoma" , x: 5200, y:110},
        {name: "Uoma" , x: 5800, y:150},
        {name: "Uoma" , x: 10000, y:150},
        {name: "Uoma" , x: 10540, y:190},
        {name: "Uoma" , x: 10500, y:150},
        {name: "Uoma" , x: 10070, y:250},
        {name: "Uoma" , x: 10500, y:180},
        {name: "Uoma" , x: 10070, y:110},
        {name: "Uoma" , x: 10500, y:290},
        {name: "Heavy_Sentry" , x: 2200, y:400},
        {name: "Heavy_Sentry" , x: 3200, y:400},
        {name: "Heavy_Sentry" , x: 4200, y:400},
        {name: "Heavy_Sentry" , x: 5200, y:400},
        {name: "Heavy_Sentry" , x: 10150, y:400},
        {name: "Heavy_Sentry" , x: 10100, y:400},
    ],
    powerUps:  [{}]


}