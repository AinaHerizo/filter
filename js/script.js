$(document).ready(function(){
    //ENTRER DES NOMS
    $("input").on("keyup",function(){
        $("#place_nom").text($("#nom").val());
        $("#place_prenom").text($("#prenom").val());
        if($("#place_nom").text() == $("#place_prenom").text()){
            if($("#place_nom").text()=='' && $("#place_prenom").text()==''){
                $("#identique").text('')  
            }
            else{
                $("#identique").text('Mitovy reo')
            }
        }
        else {
            $("#identique").text('')
        }
    })
    //LES IMAGES
        //Ajout des images
    for (let i = 1; i < 5; i++) {
        $(".voiture_content").prepend("<div class='image_content'><div class='exit'><div class='croix'></div></div><img src='image/voiture/"+i+".jpg'><div class=descr>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div></div>");
        $(".plante_content").prepend("<div class='image_content'><div class='exit'><div class='croix'></div></div><img src='image/plante/"+i+".jpg'><div class=descr>Exercitationem autem dolores vel labore inventore molestias. Maxime vitae amet recusandae, libero beatae, omnis fuga earum accusamus voluptates inventore et consequuntur nostrum?</div></div>");
        $(".moto_content").prepend("<div class='image_content'><div class='exit'><div class='croix'></div></div><img src='image/moto/"+i+".jpg'><div class=descr>Maxime vitae amet recusandae, libero beatae, omnis fuga earum accusamus voluptates inventore et consequuntur nostrum?</div></div>");
        $(".animaux_content").prepend("<div class='image_content'><div class='exit'><div class='croix'></div></div><img src='image/animaux/"+i+".jpg'><div class=descr>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem autem dolores vel labore inventore molestias. Maxime vitae amet recusandae, libero beatae, omnis fuga earum accusamus voluptates inventore et consequuntur nostrum?</div></div>");
    }
        //Description de l'image selectionner
    $(".info_image").hide()
    $(".image_content img").on("click", function(){
        let x=$(this).attr("src");
        $(".image_select img").attr("src", x)
        $(".info_image").hide();
        $(".info_image").fadeIn(1000);
        $(".image_description").text($(this).parent().find(".descr").text());
    })
        //Fermuture avec le bouton rouge
    $(".croix").on("click",function(){
        $(this).parents(".image_content").fadeOut();
            //L'image dans le resume est ferme si la source ests ferme :
        if ($(this).parents(".image_content").find("img").attr("src") == $(".image_select img").attr("src")){
            $(".info_image").hide();
        }
    })
    $(".exit").hide();
    $(".image_content").on("mouseleave",function(){
        $(".exit").fadeOut(500);
    })
    $(".image_content").on("mouseenter",function(){
        $(this).find(".exit").fadeIn(500);
    })
        //Filtres images
    $(".bouton_content input").on("click",function(){
        $(".image_content").hide();
        let x = $(this).val();
        if (x == "all"){
            $(".image_content").show();
        }
        else{
            $("."+x+" .image_content").show();
        }
    })
})