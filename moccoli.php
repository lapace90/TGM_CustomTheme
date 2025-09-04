<?php
$divinita = [
    "San Gennaro",
    "Dio",
    "Madonna",
    "Sant'Antonio",
    "Gesù",
    "San Francesco",
    "Allah",
    "Santa Lucia",
    "Buddha",
    "Padre Pio"
];

$aggettivo = [
    "lupo",
    "assassino",
    "maiale",
    "a pecora",
    "ladro",
    "merda",
    "cane",
    "serpente",
    "piccione",
    "camalupente",
    "boia",
    "porco",
    "cornuto",
];

$x = $divinita[array_rand($divinita)];
$y = $aggettivo[array_rand($aggettivo)];

echo $x . " " . $y . "!";
?>
