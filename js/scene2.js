{

	"metadata": {
		"formatVersion": 3.2,
		"type" : "scene"
	},

	"urlBaseType" : "relativeToHTML",

	"objects": {

		"group" : {
			"position" : [ 0, 0, 0 ],
			"rotation" : [ 0, 0, 0 ],
			"scale"	   : [ 1, 1, 1 ],
			"visible"  : true,
			"children" : {
                
                "doll" : {
					"type": "obj",					
					"url" : "obj/doll3.obj",					
					"material" : "ma1",
					"position" : [ 0, 4, 0 ],
					"rotation" : [ 0, 0, 0 ],
					"scale"	   : [ 20, 20, 20 ],
					"visible"  : true
				},				

				"ground" : {
					"geometry" : "plane",
					"material" : "basic_gray",
					"position" : [ 0, -20, 0 ],
					"rotation" : [ -1.57, 0, 0 ],
					"scale"	   : [ 100, 100, 100 ],
					"visible"  : true
				},  
                    
               "light2": {
                    "type"		 : "AmbientLight",
					"direction"	 : [ 0, 1, 1 ],
					"color" 	 : 16777215,
					"intensity"	 : 1
				},		

				"camera1": {
					"type"  : "PerspectiveCamera",
					"fov"   : 50,
					"aspect": 16,
					"near"  : 1,
					"far"   : 1000,
					"position": [ 0, 0, 100 ],
					"target"  : [ 0, 0, 0 ]
				}				
			}
		}
        
	},

	"geometries": {		

		"plane": {
			"type"   : "plane",
			"width"  : 10,
			"height" : 10,
			"widthSegments"  : 50,
			"heightSegments" : 50
		},		

		"colorcube": {
			"type": "embedded",
			"id"  : "cube_fvc"
		}

	},

	"embeds": {

		"cube_fvc": {

			"metadata" : {
				"formatVersion" : 3
			},

			"scale" : 1.0,

			"materials": [{
				"DbgColor" : 15658734,
				"DbgIndex" : 0,
				"DbgName" : "Material",
				"colorDiffuse" : [0.8, 0.8, 0.8],
				"colorSpecular" : [0.5, 0.5, 0.5],
				"specularCoef" : 50,
				"opacity" : 1.0,
				"vertexColors" : true
			}],

			"vertices": [1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,1.000000,1.000000,-1.000000,0.999999,1.000000,1.000001,-1.000000,1.000000,1.000000,-1.000000,1.000000,-1.000000],

			"morphTargets": [],

			"normals": [],

			"colors": [16777215,16769421,16769424,8454135,15195931,7299839,16586715,16711687,1056014,6029475,13762484,9044089,7962349,6772991,16774622,4144383,11973887,1966063,1056285,9081232,13696943,5002581],

			"uvs": [[]],

			"faces": [131,0,1,2,3,0,0,1,2,3,131,4,7,6,5,0,4,5,6,7,131,0,4,5,1,0,0,8,9,10,131,1,5,6,2,0,0,11,12,13,131,2,6,7,3,0,14,15,16,17,131,4,0,3,7,0,18,19,20,21]

		}

	},

	"materials": {

		"basic_gray": {
			"type": "MeshBasicMaterial",
			"parameters": { "color": 6710886, "wireframe": true }
		},
                
        "ma1": {
			"type": "MeshPhongMaterial",
			"parameters": { "map": "doll"}
		}

	},

	"textures": {

		"doll": {
			"url": "obj/doll.jpg",
			"anisotropy": 4
		}
        
	},	

	"defaults": {
		"bgcolor": [0,0,0],
		"bgalpha": 1,
		"camera": "camera1",
		"fog": "black"
	}

}
