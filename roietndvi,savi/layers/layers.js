var wms_layers = [];


        var lyr_GooglecnNormal_0 = new ol.layer.Tile({
            'title': 'Google.cn Normal',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.com/intl/zh-CN_cn/permissions/geoguidelines/attr-guide.html">地图数据 ©2016 Google</a>',
                url: 'http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_NDVI_ROIet_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "NDVI_ROIet",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NDVI_ROIet_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11496120.000000, 1735871.087570, 11616360.000000, 1859547.720685]
                            })
                        });
var lyr_SAVI_ROIet_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "SAVI_ROIet",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SAVI_ROIet_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11496120.000000, 1735871.087570, 11616360.000000, 1859547.720685]
                            })
                        });

lyr_GooglecnNormal_0.setVisible(true);lyr_NDVI_ROIet_1.setVisible(true);lyr_SAVI_ROIet_2.setVisible(true);
var layersList = [lyr_GooglecnNormal_0,lyr_NDVI_ROIet_1,lyr_SAVI_ROIet_2];
