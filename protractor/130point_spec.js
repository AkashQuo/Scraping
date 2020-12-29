const fs = require ("fs");


describe("Baseball cards",()=>{

    it("Get the data ", async()=>{

    let nishant = {CARDNames:' ', CardfullName:' ', CARDSContents:' '}
       await browser.get('https://130point.com/');
       browser.sleep(5000);

        element (by.xpath ("//a [text()='Baseball' and @data-td_filter_value ='68']")).click();
        browser.manage().timeouts().implicitlyWait(5000);
      

        // element (by.xpath (" //a[text()='2018 Immaculate Collection Baseball']")).click();
        // browser.manage().timeouts().implicitlyWait(5000);

        // element (by.xpath ("//h1 ")).getText().then(function(CardName){console.log('Card Name: '+CardName); let CARDSNAME={"CARD_Name":CardName};  fs.writeFileSync("..//JSON/Cards.json",JSON.stringify(CARDSNAME)) });
        // browser.manage().timeouts().implicitlyWait(5000);
       
        // element (by.xpath ("//h2 ")).getText().then(function(CardName1){console.log('Card Full Name: '+CardName1); let CARDSFullName={"CARD_FullName":CardName1};  fs.appendFileSync("..//JSON/Cards.json",JSON.stringify(CARDSFullName)) });
        // browser.manage().timeouts().implicitlyWait(5000);


        element (by.xpath (" //a[text()='2018 Immaculate Collection Baseball']")).click();
        browser.manage().timeouts().implicitlyWait(5000);

        element (by.xpath ("//h1 ")).getText().then(function(CardName){console.log('Card Name: '+CardName); nishant.CARDNames=CardName; console.log(nishant);});
        browser.manage().timeouts().implicitlyWait(5000);
       
        element (by.xpath ("//h2 ")).getText().then(function(CardName1){console.log('Card Full Name: '+CardName1); nishant.CardfullName=CardName1;console.log(nishant); });
        browser.manage().timeouts().implicitlyWait(5000);
        
        element (by.xpath ("//h2/../p[2]")).getText().then(function(CardContent){console.log('Card Description: '+CardContent);  nishant.CARDSContents=CardContent;console.log(nishant);  fs.writeFileSync("..//JSON/Cards.json",JSON.stringify(nishant)); });
        browser.manage().timeouts().implicitlyWait(5000);
       
        element (by.xpath ("//span[text()='Release Date']/../following::p")).getText().then(function(CardContent){console.log('Release Date: '+CardContent);});
        browser.manage().timeouts().implicitlyWait(5000);

        // element.all (by.xpath ("//h3/following::ul/li")).count().then (function(countvalue){
        for (let i=1;i<=3;i++){
            element (by.xpath ("//h3/following::ul/li [ "+i +"]")) .getText().then(function(ProductPackout){console.log('Product Packout: '+ProductPackout);});
            browser.manage().timeouts().implicitlyWait(5000);
        }
        // })
   
        element (by.xpath (" //a")) .getAttribute('href').then(function(Imageurl){console.log('Image URL: '+Imageurl);});
        browser.manage().timeouts().implicitlyWait(5000);  
   
    });


});