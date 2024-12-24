var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Ohomemmaislindodomundo_1 = new ol.format.GeoJSON();
var features_Ohomemmaislindodomundo_1 = format_Ohomemmaislindodomundo_1.readFeatures(json_Ohomemmaislindodomundo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ohomemmaislindodomundo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ohomemmaislindodomundo_1.addFeatures(features_Ohomemmaislindodomundo_1);
var lyr_Ohomemmaislindodomundo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ohomemmaislindodomundo_1, 
                style: style_Ohomemmaislindodomundo_1,
                popuplayertitle: "O homem mais lindo do mundo",
                interactive: true,
                title: '<img src="styles/legend/Ohomemmaislindodomundo_1.png" /> O homem mais lindo do mundo'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Ohomemmaislindodomundo_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Ohomemmaislindodomundo_1];
lyr_Ohomemmaislindodomundo_1.set('fieldAliases', {'lat': 'lat', 'long': 'long', 'nome': 'nome', 'informaç�': 'informaç�', });
lyr_Ohomemmaislindodomundo_1.set('fieldImages', {'lat': 'TextEdit', 'long': 'TextEdit', 'nome': 'TextEdit', 'informaç�': 'TextEdit', });
lyr_Ohomemmaislindodomundo_1.set('fieldLabels', {'lat': 'hidden field', 'long': 'hidden field', 'nome': 'no label', 'informaç�': 'no label', });
lyr_Ohomemmaislindodomundo_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});