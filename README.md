
# Noder.js
**Bakaba Noder Javascript Promises Doker**

* I HATE JAVASCRIPT PROMISE CONCEPT, so I decided to make them just a little more enjoyable.

Every Noder Object behave JUST like typical Promise, but it accepts a second argument which indicates the Neder Level. 
the Neder level can be explained as "how to behave when this neder הופר.

***Neder Levels:***

 - NEDER.be_ima_sheli -> will trigger console.log
 - NEDER.be_saba_ve_savta -> will trigger console.warn
 - NEDER.be_sefer_tora -> will trigger console.error
 - NEDER.ba_or_she_ani_roae -> will throw an Error
 - NEDER.ba_kadosh_bar_ouh_ho -> Will popup a msgbox (on windows only) 
 - 

		


***Usage:*** 
	

    import {NEDER, Noder} from  './Noder.js';
    const  testNeder= new  Noder((res, rej) => {
        setTimeout(() => {
    
           res('Neder 1 is resolved')
    
         }, 1000);
    
           }, NEDER.ba_kadosh_bar_ouh_ho);



