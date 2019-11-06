$(function(){
  // var pour le nombre d'essai
  let nbTry = 0;
  $('button').click(function(){
    let trueNumber = $('#number').val();
    ++nbTry;
    if(trueNumber == 48){
      //${} permet d'afficher une variable dans la function entre les cotes ``
      $('#result').html(`Trouvé ! Nombre d'essais : ${nbTry}`);
    }else if (trueNumber > 48){
      $('#result').html('moins de ' + trueNumber);
    }else{
      $('#result').html('plus de ' + trueNumber);
    }
  });
});


// VERSION AVEC UN  NOMBRE ALEATOIRE

// var randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(randomNumber);
// var nbTry = 0;
//
// $(function(){
//   $('button').click(function(){
//     let trueNumber = $('#number').val();
//     if (trueNumber < 0 || trueNumber > 100 || trueNumber == '') {
//       $('span').html('Le nombre est compris entre 0 et 100 !');
//       return;
//     }
//     ++nbTry;
//     if (trueNumber == randomNumber) {
//       $('span').html(`Trouvé ! Nombre d'essais : ${nbTry}`);
//       return;
//     };
//     if (trueNumber > randomNumber) {
//       $('span').html('Plus petit');
//     } else {
//       $('span').html('Plus grand');
//     };
//   });
// });
