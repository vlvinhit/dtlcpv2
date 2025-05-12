<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
    <title>Add or remove graphics from a FeatureLayer | Sample | ArcGIS Maps SDK for JavaScript 4.30</title>

    <link rel="stylesheet" href="https://js.arcgis.com/4.28/esri/themes/light/main.css" />
    <script src="https://js.arcgis.com/4.28/"></script>
    <style>
        html,
        body,
        #viewDiv {
            padding: 0;
            margin: 0;
            height: 100%;
            width: 100%;
        }
        #add {
            margin-bottom: 5px;
        }
        #actions {
            padding: 5px;
        }
        button:disabled {
            opacity: 0.4;
            -moz-opacity: 0.4; /* Firefox and Mozilla browsers */
            -webkit-opacity: 0.4; /* Safari */
            cursor: default;
        }

    </style>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script>
        const symbol_green = {
            type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
            // color: "blue",
            color: "rgba(0,255,0,0.5)",
            size: 20,
            outline: { // autocasts as new SimpleLineSymbol()
                width: 0.5,
                color: "darkblue"
            }
        };
        const symbol_yellow = {
            type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
            color: "rgba(255,255,0,0.5)",
            size: 20,
            outline: { // autocasts as new SimpleLineSymbol()
                width: 0.5,
                color: "darkblue"
            }
        };
        const symbol_orange = {
            type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
            color: "rgba(252,153,0,0.5)",
            size: 20,
            outline: { // autocasts as new SimpleLineSymbol()
                width: 0.5,
                color: "darkblue"
            }
        };
        const symbol_red = {
            type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
            color: "rgba(255,0,0,0.5)",
            size: 20,
            outline: { // autocasts as new SimpleLineSymbol()
                width: 0.5,
                color: "darkblue"
            }
        };
        const popupTemplate_content = [{
            type: "fields",
            fieldInfos: [
                {
                    fieldName: "sl_diem_dich",
                    label: "Số lượng điểm dịch",
                    visible: true
                },
                {
                    fieldName: "ghi_chu",
                    label: "Ghi chú",
                    visible: true
                }
            ]
        }];
        function chose_symbol(SL_diem_dich) {
            if(parseInt(SL_diem_dich) <1)
            {
                return symbol_green;
            } else if (parseInt(SL_diem_dich) <5) {
                return symbol_yellow;
            }else if (parseInt(SL_diem_dich) < 11) {
                return symbol_orange;
            }else {
                return symbol_red;
            }
        }
        require(["esri/Map",
                "esri/views/MapView",
                "esri/widgets/Home",
                "esri/widgets/Locate",
                "esri/Graphic",
                "esri/widgets/Fullscreen",
                "esri/widgets/ScaleBar",
                "esri/widgets/BasemapGallery",
                "esri/widgets/Expand",
                "esri/layers/GraphicsLayer",
                "esri/widgets/Search",
                "esri/widgets/Legend",
                "esri/symbols/WebStyleSymbol",
                "esri/layers/support/Field"],
            (Map,
             MapView,
             Home,
             Locate,
             Graphic,
             Fullscreen,
             ScaleBar,
             BasemapGallery,
             Expand,
             GraphicsLayer,
             Search,
             WebStyleSymbol,
             Field) => {
            const map = new Map({
                basemap: "streets-vector"
            });
            const webStyleSymbol = new WebStyleSymbol({
                name: "Government Buildings",
                styleUrl: "https://cdn.arcgis.com/sharing/rest/content/items/6eeef46c653b40c9bda04f9bed913b70/data"
            });
            const view = new MapView({
                container: "viewDiv", // Reference to the view div created in step 5
                map: map, // Reference to the map object created before the view
                zoom: 10, // Sets zoom level based on level of detail (LOD)
                center: [106.35483, 10.35908], // longitude, latitude
            });
            let homeWidget = new Home({
                view: view
            });
            // adds the home widget to the top left corner of the MapView
            view.ui.add(homeWidget, "top-left");

            let locateWidget = new Locate({
                view: view,   // Attaches the Locate button to the view
                graphic: new Graphic({
                    symbol: { type: "simple-marker" }  // overwrites the default symbol used for the
                    // graphic placed at the location of the user when found
                })
            });
            view.ui.add(locateWidget, "top-left");

            fullscreen = new Fullscreen({
                view: view
            });
            view.ui.add(fullscreen, "top-left");

            let scaleBar = new ScaleBar({
                view: view
            });
            // Add widget to the bottom left corner of the view
            view.ui.add(scaleBar, {
                position: "bottom-left"
            });

            let basemapGallery = new BasemapGallery({
                view: view
            });
            const basemapGalleryExpand = new Expand({
                expandIcon: "basemap",  // see https://developers.arcgis.com/calcite-design-system/icons/
                // expandTooltip: "Expand LayerList", // optional, defaults to "Expand" for English locale
                view: view,
                content: basemapGallery
            });
            view.ui.add(basemapGalleryExpand, "top-left");
            // them Quan dao====================================
            let textSymbolHoangSa = {
                type: "text",  // autocasts as new TextSymbol()
                color: "white",
                haloColor: "black",
                haloSize: "1px",
                text: "Quần đảo Hoàng sa\nViệt Nam",
                xoffset: 3,
                yoffset: 3,
                font: {  // autocasts as new Font()
                    size: 12,
                    family: "Josefin Slab",
                    weight: "bold"
                }
            };
            let pointHoangSa = {
                type : "point",
                latitude: 16.5268231,
                longitude: 112.2489431
            };
            let textSymbolTruongSa = {
                type: "text",  // autocasts as new TextSymbol()
                color: "white",
                haloColor: "black",
                haloSize: "1px",
                text: "Quần đảo Trường sa\nViệt Nam",
                xoffset: 3,
                yoffset: 3,
                font: {  // autocasts as new Font()
                    size: 12,
                    family: "Josefin Slab",
                    weight: "bold"
                }
            };
            let pointTruongSa = {
                type : "point",
                latitude: 10.2564273,
                longitude: 115.2714411
            };
            let hoangSaGraphic = new Graphic({
                geometry: pointHoangSa,
                symbol: textSymbolHoangSa
            });
            let truongSaGraphic = new Graphic({
                geometry: pointTruongSa,
                symbol: textSymbolTruongSa
            });
            // Add graphic when GraphicsLayer is constructed
            let HoangSaTruongSalayer = new GraphicsLayer({
                id:"BienDao",
                title:"Biển Đảo",
                graphics: [hoangSaGraphic, truongSaGraphic]
            });
            map.add(HoangSaTruongSalayer);
            const searchWidget = new Search({
                view: view
            });
            // Adds the search widget below other elements in
            // the top left corner of the view
            view.ui.add(searchWidget, {
                position: "top-right",
                index: 2
            });
            //==============================thêm player- xã========================
            var ChiCucTGGraphic = new Graphic({
                attributes: {
                    dia_chi: "133 Lý Thường Kiệt , Phường 5, Thành phố Mỹ Tho, Tiền Giang",
                    so_dien_thoai: "02733123456"
                },
                geometry: {
                    type: "point",                     // autocasts as new Point()
                    longitude: 106.3549788625985,
                    latitude: 10.359368914455448
                },
                symbol : {
                    type: "web-style",  // autocasts as new WebStyleSymbol()
                    styleUrl: "https://cdn.arcgis.com/sharing/rest/content/items/6eeef46c653b40c9bda04f9bed913b70/data",
                    name: "Government Buildings"
                },
                // symbol: {
                //     type: "simple-marker",
                //         style: "square",
                //         color: [226, 119, 40],  // Orange
                //         width: 1
                        // outline: {
                        //     color: [255, 255, 255], // White
                        //     width: 8
                        // }
                // },
                popupTemplate: {                     // autocasts as new PopupTemplate()
                    title: "CHI CỤC CHĂN NUÔI VÀ THÚ Y TỈNH TIỀN GIANG",
                    content: [{
                        type: "fields",
                        fieldInfos: [
                            {
                                fieldName: "dia_chi",
                                label: "Địa chỉ",
                                visible: true
                            },
                            {
                                fieldName: "so_dien_thoai",
                                label: "Số điện thoại",
                                visible: true
                            }
                        ]
                    }]
                },
            });
            var MyTanGraphic = new Graphic({
                geometry: {
                    type: "point",                     // autocasts as new Point()
                    longitude: 	105.912,
                    latitude: 10.408
                },

                symbol: {
                    type: "text",  // autocasts as new TextSymbol()
                    color: "black",
                    haloColor: "white",
                    haloSize: "1px",
                    text: "Mỹ Tân",
                    xoffset: 1,
                    yoffset: 1,
                    font: {  // autocasts as new Font()
                        size: 10,
                        family: "Josefin Slab",
                        weight: "bold"
                    }
                }
            });
            var graphicsLayer = new GraphicsLayer({
                graphics: [ChiCucTGGraphic, MyTanGraphic]
            });
            map.layers.add(graphicsLayer);
            view.ui.add(document.getElementById("actions"), "top-right");
            //=======================END============================
            @yield('content')
        });
        //=======================END============================
    </script>
</head>
<body>
    <div id="viewDiv"></div>
    <div id="actions" class="esri-widget">
        <a href="/admin/quanlydiemdich/list" class="esri-button"  >Quay lại</a>
        <select class="esri-button style-button" id="activitySelector">
            <option value="0">Chọn năm</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
        </select>
    </div>
</body>
</html>
