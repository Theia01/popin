<!DOCTYPE HTML>

<!-- Ouverture de la balise HTML et définition de la langue sur FR -->
<html lang="FR">
    <!-- Ouverture de la tête du document -->
    <head>
        <title>Javascript | PopIn</title>
        <link rel="icon" href="image/favicon_pas_ouf_parce_que_cest_celle_des_ops_mais_yavait_que_ca.png" />
        <!-- Mise en place du charset -->
        <meta charset="utf-8">
        <!-- Importation du CSS -->
        <link rel="stylesheet" href="css/main.css">
        <!-- Importation d'Axios -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    </head>
    <!-- Ouverture du corps de la page -->
    <body>
    <!-- Ouverture de la balise permettant d'assombrir le fond -->
    <div class="">
        <!-- Bouton permettant d'ouvrir le popin -->
        <button class="btn">Recevoir ma peluche</button>
    </div>
    <!-- Div contenant le popin -->
    <div class="hidden">
        <!-- Bouton permettant de fermer le popin -->
        <span title="Fermer">X</span><br />
        <!-- Titre du popin -->
        <h1 class="center">Inscrivez-vous et recevez<br /> votre peluche !</h1><br />
        <!-- Ouverture du formulaire -->
        <form class="center" method="POST" action=""><br /><br />
            <label for="mail" class="votreadressemail"><b>Votre adresse mail : </b></label><br /><br />
            <input type="text" id="mail" name="mail" class="email" /><br><br><br />
            <input type="submit" class="vbtndbld" name="forminscription" value="S'inscrire" disabled />
        </form>
    </div>
    <!-- Importation du script JS -->
    <script type="application/javascript" src="script/script.js"></script>
    </body>
<!-- Fermeture du document -->
</html>