<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
    <title>Bản đồ GIS Chi cục Chăn nuôi và Thú y Tiền giang</title>

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
                // let pointTruongSa = {
                //     type : "point",
                //     latitude: 10.2564273,
                //     longitude: 115.2714411
                // };
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
                var BinhTrungGraphic = new Graphic({
                    geometry: {
                        type: "point",                     // autocasts as new Point()
                        longitude: 	10.376389,
                        latitude: 106.225
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
                    graphics: [BinhTrungGraphic]
                });
                map.layers.add(graphicsLayer);
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

                function loadShapefileFromUrl(url, selectedYear) {
                    fetch(url)
                        .then(response => response.blob())
                        .then(blob => {
                            const formData = new FormData();
                            formData.append("file", blob, "hanhchinhtg.zip");
                            generateFeatureCollection(formData, selectedYear);
                        })
                        .catch(error => {
                            // document.getElementById('upload-status').innerHTML = `<p style='color:red'>Error: ${error.message}</p>`;
                        });
                }

                function generateFeatureCollection(formData, selectedYear) {
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
                            //document.getElementById('upload-status').innerHTML = '<b>Loaded: </b>' + layerName;
                            addShapefileToMap(response.data.featureCollection, selectedYear);
                        })
                        .catch(errorHandler);
                }

                function errorHandler (error) {
                    // document.getElementById('upload-status').innerHTML =
                    //     "<p style='color:red;max-width: 500px;'>" + error.message + "</p>";
                }

                function addShapefileToMap (featureCollection, selectedYear) {
                    const get_diemdich_all_nam = @json($get_all_qldiemdichv2);
                    // Xử lý dữ liệu để tạo biến getNamAll
                    const getNamAll = Object.values(
                        get_diemdich_all_nam.reduce((acc, item) => {
                            const { ghi_chu, SL_diem_dich } = item;
                            if (!acc[ghi_chu]) {
                                acc[ghi_chu] = { ghi_chu, SL_diem_dich: 0 };
                            }
                            acc[ghi_chu].SL_diem_dich += SL_diem_dich;
                            return acc;
                        }, {})
                    );
                    if (selectedYear.toString() === "all_nam"){
                        var get_all_qldiemdichv2 = @json($get_nam_all)
                    }else {
                        // Lọc danh sách theo năm cụ thể (ví dụ: 2019)
                        var get_all_qldiemdichv2 = @json($get_all_qldiemdichv2).filter(item => parseInt(item.nam) === parseInt(selectedYear));
                    }
                    // Tìm giá trị lớn nhất của trường SL_diem_dich trong danh sách đã lọc
                    const maxSLDiemDich = Math.max(...get_all_qldiemdichv2.map(item => item.SL_diem_dich));

                    // Tạo mảng list_diemdich có 170 phần tử mặc định là 0
                    let list_diemdich = new Array(170).fill(0);
                    // Lặp qua danh sách get_all_qldiemdichv2
                    get_all_qldiemdichv2.forEach((diemdich) => {
                        // Lấy giá trị ghi_chu và kiểm tra điều kiện
                        const diemdich_ghi_chu = parseInt(diemdich.ghi_chu); // Chuyển ghi_chu sang số nguyên
                        if (Number.isInteger(diemdich_ghi_chu) && diemdich_ghi_chu >= 0 && diemdich_ghi_chu < 170) {
                            // Nếu ghi_chu hợp lệ, gán SL_diem_dich vào vị trí tương ứng
                                console.log("-vinh-" + maxSLDiemDich.toString());
                                list_diemdich[diemdich_ghi_chu] = diemdich.SL_diem_dich;
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
                        const ListobjectId = get_all_qldiemdichv2.map((item) => {
                            const opacity = parseFloat((item.SL_diem_dich / 100/(maxSLDiemDich/100)).toFixed(2)); // Tính giá trị Opacity và làm tròn 2 chữ số
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
                                    color: [255,255,255, 0.8], // Màu mặc định: xanh lá mờ
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
                    // document.getElementById('upload-status').innerHTML = "";
                }

                // Tự động tải shapefile khi trang mở
                loadShapefileFromUrl(shapefileUrl,"all_nam");
                //===================================================
                @yield('content')
                document.getElementById('filter-nam').addEventListener('change', function(event) {
                    const selectedYear = event.target.value;
                    // Xóa tất cả các layer cũ trên bản đồ
                    map.layers.forEach(layer => {
                        map.remove(layer);
                    });
                    map.layers.forEach(layer => {
                        map.remove(layer);
                    });
                    loadShapefileFromUrl(shapefileUrl, selectedYear);
                    console.log(selectedYear.toString());
                });
            });
        //=======================END============================
    </script>
</head>
<body>
<div id="viewDiv"></div>
<div id="actions" class="esri-widget">
    <a href="/admin/quanlydiemdich/list" class="esri-button">Quay lại</a>
    <select class="esri-button style-button" id="filter-nam">
        <option value="all_nam">Tất cả</option>
        @foreach($get_all_qldiemdichv2->pluck('nam')->unique() as $nam)
            <option value="{{ $nam }}">{{ $nam }}</option>
        @endforeach
    </select>
</div>
</body>
</html>
