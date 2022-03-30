
//Spring Essential data start

SpringEssentialData = [
    {
        imgUrl: "https://www.shop.com/feo-cdn/W/r/7VIUxOcPE.webp",
        pageLink: "https://www.shop.com/Clothes/Women-spring-3+",
        name:"Spring Fashion"
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/G/6/8ZNWCup_c.webp",
        pageLink: "https://www.shop.com/Beauty/-20?eb=1",
        name:"Beauty"
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/5/0/hrXRPdMto.webp",
        pageLink: "https://www.shop.com/Clothes/Men-Men%27s+Clothing+Type-Shirts-Men%27s+Shirt+Type-T!Shirts-344",
        name:"Men's Graphic Tees"
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/f/3/qx2AhJToM.webp",
        pageLink: "https://www.shop.com/Clothes/Men-Men%27s+Clothing+Type-Shorts-34?nover=",
        name:"Men's Shorts"
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/l/0/4nyrwAs30.webp",
        pageLink: "https://www.shop.com/Shoes/Women-Women%27s+Shoe+Type-Sandals-34",
        name:"Women's Sandals"
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/O/p/G8y2sumIg.webp",
        pageLink: "https://www.shop.com/Shoes/Men-Men%27s+Shoe+Type-Sandals-34",
        name:"Men's Sandals"
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/c/r/UXMhwIpgo.webp",
        pageLink: "https://www.shop.com/Home+Store/Home+D%C3%A9cor-Home+D%C3%A9cor+Type-Artificial+Plants,+Flower+Pots+~+Terrariums-Artificial+Plant,+Flower+Pot+~+Terrarium+Type-Artificial+Flowers+~+Plants-344",
        name:"Artificial Plants"
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/I/v/Fl-f-UFzw.webp",
        pageLink: "https://www.shop.com/Home+Store/Household+Essentials-Household+Essential+Type-Household+Cleaners-34",
        name:"Spring Cleaning"
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/R/_/CYu-Tds3E.webp",
        pageLink: "https://www.shop.com/Home+Store/Storage+~+Organization-Storage+Type-Drawer+Organizers+~+Trays-34",
        name:"Drawer Organizers & Tray"
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/q/s/I8xngIiXc.webp",
        pageLink: "https://www.shop.com/Garden/Patio+Furniture-3",
        name:"Patio Furniture"
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/1/1/jpVvOHWuw.webp",
        pageLink: "https://www.shop.com/Home+Store/Bedding-3",
        name:"Bedding"
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/R/8/nPzdpdwlY.webp",
        pageLink: "https://www.shop.com/Home+Store/Home+D%C3%A9cor-Home+D%C3%A9cor+Type-Candles+~+Holders-Candle+~+Holder+Type-Candles-344",
        name:"Candles"
    }
];
//Spring Essential data end

//Spring Essential js code start

SpringEssentialData.map(function(el){
    var box = document.createElement("div");
    
    var anch = document.createElement("a");
    anch.href = el.pageLink;

    var imgdiv = document.createElement("div");
    imgdiv.setAttribute("id","imgdiv");
    var img = document.createElement("img");
    img.setAttribute("id","imgDesign")
    img.src = el.imgUrl;
    imgdiv.append(img);

    var namediv = document.createElement("div");
    var name = document.createElement("p");
    name.setAttribute("id","nameid")
    name.textContent = el.name;
    namediv.append(name);

    anch.append(imgdiv,namediv);

    box.append(anch);
    // box.append(imgdiv,namediv);

    document.querySelector("#springEssDiv").append(box)
});
//Spring Essential js code end


//Featured Categories data start

FeaturedCategoriesData = [
    {
        imgUrl: "https://www.shop.com/feo-cdn/l/g/nmbh_7ZAs.webp",
        pageLink: "https://www.shop.com/Clothes/Women-3",
        name:"Women's Clothing"
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/8/0/esaJ0H1Cs.webp",
        pageLink: "https://www.shop.com/Clothes/Men-3",
        name:"Men's Clothing"
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/s/D/_I9L8_P48.webp",
        pageLink: "https://www.shop.com/Clothes/Girls-3",
        name:"Girls' Clothing"
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/f/O/bE0YkPsDA.webp",
        pageLink: "https://www.shop.com/Clothes/Boys-3",
        name:"Boys' Clothing"
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/Z/6/trR8tECpk.webp",
        pageLink: "https://www.shop.com/Clothes/Accessories-3",
        name:"Accessories"
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/-/d/zf7Y7zKxk.webp",
        pageLink: "https://www.shop.com/shoes-a.xhtml",
        name:"Shoes"
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/-/_/CI8OTjaQk.webp",
        pageLink: "https://www.shop.com/feo-cdn/-/_/CI8OTjaQk.webp",
        name:"Bedding"
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/f/m/A5XJ4n6zI.webp",
        pageLink: "https://www.shop.com/Home+Store/Kitchen+~+Dining-3",
        name:"Kitchen & Dining"
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/p/h/TP1AMIUY0.webp",
        pageLink: "https://www.shop.com/electronics-a.xhtml",
        name:"Electronics"
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/L/-/cg6R46OXA.webp",
        pageLink: "https://www.shop.com/Beauty-a.xhtml",
        name:"Beauty"
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/3/X/r2woiNgDY.webp",
        pageLink: "https://www.shop.com/healthnutrition-a.xhtml",
        name:"Health & Nutrition"
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/o/b/7iCoDHRxA.webp",
        pageLink: "https://www.shop.com/Baby-a.xhtml",
        name:"Kids"
    }
];
//Featured Categories data end


//Featured Categories js code start

FeaturedCategoriesData.map(function(el){
    var box = document.createElement("div");
    
    var anch = document.createElement("a");
    anch.href = el.pageLink;

    var imgdiv = document.createElement("div");
    imgdiv.setAttribute("id","imgdiv");
    var img = document.createElement("img");
    img.setAttribute("id","imgDesign")
    img.src = el.imgUrl;
    imgdiv.append(img);

    var namediv = document.createElement("div");
    var name = document.createElement("p");
    name.setAttribute("id","nameid")
    name.textContent = el.name;
    namediv.append(name);

    anch.append(imgdiv,namediv);

    box.append(anch);
    // box.append(imgdiv,namediv);

    document.querySelector("#featuredCatDiv").append(box)
});
//Featured Categories js code end


// cashback_2 starts here 

cashback_2_Data = [
    {
        imgUrl: "https://www.shop.com/feo-cdn/x/_/I0qgpl5bE.webp",
        pageLink: "https://www.shop.com/nbts/b48081-link_off.xhtml?tkr=220311125129",
        cashback:"2% $ Cashback",
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/Z/0/AsvGkQZBM.webp",
        pageLink: "https://www.shop.com/nbts/b47088-link_off.xhtml?tkr=211227115515",
        cashback:"SHOP40",
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/P/g/6_43XKLHY.webp",
        pageLink: "https://www.shop.com/nbts/b48231-link_off.xhtml?tkr=220328160814",
        cashback:"2% $ Cashback",
    }
];

cashback_2_Data.map(function(el){
    var box = document.createElement("div");
    box.setAttribute("class","shop40_cashback_2_img");

    var imgBox = document.createElement("div");

    var anch = document.createElement("a");
    anch.href = el.pageLink;

    var img = document.createElement("img");
    img.src = el.imgUrl;

    anch.append(img);
    imgBox.append(anch);

    var cashbackBox = document.createElement("div");

    var strong = document.createElement("strong");
    strong.textContent = el.cashback;

    cashbackBox.append(strong);
    box.append(imgBox,cashbackBox)

    document.querySelector("#shop40_cashback_2Div").append(box)
});



cashback_6_Data = [
    {
        imgUrl: "https://www.shop.com/feo-cdn/z/w/K1cxRZjqQ.webp",
        pageLink: "https://www.shop.com/Sock+Panda-v289927-c+.xhtml?tkr=220222134848",
        cashback:"6% $ Cashback",
        code: "15% off All Orders + Free Shipping on orders $35+. Use Code: BestGift15"
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/O/V/TOGx4l15c.webp",
        pageLink: "https://www.shop.com/LUX+LAIR-v290461-c+.xhtml?tkr=211208123520",
        cashback:"8% $ Cashback",
        code: ""
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/x/w/FAROq6rYk.webp",
        pageLink: "https://www.shop.com/Sahara+Case-v291221-c+.xhtml?tkr=220308115354",
        cashback:"6% $ Cashback",
        code: ""
    }
];

cashback_6_Data.map(function(el){
    var box = document.createElement("div");
    box.setAttribute("class","shop40_cashback_2_img");

    var imgBox = document.createElement("div");

    var anch = document.createElement("a");
    anch.href = el.pageLink;

    var img = document.createElement("img");
    img.src = el.imgUrl;

    anch.append(img);
    imgBox.append(anch);

    var cashbackBox = document.createElement("div");

    var strong = document.createElement("strong");
    strong.textContent = el.cashback;

    cashbackBox.append(strong);

    var codeBox = document.createElement("div");
    var para = document.createElement("p");
    para.textContent = el.code;

    codeBox.append(para);
    box.append(imgBox,cashbackBox,codeBox)

    document.querySelector("#shop40_cashback_6Div").append(box)
});