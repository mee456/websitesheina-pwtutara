var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_desasumampir_2 = new ol.format.GeoJSON();
var features_desasumampir_2 = format_desasumampir_2.readFeatures(json_desasumampir_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desasumampir_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desasumampir_2.addFeatures(features_desasumampir_2);
var lyr_desasumampir_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desasumampir_2,
maxResolution:28.00446615226196,
 minResolution:0.28004466152261964,

                style: style_desasumampir_2,
                popuplayertitle: 'desa sumampir',
                interactive: true,
                title: '<img src="styles/legend/desasumampir_2.png" /> desa sumampir'
            });
var format_dusun_3 = new ol.format.GeoJSON();
var features_dusun_3 = format_dusun_3.readFeatures(json_dusun_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dusun_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dusun_3.addFeatures(features_dusun_3);
var lyr_dusun_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dusun_3,
maxResolution:14.00223307613098,
 minResolution:0.28004466152261964,

                style: style_dusun_3,
                popuplayertitle: 'dusun',
                interactive: true,
    title: 'dusun<br />\
    <img src="styles/legend/dusun_3_0.png" /> <br />\
    <img src="styles/legend/dusun_3_1.png" /> Kalisari<br />\
    <img src="styles/legend/dusun_3_2.png" /> KarangMiri<br />\
    <img src="styles/legend/dusun_3_3.png" /> Perum Griya Satria<br />\
    <img src="styles/legend/dusun_3_4.png" /> Sumampir Kulon<br />\
    <img src="styles/legend/dusun_3_5.png" /> Sumampir Tengah<br />\
    <img src="styles/legend/dusun_3_6.png" /> Sumampir Wetan<br />' });
var format_batasrw_4 = new ol.format.GeoJSON();
var features_batasrw_4 = format_batasrw_4.readFeatures(json_batasrw_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasrw_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasrw_4.addFeatures(features_batasrw_4);
var lyr_batasrw_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batasrw_4,
maxResolution:7.00111653806549,
 minResolution:0.28004466152261964,

                style: style_batasrw_4,
                popuplayertitle: 'batas rw',
                interactive: true,
    title: 'batas rw<br />\
    <img src="styles/legend/batasrw_4_0.png" /> 1<br />\
    <img src="styles/legend/batasrw_4_1.png" /> 2<br />\
    <img src="styles/legend/batasrw_4_2.png" /> 3<br />\
    <img src="styles/legend/batasrw_4_3.png" /> 4<br />\
    <img src="styles/legend/batasrw_4_4.png" /> 5<br />\
    <img src="styles/legend/batasrw_4_5.png" /> 6<br />\
    <img src="styles/legend/batasrw_4_6.png" /> 7<br />\
    <img src="styles/legend/batasrw_4_7.png" /> 8<br />\
    <img src="styles/legend/batasrw_4_8.png" /> 9<br />\
    <img src="styles/legend/batasrw_4_9.png" /> 10<br />\
    <img src="styles/legend/batasrw_4_10.png" /> <br />' });
var format_polygonkebunmakam_5 = new ol.format.GeoJSON();
var features_polygonkebunmakam_5 = format_polygonkebunmakam_5.readFeatures(json_polygonkebunmakam_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polygonkebunmakam_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polygonkebunmakam_5.addFeatures(features_polygonkebunmakam_5);
var lyr_polygonkebunmakam_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_polygonkebunmakam_5,
maxResolution:7.00111653806549,
 
                style: style_polygonkebunmakam_5,
                popuplayertitle: 'polygon kebun & makam',
                interactive: true,
    title: 'polygon kebun & makam<br />\
    <img src="styles/legend/polygonkebunmakam_5_0.png" /> Kebun<br />\
    <img src="styles/legend/polygonkebunmakam_5_1.png" /> Kuburan<br />\
    <img src="styles/legend/polygonkebunmakam_5_2.png" /> Sawah<br />\
    <img src="styles/legend/polygonkebunmakam_5_3.png" /> <br />' });
var format_sumampirkulon_6 = new ol.format.GeoJSON();
var features_sumampirkulon_6 = format_sumampirkulon_6.readFeatures(json_sumampirkulon_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sumampirkulon_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sumampirkulon_6.addFeatures(features_sumampirkulon_6);
var lyr_sumampirkulon_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sumampirkulon_6,
maxResolution:2.8004466152261966,
 minResolution:0.28004466152261964,

                style: style_sumampirkulon_6,
                popuplayertitle: 'sumampir kulon',
                interactive: true,
    title: 'sumampir kulon<br />\
    <img src="styles/legend/sumampirkulon_6_0.png" /> 1<br />\
    <img src="styles/legend/sumampirkulon_6_1.png" /> 2<br />\
    <img src="styles/legend/sumampirkulon_6_2.png" /> 4<br />\
    <img src="styles/legend/sumampirkulon_6_3.png" /> 6<br />\
    <img src="styles/legend/sumampirkulon_6_4.png" /> 7<br />\
    <img src="styles/legend/sumampirkulon_6_5.png" /> 8<br />\
    <img src="styles/legend/sumampirkulon_6_6.png" /> 9<br />\
    <img src="styles/legend/sumampirkulon_6_7.png" /> 10<br />\
    <img src="styles/legend/sumampirkulon_6_8.png" /> <br />' });
var format_sumampirtengah_7 = new ol.format.GeoJSON();
var features_sumampirtengah_7 = format_sumampirtengah_7.readFeatures(json_sumampirtengah_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sumampirtengah_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sumampirtengah_7.addFeatures(features_sumampirtengah_7);
var lyr_sumampirtengah_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sumampirtengah_7,
maxResolution:2.8004466152261966,
 minResolution:0.28004466152261964,

                style: style_sumampirtengah_7,
                popuplayertitle: 'sumampir tengah',
                interactive: true,
    title: 'sumampir tengah<br />\
    <img src="styles/legend/sumampirtengah_7_0.png" /> 1<br />\
    <img src="styles/legend/sumampirtengah_7_1.png" /> 2<br />\
    <img src="styles/legend/sumampirtengah_7_2.png" /> 3<br />\
    <img src="styles/legend/sumampirtengah_7_3.png" /> 4<br />\
    <img src="styles/legend/sumampirtengah_7_4.png" /> <br />' });
var format_KarangMiri_8 = new ol.format.GeoJSON();
var features_KarangMiri_8 = format_KarangMiri_8.readFeatures(json_KarangMiri_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KarangMiri_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KarangMiri_8.addFeatures(features_KarangMiri_8);
var lyr_KarangMiri_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KarangMiri_8,
maxResolution:2.8004466152261966,
 minResolution:0.28004466152261964,

                style: style_KarangMiri_8,
                popuplayertitle: 'KarangMiri',
                interactive: true,
    title: 'KarangMiri<br />\
    <img src="styles/legend/KarangMiri_8_0.png" /> 1<br />\
    <img src="styles/legend/KarangMiri_8_1.png" /> 2<br />\
    <img src="styles/legend/KarangMiri_8_2.png" /> 3<br />\
    <img src="styles/legend/KarangMiri_8_3.png" /> 4<br />\
    <img src="styles/legend/KarangMiri_8_4.png" /> 5<br />\
    <img src="styles/legend/KarangMiri_8_5.png" /> 6<br />\
    <img src="styles/legend/KarangMiri_8_6.png" /> 7<br />\
    <img src="styles/legend/KarangMiri_8_7.png" /> 8<br />\
    <img src="styles/legend/KarangMiri_8_8.png" /> <br />' });
var format_kalisari_9 = new ol.format.GeoJSON();
var features_kalisari_9 = format_kalisari_9.readFeatures(json_kalisari_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kalisari_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kalisari_9.addFeatures(features_kalisari_9);
var lyr_kalisari_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kalisari_9,
maxResolution:2.8004466152261966,
 minResolution:0.28004466152261964,

                style: style_kalisari_9,
                popuplayertitle: 'kalisari',
                interactive: true,
    title: 'kalisari<br />\
    <img src="styles/legend/kalisari_9_0.png" /> 1<br />\
    <img src="styles/legend/kalisari_9_1.png" /> 2<br />\
    <img src="styles/legend/kalisari_9_2.png" /> 3<br />\
    <img src="styles/legend/kalisari_9_3.png" /> 4<br />\
    <img src="styles/legend/kalisari_9_4.png" /> 5<br />\
    <img src="styles/legend/kalisari_9_5.png" /> 6<br />\
    <img src="styles/legend/kalisari_9_6.png" /> <br />' });
var format_perumgriyasatria_10 = new ol.format.GeoJSON();
var features_perumgriyasatria_10 = format_perumgriyasatria_10.readFeatures(json_perumgriyasatria_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_perumgriyasatria_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_perumgriyasatria_10.addFeatures(features_perumgriyasatria_10);
var lyr_perumgriyasatria_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_perumgriyasatria_10,
maxResolution:2.8004466152261966,
 minResolution:0.28004466152261964,

                style: style_perumgriyasatria_10,
                popuplayertitle: 'perum griya satria',
                interactive: true,
    title: 'perum griya satria<br />\
    <img src="styles/legend/perumgriyasatria_10_0.png" /> 1<br />\
    <img src="styles/legend/perumgriyasatria_10_1.png" /> 3<br />\
    <img src="styles/legend/perumgriyasatria_10_2.png" /> <br />' });
var format_sumampirwetan_11 = new ol.format.GeoJSON();
var features_sumampirwetan_11 = format_sumampirwetan_11.readFeatures(json_sumampirwetan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sumampirwetan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sumampirwetan_11.addFeatures(features_sumampirwetan_11);
var lyr_sumampirwetan_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sumampirwetan_11,
maxResolution:2.8004466152261966,
 minResolution:0.28004466152261964,

                style: style_sumampirwetan_11,
                popuplayertitle: 'sumampir wetan',
                interactive: true,
    title: 'sumampir wetan<br />\
    <img src="styles/legend/sumampirwetan_11_0.png" /> 1<br />\
    <img src="styles/legend/sumampirwetan_11_1.png" /> 2<br />\
    <img src="styles/legend/sumampirwetan_11_2.png" /> 3<br />\
    <img src="styles/legend/sumampirwetan_11_3.png" /> 4<br />\
    <img src="styles/legend/sumampirwetan_11_4.png" /> <br />' });
var format_kel_sumampir_polygon_12 = new ol.format.GeoJSON();
var features_kel_sumampir_polygon_12 = format_kel_sumampir_polygon_12.readFeatures(json_kel_sumampir_polygon_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kel_sumampir_polygon_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kel_sumampir_polygon_12.addFeatures(features_kel_sumampir_polygon_12);
var lyr_kel_sumampir_polygon_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kel_sumampir_polygon_12,
maxResolution:1.4002233076130983,
 minResolution:0.28004466152261964,

                style: style_kel_sumampir_polygon_12,
                popuplayertitle: 'kel_sumampir_polygon',
                interactive: true,
                title: '<img src="styles/legend/kel_sumampir_polygon_12.png" /> kel_sumampir_polygon'
            });
var format_rumahwarga_13 = new ol.format.GeoJSON();
var features_rumahwarga_13 = format_rumahwarga_13.readFeatures(json_rumahwarga_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumahwarga_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumahwarga_13.addFeatures(features_rumahwarga_13);
var lyr_rumahwarga_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumahwarga_13,
maxResolution:1.4002233076130983,
 minResolution:0.28004466152261964,

                style: style_rumahwarga_13,
                popuplayertitle: 'rumahwarga',
                interactive: true,
                title: '<img src="styles/legend/rumahwarga_13.png" /> rumahwarga'
            });
var format_rumahku_14 = new ol.format.GeoJSON();
var features_rumahku_14 = format_rumahku_14.readFeatures(json_rumahku_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rumahku_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rumahku_14.addFeatures(features_rumahku_14);
var lyr_rumahku_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rumahku_14,
maxResolution:4.200669922839294,
 minResolution:0.28004466152261964,

                style: style_rumahku_14,
                popuplayertitle: 'rumahku',
                interactive: true,
                title: '<img src="styles/legend/rumahku_14.png" /> rumahku'
            });
var format_desa_sumampir_point_15 = new ol.format.GeoJSON();
var features_desa_sumampir_point_15 = format_desa_sumampir_point_15.readFeatures(json_desa_sumampir_point_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desa_sumampir_point_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desa_sumampir_point_15.addFeatures(features_desa_sumampir_point_15);
var lyr_desa_sumampir_point_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desa_sumampir_point_15,
maxResolution:4.200669922839294,
 
                style: style_desa_sumampir_point_15,
                popuplayertitle: 'desa_sumampir_point',
                interactive: true,
                title: '<img src="styles/legend/desa_sumampir_point_15.png" /> desa_sumampir_point'
            });
var format_sumampir_point_16 = new ol.format.GeoJSON();
var features_sumampir_point_16 = format_sumampir_point_16.readFeatures(json_sumampir_point_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sumampir_point_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sumampir_point_16.addFeatures(features_sumampir_point_16);
var lyr_sumampir_point_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sumampir_point_16,
maxResolution:2.8004466152261966,
 minResolution:0.28004466152261964,

                style: style_sumampir_point_16,
                popuplayertitle: 'sumampir_point',
                interactive: true,
    title: 'sumampir_point<br />\
    <img src="styles/legend/sumampir_point_16_0.png" /> 88treasure Thriftshop<br />\
    <img src="styles/legend/sumampir_point_16_1.png" /> Al Alfa Komputer<br />\
    <img src="styles/legend/sumampir_point_16_2.png" /> Aling Purwokerto<br />\
    <img src="styles/legend/sumampir_point_16_3.png" /> Apotek Dunia Medika<br />\
    <img src="styles/legend/sumampir_point_16_4.png" /> Ara Kids Store<br />\
    <img src="styles/legend/sumampir_point_16_5.png" /> Aula Al Fattih Gedung ke 3<br />\
    <img src="styles/legend/sumampir_point_16_6.png" /> Ayam key key chicken<br />\
    <img src="styles/legend/sumampir_point_16_7.png" /> Bakmi SidaLuhur<br />\
    <img src="styles/legend/sumampir_point_16_8.png" /> Bakso Lotus<br />\
    <img src="styles/legend/sumampir_point_16_9.png" /> Bakso Senang Hati<br />\
    <img src="styles/legend/sumampir_point_16_10.png" /> Balai Desa Sumampir<br />\
    <img src="styles/legend/sumampir_point_16_11.png" /> Bale Rahayu Traditional Restaurant<br />\
    <img src="styles/legend/sumampir_point_16_12.png" /> BAw CARWASH CAFE  dan BARBERSHOP<br />\
    <img src="styles/legend/sumampir_point_16_13.png" /> bearly Bread Purwokerto<br />\
    <img src="styles/legend/sumampir_point_16_14.png" /> Belanja Digital Solution<br />\
    <img src="styles/legend/sumampir_point_16_15.png" /> Bengkel Motor<br />\
    <img src="styles/legend/sumampir_point_16_16.png" /> Bimba JeniusFun Sumampir Purwokerto<br />\
    <img src="styles/legend/sumampir_point_16_17.png" /> Classyco.cake<br />\
    <img src="styles/legend/sumampir_point_16_18.png" /> CV DWI REKSA MANDIRI<br />\
    <img src="styles/legend/sumampir_point_16_19.png" /> Dennisa Cake<br />\
    <img src="styles/legend/sumampir_point_16_20.png" /> Dia Education<br />\
    <img src="styles/legend/sumampir_point_16_21.png" /> Dimsum Mentai Gemoy<br />\
    <img src="styles/legend/sumampir_point_16_22.png" /> DK KOST (COWO)<br />\
    <img src="styles/legend/sumampir_point_16_23.png" /> Elya Kost Putri 1<br />\
    <img src="styles/legend/sumampir_point_16_24.png" /> Emerald Guest House Type JEPANG<br />\
    <img src="styles/legend/sumampir_point_16_25.png" /> Emper Kopi Classic Rok<br />\
    <img src="styles/legend/sumampir_point_16_26.png" /> Endah Homestay Syariah<br />\
    <img src="styles/legend/sumampir_point_16_27.png" /> Estetik Homestay Syariah Purwokerto<br />\
    <img src="styles/legend/sumampir_point_16_28.png" /> Gedung 2 Kuttab Al Fattih<br />\
    <img src="styles/legend/sumampir_point_16_29.png" /> Grey Restodan Coffee<br />\
    <img src="styles/legend/sumampir_point_16_30.png" /> Griya Rahma<br />\
    <img src="styles/legend/sumampir_point_16_31.png" /> Gubug Nuansa<br />\
    <img src="styles/legend/sumampir_point_16_32.png" /> Gudang Kaos Polos<br />\
    <img src="styles/legend/sumampir_point_16_33.png" /> Gula Aren asli<br />\
    <img src="styles/legend/sumampir_point_16_34.png" /> Gurih Nagih<br />\
    <img src="styles/legend/sumampir_point_16_35.png" /> Happy Kost<br />\
    <img src="styles/legend/sumampir_point_16_36.png" /> Heela Bouquet dan Gift<br />\
    <img src="styles/legend/sumampir_point_16_37.png" /> Honey Bee Kost<br />\
    <img src="styles/legend/sumampir_point_16_38.png" /> House Of Rahayu<br />\
    <img src="styles/legend/sumampir_point_16_39.png" /> HY AQUAFISH<br />\
    <img src="styles/legend/sumampir_point_16_40.png" /> Indobus Toy store<br />\
    <img src="styles/legend/sumampir_point_16_41.png" /> Indotech Purwokerto<br />\
    <img src="styles/legend/sumampir_point_16_42.png" /> Indys Kost<br />\
    <img src="styles/legend/sumampir_point_16_43.png" /> Jax\'s gym<br />\
    <img src="styles/legend/sumampir_point_16_44.png" /> Kaos Polos Griya Satria<br />\
    <img src="styles/legend/sumampir_point_16_45.png" /> Kebun Hijau<br />\
    <img src="styles/legend/sumampir_point_16_46.png" /> kebunku water park<br />\
    <img src="styles/legend/sumampir_point_16_47.png" /> Kemi Mentai<br />\
    <img src="styles/legend/sumampir_point_16_48.png" /> Kenanga Guest House Purwokerto<br />\
    <img src="styles/legend/sumampir_point_16_49.png" /> Kenanga Homestay Purwokerto<br />\
    <img src="styles/legend/sumampir_point_16_50.png" /> Kenangan Kost<br />\
    <img src="styles/legend/sumampir_point_16_51.png" /> KMC JATISARI<br />\
    <img src="styles/legend/sumampir_point_16_52.png" /> Kontrakan Surga<br />\
    <img src="styles/legend/sumampir_point_16_53.png" /> Konveksi dan Sablon<br />\
    <img src="styles/legend/sumampir_point_16_54.png" /> Kopi Lepen Purwokerto<br />\
    <img src="styles/legend/sumampir_point_16_55.png" /> Kopi Serayu<br />\
    <img src="styles/legend/sumampir_point_16_56.png" /> Kos Indrakila Sumampir<br />\
    <img src="styles/legend/sumampir_point_16_57.png" /> Kos Kenanga 47<br />\
    <img src="styles/legend/sumampir_point_16_58.png" /> Kos Moncer<br />\
    <img src="styles/legend/sumampir_point_16_59.png" /> Kos Pondok Permata<br />\
    <img src="styles/legend/sumampir_point_16_60.png" /> Kos Putri Devandi<br />\
    <img src="styles/legend/sumampir_point_16_61.png" /> Kos Putri Els Griya<br />\
    <img src="styles/legend/sumampir_point_16_62.png" /> Kost Andesta Putra<br />\
    <img src="styles/legend/sumampir_point_16_63.png" /> Kost Bening 2<br />\
    <img src="styles/legend/sumampir_point_16_64.png" /> Kost Eksklusif deHomes Purwokerto<br />\
    <img src="styles/legend/sumampir_point_16_65.png" /> Kost Elvonda<br />\
    <img src="styles/legend/sumampir_point_16_66.png" /> Kost Griya Moira<br />\
    <img src="styles/legend/sumampir_point_16_67.png" /> Kost Maleo<br />\
    <img src="styles/legend/sumampir_point_16_68.png" /> Kost Nyah Li<br />\
    <img src="styles/legend/sumampir_point_16_69.png" /> Kost Pak Bawono<br />\
    <img src="styles/legend/sumampir_point_16_70.png" /> Kost Pandawa<br />\
    <img src="styles/legend/sumampir_point_16_71.png" /> Kost Putri Borneo<br />\
    <img src="styles/legend/sumampir_point_16_72.png" /> Kost Putri Elmera Purwokerto<br />\
    <img src="styles/legend/sumampir_point_16_73.png" /> Kost Putri Griya Ayu<br />\
    <img src="styles/legend/sumampir_point_16_74.png" /> Kost Putri Hanifah<br />\
    <img src="styles/legend/sumampir_point_16_75.png" /> Kost Putri Kusumari<br />\
    <img src="styles/legend/sumampir_point_16_76.png" /> Kost Putri Syabella<br />\
    <img src="styles/legend/sumampir_point_16_77.png" /> Kost Putri Wisma Kirana<br />\
    <img src="styles/legend/sumampir_point_16_78.png" /> Kuburan<br />\
    <img src="styles/legend/sumampir_point_16_79.png" /> Kuburan Purnaraga<br />\
    <img src="styles/legend/sumampir_point_16_80.png" /> Kuttab Al Fattih Purwokerto<br />\
    <img src="styles/legend/sumampir_point_16_81.png" /> Lapangan Olahraga RT 04 RW 09<br />\
    <img src="styles/legend/sumampir_point_16_82.png" /> Lapangan Sumampir<br />\
    <img src="styles/legend/sumampir_point_16_83.png" /> Lapangan Volly<br />\
    <img src="styles/legend/sumampir_point_16_84.png" /> LULU\'s Guest House Purwokerto<br />\
    <img src="styles/legend/sumampir_point_16_85.png" /> Luminex Basecamp<br />\
    <img src="styles/legend/sumampir_point_16_86.png" /> Makam Kuno Eyang Jayadiwangsa<br />\
    <img src="styles/legend/sumampir_point_16_87.png" /> Masjid Alfattah<br />\
    <img src="styles/legend/sumampir_point_16_88.png" /> Masjid AlFattah<br />\
    <img src="styles/legend/sumampir_point_16_89.png" /> Masjid ALKAUTSAR LDII<br />\
    <img src="styles/legend/sumampir_point_16_90.png" /> Masjid Rukhuloh<br />\
    <img src="styles/legend/sumampir_point_16_91.png" /> Masjid Ulul Albab<br />\
    <img src="styles/legend/sumampir_point_16_92.png" /> Mie Ayam Bpk. Darno<br />\
    <img src="styles/legend/sumampir_point_16_93.png" /> MNC Sky Vision PT Electronics Store<br />\
    <img src="styles/legend/sumampir_point_16_94.png" /> Mushola Al Hidayah<br />\
    <img src="styles/legend/sumampir_point_16_95.png" /> Mushola Al Idris<br />\
    <img src="styles/legend/sumampir_point_16_96.png" /> Mushola Al Ikhlas<br />\
    <img src="styles/legend/sumampir_point_16_97.png" /> Mushola Darunnajah<br />\
    <img src="styles/legend/sumampir_point_16_98.png" /> Nasi Goren Opi Engkeng<br />\
    <img src="styles/legend/sumampir_point_16_99.png" /> Nibras Galeri Purwokerto<br />\
    <img src="styles/legend/sumampir_point_16_100.png" /> Oemah Kalpataru Homestay Syaiah<br />\
    <img src="styles/legend/sumampir_point_16_101.png" /> Ofiice CV IndoGrup<br />\
    <img src="styles/legend/sumampir_point_16_102.png" /> OHH Salad<br />\
    <img src="styles/legend/sumampir_point_16_103.png" /> Pak RT Karisun<br />\
    <img src="styles/legend/sumampir_point_16_104.png" /> Pak RW Julianto<br />\
    <img src="styles/legend/sumampir_point_16_105.png" /> Pakaian Toko Texttile merchant<br />\
    <img src="styles/legend/sumampir_point_16_106.png" /> Pandawa Kost Kintamani<br />\
    <img src="styles/legend/sumampir_point_16_107.png" /> Pangkas Cukur Rambut MeruBarata<br />\
    <img src="styles/legend/sumampir_point_16_108.png" /> Pijat Wania Purwokerto<br />\
    <img src="styles/legend/sumampir_point_16_109.png" /> Poss AHASS Kharisma Purwkerto<br />\
    <img src="styles/legend/sumampir_point_16_110.png" /> Prakter Dokter Gigi,Drg Titi Nur Hikmawati<br />\
    <img src="styles/legend/sumampir_point_16_111.png" /> Rizky Kost<br />\
    <img src="styles/legend/sumampir_point_16_112.png" /> Rumah Adit<br />\
    <img src="styles/legend/sumampir_point_16_113.png" /> Rumah Adnan<br />\
    <img src="styles/legend/sumampir_point_16_114.png" /> Rumah Ahmad<br />\
    <img src="styles/legend/sumampir_point_16_115.png" /> Rumah Awendika<br />\
    <img src="styles/legend/sumampir_point_16_116.png" /> Rumah Bayu<br />\
    <img src="styles/legend/sumampir_point_16_117.png" /> Rumah Biyan<br />\
    <img src="styles/legend/sumampir_point_16_118.png" /> Rumah Bu Hani<br />\
    <img src="styles/legend/sumampir_point_16_119.png" /> Rumah Bu Lili<br />\
    <img src="styles/legend/sumampir_point_16_120.png" /> Rumah Cipling<br />\
    <img src="styles/legend/sumampir_point_16_121.png" /> Rumah Dafa<br />\
    <img src="styles/legend/sumampir_point_16_122.png" /> Rumah Davit<br />\
    <img src="styles/legend/sumampir_point_16_123.png" /> Rumah Deva<br />\
    <img src="styles/legend/sumampir_point_16_124.png" /> Rumah Endo<br />\
    <img src="styles/legend/sumampir_point_16_125.png" /> Rumah Farhan<br />\
    <img src="styles/legend/sumampir_point_16_126.png" /> Rumah Gani<br />\
    <img src="styles/legend/sumampir_point_16_127.png" /> Rumah Garil<br />\
    <img src="styles/legend/sumampir_point_16_128.png" /> Rumah Guteng<br />\
    <img src="styles/legend/sumampir_point_16_129.png" /> Rumah indra<br />\
    <img src="styles/legend/sumampir_point_16_130.png" /> Rumah Jazin<br />\
    <img src="styles/legend/sumampir_point_16_131.png" /> Rumah Mas Adit<br />\
    <img src="styles/legend/sumampir_point_16_132.png" /> Rumah Mas Iyan<br />\
    <img src="styles/legend/sumampir_point_16_133.png" /> Rumah Mba Intan<br />\
    <img src="styles/legend/sumampir_point_16_134.png" /> Rumah Nanang<br />\
    <img src="styles/legend/sumampir_point_16_135.png" /> Rumah Pak Ari<br />\
    <img src="styles/legend/sumampir_point_16_136.png" /> Rumah Pak Bagyo<br />\
    <img src="styles/legend/sumampir_point_16_137.png" /> Rumah Pak Beni<br />\
    <img src="styles/legend/sumampir_point_16_138.png" /> Rumah Pak Budi<br />\
    <img src="styles/legend/sumampir_point_16_139.png" /> Rumah Pak Darsito<br />\
    <img src="styles/legend/sumampir_point_16_140.png" /> Rumah Pak Iwan<br />\
    <img src="styles/legend/sumampir_point_16_141.png" /> Rumah Pak Jojon<br />\
    <img src="styles/legend/sumampir_point_16_142.png" /> Rumah Pak Karji<br />\
    <img src="styles/legend/sumampir_point_16_143.png" /> Rumah Pak Kirman<br />\
    <img src="styles/legend/sumampir_point_16_144.png" /> Rumah pak Lukman<br />\
    <img src="styles/legend/sumampir_point_16_145.png" /> Rumah Pak Lukman<br />\
    <img src="styles/legend/sumampir_point_16_146.png" /> Rumah Pak Nanang<br />\
    <img src="styles/legend/sumampir_point_16_147.png" /> Rumah Pak Nyitno<br />\
    <img src="styles/legend/sumampir_point_16_148.png" /> Rumah Pak Pai<br />\
    <img src="styles/legend/sumampir_point_16_149.png" /> Rumah Pak Purwito<br />\
    <img src="styles/legend/sumampir_point_16_150.png" /> Rumah Pak Ridwan<br />\
    <img src="styles/legend/sumampir_point_16_151.png" /> Rumah Pak Sarikun<br />\
    <img src="styles/legend/sumampir_point_16_152.png" /> Rumah Pak Siswoyo<br />\
    <img src="styles/legend/sumampir_point_16_153.png" /> Rumah Pak Sito<br />\
    <img src="styles/legend/sumampir_point_16_154.png" /> Rumah Pak Slamet<br />\
    <img src="styles/legend/sumampir_point_16_155.png" /> Rumah Pak Supono<br />\
    <img src="styles/legend/sumampir_point_16_156.png" /> Rumah Pak Toni<br />\
    <img src="styles/legend/sumampir_point_16_157.png" /> Rumah Pak Yanto<br />\
    <img src="styles/legend/sumampir_point_16_158.png" /> Rumah Rehan<br />\
    <img src="styles/legend/sumampir_point_16_159.png" /> Rumah Ridho<br />\
    <img src="styles/legend/sumampir_point_16_160.png" /> Rumah Widan<br />\
    <img src="styles/legend/sumampir_point_16_161.png" /> Rumah Wulan<br />\
    <img src="styles/legend/sumampir_point_16_162.png" /> Salvito Kost<br />\
    <img src="styles/legend/sumampir_point_16_163.png" /> Sawah Semingkir<br />\
    <img src="styles/legend/sumampir_point_16_164.png" /> SDN 1 Sumampir<br />\
    <img src="styles/legend/sumampir_point_16_165.png" /> Service Jok Motor dan Mobi "Putra Borneo"<br />\
    <img src="styles/legend/sumampir_point_16_166.png" /> SIJI HOMESTAY<br />\
    <img src="styles/legend/sumampir_point_16_167.png" /> Silvia Olshop purwokerto<br />\
    <img src="styles/legend/sumampir_point_16_168.png" /> Sirin Kayu<br />\
    <img src="styles/legend/sumampir_point_16_169.png" /> SMK TI Bintra<br />\
    <img src="styles/legend/sumampir_point_16_170.png" /> SMPN 9 Purwokerto<br />\
    <img src="styles/legend/sumampir_point_16_171.png" /> Solitude Kost<br />\
    <img src="styles/legend/sumampir_point_16_172.png" /> SR46 Kost<br />\
    <img src="styles/legend/sumampir_point_16_173.png" /> Tap BIKE Bicyle Store<br />\
    <img src="styles/legend/sumampir_point_16_174.png" /> Teras Jatisari<br />\
    <img src="styles/legend/sumampir_point_16_175.png" /> The Mas Barberhop<br />\
    <img src="styles/legend/sumampir_point_16_176.png" /> TK Alfattah<br />\
    <img src="styles/legend/sumampir_point_16_177.png" /> TOKO DS<br />\
    <img src="styles/legend/sumampir_point_16_178.png" /> TPQ AL  Hikmah Purowkerto<br />\
    <img src="styles/legend/sumampir_point_16_179.png" /> Ubi Bakar Cilembu<br />\
    <img src="styles/legend/sumampir_point_16_180.png" /> Urbanview Sumampir Anugrah Purwokerto<br />\
    <img src="styles/legend/sumampir_point_16_181.png" /> Wahana Biru<br />\
    <img src="styles/legend/sumampir_point_16_182.png" /> Warkop dan Mie Aceh Cek\' Ris<br />\
    <img src="styles/legend/sumampir_point_16_183.png" /> Warun Makan Prabasari<br />\
    <img src="styles/legend/sumampir_point_16_184.png" /> Warun Meyben<br />\
    <img src="styles/legend/sumampir_point_16_185.png" /> Warung Makan Baruna<br />\
    <img src="styles/legend/sumampir_point_16_186.png" /> Warung Makan Lamongan<br />\
    <img src="styles/legend/sumampir_point_16_187.png" /> Warung Pramuria<br />\
    <img src="styles/legend/sumampir_point_16_188.png" /> Warung Rujak Bu Anwar<br />\
    <img src="styles/legend/sumampir_point_16_189.png" /> Warung Seafood<br />\
    <img src="styles/legend/sumampir_point_16_190.png" /> Wisma Aster<br />\
    <img src="styles/legend/sumampir_point_16_191.png" /> Wisma Cempaka 5<br />\
    <img src="styles/legend/sumampir_point_16_192.png" /> Wisma Fatimah<br />\
    <img src="styles/legend/sumampir_point_16_193.png" /> Wisma Joha<br />\
    <img src="styles/legend/sumampir_point_16_194.png" /> Wisma Kenanga<br />\
    <img src="styles/legend/sumampir_point_16_195.png" /> Wisma Srikandi Unsoed purwokerto<br />\
    <img src="styles/legend/sumampir_point_16_196.png" /> Wisma Wijaya<br />\
    <img src="styles/legend/sumampir_point_16_197.png" /> WISMAmpir Bae<br />\
    <img src="styles/legend/sumampir_point_16_198.png" /> <br />' });
var format_jalan_kab_17 = new ol.format.GeoJSON();
var features_jalan_kab_17 = format_jalan_kab_17.readFeatures(json_jalan_kab_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_kab_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_kab_17.addFeatures(features_jalan_kab_17);
var lyr_jalan_kab_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_kab_17,
maxResolution:7.00111653806549,
 minResolution:0.28004466152261964,

                style: style_jalan_kab_17,
                popuplayertitle: 'jalan_kab',
                interactive: true,
                title: '<img src="styles/legend/jalan_kab_17.png" /> jalan_kab'
            });
var format_sungai_18 = new ol.format.GeoJSON();
var features_sungai_18 = format_sungai_18.readFeatures(json_sungai_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_18.addFeatures(features_sungai_18);
var lyr_sungai_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sungai_18, 
                style: style_sungai_18,
                popuplayertitle: 'sungai',
                interactive: true,
                title: '<img src="styles/legend/sungai_18.png" /> sungai'
            });
var format_jalan_desa_19 = new ol.format.GeoJSON();
var features_jalan_desa_19 = format_jalan_desa_19.readFeatures(json_jalan_desa_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_desa_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_desa_19.addFeatures(features_jalan_desa_19);
var lyr_jalan_desa_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_desa_19,
maxResolution:1.4002233076130983,
 minResolution:0.28004466152261964,

                style: style_jalan_desa_19,
                popuplayertitle: 'jalan_desa',
                interactive: true,
                title: '<img src="styles/legend/jalan_desa_19.png" /> jalan_desa'
            });
var format_jalan_kec_20 = new ol.format.GeoJSON();
var features_jalan_kec_20 = format_jalan_kec_20.readFeatures(json_jalan_kec_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_kec_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_kec_20.addFeatures(features_jalan_kec_20);
var lyr_jalan_kec_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_kec_20,
maxResolution:2.8004466152261966,
 minResolution:0.28004466152261964,

                style: style_jalan_kec_20,
                popuplayertitle: 'jalan_kec',
                interactive: true,
                title: '<img src="styles/legend/jalan_kec_20.png" /> jalan_kec'
            });
var group_Line = new ol.layer.Group({
                                layers: [lyr_jalan_kab_17,lyr_sungai_18,lyr_jalan_desa_19,lyr_jalan_kec_20,],
                                fold: 'open',
                                title: 'Line'});
var group_Point = new ol.layer.Group({
                                layers: [lyr_rumahku_14,lyr_desa_sumampir_point_15,lyr_sumampir_point_16,],
                                fold: 'open',
                                title: 'Point'});
var group_Polygon = new ol.layer.Group({
                                layers: [lyr_desasumampir_2,lyr_dusun_3,lyr_batasrw_4,lyr_polygonkebunmakam_5,lyr_sumampirkulon_6,lyr_sumampirtengah_7,lyr_KarangMiri_8,lyr_kalisari_9,lyr_perumgriyasatria_10,lyr_sumampirwetan_11,lyr_kel_sumampir_polygon_12,lyr_rumahwarga_13,],
                                fold: 'open',
                                title: 'Polygon'});

lyr_OSMStandard_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_desasumampir_2.setVisible(true);lyr_dusun_3.setVisible(true);lyr_batasrw_4.setVisible(true);lyr_polygonkebunmakam_5.setVisible(true);lyr_sumampirkulon_6.setVisible(true);lyr_sumampirtengah_7.setVisible(true);lyr_KarangMiri_8.setVisible(true);lyr_kalisari_9.setVisible(true);lyr_perumgriyasatria_10.setVisible(true);lyr_sumampirwetan_11.setVisible(true);lyr_kel_sumampir_polygon_12.setVisible(true);lyr_rumahwarga_13.setVisible(true);lyr_rumahku_14.setVisible(true);lyr_desa_sumampir_point_15.setVisible(true);lyr_sumampir_point_16.setVisible(true);lyr_jalan_kab_17.setVisible(true);lyr_sungai_18.setVisible(true);lyr_jalan_desa_19.setVisible(true);lyr_jalan_kec_20.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleMaps_1,group_Polygon,group_Point,group_Line];
lyr_desasumampir_2.set('fieldAliases', {'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_dusun_3.set('fieldAliases', {'id': 'id', 'Nama_dusun': 'Nama_dusun', 'luas_wil': 'luas_wil', });
lyr_batasrw_4.set('fieldAliases', {'id': 'id', 'RW': 'RW', 'luas_wil': 'luas_wil', });
lyr_polygonkebunmakam_5.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'luas_area': 'luas_area', });
lyr_sumampirkulon_6.set('fieldAliases', {'id': 'id', 'RW': 'RW', 'RT': 'RT', 'luas_wil': 'luas_wil', });
lyr_sumampirtengah_7.set('fieldAliases', {'id': 'id', 'RW': 'RW', 'RT': 'RT', 'luas_wil': 'luas_wil', });
lyr_KarangMiri_8.set('fieldAliases', {'id': 'id', 'RW': 'RW', 'RT': 'RT', 'luas_wil': 'luas_wil', });
lyr_kalisari_9.set('fieldAliases', {'id': 'id', 'RW': 'RW', 'RT': 'RT', 'luas_wil': 'luas_wil', });
lyr_perumgriyasatria_10.set('fieldAliases', {'id': 'id', 'RW': 'RW', 'RT': 'RT', 'luas_wil': 'luas_wil', });
lyr_sumampirwetan_11.set('fieldAliases', {'id': 'id', 'RW': 'RW', 'RT': 'RT', 'luas_wil': 'luas_wil', });
lyr_kel_sumampir_polygon_12.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'population': 'population', 'place': 'place', 'status': 'status', 'addr_stree': 'addr_stree', 'medical_sy': 'medical_sy', 'capacity': 'capacity', 'isced_leve': 'isced_leve', 'toilets_di': 'toilets_di', 'toilets_ha': 'toilets_ha', 'operator_t': 'operator_t', 'amenity': 'amenity', 'opening_ho': 'opening_ho', 'building_m': 'building_m', 'building': 'building', 'operator': 'operator', 'health_fac': 'health_fac', 'shop': 'shop', 'landuse': 'landuse', 'staff_coun': 'staff_coun', 'religion': 'religion', 'denominati': 'denominati', 'health_f_1': 'health_f_1', 'leisure': 'leisure', 'is_in': 'is_in', 'backup_gen': 'backup_gen', 'health_f_2': 'health_f_2', 'power': 'power', 'access_roo': 'access_roo', 'boundary': 'boundary', 'name': 'name', 'staff_co_1': 'staff_co_1', 'admin_leve': 'admin_leve', 'addr_postc': 'addr_postc', 'roof_mater': 'roof_mater', 'access': 'access', 'addr_house': 'addr_house', });
lyr_rumahwarga_13.set('fieldAliases', {'id': 'id', 'dusun': 'dusun', });
lyr_rumahku_14.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_desa_sumampir_point_15.set('fieldAliases', {'id': 'id', });
lyr_sumampir_point_16.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_jalan_kab_17.set('fieldAliases', {'id': 'id', 'nama_jln': 'nama_jln', 'lebar_jln': 'lebar_jln', 'panjang_jl': 'panjang_jl', });
lyr_sungai_18.set('fieldAliases', {'id': 'id', 'nm_sungai': 'nm_sungai', 'lbr_sungai': 'lbr_sungai', 'pjg_sungai': 'pjg_sungai', });
lyr_jalan_desa_19.set('fieldAliases', {'id': 'id', 'nama_jln': 'nama_jln', 'lebar_jln': 'lebar_jln', 'panjang_jl': 'panjang_jl', });
lyr_jalan_kec_20.set('fieldAliases', {'id': 'id', 'nama_jln': 'nama_jln', 'lebar_jln': 'lebar_jln', 'panjang_jl': 'panjang_jl', });
lyr_desasumampir_2.set('fieldImages', {'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_dusun_3.set('fieldImages', {'id': 'TextEdit', 'Nama_dusun': 'TextEdit', 'luas_wil': 'TextEdit', });
lyr_batasrw_4.set('fieldImages', {'id': 'TextEdit', 'RW': 'TextEdit', 'luas_wil': 'TextEdit', });
lyr_polygonkebunmakam_5.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'luas_area': 'TextEdit', });
lyr_sumampirkulon_6.set('fieldImages', {'id': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', 'luas_wil': 'TextEdit', });
lyr_sumampirtengah_7.set('fieldImages', {'id': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', 'luas_wil': 'TextEdit', });
lyr_KarangMiri_8.set('fieldImages', {'id': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', 'luas_wil': 'TextEdit', });
lyr_kalisari_9.set('fieldImages', {'id': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', 'luas_wil': 'TextEdit', });
lyr_perumgriyasatria_10.set('fieldImages', {'id': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', 'luas_wil': 'TextEdit', });
lyr_sumampirwetan_11.set('fieldImages', {'id': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', 'luas_wil': 'TextEdit', });
lyr_kel_sumampir_polygon_12.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'population': 'TextEdit', 'place': 'TextEdit', 'status': 'TextEdit', 'addr_stree': 'TextEdit', 'medical_sy': 'TextEdit', 'capacity': 'TextEdit', 'isced_leve': 'TextEdit', 'toilets_di': 'TextEdit', 'toilets_ha': 'TextEdit', 'operator_t': 'TextEdit', 'amenity': 'TextEdit', 'opening_ho': 'TextEdit', 'building_m': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'health_fac': 'TextEdit', 'shop': 'TextEdit', 'landuse': 'TextEdit', 'staff_coun': 'TextEdit', 'religion': 'TextEdit', 'denominati': 'TextEdit', 'health_f_1': 'TextEdit', 'leisure': 'TextEdit', 'is_in': 'TextEdit', 'backup_gen': 'TextEdit', 'health_f_2': 'TextEdit', 'power': 'TextEdit', 'access_roo': 'TextEdit', 'boundary': 'TextEdit', 'name': 'TextEdit', 'staff_co_1': 'TextEdit', 'admin_leve': 'TextEdit', 'addr_postc': 'TextEdit', 'roof_mater': 'TextEdit', 'access': 'TextEdit', 'addr_house': 'TextEdit', });
lyr_rumahwarga_13.set('fieldImages', {'id': 'TextEdit', 'dusun': 'TextEdit', });
lyr_rumahku_14.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_desa_sumampir_point_15.set('fieldImages', {'id': 'TextEdit', });
lyr_sumampir_point_16.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_jalan_kab_17.set('fieldImages', {'id': 'TextEdit', 'nama_jln': 'TextEdit', 'lebar_jln': 'TextEdit', 'panjang_jl': 'TextEdit', });
lyr_sungai_18.set('fieldImages', {'id': 'TextEdit', 'nm_sungai': 'TextEdit', 'lbr_sungai': 'TextEdit', 'pjg_sungai': 'TextEdit', });
lyr_jalan_desa_19.set('fieldImages', {'id': 'TextEdit', 'nama_jln': 'TextEdit', 'lebar_jln': 'TextEdit', 'panjang_jl': 'TextEdit', });
lyr_jalan_kec_20.set('fieldImages', {'id': 'TextEdit', 'nama_jln': 'TextEdit', 'lebar_jln': 'TextEdit', 'panjang_jl': 'TextEdit', });
lyr_desasumampir_2.set('fieldLabels', {'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'inline label - always visible', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_dusun_3.set('fieldLabels', {'id': 'no label', 'Nama_dusun': 'inline label - always visible', 'luas_wil': 'no label', });
lyr_batasrw_4.set('fieldLabels', {'id': 'no label', 'RW': 'inline label - always visible', 'luas_wil': 'no label', });
lyr_polygonkebunmakam_5.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', 'luas_area': 'no label', });
lyr_sumampirkulon_6.set('fieldLabels', {'id': 'no label', 'RW': 'no label', 'RT': 'inline label - always visible', 'luas_wil': 'no label', });
lyr_sumampirtengah_7.set('fieldLabels', {'id': 'no label', 'RW': 'no label', 'RT': 'inline label - always visible', 'luas_wil': 'no label', });
lyr_KarangMiri_8.set('fieldLabels', {'id': 'no label', 'RW': 'no label', 'RT': 'inline label - always visible', 'luas_wil': 'no label', });
lyr_kalisari_9.set('fieldLabels', {'id': 'no label', 'RW': 'no label', 'RT': 'inline label - always visible', 'luas_wil': 'no label', });
lyr_perumgriyasatria_10.set('fieldLabels', {'id': 'no label', 'RW': 'no label', 'RT': 'inline label - always visible', 'luas_wil': 'no label', });
lyr_sumampirwetan_11.set('fieldLabels', {'id': 'no label', 'RW': 'no label', 'RT': 'inline label - always visible', 'luas_wil': 'no label', });
lyr_kel_sumampir_polygon_12.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'population': 'no label', 'place': 'no label', 'status': 'no label', 'addr_stree': 'no label', 'medical_sy': 'no label', 'capacity': 'no label', 'isced_leve': 'no label', 'toilets_di': 'no label', 'toilets_ha': 'no label', 'operator_t': 'no label', 'amenity': 'no label', 'opening_ho': 'no label', 'building_m': 'no label', 'building': 'no label', 'operator': 'no label', 'health_fac': 'no label', 'shop': 'no label', 'landuse': 'no label', 'staff_coun': 'no label', 'religion': 'no label', 'denominati': 'no label', 'health_f_1': 'no label', 'leisure': 'no label', 'is_in': 'no label', 'backup_gen': 'no label', 'health_f_2': 'no label', 'power': 'no label', 'access_roo': 'no label', 'boundary': 'no label', 'name': 'no label', 'staff_co_1': 'no label', 'admin_leve': 'no label', 'addr_postc': 'no label', 'roof_mater': 'no label', 'access': 'no label', 'addr_house': 'no label', });
lyr_rumahwarga_13.set('fieldLabels', {'id': 'no label', 'dusun': 'inline label - always visible', });
lyr_rumahku_14.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', });
lyr_desa_sumampir_point_15.set('fieldLabels', {'id': 'no label', });
lyr_sumampir_point_16.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', });
lyr_jalan_kab_17.set('fieldLabels', {'id': 'no label', 'nama_jln': 'inline label - always visible', 'lebar_jln': 'no label', 'panjang_jl': 'no label', });
lyr_sungai_18.set('fieldLabels', {'id': 'no label', 'nm_sungai': 'inline label - always visible', 'lbr_sungai': 'no label', 'pjg_sungai': 'no label', });
lyr_jalan_desa_19.set('fieldLabels', {'id': 'no label', 'nama_jln': 'inline label - always visible', 'lebar_jln': 'no label', 'panjang_jl': 'no label', });
lyr_jalan_kec_20.set('fieldLabels', {'id': 'no label', 'nama_jln': 'inline label - always visible', 'lebar_jln': 'no label', 'panjang_jl': 'no label', });
lyr_jalan_kec_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});