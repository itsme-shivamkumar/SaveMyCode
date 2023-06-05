// export const root={
//     "id":-1,
//     "files":[],
//     "folders":[],
// }

export class root{
    constructor(name,id,pid){
        this.id=id;
        this.name=name;
        this.pid=(pid!==undefined)?pid:-1;
        this.folders=[];
        this.files=[];
    }
    // folder functions
    addFolder(newRoot){
        newRoot.pid=this.id;
        this.folders.push(newRoot);
    }
    removeFolderById(id){
        this.folders=this.folders.filter((items)=>items?.id!==id)
    }
    removeFolderByName(name){
        this.folders=this.folders.filter((items)=>items?.name!==name);
    }
    // findFolderByName(name){
    //     return this.folders.filter((items)=>items.name===name)
    // }
    // findFolderById(id){
    //     return (this.folders.filter((items)=>items.id==id)).length>0&&this.folders.filter((items)=>items.id===id)[0];
    // }
    // file functions
    addFile(newRoot){
        newRoot.pid=this.id;
        this.files.push(newRoot);
    }
    removeFileById(id){
        this.files=this.files.filter((items)=>items?.id!==id)
    }
    removeFileByName(name){
        this.files=this.files.filter((items)=>items?.name!==name);
    }
    // findFileByName(name){
    //     return (this.files.filter((items)=>items.name===name)).length>0?this.files.filter((items)=>items.name===name)[0]:"Couldn't find it!"
    // }
    // findFileById(id){
    //     return this.files.filter((items)=>items.id===id)
    // }
}

var rootDemo=new root("root",0,-1);
rootDemo?.addFolder(new root("child1Folder",10));
rootDemo?.addFolder(new root("child2Folder",2));
rootDemo.folders[0].addFolder(new root("grandChild1Folder",3));
rootDemo.folders[0].addFile(new root("grandChildFile1",1))
// rootDemo.findFolderById(1)?.addFolder(new root("grandChild1Folder",3));
rootDemo.addFile(new root("Main.jsx",1));
rootDemo.addFile(new root("App.jsx",2))

export var rootDemo;


export const stylesName=[
    {idx:0,label:"dracula"},
    {idx:1,label:"dark"},
    {idx:2,label:"github"},
    {idx:3,label:"a11yDark"},
    {idx:4,label:"a11yLight"},
    {idx:5,label:" agate"},
    {idx:6,label:"anOldHope"},
    {idx:7,label:"androidstudio"},
    {idx:8,label:"arduinoLight"},
    {idx:9,label:"arta"},
    {idx:10,label:"ascetic"},
    {idx:11,label:"atelierCaveDark"},
    {idx:12,label:"atelierCaveLight"},
    {idx:13,label:"atelierDuneDark"},
    {idx:14,label:"atelierDuneLight"},
    {idx:15,label:"atelierEstuaryDark"},
    {idx:16,label:"atelierEstuaryLight"},
    {idx:17,label:"atelierForestDark"},
    {idx:18,label:"atelierForestLight"},
    {idx:19,label:"atelierHeathDark"},
    {idx:20,label:"atelierHeathLight"},
    {idx:21,label:"atelierLakesideDark"},
    {idx:22,label:"atelierLakesideLight"},
    {idx:23,label:"atelierPlateauDark"},
    {idx:24,label:"atelierPlateauLight"},
    {idx:25,label:"atelierSavannaDark"},
    {idx:26,label:"atelierSavannaLight"},
    {idx:27,label:"atelierSeasideDark"},
    {idx:28,label:"atelierSeasideLight"},
    {idx:29,label:"atelierSulphurpoolDark"},
    {idx:30,label:"atelierSulphurpoolLight"},
    {idx:31,label:"atomOneDark"},
    {idx:32,label:"atomOneDarkReasonable"},
    {idx:33,label:"atomOneLight"},
    {idx:34,label:"brownPaper"},
    {idx:35,label:"codepenEmbed"},
    {idx:36,label:"colorBrewer"},
    {idx:37,label:"darcula"},
    {idx:38,label:"defaultStyle"},
    {idx:39,label:"docco"},
    {idx:40,label:"far"},
    {idx:41,label:"foundation"},
    {idx:42,label:"githubGist"},
    {idx:43,label:"gml"},
    {idx:44,label:"googlecode"},
    {idx:45,label:"gradientDark"},
    {idx:46,label:"grayscale"},
    {idx:47,label:"gruvboxDark"},
    {idx:48,label:"gruvboxLight"},
    {idx:49,label:"hopscotch"},
    {idx:50,label:"hybrid"},
    {idx:51,label:"idea"},
    {idx:52,label:"irBlack"},
    {idx:53,label:"isblEditorDark"},
    {idx:54,label:"isblEditorLight"},
    {idx:55,label:"kimbieDark"},
    {idx:56,label:"kimbieLight"},
    {idx:57,label:"lioshi"},
    {idx:58,label:"magula"},
    {idx:59,label:"monoBlue"},
    {idx:60,label:"monokai"},
    {idx:61,label:"nightOwl"},
    {idx:62,label:"nnfx"},
    {idx:63,label:"nnfxDark"},
    {idx:64,label:"nord"},
    {idx:65,label:"obsidian"},
    {idx:66,label:"ocean"},
    {idx:67,label:"paraisoDark"},
    {idx:68,label:"paraisoLight"},
    {idx:69,label:"pojoaque"},
    {idx:70,label:"purebasic"},
    {idx:71,label:"qtcreatorDark"},
    {idx:72,label:"qtcreatorLight"},
    {idx:73,label:"railscasts"},
    {idx:74,label:"rainbow"},
    {idx:75,label:"routeros"},
    {idx:76,label:"schoolBook"},
    {idx:77,label:"shadesOfPurple"},
    {idx:78,label:"solarizedDark"},
    {idx:79,label:"solarizedLight"},
    {idx:80,label:"srcery"},
    {idx:81,label:"stackoverflowDark"},
    {idx:82,label:"stackoverflowLight"},
    {idx:83,label:"sunburst"},
    {idx:84,label:"tomorrow"},
    {idx:85,label:"tomorrowNight"},
    {idx:86,label:"tomorrowNightBlue"},
    {idx:87,label:"tomorrowNightBright"},
    {idx:88,label:"tomorrowNightEighties"},
    {idx:89,label:"vs"},
    {idx:90,label:"vs2015"},
    {idx:91,label:"xcode"},
    {idx:92,label:"xt256"},
    {idx:93,label:"zenburn"}
];

export const stylesId = {
    "dracula": 0,
    "dark": 1,
    "github": 2,
    "a11yDark": 3,
    "a11yLight": 4,
    "agate": 5,
    "anOldHope": 6,
    "androidstudio": 7,
    "arduinoLight": 8,
    "arta": 9,
    "ascetic": 10,
    "atelierCaveDark": 11,
    "atelierCaveLight": 12,
    "atelierDuneDark": 13,
    "atelierDuneLight": 14,
    "atelierEstuaryDark": 15,
    "atelierEstuaryLight": 16,
    "atelierForestDark": 17,
    "atelierForestLight": 18,
    "atelierHeathDark": 19,
    "atelierHeathLight": 20,
    "atelierLakesideDark": 21,
    "atelierLakesideLight": 22,
    "atelierPlateauDark": 23,
    "atelierPlateauLight": 24,
    "atelierSavannaDark": 25,
    "atelierSavannaLight": 26,
    "atelierSeasideDark": 27,
    "atelierSeasideLight": 28,
    "atelierSulphurpoolDark": 29,
    "atelierSulphurpoolLight": 30,
    "atomOneDark": 31,
    "atomOneDarkReasonable": 32,
    "atomOneLight": 33,
    "brownPaper": 34,
    "codepenEmbed": 35,
    "colorBrewer": 36,
    "darcula": 37,
    "defaultStyle": 38,
    "docco": 39,
    "far": 40,
    "foundation": 41,
    "githubGist": 42,
    "gml": 43,
    "googlecode": 44,
    "gradientDark": 45,
    "grayscale": 46,
    "gruvboxDark": 47,
    "gruvboxLight": 48,
    "hopscotch": 49,
    "hybrid": 50,
    "idea": 51,
    "irBlack": 52,
    "isblEditorDark": 53,
    "isblEditorLight": 54,
    "kimbieDark": 55,
    "kimbieLight": 56,
    "lioshi": 57,
    "magula": 58,
    "monoBlue": 59,
    "monokai": 60,
    "nightOwl": 61,
    "nnfx": 62,
    "nnfxDark": 63,
    "nord": 64,
    "obsidian": 65,
    "ocean": 66,
    "paraisoDark": 67,
    "paraisoLight": 68,
    "pojoaque": 69,
    "purebasic": 70,
    "qtcreatorDark": 71,
    "qtcreatorLight": 72,
    "railscasts": 73,
    "rainbow": 74,
    "routeros": 75,
    "schoolBook": 76,
    "shadesOfPurple": 77,
    "solarizedDark": 78,
    "solarizedLight": 79,
    "srcery": 80,
    "stackoverflowDark": 81,
    "stackoverflowLight": 82,
    "sunburst": 83,
    "tomorrow": 84,
    "tomorrowNight": 85,
    "tomorrowNightBlue": 86,
    "tomorrowNightBright": 87,
    "tomorrowNightEighties": 88,
    "vs": 89,
    "vs2015": 90,
    "xcode": 91,
    "xt256": 92,
    "zenburn": 93,
};