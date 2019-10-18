// setInterval(animate_layer_6, 1000);
// var deg6 = 3.75;
// function animate_layer_6(){
//     document.getElementsByClassName("layer-6")[0].style.transform = "rotate(" + deg6 + "deg)";
//     deg6 += 3.75;
// }



// var counter = 0;
// var scale1;        //3.2, 2.2, 1.5, 1
// var scale2;        //2.2, 1.5, 1, 0.7
// var scale3;        //1.4, 1, 0.7, 0.5
// var scale4;        //1, 0.7, 0.5, 0.3
// setInterval(function(){
//     switch(counter){
//         case 0:
//         {
//             scale1 = 1.5;
//             scale2 = 1.5;
//             scale3 = 1.4;
//             scale4 = 0.3;
//             break;
//         }
//         case 1:
//         {
//             scale1 = 2.2;
//             scale2 = 2.2;
//             scale3 = 0.5;
//             scale4 = 0.5;
//             break;
//         }
//         case 2:
//         {
//             scale1 = 3.2;
//             scale2 = 0.7;
//             scale3 = 0.7;
//             scale4 = 0.7;
//             break;
//         }
//         case 3:
//         {
//             scale1 = 1;
//             scale2 = 1;
//             scale3 = 1;
//             scale4 = 1;
//             break;
//         }
//         default:
//         {
//             counter = 0;
//             scale1 = 1.5;
//             scale2 = 1.5;
//             scale3 = 1.4;
//             scale4 = 0.3;
//         }
//     }
//     animate_layer_1();
//     animate_layer_2();
//     animate_layer_3();
//     animate_layer_4();
//     counter++;
// }, 1000);

// function animate_layer_1() {
//     var path = document.querySelectorAll(".layer-1 .cls-1");
//     for(var i = 0; i < path.length; i++){
//         scaleElem(path[i], scale1);
//     }
// }
// function animate_layer_2() {
//     var path = document.querySelectorAll(".layer-2 .cls-1");
//     for(var i = 0; i < path.length; i++){
//         scaleElem(path[i], scale2);
//     }
// }
// function animate_layer_3() {
//     var path = document.querySelectorAll(".layer-3 .cls-1");
//     for(var i = 0; i < path.length; i++){
//         scaleElem(path[i], scale3);
//     }
// }
// function animate_layer_4() {
//     var path = document.querySelectorAll(".layer-4 .cls-1");
//     for(var i = 0; i < path.length; i++){
//         scaleElem(path[i], scale4);
//     }
// }

// function scaleElem(elem, scale) {
//     var originX = elem.getBBox().x + elem.getBBox().width/2;
//     var originY = elem.getBBox().y + elem.getBBox().height/2;
//     elem.style.transformOrigin = originX +"px "+ originY+"px";
//     elem.style.transform = "scale("+scale+")";
// }
