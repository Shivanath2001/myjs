
// how to add click event in multiple element ...

            const btn=document.querySelectorAll(".mybtn button")
            console.log(btn);// it gives 3 button


        // but we want when click different button these are show differnt action

            for(let bt of btn){
                
                bt.addEventListener("click",function(){
                    
                    console.log("for of loop -->",this.textContent);// it gives textContent their respective button
                })
            }
            for(let i=0;i<btn.length;i++){
                btn[i].addEventListener("click",function(){
                
                    console.log("Normal for loop -->",this.textContent);// it gives textContent their respective button
                })}

            btn.forEach(function(b) {
                b.addEventListener("click",function(){
                
                console.log("forEach loop -->",this.textContent);
                console.log(".......");  }  
                
            )})

    // Event object
            
                
            // job bhi  kisi bhi element pe event listener add hoga
            // ja engine--- line by line code execute karta hai
            // browser --- js engine +extra features
            //browser --- js engine + WebApi

            // job browser ko pata chalega ki user ne event  perform kia
            //jo hum listener(eventListener) kar rahe hai
            // browser----2 phages complete
            // 1 . callback function hai wo js engine ko degi
            // 2. callback function ke browser jo event hua hai uske information bhi dege 
            // ye information ek object ke form me milegi 

            const fbtns=document.querySelectorAll(".eventobj button")
                console.log(fbtns);
              for(let fbtn of fbtns){
                fbtn.addEventListener("click",function(){
                    console.log(this.textContent);
                   })

                fbtn.addEventListener("click",function(event){
                    console.log(event);
                    console.log("event terget -->",event.target);
               })}

               const butt=document.querySelectorAll(".mybtn button")
               butt.forEach(button=>{
                button.target.style.backgroundColor="red"
               })
              