/* let arrayColores = ["red", "blue", "green", "orange"];

$(".btnColor").click(()=>{
        $(".colorH1").animate({
            opacity: "1"},"slow", function (){
                for (x of arrayColores){
                    $(".colorH1").css(
                        "background-color","x.val()"
                    )
                }
            })})


$(".btnMostrar").click(() =>{
    $(".contenido").slideToggle();
    console.log("hago click")
}) */

$("#animaciones").prepend('<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam enim dolor voluptates repellat vero non labore impedit, natus deleniti eum doloribus laborum assumenda nihil dolore corporis dolores architecto sed consectetur!</h1>');

$('h1').css("color", "blue")
    .slideUp("3000")
    .slideDown('3250')
    .slideUp("3500")
    .slideDown('4000');