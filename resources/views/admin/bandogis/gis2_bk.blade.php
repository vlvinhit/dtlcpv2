@extends('admin.bandogis.gis_main')
@section('content')
{{--    <script>--}}
        var array_diemdich = [];
        var array_tamp = [];
        var save_nam = "2000"
        @foreach($get_all_diemdichv2 as $key => $qldiemdichv2)
            if(save_nam === String({{$qldiemdichv2->nam}}))
            {
                array_tamp.push(
                    new Graphic({
                        attributes: {
                            sl_diem_dich: "{{$qldiemdichv2->SL_diem_dich}}",
                            ghi_chu: ""
                        },
                        geometry: {
                            type: "point",                     // autocasts as new Point()
                            longitude: 	parseFloat({{$qldiemdichv2->kinh_do}}),
                            latitude: parseFloat({{$qldiemdichv2->vi_do}})
                        },
                        symbol: chose_symbol(parseInt({{$qldiemdichv2->SL_diem_dich}})),
                        popupTemplate: {
                            title: "{{$qldiemdichv2->phuong_xa}} " + " - " + "{{$qldiemdichv2->huyen_tp}}",
                            content: popupTemplate_content
                        },
                    })
                );
            } else
            {
                if( save_nam === "2000")  {
                    array_tamp.push(
                        new Graphic({
                            attributes: {
                                sl_diem_dich: "{{$qldiemdichv2->SL_diem_dich}}",
                                ghi_chu: ""
                            },
                            geometry: {
                                type: "point",                     // autocasts as new Point()
                                longitude: 	parseFloat({{$qldiemdichv2->kinh_do}}),
                                latitude: parseFloat({{$qldiemdichv2->vi_do}})
                            },
                            symbol: chose_symbol(parseInt({{$qldiemdichv2->SL_diem_dich}})),
                            popupTemplate: {
                                title: "{{$qldiemdichv2->phuong_xa}} " + " - " + "{{$qldiemdichv2->huyen_tp}}",
                                content: popupTemplate_content
                            },
                        })
                    );
                } //lần đầu chạy
                else {
                    array_tamp.push(
                        new Graphic({
                            attributes: {
                                sl_diem_dich: "{{$qldiemdichv2->SL_diem_dich}}",
                                ghi_chu: ""
                            },
                            geometry: {
                                type: "point",                     // autocasts as new Point()
                                longitude: 	parseFloat({{$qldiemdichv2->kinh_do}}),
                                latitude: parseFloat({{$qldiemdichv2->vi_do}})
                            },
                            symbol: chose_symbol(parseInt({{$qldiemdichv2->SL_diem_dich}})),
                            popupTemplate: {
                                title: "{{$qldiemdichv2->phuong_xa}} " + " - " + "{{$qldiemdichv2->huyen_tp}}",
                                content: popupTemplate_content
                            },
                        })
                    );
                    array_diemdich.push([save_nam, array_tamp]);
                    array_tamp = [];
                }
                save_nam = String({{$qldiemdichv2->nam}});
            }
            {{--array_diemdich.push(--}}
            {{--    new Graphic({--}}
            {{--        attributes: {--}}
            {{--            sl_diem_dich: "{{$qldiemdichv2->SL_diem_dich}}",--}}
            {{--            ghi_chu: ""--}}
            {{--        },--}}
            {{--        geometry: {--}}
            {{--            type: "point",                     // autocasts as new Point()--}}
            {{--            longitude: 	parseFloat({{$qldiemdichv2->kinh_do}}),--}}
            {{--            latitude: parseFloat({{$qldiemdichv2->vi_do}})--}}
            {{--        },--}}
            {{--        symbol: chose_symbol(parseInt({{$qldiemdichv2->SL_diem_dich}})),--}}
            {{--        popupTemplate: {--}}
            {{--            title: "{{$qldiemdichv2->phuong_xa}} " + " - " + "{{$qldiemdichv2->huyen_tp}}",--}}
            {{--            content: popupTemplate_content--}}
            {{--        },--}}
            {{--    })--}}
            {{--);--}}
        @endforeach
        array_diemdich.push([save_nam, array_tamp]);
        var graphicsLayer2022 = new GraphicsLayer({
            graphics: array_diemdich[0][1]
        });
        var graphicsLayer2021 = new GraphicsLayer({
            graphics: array_diemdich[1][1]
        });
        var graphicsLayer2020 = new GraphicsLayer({
            graphics: array_diemdich[2][1]
        });
        var combobox_nam = document.getElementById("activitySelector");
        combobox_nam.addEventListener("click", function() {
            var options = combobox_nam.querySelectorAll("option");
            var count = options.length;
            if(typeof(count) === "undefined" || count < 2)
            {
                addActivityItem();
            }
        });

        combobox_nam.addEventListener("change", function() {
            if(combobox_nam.value == "2020")
            {
                map.layers.remove(graphicsLayer2021);
                map.layers.remove(graphicsLayer2022);
                map.layers.add(graphicsLayer2020);
            }
            if(combobox_nam.value == "2021")
            {
                map.layers.remove(graphicsLayer2020);
                map.layers.remove(graphicsLayer2022);
                map.layers.add(graphicsLayer2021);
            }
            if(combobox_nam.value == "2022")
            {
                map.layers.remove(graphicsLayer2020);
                map.layers.remove(graphicsLayer2021);
                map.layers.add(graphicsLayer2022);
            }
        });

        function add2020() {
            map.layers.remove();
            graphicsLayer2021.removeAll();
            map.layers.add(graphicsLayer2021);
            graphicsLayer2022.removeAll();
            map.layers.add(graphicsLayer2022);
            map.layers.add(graphicsLayer2020);
        }
{{--    </script>--}}
@endsection
