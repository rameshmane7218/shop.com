// before "S" logo container
// cashback_6 starts here 
all_2_cashbackData = [
    {
        imgUrl: "https://www.shop.com/feo-cdn/M/6/sX-B3itR8.webp",
        pageLink: "https://www.shop.com/Shopping+Annuity+reg+Brand+Premium+Balance+Belly+Tea-1925855947-p+.xhtml?tkr=220223154747",
        cashback:"2% $ Cashback",
        sale: ""
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/z/2/c3Haj4jgI.webp",
        pageLink: "https://www.shop.com/MycoAdapt-1926928560-p+.xhtml?tkr=220223155317",
        cashback:"2% $ Cashback",
        sale: ""
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/U/W/qop5zYXfc.webp",
        pageLink: "https://www.shop.com/GlutaQ-1926928562-p+.xhtml?tkr=220224104726",
        cashback:"2% $ Cashback",
        sale: ""
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/T/A/1eXAnfLQ4.jpg",
        pageLink: "https://www.shop.com/Daily+Greens-1926928561-p+.xhtml?tkr=220223151737",
        cashback:"2% $ Cashback",
        sale: ""
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/J/o/ZZzVXE2Cs.webp",
        pageLink: "https://www.shop.com/Rastellis-v274355-c+.xhtml?tkr=220302165157",
        cashback:"9% $ Cashback",
        sale: ""
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/Q/9/2-2fr95pI.webp",
        pageLink: "https://www.shop.com/Shopping+Annuity+reg+Brand+Premium+Flushable+Wipes+150+Count-1925345712-p+.xhtml?tkr=220223160255",
        cashback:"2% $ Cashback",
        sale: ""
    },
    {
        imgUrl: "https://www.shop.com/feo-cdn/A/j/u-mSDOcIA.webp",
        pageLink: "https://www.shop.com/nbts/b48228-link_off.xhtml?tkr=220328131309",
        cashback:"2% $ Cashback",
        sale: ""
    },
    {
        imgUrl: "https://img.shop.com/Image/homepage/us-en-toryburch-slipper-banner-mar221648672437364.jpeg",
        pageLink: "https://www.shop.com/nbts/b48230-link_off.xhtml?tkr=220328143223",
        cashback:"2% $ Cashback",
        sale: "Tory Burch Sale: Shop Sandals, Totes, Mini Bags and More"
    },
];

all_2_cashbackData.map(function(el){
    var box = document.createElement("div");

    var anch = document.createElement("a");
    anch.href = el.pageLink;

    var imgBox = document.createElement("div");
    var img = document.createElement("img");
    img.src = el.imgUrl;

    anch.append(img);
    imgBox.append(anch);

    var cashbackBox = document.createElement("div");

    var para = document.createElement("p");
    para.setAttribute("id","cashback")
    para.textContent = el.cashback;

    cashbackBox.append(para );

    var saleBox = document.createElement("div");
    var para = document.createElement("p");
    para.setAttribute("id","sale")
    para.textContent = el.sale;

    saleBox.append(para);
    box.append(imgBox,cashbackBox,saleBox)

    document.querySelector("#all_2_cashbackRightDiv").append(box)
});
// cashback_2 end here 




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
// cashback_2 end here 

// cashback_6 starts here 
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
// cashback_2 end here 


//scrolling page 1 Hot New Products starts here
scrollData_1 = [
    {
        imgUrl:"https://img.shop.com/Image/240000/247900/247927/products/1925345712.jpg?size=300x300",
        pageLink:"https://www.shop.com/Shopping+Annuity+reg+Brand+Premium+Flushable+Wipes+150+Count-1925345712-p+.xhtml",
        name: "Shopping Annuity® Brand Premium Flushable Wipes - 150 Count",
        price: 7.49,
        cashback: "+ $0.15 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://img.shop.com/Image/290000/291400/291472/products/1926928562.jpg?size=300x300",
        pageLink:"https://www.shop.com/GlutaQ-1926928562-p+.xhtml",
        name: "GlutaQ",
        price: 49.95,
        cashback: "+ $1 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://img.shop.com/Image/290000/291400/291474/products/1926928560.jpg?size=300x300",
        pageLink:"https://www.shop.com/MycoAdapt-1926928560-p+.xhtml",
        name: "MycoAdapt",
        price: 49.95,
        cashback: "+ $1 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://img.shop.com/Image/240000/247900/247927/products/1925855947.jpg?size=300x300",
        pageLink:"https://www.shop.com/Shopping+Annuity+reg+Brand+Premium+Balance+Belly+Tea-1925855947-p+.xhtml",
        name: "Shopping Annuity® Brand Premium Balance Belly Tea",
        price: 14.95,
        cashback: "+ $0.30 / 2.01% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://img.shop.com/Image/290000/291400/291473/products/1926928561.jpg?size=300x300",
        pageLink:"https://www.shop.com/Daily+Greens-1926928561-p+.xhtml",
        name: "Daily Greens",
        price: 46.00,
        cashback: "+ $0.92 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://img.shop.com/Image/240000/243300/243380/products/1925345789.jpg?size=300x300",
        pageLink:"https://www.shop.com/Motives+reg+Moments+Pressed+Pigment+Palette-1925345789-p+.xhtml",
        name: "Motives® Moments Pressed Pigment Palette",
        price: 35.00,
        cashback: "+ $0.70 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://img.shop.com/Image/240000/243300/243380/products/1925345765.jpg?size=300x300",
        pageLink:"https://www.shop.com/Motives+reg+3+in+1+Cream+Tints-1925345765-p+.xhtml",
        name: "Motives® 3-in-1 Cream Tints",
        price: 39.95,
        cashback: "+ $0.80 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    }
];

scrollData_1.map(function(el){
    var boxContaint = appendAllData(el)
    document.querySelector("#HotNewProductsDiv").append(boxContaint)
});
//scrolling page 21Hot New Products  end here



//scrolling page 2 Cleaning & Health Have Never Been More Important starts here
scrollData_2 = [
    {
        imgUrl:"https://img.shop.com/Image/210000/214100/214196/products/561800345.jpg?size=300x300",
        pageLink:"https://www.shop.com/Isotonix+reg+Vitamin+D+with+K2-561800345-p+.xhtml?tkr=200320120731",
        name: "Isotonix® Vitamin D with K2",
        price: 63.50,
        cashback: "+up to $1.60 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/Y/W/0r5yZHZmk.webp",
        pageLink:"https://www.shop.com/DNA+Miracles+Isotonix+reg+Immune-1332818472-p+.xhtml?tkr=200320120731",
        name: "DNA Miracles Isotonix® Immune",
        price: 22.50,
        cashback: "+ $0.45 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/o/A/uVjZv54sQ.webp",
        pageLink:"https://www.shop.com/ClearShield+reg+Maximum+Protection+and+Hydration-559010729-p+.xhtml?tkr=200320120731",
        name: "ClearShield® Maximum Protection and Hydration",
        price: 23.95,
        cashback: "+up to $0.48 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/4/O/zXNGw2Zgk.webp",
        pageLink:"https://www.shop.com/Isotonix+reg+Vitamin+C-561800360-p+.xhtml?tkr=200320120731",
        name: "Isotonix® Vitamin C",
        price: 25.95,
        cashback: "+up to $0.69 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/y/U/Yjz3FYLeA.webp",
        pageLink:"https://www.shop.com/Isotonix+reg+Bromelain+Plus-912160941-p+.xhtml?tkr=200320120731",
        name: "Isotonix® Bromelain Plus",
        price: 61.50,
        cashback: "+ $1.23 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/_/6/S97dD9YHw.webp",
        pageLink:"https://www.shop.com/Snap+trade+All+Purpose+Natural+Concentrate-559053516-p+.xhtml?tkr=200320120731",
        name: "Snap™ All-Purpose Natural Concentrate",
        price: 12.95,
        cashback: "+ $0.26 / 2.01% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/B/t/_2NjOmClY.webp",
        pageLink:"https://www.shop.com/Snap+trade+Heavy+Duty+Concentrate-559053525-p+.xhtml?tkr=200320120731",
        name: "Snap™ Heavy Duty Concentrate",
        price: 12.50,
        cashback: "+ $0.25 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/T/i/F3wqmmOMc.webp",
        pageLink:"https://www.shop.com/Isotonix+reg+Immune-893741343-p+.xhtml?tkr=200320120731",
        name: "Isotonix® Immune",
        price: 73.50,
        cashback: "+ up to $2.00 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/g/3/c6osPsJuw.webp",
        pageLink:"https://www.shop.com/Ultimate+Aloe+trade+-603891601-p+.xhtml?tkr=200320120731",
        name: "Ultimate Aloe™",
        price: 27.95,
        cashback: "+ $0.56 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/A/L/NSF7CxBv8.webp",
        pageLink:"https://www.shop.com/Isotonix+reg+Digestive+Enzymes+with+Probiotics-1301699648-p+.xhtml?tkr=200320120731",
        name: "Isotonix® Digestive Enzymes with Probiotics",
        price: 35.50,
        cashback: "+ $0.71 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/R/G/S3lqghz-Q.webp",
        pageLink:"https://www.shop.com/Snap+trade+Triple+Enzyme+3X+Laundry+Detergent-559053523-p+.xhtml?tkr=200320120731",
        name: "Snap™ Triple Enzyme 3X Laundry Detergent",
        price: 13.95,
        cashback: "+ $0.28 / 2.01% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/v/m/aat_DFHuc.webp",
        pageLink:"https://www.shop.com/Thymenol+trade+-1790609519-p+.xhtml?tkr=200320120731",
        name: "Thymenol™",
        price: 69.95,
        cashback: "+ $1.40 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/Z/E/clebgWf_M.webp",
        pageLink:"https://www.shop.com/Prime+trade+Astaxanthin+Cardio+and+Visual+Vitality+Formula-623809148-p+.xhtml?tkr=200320120731",
        name: "Prime™ Astaxanthin Cardio and Visual Vitality Formula",
        price: 43.95,
        cashback: "+ $0.88 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/k/k/tz96Dyr90.webp",
        pageLink:"https://www.shop.com/NutriClean+reg+HepatoCleanse+Liver+Support+Formula+-604981555-p+.xhtml?tkr=200320120731",
        name: "NutriClean® HepatoCleanse (Liver Support Formula)",
        price: 27.95,
        cashback: "+ $0.56 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/s/5/G-VV-dpno.webp",
        pageLink:"https://www.shop.com/Snap+trade+Free+Clear+Fabric+Softener-559053515-p+.xhtml?tkr=200320120731",
        name: "Snap™ Free & Clear Fabric Softener",
        price: 13.95,
        cashback: "+ $0.28 / 2.01% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/3/5/6YMWXrtjg.webp",
        pageLink:"https://www.shop.com/Isotonix+reg+Multimineral-604981551-p+.xhtml?tkr=200320120731",
        name: "Isotonix® Multimineral",
        price: 40.95,
        cashback: "+ $0.82 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/C/_/TbxiPV5vU.webp",
        pageLink:"https://www.shop.com/Snap+trade+Free+Clear+Laundry+Detergent-559053514-p+.xhtml?tkr=200320120731",
        name: "Snap™ Free & Clear Laundry Detergent",
        price: 13.95,
        cashback: "+ $0.28 / 2.01% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/7/D/bwk_h6VLY.webp",
        pageLink:"https://www.shop.com/Isotonix+Essentials+reg+Anti+Aging-1570985385-p+.xhtml?tkr=200320120731",
        name: "Isotonix Essentials® Anti-Aging",
        price: 99.95,
        cashback: "+ $2.00 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/O/F/OrVwyETcs.webp",
        pageLink:"https://www.shop.com/Timeless+Prescription+Oxygen+Extreme-867821034-p+.xhtml?tkr=200320120731",
        name: "Timeless Prescription Oxygen Extreme",
        price: 28.95,
        cashback: "+ $0.58 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/x/a/J1O26RhTw.webp",
        pageLink:"https://www.shop.com/Isotonix+reg+Complete+Greens-1741625450-p+.xhtml?tkr=200320120731",
        name: "Isotonix® Complete Greens",
        price: 49.00,
        cashback: "+ $0.98 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/M/e/pIr_QE08c.webp",
        pageLink:"https://www.shop.com/Ultimate+Aloe+reg+Gel-559090759-p+.xhtml?tkr=200320120731",
        name: "Ultimate Aloe® Gel",
        price: 19.95,
        cashback: "+ $0.40 / 2.01% $ Cashback",
        shipping: "Free shipping with $99 orders"
    }
];

scrollData_2.map(function(el){
    var boxContaint = appendAllData(el)
    document.querySelector("#cleaningHelthDiv").append(boxContaint)
});
//scrolling page 2 Cleaning & Health Have Never Been More Important end here



//scrolling page 3 Best of Web Prices & Instant Cashback! starts here
scrollWebPriceData = [
    {
        imgUrl:"https://www.shop.com/feo-cdn/e/b/OouGLc4nw.webp",
        pageLink:"https://www.shop.com/White+Crystal+Apple+iPhone+13+Case+Sparkle+Series+Case+with+Halo+-1924591420-p+.xhtml?tkr=210302135934_prod",
        name: "White Crystal Apple iPhone 13 Case - Sparkle Series Case with Halo/",
        price: 39.99,
        cashback: "+$0.80 / 2% $ Cashback",
        shipping: "Free shipping"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/Q/x/KfR6nPpGA.webp",
        pageLink:"https://www.shop.com/Bunny+Love+Easter+Gift+Basket+Easter+Bunny+Basket-1913419776-p+.xhtml?tkr=210302135934_prod",
        name: "Bunny Love Easter Gift Basket - Easter Bunny Basket",
        price: 52.99,
        cashback: "+ $1.59 / 3% $ Cashback",
        shipping: "Free shipping"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/d/z/9M5jZKMOg.webp",
        pageLink:"https://www.shop.com/Zulay+Portable+Blenders+For+Shakes+And+Smoothies+USB+Rechargeable+Portable+Smoothie+Blender+Small+For+Travel-1897185769-p+.xhtml?tkr=210302135934_prod",
        name: "Zulay Portable Blenders For Shakes And Smoothies - USB Rechargeable Portable Smoothie Blender Small For Travel",
        price: 19.99,
        cashback: "+$1.20 / 6% $ Cashback",
        shipping: "Free shipping"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/j/N/YCotPJv9E.webp",
        pageLink:"https://www.shop.com/Aerothotic+Arcus+Womens+Lightweight+EVA+Slide+Sandals-1908995749-p+.xhtml?tkr=210302135934_prod",
        name: "Aerothotic Arcus Women's Lightweight EVA Slide Sandals",
        price: 25.99,
        cashback: "+$1.56 / 6% $ Cashback",
        shipping: "Free shipping"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/g/n/RAppuUZtQ.webp",
        pageLink:"https://www.shop.com/Instant+Read+Stainless+Steel+Digital+Meat+and+Poultry+Thermometer-1904984759-p+.xhtml?tkr=210302135934_prod",
        name: "Instant Read Stainless Steel Digital Meat and Poultry Thermometer",
        price: 12.49,
        cashback: "+ $0.75 / 6% $ Cashback",
        shipping: "Free shipping"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/p/f/uJjQqDRjU.webp",
        pageLink:"https://www.shop.com/Farmers+Market+Wisconsin+Cheese+Blocks+7+pack+7+oz+each-1852703144-p+.xhtml?tkr=210302135934_prod",
        name: "Farmer's Market Wisconsin Cheese Blocks 7 pack - 7 oz each",
        price: 26.98,
        cashback: "+ $0.81 / 3% $ Cashback",
        shipping: "Free shipping"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/q/i/99M2HRsu8.webp",
        pageLink:"https://www.shop.com/Lumi+egrave+re+de+Vie+reg+After+Sun+Glow+Renew+Limited+Edition+Special+Buy+One+Get+One+Free-1917494549-p+.xhtml?tkr=210302135934_prod",
        name: "Lumière de Vie® After Sun Glow & Renew - Limited Edition Special Buy One, Get One Free",
        price: 39.95,
        cashback: "+ $0.80 / 2% $ Cashback",
        shipping: "Free shipping"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/C/h/iCFUnygk0.webp",
        pageLink:"https://www.shop.com/Costway+51+Pcs+Magnetic+Tiles+Building+Blocks+Set+Kids-1865396325-p+.xhtml?tkr=210302135934_prod",
        name: "Costway 51 Pcs Magnetic Tiles Building Blocks Set Kids",
        price: 18.95,
        cashback: "+$1.14 / 6% $ Cashback",
        shipping: "Free shipping"
    }
];


scrollWebPriceData.map(function(el){
    var boxContaint = appendAllData(el)
    document.querySelector("#webScrollDiv").append(boxContaint)
});
//scrolling page 3 Best of Web Prices & Instant Cashback! end here


//scrolling page 4 Stay Healthy with Essential 9! starts here
scrollHealthyEssData = [
    {
        imgUrl:"https://www.shop.com/feo-cdn/s/X/wFlC0sgWY.webp",
        pageLink:"https://www.shop.com/Isotonix+OPC+3+reg+-561800349-p+.xhtml?tkr=210323110521_prods",
        name: "Isotonix OPC-3®",
        price: 71.95,
        cashback: "+up to $1.44 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/i/I/WBUgnO7HQ.webp",
        pageLink:"https://www.shop.com/Heart+Health+trade+Essential+Omega+III+Fish+Oil+with+Vitamin+E-561800368-p+.xhtml?tkr=210323110521_prods",
        name: "Heart Health™ Essential Omega III Fish Oil with Vitamin E",
        price: 56.95,
        cashback: "+up to  $1.30 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/0/m/6AoBLQaz0.webp",
        pageLink:"https://www.shop.com/Isotonix+reg+Multivitamin+Without+Iron-1604659974-p+.xhtml?tkr=210323110521_prods",
        name: "Isotonix® Multivitamin Without Iron",
        price: 45.95,
        cashback: "+up to $1.12 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/3/p/Jmw94Epls.webp",
        pageLink:"https://www.shop.com/Isotonix+reg+Activated+B+Complex-604981550-p+.xhtml?tkr=210323110521_prods",
        name: "Isotonix® Activated B Complex",
        price: 44.50,
        cashback: "+up to $1.09 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/L/f/k0WWk8kn0.webp",
        pageLink:"https://www.shop.com/Isotonix+reg+Vitamin+D+with+K2-561800345-p+.xhtml?tkr=210323110521_prods",
        name: "Isotonix® Vitamin D with K2",
        price: 79.95,
        cashback: "+up to $1.60 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/O/t/t0QV-utE4.webp",
        pageLink:"https://www.shop.com/Probiotics+10-1730212451-p+.xhtml?tkr=210323110521_prods",
        name: "Probiotics-10",
        price: 36.95,
        cashback: "+ $0.74 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/y/y/JVqUY2djM.webp",
        pageLink:"https://www.shop.com/NutriClean+reg+Advanced+Fiber+Powder+with+Stevia-978316780-p+.xhtml?tkr=210323110521_prods",
        name: "NutriClean® Advanced Fiber Powder with Stevia",
        price: 54.50,
        cashback: "+ $1.09 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/3/3/pN83uVbRI.webp",
        pageLink:"https://www.shop.com/Heart+Health+trade+Advanced+Co+Q10+Cardiovascular+Immune+Support+-561800367-p+.xhtml?tkr=210323110521_prods",
        name: "Heart Health™ Advanced Co-Q10 (Cardiovascular & Immune Support)",
        price: 51.95,
        cashback: "+$1.04 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    }
];


scrollHealthyEssData.map(function(el){
    var boxContaint = appendAllData(el)
    document.querySelector("#HealthyEssScrollDiv").append(boxContaint)
});
//scrolling page 4 Stay Healthy with Essential 9! end here

//scrolling page 5 Two-Year Anniversary Collection starts here
anniversaryCollData = [
    {
        imgUrl:"https://www.shop.com/feo-cdn/1/K/_acNuLZRs.webp",
        pageLink:"https://www.shop.com/EVIE+Curb+Chain+Necklace-1925345939-p+.xhtml",
        name: "EVIE - Curb Chain Necklace",
        price: 79.95,
        cashback: "+$1.60 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/5/f/tFTrWxACY.webp",
        pageLink:"https://www.shop.com/EMMA+Faceted+Hoops-1925345911-p+.xhtml",
        name: "EMMA - Faceted Hoops",
        price: 79.95,
        cashback: "+$1.60 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/M/u/veiBNQECY.webp",
        pageLink:"https://www.shop.com/EVIE+Curb+Chain+Bracelet-1925345933-p+.xhtml",
        name: "EVIE - Curb Chain Bracelet",
        price: 55.95,
        cashback: "+$1.12 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/t/_/u0u-Ts_zQ.webp",
        pageLink:"https://www.shop.com/ZANE+Cuban+Link+Chain-1925345953-p+.xhtml",
        name: "ZANE – Cuban Link Chain",
        price: 179.95,
        cashback: "+$3.60 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/n/p/FZE824krw.webp",
        pageLink:"https://www.shop.com/STELLA+Pave+Band+Ring-1925345942-p+.xhtml",
        name: "STELLA - Pave Band Ring",
        price: 79.95,
        cashback: "+$1.60 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/i/I/wL6DU2-F8.webp",
        pageLink:"https://www.shop.com/AVERY+Baguette+Ear+Crawlers-1925345907-p+.xhtml",
        name: "AVERY - Baguette Ear Crawlers",
        price: 59.95,
        cashback: "+ $1.20 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/q/u/sxJ_U7i_c.webp",
        pageLink:"https://www.shop.com/ENZO+Cable+Link+Bracelet-1925345920-p+.xhtml",
        name: "ENZO - Cable Link Bracelet",
        price: 99.95,
        cashback: "+ $2.00 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/B/E/tC6drrpF4.webp",
        pageLink:"https://www.shop.com/BOWIE+Cuban+Link+Bracelet-1925345919-p+.xhtml",
        name: "BOWIE - Cuban Link Bracelet",
        price: 84.95,
        cashback: "+$1.70 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    }
];


anniversaryCollData.map(function(el){
    var boxContaint = appendAllData(el)
    document.querySelector("#anniversaryCollScrollDiv").append(boxContaint)
});
//scrolling page 5 Two-Year Anniversary Collection end here

//Top Sellers starts here
topSellersData = [
    {
        imgUrl:"https://img.shop.com/Image/210000/214100/214196/products/561800349__175x175__.jpg",
        pageLink:"https://www.shop.com/561800349-p.xhtml?tkr=201006141529",
        name: "Isotonix OPC-3®",
        price: 71.95,
        cashback: "+up to $1.14 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://img.shop.com/Image/240000/243300/243396/products/603891601__175x175__.jpg",
        pageLink:"https://www.shop.com/603891601-p.xhtml?tkr=201006141529",
        name: "Ultimate Aloe™",
        price: 27.95,
        cashback: "+$0.56 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://img.shop.com/Image/210000/214100/214196/products/935461732__175x175__.jpg",
        pageLink:"https://www.shop.com/935461732-p.xhtml?tkr=201006141529",
        name: "Isotonix® Daily Essentials Packets",
        price: 77.00,
        cashback: "+$1.54 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://img.shop.com/Image/210000/214100/214196/products/561800354__175x175__.jpg",
        pageLink:"https://www.shop.com/561800354-p.xhtml?tkr=201006141529",
        name: "Isotonix® Digestive Enzymes with Probiotics (Packets)",
        price: 24.95,
        cashback: "+$0.50 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
    {
        imgUrl:"https://img.shop.com/Image/210000/214100/214196/products/1301699648__175x175__.jpg",
        pageLink:"https://www.shop.com/1301699648-p.xhtml?tkr=201006141529",
        name: "Isotonix® Digestive Enzymes with Probiotics",
        price: 35.50,
        cashback: "+$0.71 / 2% $ Cashback",
        shipping: "Free shipping with $99 orders"
    },
];


topSellersData.map(function(el){
    var boxContaint = appendAllData(el)
    document.querySelector("#topSellersDiv").append(boxContaint)
});
//Top Sellers end here



// *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 
//Map data append function

var reviewData = [];


function appendAllData(el){
    var box = document.createElement("div");
    box.setAttribute("class","scrolldiv");

    var anch = document.createElement("a");
    anch.addEventListener("click",function(){
        addToReview(el);
    });
    anch.href = "src/review.html";

    var imgBox = document.createElement("div");
    var img = document.createElement("img");
    img.src = el.imgUrl;
    imgBox.append(img);

    var bottomPart = document.createElement("div")
    bottomPart.setAttribute("class","bottomPart")

    var namebox = document.createElement("div")
    var name = document.createElement("p");
    name.textContent = el.name;  
    namebox.append(name);

    var pricebox = document.createElement("div")
    var price = document.createElement("p");
    price.textContent = `$${el.price}` ;
    price.style.fontWeight = "bold";
    pricebox.append(price)
    
    var cashbackBox = document.createElement("div");
    var cashback = document.createElement("p");
    cashback.textContent = el.cashback;
    cashbackBox.append(cashback);

    var shippingbox = document.createElement("div");
    var shipping = document.createElement("p");
    shipping.textContent = el.shipping;
    shippingbox.append(shipping);
    
    bottomPart.append(namebox,pricebox,cashbackBox,shippingbox);

    anch.append(imgBox,bottomPart);

    box.append(anch)

    return box;
}



function addToReview(el){
    reviewData.push(el);
    localStorage.setItem("review",JSON.stringify(reviewData));
    // alert("Review data is added to review page");

}










// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 



//Our Brands starts here
ourBrandsData = [
    {
        imgUrl:"https://www.shop.com/feo-cdn/K/A/qtGom94PU.webp",
        pageLink:"https://www.shop.com/Health+~+Nutrition/-20?tkr=191112180421health&eb=1",
        name: "Health & Nutrition"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/1/D/n4NKqOTOU.webp",
        pageLink:"https://www.shop.com/Beauty/-20?tkr=191112180421beauty&eb=1",
        name: "Beauty"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/o/C/hFkRzqFUg.webp",
        pageLink:"https://www.shop.com/Home+Store/-20?tkr=191112180421home&eb=1",
        name: "Home & Cleaning"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/K/9/jf6S-qMAo.webp",
        pageLink:"https://www.shop.com/DNA+Miracles+-v250199-c+.xhtml?tkr=191112180421DNA",
        name: "Baby & Kids"
    },
    {
        imgUrl:"https://www.shop.com/feo-cdn/O/n/hcB6OO5UQ.webp",
        pageLink:"https://www.shop.com/Jewelry/-20?eb=1",
        name: "Jewelry"
    }
 
];


ourBrandsData.map(function(el){
    var box = document.createElement("div");
    box.setAttribute("class","scrolldiv");

    var anch = document.createElement("a");
    anch.href = el.pageLink;

    var namebox = document.createElement("div")
    namebox.setAttribute("class","namebox")
    var name = document.createElement("p");
    name.textContent = el.name;  
    namebox.append(name);

    var imgBox = document.createElement("div");
    var img = document.createElement("img");
    img.src = el.imgUrl;
    imgBox.append(img);

    anch.append(namebox,imgBox);

    box.append(anch)
    document.querySelector("#ourBrandsDiv").append(box)
});
//Our Brands end here