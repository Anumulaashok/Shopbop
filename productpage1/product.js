
var show=0;
var more=document.querySelector(".more-less")

more.style.height="50px";
more.style.overflow="hidden";

function showmorefun(){
show++;
var but=document.querySelector("button")
if(show%2==1){
    var more=document.querySelector(".more-less")
    more.style.height="auto";
    more.style.overflow="show";
    but.innerText="showless.. "
   

}
else{
    var more=document.querySelector(".more-less")
    more.style.height="50px";
    more.style.overflow="hidden";
    but.innerText="showmore.."

}
}


  var Data1 =[
    {
        image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446620504/clubm4446620504_1651088715137_2-0.__UX540__._QL90_.jpg",
        image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446620504/clubm4446620504_1651088715215_2-0.__UX540__._QL90_.jpg",
        image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446620504/clubm4446620504_1651088716164_2-0.__UX540__._QL90_.jpg",
        image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446620504/clubm4446620504_1651088714676_2-0.__UX540__._QL90_.jpg",
        image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446620504/clubm4446620504_1651088715601_2-0.__UX540__._QL90_.jpg" ,
        gender: "MEN",
        size:`Men's Sizes`,
        heading:"Reigning Champ",
        info:"Relaxed Crewneck Sweatshirt",
        color:"color:Earth",
        price:"62.50"
    }
  ]
// for disply purpose
display(Data1)

function display(Data1){
Data1.forEach(function(el){
// <--image1-->
var image1= document.querySelector("#img1");
var im1=document.createElement("img");
im1.setAttribute("src",el.image_url1)
image1.append(im1)

var image2= document.querySelector("#img2");
var im2=document.createElement("img")
im2.setAttribute("src",el.image_url2)
image2.append(im2);

var image3= document.querySelector("#img3");
var im3=document.createElement("img")
im3.setAttribute("src",el.image_url3)
image3.append(im3);
var image4= document.querySelector("#img4");
var im4=document.createElement("img")
im4.setAttribute("src",el.image_url4)
image4.append(im4);
var image5= document.querySelector("#img5");
var im5=document.createElement("img")
im5.setAttribute("src",el.image_url5)
image5.append(im5)

var gen=document.querySelector("#gen");
gen.innerText=el.gender;

var size=document.querySelector(".size");
size.innerText=el.size;

var heading=document.querySelector("#gen+h1");
heading.innerText=el.heading;

var disc=document.querySelector("#gen+h1+p");
disc.innerText=el.info;

var pric=document.querySelector("#price");
pric.innerText=el.price;

var colar=document.querySelector("#price+p")
colar.innerText=el.color;

var buto=document.querySelector("#add")

buto.addEventListener("click",function(){
    console.log(el)
  buttonfunction(el)
   
})
})


}
// display purpose end

// display first box start
var mensData = [
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX4296/reebok_EX4296_1.jpg.plp",
      name: "MEN'S REEBOK RUNNING ROADMAP SHOES",
      price: "1170",
      strikedoffprice: "$2599",
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX3921/reebok_EX3921_1.jpg.plp",
      name: "MEN'S REEBOK SWIM ARUBA FLIP SLIPPERS ",
      price: 699,
      strikedoffprice: 999,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX4160/reebok_EX4160_1.jpg.plp",
      name: " MEN'S REEBOK RUNNING AUSTIN SHOES",
      price: 945,
      strikedoffprice: 2099,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FV8798/MEN_SWIM_SLIPPERS_FV8798_1.jpg.plp",
      name: "MEN'S REEBOK SWIM AVENGER FLIP LP SLIPPERS",
      price: 399,
      strikedoffprice: 799,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EW5173/reebok_EW5173_1.jpg.plp",
      name: "MEN'S REEBOK RUNNING TEMPO SHOES ",
      price: 1620,
      strikedoffprice: 3599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FV7329/reebok_FV7329_1.jpg.plp ",
      name: " MEN'S REEBOK RUNNING ASTRO BOOSTER SHOES ",
      price: 1440,
      strikedoffprice: 3199,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GD8567/MEN_TRAINING_PANTS_GD8567_1.jpg.plp ",
      name: " MEN'S TRAINING WORKOUT READY ELITAGE PANTS ",
      price: 1999,
      strikedoffprice: 3199,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GQ8758/reebok_GQ8758_1.jpg.plp ",
      name: "MEN'S REEBOK TRAINING  POLO T-SHIRTS TEE  ",
      price: 769,
      strikedoffprice: 1099,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GP7180/reebok_GP7180_1.jpg.plp",
      name: "MEN'S REEBOK TRAINING WORKOUT  TEE  ",
      price: 1299,
      strikedoffprice: 1440,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX3924/reebok_EX3924_1.jpg.plp ",
      name: "MEN'S REEBOK SUPER SOFT FLIP SLIPPERS",
      price: 699,
      strikedoffprice: 999,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FW0343/reebok_FW0343_1.jpg.plp ",
      name: "MEN'S REEBOK RUNNING RUN SHOES  ",
      price: 1620,
      strikedoffprice: 3599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX4285/reebok_EX4285_1.jpg.plp ",
      name: "MEN'S REEBOK RUNNING GENESIS RUNNER SHOES  ",
      price: 1620,
      strikedoffprice: 3599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FV9519/MEN_SWIM_SLIPPERS_FV9519_1.jpg.plp ",
      name: "MEN'S REEBOK SWIM RUSSLE FLIP SLIPPERS  ",
      price: 599,
      strikedoffprice: 999,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FW0318/reebok_FW0318_1.jpg.plp ",
      name: " MEN'S REEBOK RUNNING TREND RUNNER SHOES",
      price: 1575,
      strikedoffprice: 3499,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-H00024/reebok_H00024_1.jpg.plp ",
      name: "UNISEX REEBOK RUNNING ZIG KINETICA II SHOES  ",
      price: 9999,
      strikedoffprice: 12000,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GK9170/reebok_GK9170_1.jpg.plp ",
      name: " MEN'S REEBOK TRAINING BAS POLO TEE ",
      price: 779,
      strikedoffprice: 1299,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GK9175/reebok_GK9175_1.jpg.plp",
      name: "MEN'S REEBOK TRAINING FOUNDATION  PANTS  ",
      price: 1019,
      strikedoffprice: 1699,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-GK9176/reebok_GK9176_1.jpg.plp ",
      name: "MEN'S REEBOK TRAINING FOUNDATION PANTS  ",
      price: 1019,
      strikedoffprice: 1699,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FW0318/reebok_FW0318_1.jpg.plp ",
      name: " MEN'S REEBOK RUNNING TREND SHOES",
      price: 1575,
      strikedoffprice: 3499,
    },
    {
      image_url:
        " https://content.shop4reebok.com/static/Product-G57776/reebok_G57776_1.jpg.plp ",
      name: "  MEN'S REEBOK RUNNING ZTAUR RUN SHOES ",
      price: 3499,
      strikedoffprice: 4999,
    },
    {
      image_url:
        " https://content.shop4reebok.com/static/Product-FV9555/MEN_SWIM_SLIPPERS_FV9555_1.jpg.plp  ",
      name: "MEN'S REEBOK SWIM ULTRA FLIP SLIPPERS   ",
      price: 749,
      strikedoffprice: 1499,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX3994/reebok_EX3994_1.jpg.plp   ",
      name: "  MEN'S REEBOK SWIM FLEX CONNECT SANDALS ",
      price: 1149,
      strikedoffprice: 2299,
    },
    {
      image_url:
        " https://content.shop4reebok.com/static/Product-EX4287/reebok_EX4287_1.jpg.plp  ",
      name: " MEN'S REEBOK RUNNING GENESIS RUNNER SHOE  ",
      price: 1620,
      strikedoffprice: 3599,
    },
    {
      image_url:
        " https://content.shop4reebok.com/static/Product-GK9180/reebok_GK9180_1.jpg.plp  ",
      name: " MEN'S REEBOK TRAINING RUNNER SHORTS  ",
      price: 779,
      strikedoffprice: 1299,
    },
    {
      image_url:
        " https://content.shop4reebok.com/static/Product-HB5732/reebok_HB5732_1.jpg.plp  ",
      name: " MEN REEBOK CLASSICS TRACKSUIT HOODIE  ",
      price: 3499,
      strikedoffprice: 4999,
    },
    {
      image_url:
        " https://content.shop4reebok.com/static/Product-HB5733/reebok_HB5733_1.jpg.plp  ",
      name: "MEN'S REEBOK CLASSIC TRACKSUIT GOLF HOODIE   ",
      price: 3499,
      strikedoffprice: 4999,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FQ5364/reebok_FQ5364_1.jpg.plp   ",
      name: " UNISEX REEBOK TRAINING ACTIVE  BAG ",
      price: 1399,
      strikedoffprice: 2799,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FW0318/reebok_FW0318_1.jpg.plp ",
      name: " MEN'S REEBOK RUNNING TREND RUNNER SHOES",
      price: 1575,
      strikedoffprice: 3499,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-G57705/reebok_G57705_1.jpg.plp",
      name: "UNISEX REEBOK CLASSICS  BASKETBALL SHOES",
      price: 3919,
      strikedoffprice: 5599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FW0344/reebok_FW0344_1.jpg.plp",
      name: "MEN'S REEBOK RUNNING RUN FUSION  SHOES",
      price: 1620,
      strikedoffprice: 3599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-EX4272/reebok_EX4272_1.jpg.plp",
      name: "MEN'S REEBOK RUNNING QUICK DRIFTER SHOES",
      price: 1620,
      strikedoffprice: 3599,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-H02293/reebok_H02293_1.jpg.plp",
      name: "MEN'S REEBOK DYNAMIC ZIGZAG SHOES",
      price: 7599,
      strikedoffprice: 9999,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-FV9551/MEN_SWIM_SLIPPERS_FV9551_1.jpg.plp",
      name: "MEN'S REEBOK SWIM SUPERSOFT FLIP SLIPPERS",
      price: 909,
      strikedoffprice: 1299,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-HC3528/reebok_HC3528_1.jpg.plp",
      name: "MEN'S REEBOK TRAINING ACTIVE BASIC POLO TEE",
      price: 779,
      strikedoffprice: 1299,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-HF3794/reebok_HF3794_01.JPG.plp ",
      name: "MEN'S REEBOK TRAINING ACTIVE MOVE TEE ",
      price: 1749,
      strikedoffprice: 2499,
    },
    {
      image_url:
        "https://content.shop4reebok.com/static/Product-HG5456/reebok_HG5456_1.jpg.plp",
      name: "MEN'S REEBOK FITNESS TRAINING  SWEATSHIRT",
      price: 1079,
      strikedoffprice: 1799,
    },
  ];

  
  var cards= document.getElementById("box")

mensData.forEach(function(el){

    var box=document.createElement("div")

    var image=document.createElement("img")
    image.setAttribute("src",el.image_url)
  
    var name=document.createElement("h2")
    var h2=document.createElement("h3");
    h2.innerText=el.name
    var h4=document.createElement("h4")
    var spa1=document.createElement("span");
    spa1.innerText="$ "
    var spa2=document.createElement("span");
    spa2.innerText=el.price
    h4.append(spa1,spa2)
 
    box.append(image,name,h2,h4)
    cards.append(box);

})




var cart=JSON.parse(localStorage.getItem("cartdata"))||[];


function buttonfunction(el){
  
var cards=cart.filter(function(card){
  return card==el
})
if(cards.length==0){
  cart.push(el);
localStorage.setItem("cartdata",JSON.stringify(cart))
alert("Item Added to Cart");
window.location.reload();
}
else{
  alert("already in cart")
}
}




var data2=[
    {
        image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446620504/clubm4446620504_1651088715137_2-0.__UX540__._QL90_.jpg",
        image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446620504/clubm4446620504_1651088715215_2-0.__UX540__._QL90_.jpg",
        image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446620504/clubm4446620504_1651088716164_2-0.__UX540__._QL90_.jpg",
        image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446620504/clubm4446620504_1651088714676_2-0.__UX540__._QL90_.jpg",
        image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446620504/clubm4446620504_1651088715601_2-0.__UX540__._QL90_.jpg" ,
        gender: "MEN",
        size:`Men's Sizes`,
        heading:"Reigning Champ",
        info:"Relaxed Crewneck Sweatshirt",
        color:"color:Earth",
        price:"62.50"
    },
       
    
   
    {
        image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718143_2-0.__UX540__._QL90_.jpg",
        image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718245_2-0.__UX540__._QL90_.jpg",
        image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718161_2-0.__UX540__._QL90_.jpg",
        image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350716978_2-0.__UX540__._QL90_.jpg",
        image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718606_2-0.__UX540__._QL90_.jpg",
        gender:"MEN",
        heading:"Madewell",
        info:" All Day Pocket Tee ",
        color:"Color: Teapot Blue",
        price:"30.00",
    },
    {
        image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/faher/faher305381b8f0/faher305381b8f0_1651010959860_2-0.__UX540__._QL90_.jpg",
        image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/faher/faher305381b8f0/faher305381b8f0_1651010959868_2-0.__UX540__._QL90_.jpg",
        image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/faher/faher305381b8f0/faher305381b8f0_1651010959684_2-0.__UX540__._QL90_.jpg",
        image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/faher/faher305381b8f0/faher305381b8f0_1651010959596_2-0.__UX540__._QL90_.jpg",
        image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/faher/faher305381b8f0/faher305381b8f0_1651010960421_2-0.__UX540__._QL90_.jpg",
        gender:"MEN",
        heading:"Faherty",
        info:" Sunwashed pocket tee ",
        color:"Color: Faded Flag",
        price:"58.00",
    },
    {
        image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446510cd7/clubm4446510cd7_1651249377144_2-0.__UX540__._QL90_.jpg",
        image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446510cd7/clubm4446510cd7_1651249376613_2-0.__UX540__._QL90_.jpg",
        image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446510cd7/clubm4446510cd7_1651249375758_2-0.__UX540__._QL90_.jpg",
        image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446510cd7/clubm4446510cd7_1651249375543_2-0.__UX540__._QL90_.jpg" ,
        image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446510cd7/clubm4446510cd7_1651249377268_2-0.__UX540__._QL90_.jpg",
        gender:"MEN",
        size:`Men's Sizes`,
        heading:"Club Monaco",
        info:"Short Sleeve Pique Tee",
        color:"Color: Off White",
        price:"89.00",
    } ,
    {
        image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455911cdc4/madew455911cdc4_1650551993102_2-0.__UX540__._QL90_.jpg",
        image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455911cdc4/madew455911cdc4_1650551993291_2-0.__UX540__._QL90_.jpg",
        image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455911cdc4/madew455911cdc4_1650551993208_2-0.__UX540__._QL90_.jpg",
        image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455911cdc4/madew455911cdc4_1650551992927_2-0.__UX540__._QL90_.jpg" ,
        image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455911cdc4/madew455911cdc4_1650551993764_2-0.__UX540__._QL90_.jpg",
        gender:"MEN",
        size:`Men's Sizes`,
        heading:"Club Monaco",
        info:"Short Sleeve Pique Tee",
        color:"Color: Off White",
        price:"89.00",
    }  ,
    {
        image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446510cd7/clubm4446510cd7_1651249377144_2-0.__UX540__._QL90_.jpg",
        image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446510cd7/clubm4446510cd7_1651249376613_2-0.__UX540__._QL90_.jpg",
        image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446510cd7/clubm4446510cd7_1651249375758_2-0.__UX540__._QL90_.jpg",
        image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446510cd7/clubm4446510cd7_1651249375543_2-0.__UX540__._QL90_.jpg" ,
        image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/clubm/clubm4446510cd7/clubm4446510cd7_1651249377268_2-0.__UX540__._QL90_.jpg",
        gender:"MEN",
        size:`Men's Sizes`,
        heading:"Club Monaco",
        info:"Short Sleeve Pique Tee",
        color:"Color: Off White",
        price:"89.00",
    },      
    {
        image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718143_2-0.__UX540__._QL90_.jpg",
        image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718245_2-0.__UX540__._QL90_.jpg",
        image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718161_2-0.__UX540__._QL90_.jpg",
        image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350716978_2-0.__UX540__._QL90_.jpg",
        image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718606_2-0.__UX540__._QL90_.jpg",
        gender:"MEN",
        heading:"Madewell",
        info:" All Day Pocket Tee ",
        color:"Color: Teapot Blue",
        price:"30.00",
    },    {
        image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718143_2-0.__UX540__._QL90_.jpg",
        image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718245_2-0.__UX540__._QL90_.jpg",
        image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718161_2-0.__UX540__._QL90_.jpg",
        image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350716978_2-0.__UX540__._QL90_.jpg",
        image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718606_2-0.__UX540__._QL90_.jpg",
        gender:"MEN",
        heading:"Madewell",
        info:" All Day Pocket Tee ",
        color:"Color: Teapot Blue",
        price:"30.00",
    },    {
        image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718143_2-0.__UX540__._QL90_.jpg",
        image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718245_2-0.__UX540__._QL90_.jpg",
        image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718161_2-0.__UX540__._QL90_.jpg",
        image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350716978_2-0.__UX540__._QL90_.jpg",
        image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718606_2-0.__UX540__._QL90_.jpg",
        gender:"MEN",
        heading:"Madewell",
        info:" All Day Pocket Tee ",
        color:"Color: Teapot Blue",
        price:"30.00",
    },    {
        image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718143_2-0.__UX540__._QL90_.jpg",
        image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718245_2-0.__UX540__._QL90_.jpg",
        image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718161_2-0.__UX540__._QL90_.jpg",
        image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350716978_2-0.__UX540__._QL90_.jpg",
        image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718606_2-0.__UX540__._QL90_.jpg",
        gender:"MEN",
        heading:"Madewell",
        info:" All Day Pocket Tee ",
        color:"Color: Teapot Blue",
        price:"30.00",
    },    {
        image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718143_2-0.__UX540__._QL90_.jpg",
        image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718245_2-0.__UX540__._QL90_.jpg",
        image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718161_2-0.__UX540__._QL90_.jpg",
        image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350716978_2-0.__UX540__._QL90_.jpg",
        image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/madew/madew455361cd9b/madew455361cd9b_1646350718606_2-0.__UX540__._QL90_.jpg",
        gender:"MEN",
        heading:"Madewell",
        info:" All Day Pocket Tee ",
        color:"Color: Teapot Blue",
        price:"30.00",
    },   
  
];


var card=document.querySelector("#box2");

data2.forEach(function(car){

var div2=document.createElement("div");
div2.addEventListener("click",function(){
    clicker(car)
})
var ima=document.createElement("img");
ima.setAttribute("src",car.image_url1);

var nam1=document.createElement("h2");
nam1.innerText=car.heading;

var pars=document.createElement("p");
pars.innerText=car.info

var price1=document.createElement("h4");
var spa1=document.createElement("span");
spa1.innerText="$ "
var spa2=document.createElement("span");
spa2.innerText=car.price
price1.append(spa1,spa2)



div2.append(ima,nam1,pars,price1)
card.append(div2);
})

// display first box end

// function  clicker(car){

    
// }

var data3=[{
    image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cnvsm/cnvsm3061910811/cnvsm3061910811_q2_2-0.__UX540__._QL90_.jpg",
    image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cnvsm/cnvsm3061910811/cnvsm3061910811_q1_2-0.__UX540__._QL90_.jpg",
    image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cnvsm/cnvsm3061910811/cnvsm3061910811_q3_2-0.__UX540__._QL90_.jpg",
    image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cnvsm/cnvsm3061910811/cnvsm3061910811_q4_2-0.__UX540__._QL90_.jpg",
    image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cnvsm/cnvsm3061910811/cnvsm3061910811_q5_2-0.__UX540__._QL90_.jpg" ,
    gender: "MEN",
    size:` Men's Size`,
    heading:"Reigning Champ",
    info:"Chuck Taylor All Star ‘70s High Top Sneakers",
    color:"color:parchment",
    price:"62.50"
},
{
    image_url1:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cnvsm/cnvsm3061812867/cnvsm3061812867_q2_2-0._QL90_UX173_.jpg",
    image_url2:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cnvsm/cnvsm3061812867/cnvsm3061812867_q1_2-0.__UX540__._QL90_.jpg",
    image_url3:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cnvsm/cnvsm3061812867/cnvsm3061812867_q3_2-0.__UX540__._QL90_.jpg",
    image_url4:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cnvsm/cnvsm3061812867/cnvsm3061812867_q5_2-0.__UX540__._QL90_.jpg",
    image_url5:"https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/cnvsm/cnvsm3061812867/cnvsm3061812867_q6_2-0.__UX540__._QL90_.jpg" ,
    gender: "MEN",
    size:`Men's Sizes`,
    heading:"Converse",
    info:"Relaxed Crewneck Shoe",
    color:"color:Earth",
    price:"62.50"
},
// {
//     image_url1:"",
//     image_url2:"",
//     image_url3:"",
//     image_url4:"",
//     image_url5:"" ,
//     gender: "MEN",
//     size:`Men's Sizes`,
//     heading:"Reigning Champ",
//     info:"Relaxed Crewneck Sweatshirt",
//     color:"color:Earth",
//     price:"62.50"
// },
]
   
var box3=document.querySelector("#box3");


var card=document.querySelector("#box3");

data3.forEach(function(car){

var div2=document.createElement("div");
div2.addEventListener("click",function(){
    clicker(car)
})
var ima=document.createElement("img");
ima.setAttribute("src",car.image_url1);

var nam1=document.createElement("h2");
nam1.innerText=car.heading;

var pars=document.createElement("p");
pars.innerText=car.info;

var price1=document.createElement("h4");
price1.innerText=car.price;


div2.append(ima,nam1,pars,price1)
card.append(div2);
})
