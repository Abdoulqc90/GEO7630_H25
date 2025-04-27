//  Événement au survol de la couche "stationnements" : on change le curseur de la souris
map.on('mouseenter', 'Nbres_de_places_et_heures_de_stationnement', () => {
    // Change le curseur en pointeur (main) pour indiquer que l'élément est interactif
    map.getCanvas().style.cursor = 'pointer';
});

//  Quand la souris quitte la couche "stationnements" : on remet le curseur par défaut
map.on('mouseleave', 'Nbres_de_places_et_heures_de_stationnement', () => {
    map.getCanvas().style.cursor = '';
});

//  Événement au clic sur un stationnements
map.on('click', 'Nbres_de_places_et_heures_de_stationnement', (e) => {
    // On récupère la première entité (feature) cliquée
    const feature = e.features[0];

    // Extraction des coordonnées du point (on fait une copie avec slice())
    const coordinates = feature.geometry.coordinates.slice();

    // Récupération de propriétés pour alimenter la popup
    const name = feature.properties.name;
    const description = feature.properties.type;

    // 📍 Création et affichage d'une popup HTML à la position cliquée
    // new maplibregl.Popup()
    //     .setLngLat(coordinates)
    //     .setHTML(<><strong>${name}</strong><br>${description})
    //             .addTo(map);

    //             // Zoom et centrage automatique vers le point sélectionné
    //             map.flyTo({center}: coordinates, zoom: 14 );
    //             // JumpTo</></>
})
        