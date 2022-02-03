var photos = [
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm1dPLrUhPXp3_KRNx1hKagVPaoLcm-kf_oQ&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ubXmQs_OiDxQTdRmr4iYwU6Fyv0Xggd35A&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJVSmblMY5jxM3xH-0_5Vk_DFkOqm156UuA&usqp=CAU"
];
for (let image of photos){
     $(".gallery").append("<img src=" + image + ">");}

var gallery =[];
$(".add").click(function() {
let image = $(".picture-url").val();
gallery.push(image);
 $(".gallery").append("<img src=" + image + ">");
});

