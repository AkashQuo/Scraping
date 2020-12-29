describe("Baseball cards",function(){

    it("Get the data ", function(){
        // browser.sleep(5000);  
        // browser.get('https://stockx.com/trae-young-2018-panini-prizm-rookie-78');
        browser.get('https://stockx.com/');
        browser.sleep(5000);

        element (by.buttonText('Confirm')).click();


        browser.actions().mouseMove(element(by.xpath("//a[text()='Browse']"))).perform();
        browser.manage().timeouts().implicitlyWait(10000);
        
        
        browser.actions().mouseMove(element(by.xpath("//a[text()='Collectibles']"))).perform();
        browser.manage().timeouts().implicitlyWait(5000);

        browser.actions().mouseMove(element(by.xpath("//a[text()='Trading Cards']"))).perform();
        browser.manage().timeouts().implicitlyWait(5000);

        browser.actions().mouseMove(element(by.xpath("//a[text()='Basketball']"))).perform();
        browser.manage().timeouts().implicitlyWait(5000);
        element (by.xpath("//a[text()='Basketball']")).click();

        browser.sleep(5000);
    });


});