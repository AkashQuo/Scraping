
describe("Baseball cards",()=>{

    it("Get the data ", async()=>{
    
        await browser.get('https://www.ebay.com/itm/Panini-2019-20-Chronicles-Basketball-NBA-Cards-Mega-Box-Break-Random-Team/193800992967?_trkparms=ispr%3D1&hash=item2d1f7078c7:g:UfEAAOSwD7Nfnk93&amdata=enc%3AAQAFAAACcBaobrjLl8XobRIiIML1V4Imu%252Fn%252BzU5L90Z278x5ickkfKe2vUidqHRg3XM2X2xOVMVl0JP2tBizNQdixnTFHUVApji6S8DfBH6PKVtcDPEHDliy%252BDcpXFOtAVfWXlgwZTZyYNW4gfpRajZ42m0MNmxVraWRKUQJR8q294sN338EyMLLhzEmfrn4Afot3gOhTR2V0FMpehW8N5bUcEQUI7s1ezfIBIlyrkxO8fosG%252FB38pO1oMJaOFmu5siwn3JPlWlBgE2ZGSQph4Ynzxxkvwtnj1keuqMGyggEb4frPhbTBmy5a29GVIC2Du7r8Pv3VMbMTckFuoH6L9u9LpjVtum1wKARhL%252BYv0nnXZPKCL5QQcDn%252FYXzV56nAxqmGL4xPOrR8yztdIzySb8Eo7S%252FDge6whSKWaaVzfHi%252B41eF8mG529HBfDr9NWW7GBx9FkPJtnr%252BWMW7zihJ4z1clxBItRL76kaKcEu8sGljbDZ%252FIyMjJd43hF7jXUx1v%252F9JSbEFi8tcoChdgQxWmPDTKk3ujZL4S4Ht6RIQ5NflmaM0bCPSDJ5VRzVE6ehYA6xS8Zn60wyVRBCHs7LQ%252B%252FDZ9TSu%252FBcxgaOJIRzS%252BySK9V2r%252FEtFjuveDt7Z4n2xTNVBdgb0wyFFDVHLLwWh67cbS%252FaNFMM31omUj3Wcz%252FeHRZpD0Rtx%252B28uy5%252Blm6cPlf7ZPAZVfgqwtvKYW8odPcQ7yj4NSK%252FHGExqTcrm4aQA4x%252FBctow7RiXc9yg61K5Cj374ivoZZKRIiEnHHzQd%252Fab3l5b3arOVAbbI0tb%252FIJvDQkFGpS7nA0FmSwKGFIeApLfME%252FoQ%253D%253D%7Ccksum%3A193800992967f128d0dfe607402c8e7c83807bec5878%7Campid%3APL_CLK%7Cclp%3A2334524');
        browser.sleep(15000);

        element (by.xpath ("//h1")).getText().then(function(CardName){console.log('Card Name: '+CardName); });
        browser.manage().timeouts().implicitlyWait(5000);

        element (by.xpath ("//div [contains(text(),'Condition')]/../div[2]")).getText().then(function(Conditions){console.log('Condition: '+Conditions); });
        browser.manage().timeouts().implicitlyWait(5000);

        // element (by.xpath ("//div[contains(text(),' Unit Price:')]/..//following::span[@id='prcIsum']")).getText().then(function(Conditions){console.log('Unit Price: '+Conditions); });
        element (by.xpath ("//span[@id='prcIsum']")).getText().then(function(Conditions){console.log('Unit Price: '+Conditions); });
       
        browser.manage().timeouts().implicitlyWait(5000);
        
        
      

        browser.close();

    });

   


});