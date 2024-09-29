var wms_layers = [];
var format_Presentstudysectorisation_0 = new ol.format.GeoJSON();
var features_Presentstudysectorisation_0 = format_Presentstudysectorisation_0.readFeatures(json_Presentstudysectorisation_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Presentstudysectorisation_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Presentstudysectorisation_0.addFeatures(features_Presentstudysectorisation_0);var lyr_Presentstudysectorisation_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Presentstudysectorisation_0, 
                style: style_Presentstudysectorisation_0,
                title: '<img src="styles/legend/Presentstudysectorisation_0.png" /> Present study sectorisation'
            });var format_Nationalboundaries_1 = new ol.format.GeoJSON();
var features_Nationalboundaries_1 = format_Nationalboundaries_1.readFeatures(json_Nationalboundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nationalboundaries_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Nationalboundaries_1.addFeatures(features_Nationalboundaries_1);var lyr_Nationalboundaries_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nationalboundaries_1, 
                style: style_Nationalboundaries_1,
                title: '<img src="styles/legend/Nationalboundaries_1.png" /> National boundaries'
            });var format_SahelianAcaciasavannaecoregion_2 = new ol.format.GeoJSON();
var features_SahelianAcaciasavannaecoregion_2 = format_SahelianAcaciasavannaecoregion_2.readFeatures(json_SahelianAcaciasavannaecoregion_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SahelianAcaciasavannaecoregion_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SahelianAcaciasavannaecoregion_2.addFeatures(features_SahelianAcaciasavannaecoregion_2);var lyr_SahelianAcaciasavannaecoregion_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SahelianAcaciasavannaecoregion_2, 
                style: style_SahelianAcaciasavannaecoregion_2,
                title: '<img src="styles/legend/SahelianAcaciasavannaecoregion_2.png" /> Sahelian Acacia savanna ecoregion'
            });var format_EastSaharaDesertecoregion_3 = new ol.format.GeoJSON();
var features_EastSaharaDesertecoregion_3 = format_EastSaharaDesertecoregion_3.readFeatures(json_EastSaharaDesertecoregion_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EastSaharaDesertecoregion_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_EastSaharaDesertecoregion_3.addFeatures(features_EastSaharaDesertecoregion_3);var lyr_EastSaharaDesertecoregion_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EastSaharaDesertecoregion_3, 
                style: style_EastSaharaDesertecoregion_3,
                title: '<img src="styles/legend/EastSaharaDesertecoregion_3.png" /> East Sahara Desert ecoregion'
            });var format_WestSaharanmontanexericwoodlandsecoregion_4 = new ol.format.GeoJSON();
var features_WestSaharanmontanexericwoodlandsecoregion_4 = format_WestSaharanmontanexericwoodlandsecoregion_4.readFeatures(json_WestSaharanmontanexericwoodlandsecoregion_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WestSaharanmontanexericwoodlandsecoregion_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_WestSaharanmontanexericwoodlandsecoregion_4.addFeatures(features_WestSaharanmontanexericwoodlandsecoregion_4);var lyr_WestSaharanmontanexericwoodlandsecoregion_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WestSaharanmontanexericwoodlandsecoregion_4, 
                style: style_WestSaharanmontanexericwoodlandsecoregion_4,
                title: '<img src="styles/legend/WestSaharanmontanexericwoodlandsecoregion_4.png" /> West Saharan montane xeric woodlands ecoregion'
            });var format_SouthSaharadesertecoregion_5 = new ol.format.GeoJSON();
var features_SouthSaharadesertecoregion_5 = format_SouthSaharadesertecoregion_5.readFeatures(json_SouthSaharadesertecoregion_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SouthSaharadesertecoregion_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SouthSaharadesertecoregion_5.addFeatures(features_SouthSaharadesertecoregion_5);var lyr_SouthSaharadesertecoregion_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SouthSaharadesertecoregion_5, 
                style: style_SouthSaharadesertecoregion_5,
                title: '<img src="styles/legend/SouthSaharadesertecoregion_5.png" /> South Sahara desert ecoregion'
            });var format_WestSaharadesertecoregion_6 = new ol.format.GeoJSON();
var features_WestSaharadesertecoregion_6 = format_WestSaharadesertecoregion_6.readFeatures(json_WestSaharadesertecoregion_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WestSaharadesertecoregion_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_WestSaharadesertecoregion_6.addFeatures(features_WestSaharadesertecoregion_6);var lyr_WestSaharadesertecoregion_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WestSaharadesertecoregion_6, 
                style: style_WestSaharadesertecoregion_6,
                title: '<img src="styles/legend/WestSaharadesertecoregion_6.png" /> West Sahara desert ecoregion'
            });var format_NorthSaharanXericSteppeandWoodlandecoregion_7 = new ol.format.GeoJSON();
var features_NorthSaharanXericSteppeandWoodlandecoregion_7 = format_NorthSaharanXericSteppeandWoodlandecoregion_7.readFeatures(json_NorthSaharanXericSteppeandWoodlandecoregion_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthSaharanXericSteppeandWoodlandecoregion_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NorthSaharanXericSteppeandWoodlandecoregion_7.addFeatures(features_NorthSaharanXericSteppeandWoodlandecoregion_7);var lyr_NorthSaharanXericSteppeandWoodlandecoregion_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NorthSaharanXericSteppeandWoodlandecoregion_7, 
                style: style_NorthSaharanXericSteppeandWoodlandecoregion_7,
                title: '<img src="styles/legend/NorthSaharanXericSteppeandWoodlandecoregion_7.png" /> North Saharan Xeric Steppe and Woodland ecoregion'
            });var format_Mediterraneandrywoodlandsandsteppeecoregion_8 = new ol.format.GeoJSON();
var features_Mediterraneandrywoodlandsandsteppeecoregion_8 = format_Mediterraneandrywoodlandsandsteppeecoregion_8.readFeatures(json_Mediterraneandrywoodlandsandsteppeecoregion_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mediterraneandrywoodlandsandsteppeecoregion_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Mediterraneandrywoodlandsandsteppeecoregion_8.addFeatures(features_Mediterraneandrywoodlandsandsteppeecoregion_8);var lyr_Mediterraneandrywoodlandsandsteppeecoregion_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mediterraneandrywoodlandsandsteppeecoregion_8, 
                style: style_Mediterraneandrywoodlandsandsteppeecoregion_8,
                title: '<img src="styles/legend/Mediterraneandrywoodlandsandsteppeecoregion_8.png" /> Mediterranean dry woodlands and steppe ecoregion'
            });var format_Mediterraneanwoodlandsandforestsecoregion_9 = new ol.format.GeoJSON();
var features_Mediterraneanwoodlandsandforestsecoregion_9 = format_Mediterraneanwoodlandsandforestsecoregion_9.readFeatures(json_Mediterraneanwoodlandsandforestsecoregion_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mediterraneanwoodlandsandforestsecoregion_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Mediterraneanwoodlandsandforestsecoregion_9.addFeatures(features_Mediterraneanwoodlandsandforestsecoregion_9);var lyr_Mediterraneanwoodlandsandforestsecoregion_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mediterraneanwoodlandsandforestsecoregion_9, 
                style: style_Mediterraneanwoodlandsandforestsecoregion_9,
                title: '<img src="styles/legend/Mediterraneanwoodlandsandforestsecoregion_9.png" /> Mediterranean woodlands and forests ecoregion'
            });var format_Mediterraneanconiferandmixedforestsecoregion_10 = new ol.format.GeoJSON();
var features_Mediterraneanconiferandmixedforestsecoregion_10 = format_Mediterraneanconiferandmixedforestsecoregion_10.readFeatures(json_Mediterraneanconiferandmixedforestsecoregion_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mediterraneanconiferandmixedforestsecoregion_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Mediterraneanconiferandmixedforestsecoregion_10.addFeatures(features_Mediterraneanconiferandmixedforestsecoregion_10);var lyr_Mediterraneanconiferandmixedforestsecoregion_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mediterraneanconiferandmixedforestsecoregion_10, 
                style: style_Mediterraneanconiferandmixedforestsecoregion_10,
                title: '<img src="styles/legend/Mediterraneanconiferandmixedforestsecoregion_10.png" /> Mediterranean conifer and mixed forests ecoregion'
            });var format_Labels_districts_11 = new ol.format.GeoJSON();
var features_Labels_districts_11 = format_Labels_districts_11.readFeatures(json_Labels_districts_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Labels_districts_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Labels_districts_11.addFeatures(features_Labels_districts_11);cluster_Labels_districts_11 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Labels_districts_11
});var lyr_Labels_districts_11 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Labels_districts_11, 
                style: style_Labels_districts_11,
                title: '<img src="styles/legend/Labels_districts_11.png" /> Labels_districts'
            });

lyr_Presentstudysectorisation_0.setVisible(true);lyr_Nationalboundaries_1.setVisible(true);lyr_SahelianAcaciasavannaecoregion_2.setVisible(true);lyr_EastSaharaDesertecoregion_3.setVisible(true);lyr_WestSaharanmontanexericwoodlandsecoregion_4.setVisible(true);lyr_SouthSaharadesertecoregion_5.setVisible(true);lyr_WestSaharadesertecoregion_6.setVisible(true);lyr_NorthSaharanXericSteppeandWoodlandecoregion_7.setVisible(true);lyr_Mediterraneandrywoodlandsandsteppeecoregion_8.setVisible(true);lyr_Mediterraneanwoodlandsandforestsecoregion_9.setVisible(true);lyr_Mediterraneanconiferandmixedforestsecoregion_10.setVisible(true);lyr_Labels_districts_11.setVisible(true);
var layersList = [lyr_Presentstudysectorisation_0,lyr_Nationalboundaries_1,lyr_SahelianAcaciasavannaecoregion_2,lyr_EastSaharaDesertecoregion_3,lyr_WestSaharanmontanexericwoodlandsecoregion_4,lyr_SouthSaharadesertecoregion_5,lyr_WestSaharadesertecoregion_6,lyr_NorthSaharanXericSteppeandWoodlandecoregion_7,lyr_Mediterraneandrywoodlandsandsteppeecoregion_8,lyr_Mediterraneanwoodlandsandforestsecoregion_9,lyr_Mediterraneanconiferandmixedforestsecoregion_10,lyr_Labels_districts_11];
lyr_Presentstudysectorisation_0.set('fieldAliases', {'LEFT_FID': 'LEFT_FID', 'RIGHT_FID': 'RIGHT_FID', });
lyr_Nationalboundaries_1.set('fieldAliases', {'ISO': 'ISO', 'NAME_0': 'NAME_0', 'NAME_ENGLI': 'NAME_ENGLI', 'NAME_LOCAL': 'NAME_LOCAL', });
lyr_SahelianAcaciasavannaecoregion_2.set('fieldAliases', {'FID_Ecoreg': 'FID_Ecoreg', });
lyr_EastSaharaDesertecoregion_3.set('fieldAliases', {'FID_Ecoreg': 'FID_Ecoreg', });
lyr_WestSaharanmontanexericwoodlandsecoregion_4.set('fieldAliases', {'FID_Ecoreg': 'FID_Ecoreg', });
lyr_SouthSaharadesertecoregion_5.set('fieldAliases', {'FID_Ecoreg': 'FID_Ecoreg', });
lyr_WestSaharadesertecoregion_6.set('fieldAliases', {'FID_Ecoreg': 'FID_Ecoreg', });
lyr_NorthSaharanXericSteppeandWoodlandecoregion_7.set('fieldAliases', {'FID_Ecoreg': 'FID_Ecoreg', });
lyr_Mediterraneandrywoodlandsandsteppeecoregion_8.set('fieldAliases', {'FID_Ecoreg': 'FID_Ecoreg', });
lyr_Mediterraneanwoodlandsandforestsecoregion_9.set('fieldAliases', {'ID_0': 'ID_0', });
lyr_Mediterraneanconiferandmixedforestsecoregion_10.set('fieldAliases', {'FID_Ecoreg': 'FID_Ecoreg', });
lyr_Labels_districts_11.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_Presentstudysectorisation_0.set('fieldImages', {'LEFT_FID': 'TextEdit', 'RIGHT_FID': 'TextEdit', });
lyr_Nationalboundaries_1.set('fieldImages', {'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'NAME_ENGLI': 'TextEdit', 'NAME_LOCAL': 'TextEdit', });
lyr_SahelianAcaciasavannaecoregion_2.set('fieldImages', {'FID_Ecoreg': 'TextEdit', });
lyr_EastSaharaDesertecoregion_3.set('fieldImages', {'FID_Ecoreg': 'TextEdit', });
lyr_WestSaharanmontanexericwoodlandsecoregion_4.set('fieldImages', {'FID_Ecoreg': 'TextEdit', });
lyr_SouthSaharadesertecoregion_5.set('fieldImages', {'FID_Ecoreg': 'TextEdit', });
lyr_WestSaharadesertecoregion_6.set('fieldImages', {'FID_Ecoreg': 'TextEdit', });
lyr_NorthSaharanXericSteppeandWoodlandecoregion_7.set('fieldImages', {'FID_Ecoreg': 'TextEdit', });
lyr_Mediterraneandrywoodlandsandsteppeecoregion_8.set('fieldImages', {'FID_Ecoreg': 'TextEdit', });
lyr_Mediterraneanwoodlandsandforestsecoregion_9.set('fieldImages', {'ID_0': 'TextEdit', });
lyr_Mediterraneanconiferandmixedforestsecoregion_10.set('fieldImages', {'FID_Ecoreg': 'TextEdit', });
lyr_Labels_districts_11.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Presentstudysectorisation_0.set('fieldLabels', {'LEFT_FID': 'no label', 'RIGHT_FID': 'no label', });
lyr_Nationalboundaries_1.set('fieldLabels', {'ISO': 'no label', 'NAME_0': 'no label', 'NAME_ENGLI': 'no label', 'NAME_LOCAL': 'no label', });
lyr_SahelianAcaciasavannaecoregion_2.set('fieldLabels', {'FID_Ecoreg': 'no label', });
lyr_EastSaharaDesertecoregion_3.set('fieldLabels', {'FID_Ecoreg': 'no label', });
lyr_WestSaharanmontanexericwoodlandsecoregion_4.set('fieldLabels', {'FID_Ecoreg': 'no label', });
lyr_SouthSaharadesertecoregion_5.set('fieldLabels', {'FID_Ecoreg': 'no label', });
lyr_WestSaharadesertecoregion_6.set('fieldLabels', {'FID_Ecoreg': 'no label', });
lyr_NorthSaharanXericSteppeandWoodlandecoregion_7.set('fieldLabels', {'FID_Ecoreg': 'no label', });
lyr_Mediterraneandrywoodlandsandsteppeecoregion_8.set('fieldLabels', {'FID_Ecoreg': 'no label', });
lyr_Mediterraneanwoodlandsandforestsecoregion_9.set('fieldLabels', {'ID_0': 'no label', });
lyr_Mediterraneanconiferandmixedforestsecoregion_10.set('fieldLabels', {'FID_Ecoreg': 'no label', });
lyr_Labels_districts_11.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_Labels_districts_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});