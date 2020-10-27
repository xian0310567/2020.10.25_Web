$(function (){
    $(document).ready(function() {
        grp();
    });

    function grp() {
        setTimeout(function() {$('#grp1').animate({height : "286px"});},200);
        setTimeout(function() {$('#grp2').animate({height : "106px"});},400);
        setTimeout(function() {$('#grp3').animate({height : "206px"});},600);
        setTimeout(function() {$('#grp4').animate({height : "236px"});},760);
        setTimeout(function() {$('#grp5').animate({height : "116px"});},940);
        setTimeout(function() {$('#grp6').animate({height : "340px"});},1100);
        setTimeout(function() {$('#grp7').animate({height : "243px"});},1290);
        setTimeout(function() {$('#grp8').animate({height : "46px"});},1400);
    }
});