var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_purwanegara_1 = new ol.format.GeoJSON();
var features_purwanegara_1 = format_purwanegara_1.readFeatures(json_purwanegara_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_purwanegara_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_purwanegara_1.addFeatures(features_purwanegara_1);
var lyr_purwanegara_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_purwanegara_1,
maxResolution:14.00223307613098,
 
                style: style_purwanegara_1,
                popuplayertitle: 'purwanegara',
                interactive: true,
                title: '<img src="styles/legend/purwanegara_1.png" /> purwanegara'
            });
var format_Desa_2 = new ol.format.GeoJSON();
var features_Desa_2 = format_Desa_2.readFeatures(json_Desa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desa_2.addFeatures(features_Desa_2);
var lyr_Desa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desa_2,
maxResolution:28.00446615226196,
 
                style: style_Desa_2,
                popuplayertitle: 'Desa',
                interactive: true,
    title: 'Desa<br />\
    <img src="styles/legend/Desa_2_0.png" /> Bancarkembar<br />\
    <img src="styles/legend/Desa_2_1.png" /> Bobosan<br />\
    <img src="styles/legend/Desa_2_2.png" /> Grendeng<br />\
    <img src="styles/legend/Desa_2_3.png" /> Karangwangkal<br />\
    <img src="styles/legend/Desa_2_4.png" /> Pabuaran<br />\
    <img src="styles/legend/Desa_2_5.png" /> Sumampir<br />\
    <img src="styles/legend/Desa_2_6.png" /> <br />' });
var format_PointKantorKec_3 = new ol.format.GeoJSON();
var features_PointKantorKec_3 = format_PointKantorKec_3.readFeatures(json_PointKantorKec_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PointKantorKec_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PointKantorKec_3.addFeatures(features_PointKantorKec_3);
var lyr_PointKantorKec_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PointKantorKec_3, 
                style: style_PointKantorKec_3,
                popuplayertitle: 'Point Kantor Kec',
                interactive: true,
                title: '<img src="styles/legend/PointKantorKec_3.png" /> Point Kantor Kec'
            });
var format_BalaiDesa_4 = new ol.format.GeoJSON();
var features_BalaiDesa_4 = format_BalaiDesa_4.readFeatures(json_BalaiDesa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BalaiDesa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BalaiDesa_4.addFeatures(features_BalaiDesa_4);
var lyr_BalaiDesa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BalaiDesa_4,
maxResolution:14.00223307613098,
 
                style: style_BalaiDesa_4,
                popuplayertitle: 'Balai Desa',
                interactive: true,
                title: '<img src="styles/legend/BalaiDesa_4.png" /> Balai Desa'
            });
var format_Kuburan_5 = new ol.format.GeoJSON();
var features_Kuburan_5 = format_Kuburan_5.readFeatures(json_Kuburan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuburan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuburan_5.addFeatures(features_Kuburan_5);
var lyr_Kuburan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuburan_5,
maxResolution:14.00223307613098,
 
                style: style_Kuburan_5,
                popuplayertitle: 'Kuburan',
                interactive: true,
                title: '<img src="styles/legend/Kuburan_5.png" /> Kuburan'
            });
var format_sekolah_6 = new ol.format.GeoJSON();
var features_sekolah_6 = format_sekolah_6.readFeatures(json_sekolah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sekolah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sekolah_6.addFeatures(features_sekolah_6);
var lyr_sekolah_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sekolah_6,
maxResolution:14.00223307613098,
 
                style: style_sekolah_6,
                popuplayertitle: 'sekolah',
                interactive: true,
                title: '<img src="styles/legend/sekolah_6.png" /> sekolah'
            });
var format_purwokertoutara_7 = new ol.format.GeoJSON();
var features_purwokertoutara_7 = format_purwokertoutara_7.readFeatures(json_purwokertoutara_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_purwokertoutara_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_purwokertoutara_7.addFeatures(features_purwokertoutara_7);
var lyr_purwokertoutara_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_purwokertoutara_7,
maxResolution:70.0111653806549,
 
                style: style_purwokertoutara_7,
                popuplayertitle: 'purwokerto utara',
                interactive: true,
                title: '<img src="styles/legend/purwokertoutara_7.png" /> purwokerto utara'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_purwanegara_1.setVisible(true);lyr_Desa_2.setVisible(true);lyr_PointKantorKec_3.setVisible(true);lyr_BalaiDesa_4.setVisible(true);lyr_Kuburan_5.setVisible(true);lyr_sekolah_6.setVisible(true);lyr_purwokertoutara_7.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_purwanegara_1,lyr_Desa_2,lyr_PointKantorKec_3,lyr_BalaiDesa_4,lyr_Kuburan_5,lyr_sekolah_6,lyr_purwokertoutara_7];
lyr_purwanegara_1.set('fieldAliases', {'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_Desa_2.set('fieldAliases', {'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_PointKantorKec_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_BalaiDesa_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Kuburan_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_sekolah_6.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_purwokertoutara_7.set('fieldAliases', {'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_purwanegara_1.set('fieldImages', {'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_Desa_2.set('fieldImages', {'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_PointKantorKec_3.set('fieldImages', {'id': '', 'Nama': '', });
lyr_BalaiDesa_4.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Kuburan_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_sekolah_6.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_purwokertoutara_7.set('fieldImages', {'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_purwanegara_1.set('fieldLabels', {'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'inline label - always visible', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_Desa_2.set('fieldLabels', {'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'inline label - always visible', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_PointKantorKec_3.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', });
lyr_BalaiDesa_4.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', });
lyr_Kuburan_5.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', });
lyr_sekolah_6.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', });
lyr_purwokertoutara_7.set('fieldLabels', {'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'inline label - always visible', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_purwokertoutara_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});