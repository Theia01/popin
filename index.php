<!DOCTYPE HTML>
<html lang="FR">
    <head>
        <title>Javascript | PopIn</title>
        <link rel="icon" href="image/favicon_pas_ouf_parce_que_cest_celle_des_ops_mais_yavait_que_ca.png" />
        <meta charset="utf-8">
        <link rel="stylesheet" href="css/main.css">
    </head>
    <body>
    <div class="">
        <button class="btn">Recevoir ma peluche</button>
    </div>
    <div class="hidden">
        <span title="Fermer">X</span><br />
        <h1 class="center">Inscrivez-vous et recevez<br /> votre peluche !</h1><br />
        <form class="center" method="POST" action=""><br /><br />
            <label for="mail" class="votreadressemail"><b>Votre adresse mail : </b></label><br /><br />
            <input type="text" id="mail" name="mail" class="email" /><br><br><br />
            <input type="submit" class="vbtndbld" name="forminscription" value="S'inscrire" disabled />
        </form>
    </div>
    <script type="application/javascript" src="script/main.js"></script>
    </body>
</html>