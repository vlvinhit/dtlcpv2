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
        require([
                "esri/Map",
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
                "esri/symbols/WebStyleSymbol",
                "esri/layers/support/Field",
                "esri/request",
                "esri/layers/FeatureLayer",],
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
             Field,
             request,
             FeatureLayer) => {

                const map = new Map({
                    // basemap: "streets-vector"
                    basemap: "dark-gray-vector"
                });
                const portalUrl = "https://www.arcgis.com";
                const shapefileUrl = "{{ asset('shapefiles/hanhchinhtg.zip') }}"; // URL file shapefile từ hệ thống

                const webStyleSymbol = new WebStyleSymbol({
                    name: "Government Buildings",
                    styleUrl: "https://cdn.arcgis.com/sharing/rest/content/items/6eeef46c653b40c9bda04f9bed913b70/data"
                });
                const view = new MapView({
                    container: "viewDiv", // Reference to the view div created in step 5
                    map: map, // Reference to the map object created before the view
                    zoom: 10, // Sets zoom level based on level of detail (LOD)
                    center: [106.35483, 10.35908], // longitude, latitude
                    popup: {
                        defaultPopupTemplateEnabled: true
                    }
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
                view.ui.add(document.getElementById("actions"), "top-right");
                //=======================END============================
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
                    // Lấy dữ liệu từ PHP Blade (mảng get_all_qldiemdichv2 được truyền từ controller)
                    const get_all_qldiemdichv2 = @json($get_all_qldiemdichv2);
                    // Tạo mảng list_diemdich có 170 phần tử mặc định là 0
                    let list_diemdich = new Array(170).fill(0);
                    // Lặp qua danh sách get_all_qldiemdichv2
                    get_all_qldiemdichv2.forEach((diemdich) => {
                        // Lấy giá trị ghi_chu và kiểm tra điều kiện
                        const ghi_chu = parseInt(diemdich.ghi_chu); // Chuyển ghi_chu sang số nguyên
                        if (Number.isInteger(ghi_chu) && ghi_chu >= 0 && ghi_chu < 170) {
                            // Nếu ghi_chu hợp lệ, gán SL_diem_dich vào vị trí tương ứng
                            list_diemdich[ghi_chu] = diemdich.SL_diem_dich;
                        }
                    });
                    let sourceGraphics = [];
                    const layers = featureCollection.layers.map((layer) => {
                        const graphics = layer.featureSet.features.map((feature, index) => {
                            // Chuyển đổi đối tượng từ JSON sang Graphic
                            const graphic = Graphic.fromJSON(feature);

                            // Gán giá trị sl_diem_dich từ danh sách, nếu danh sách không đủ thì gán giá trị mặc định
                            graphic.attributes["sl_diem_dich"] = list_diemdich[index] || 0;

                            return graphic;
                        });

                        sourceGraphics = sourceGraphics.concat(graphics);

                        // Thêm trường mới vào fields
                        const updatedFields = layer.layerDefinition.fields.map((field) => Field.fromJSON(field));
                        updatedFields.push({
                            name: "sl_diem_dich",  // Tên trường
                            alias: "Số lượng điểm dịch",  // Nhãn hiển thị
                            type: "integer"  // Loại dữ liệu
                        });

                        // Tạo FeatureLayer với danh sách Graphic đã chỉnh sửa
                        const featureLayer = new FeatureLayer({
                            objectIdField: "FID", // objectIdField của featureLayer
                            source: graphics, // Danh sách Graphics
                            fields: updatedFields, // Danh sách fields (bao gồm cả trường mới)
                            popupTemplate: {
                                title: "{TenPhuongX}", // Hiển thị FID làm tiêu đề
                                content: `
                              <b>Số lượng điểm dịch:</b> {sl_diem_dich}<br>
                              <b>Các trường khác:</b> {TênTrườngKhác}  <!-- Tùy chỉnh theo nhu cầu -->
                            `,
                                fieldInfos: [
                                    {
                                        fieldName: "sl_diem_dich", // Hiển thị trường sl_diem_dich
                                        label: "Số lượng điểm dịch",
                                        format: {
                                            digitSeparator: true, // Ngăn cách số bằng dấu phẩy
                                            places: 0 // Không có phần thập phân
                                        }
                                    }
                                ]
                            }
                        });

                        //===============================================
                        // Tạo mảng ListobjectId từ get_all_qldiemdichv2
                        const ListobjectId = @json($get_all_qldiemdichv2).map((item) => {
                            const opacity = parseFloat((item.SL_diem_dich / 100).toFixed(2)); // Tính giá trị Opacity và làm tròn 2 chữ số
                            return {
                                objectIdToEdit: item.ghi_chu, // Thay objectIdToEdit bằng trường ghi_chu
                                color: [255, 0, 0, opacity], // Thay $Opacity bằng giá trị đã tính
                            };
                        });

                        // Hàm tạo renderer với ListobjectId
                        function createRendererWithColors(list) {
                            // Tạo mảng uniqueValueInfos từ ListobjectId
                            const uniqueValueInfos = list.map((item) => ({
                                value: item.objectIdToEdit,
                                symbol: {
                                    type: "simple-fill",
                                    color: item.color,
                                    outline: {
                                        color: [0, 0, 0, 1], // Đường viền màu đen
                                        width: 1, // Độ rộng viền
                                    },
                                },
                            }));

                            // Cấu hình renderer
                            const renderer = {
                                type: "unique-value",
                                field: featureLayer.objectIdField, // Trường objectId
                                uniqueValueInfos: uniqueValueInfos,
                                defaultSymbol: {
                                    type: "simple-fill",
                                    color: [208,208,208, 0.5], // Màu mặc định: xanh lá mờ
                                    outline: {
                                        color: [0, 0, 0, 1], // Đường viền màu đen
                                        width: 1, // Độ rộng viền
                                    },
                                },
                            };

                            return renderer;
                        }
                        // Gán renderer vào layer
                        featureLayer.renderer = createRendererWithColors(ListobjectId);
                        //===============================================
                        // featureLayer.popupTemplate = {
                        //     //...featureLayer.popupTemplate, // Giữ nguyên các thuộc tính khác
                        //     title: "{TenPhuongX}" + " ({OBJECTID}) ",
                        //     content: "{sl_diem_dich}" + " ({OBJECTID}) "
                        // };
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
                //===================================================
                @yield('content')
            });
        //=======================END============================
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
