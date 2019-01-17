<?php
$bdd = new PDO("mysql:host=localhost;dbname=email;charset=utf8", "root", "");
if(isset($_POST['email'])){
$requete = $bdd ->prepare("INSERT INTO expediteur(email) VALUES(?)");
$requete->execute(array($_POST['email']));
?>
<?php
}
?>