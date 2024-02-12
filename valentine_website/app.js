"use strict";

function redirigerVersPageYes() {
    window.location.href = 'autres-pages/yes.html';
}

// Afficher les boutons YES et NO dès l'ouverture de la page
var yesButton = document.getElementById('yesButton');
var noButton = document.getElementById('noButton');
yesButton.style.display = 'block';
noButton.style.display = 'block';

// Déclaration de la fonction changerTexteEtTaille
function changerTexteEtTaille() {
    var clickCount = 0;
    var initialFontSize = parseFloat(getComputedStyle(yesButton).fontSize);
    var increment = 7; // Taille de l'incrémentation en pixels

    // Tableau contenant les différents textes pour le bouton "NO"
    var texts = ["No", "Are you sure ?", "Really sure ?", "Please say yes", "Last chance !", "Are you certain ?", "You're making me sad...", "Please, please, please !", "Think again", "You're so mean !", "Nooooooo !"];

    // Fonction à exécuter lors du clic sur le bouton "NO"
    function onClickNoButton() {
        clickCount++;
        // Choisir le texte à afficher en fonction du nombre de clics
        var textIndex = clickCount % texts.length;
        var textToShow = texts[textIndex];

        // Changer le texte du bouton "NO"
        noButton.textContent = textToShow;

        // Augmenter la taille du bouton "YES" à chaque clic sur "NO"
        yesButton.style.fontSize = (initialFontSize + clickCount * increment) + 'px';

        // Rediriger vers une autre page après le 10ème clic
        if (clickCount === 11) {
            window.location.href = 'autres-pages/no.html';
        }

        // Réinitialiser la taille du bouton "NO" à la taille de police initiale
        noButton.style.fontSize = initialFontSize + 'px';

        // Définir les limites pour les valeurs de position
        var minX = 50; // Valeur minimale de position en X
        var maxX = window.innerWidth - noButton.offsetWidth - 50; // Valeur maximale de position en X
        var minY = 50; // Valeur minimale de position en Y
        var maxY = window.innerHeight - noButton.offsetHeight - 50; // Valeur maximale de position en Y

        // Générer des valeurs aléatoires pour les nouvelles positions dans les plages spécifiées
        var newX = Math.random() * (maxX - minX) + minX;
        var newY = Math.random() * (maxY - minY) + minY;

        // Appliquer les nouvelles positions au bouton NO
        noButton.style.left = newX + 'px';
        noButton.style.top = newY + 'px';
    }

    return onClickNoButton;
}

document.addEventListener('DOMContentLoaded', function() {
    noButton.addEventListener('click', changerTexteEtTaille());

    yesButton.addEventListener('click', redirigerVersPageYes);
});
