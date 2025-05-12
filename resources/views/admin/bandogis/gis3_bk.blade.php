<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
    <title>Create a FeatureLayer from a shapefile | Sample | ArcGIS Maps SDK for JavaScript 4.31</title>
    <style>
        html,
        body,
        #viewDiv {
            padding: 0;
            margin: 0;
            height: 100%;
            width: 100%;
        }
        #mainWindow {
            padding: .5em;
            background-color: #fff;
        }
        #mainWindow p, #uploadForm {
            display: block;
            padding: .1em;
        }
    </style>

    <link rel="stylesheet" href="https://js.arcgis.com/4.28/esri/themes/light/main.css" />
    <script src="https://js.arcgis.com/4.28/"></script>

    <script>
        require([
            "esri/config",
            "esri/Map",
            "esri/views/MapView",
            "esri/widgets/Expand",
            "esri/request",
            "esri/layers/FeatureLayer",
            "esri/layers/support/Field",
            "esri/Graphic"
        ], (esriConfig, Map, MapView, Expand, request, FeatureLayer, Field, Graphic) => {

            const portalUrl = "https://www.arcgis.com";
            const shapefileUrl = "{{ asset('shapefiles/hanhchinhtg.zip') }}"; // URL file shapefile từ hệ thống

            const map = new Map({
                basemap: "dark-gray-vector"
            });

            const view = new MapView({
                center: [-41.647, 36.41],
                zoom: 2,
                map: map,
                container: "viewDiv",
                popup: {
                    defaultPopupTemplateEnabled: true
                }
            });

            const fileForm = document.getElementById("mainWindow");

            const expand = new Expand({
                expandIcon: "upload",
                view: view,
                content: fileForm
            });

            view.ui.add(expand, "top-right");

            function loadShapefileFromUrl(url) {
                document.getElementById('upload-status').innerHTML = '<b>Loading shapefile from URL...</b>';

                fetch(url)
                    .then(response => response.blob())
                    .then(blob => {
                        const formData = new FormData();
                        formData.append("file", blob, "hanhchinhtg.zip");
                        generateFeatureCollection(formData);
                    })
                    .catch(error => {
                        document.getElementById('upload-status').innerHTML = `<p style='color:red'>Error: ${error.message}</p>`;
                    });
            }

            function generateFeatureCollection(formData) {
                const params = {
                    'name': 'auto_loaded_shapefile',
                    'targetSR': view.spatialReference,
                    'maxRecordCount': 1000,
                    'enforceInputFileSizeLimit': true,
                    'enforceOutputJsonSizeLimit': true
                };

                params.generalize = true;
                params.maxAllowableOffset = 10;
                params.reducePrecision = true;
                params.numberOfDigitsAfterDecimal = 0;

                const myContent = {
                    'filetype': 'shapefile',
                    'publishParameters': JSON.stringify(params),
                    'f': 'json',
                };

                request(portalUrl + '/sharing/rest/content/features/generate', {
                    query: myContent,
                    body: formData,
                    responseType: 'json'
                })
                    .then((response) => {
                        const layerName = response.data.featureCollection.layers[0].layerDefinition.name;
                        document.getElementById('upload-status').innerHTML = '<b>Loaded: </b>' + layerName;
                        addShapefileToMap(response.data.featureCollection);
                    })
                    .catch(errorHandler);
            }

            function errorHandler (error) {
                document.getElementById('upload-status').innerHTML =
                    "<p style='color:red;max-width: 500px;'>" + error.message + "</p>";
            }

            function addShapefileToMap (featureCollection) {
                let sourceGraphics = [];

                const layers = featureCollection.layers.map((layer) => {
                    const graphics = layer.featureSet.features.map((feature) => {
                        return Graphic.fromJSON(feature);
                    });
                    sourceGraphics = sourceGraphics.concat(graphics);
                    const featureLayer = new FeatureLayer({
                        objectIdField: "FID",
                        source: graphics,
                        fields: layer.layerDefinition.fields.map((field) => {
                            return Field.fromJSON(field);
                        })
                    });
                    return featureLayer;
                });

                map.addMany(layers);
                view.goTo(sourceGraphics)
                    .catch((error) => {
                        if (error.name != "AbortError"){
                            console.error(error);
                        }
                    });

                document.getElementById('upload-status').innerHTML = "";
            }

            // Tự động tải shapefile khi trang mở
            loadShapefileFromUrl(shapefileUrl);
        });
    </script>
</head>

<body>
<div id="mainWindow">
    <div>
        <div style='padding-left:4px;'>
            <p>Download shapefile from <a href="{{ asset('shapefiles/hanhchinhtg.zip') }}">here.</a></p>
            <p>Shapefile sẽ tự động được tải lên bản đồ.</p>
            <p>Visit the
                <a target='_blank' href="https://doc.arcgis.com/en/arcgis-online/reference/shapefiles.htm">Shapefiles</a> help
                topic for information and limitations.</p>
            <span class="file-upload-status" style="opacity:1;" id="upload-status"></span>
            <div id="fileInfo"> </div>
        </div>
    </div>
</div>
<div id="viewDiv"></div>
</body>
</html>
