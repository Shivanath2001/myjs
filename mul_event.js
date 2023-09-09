
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

               const butt=document.querySelectorAll(".eventobj button")
               butt.forEach(button=>{
                button.addEventListener("click",function(e){
                   e.target.style.backgroundColor="red"
                   e.target.style.color="white"
                })
               })

               
               
               // keypress event
               const key=document.body
               
               key.addEventListener("keypress",function(e){
                   console.log(e.key)
                })

    //event bubbling 

        //when we apply event in the parent then it reflect to their child

        //mouseover event
                
            // some event occur when mouse over on the element 
            const grandparent=document.querySelector(".box1")
            const parent=document.querySelector(".box2")
            const child=document.querySelector(".box3")
            // console.log(box3);
            child.addEventListener("mouseover",function(){
                console.log("my mouse over.....! ");
               child.style.backgroundColor="green"
            })//here mouseover  apply in box3  , but  it  work in  both box-1 and box-2 
            parent.addEventListener("mouseover",function(){
                console.log("my mouse over.....! ");
               parent.style.backgroundColor="blue"
            })//here mouseover  apply in box3  , but  it  work in  both box-1 and box-2 
            
            grandparent.addEventListener("mouseover",function(){
                console.log("my mouse over.....! ");
                grandparent.style.backgroundColor="red"
            })//here mouseover  apply in box3  , but  it  work in  both box-1 and box-2 
            
        //mouseleave event
            // some event occur when mouse leavef on the element 
            child.addEventListener("mouseleave",function(){
                        console.log("my mouse  leave .....!");
                        child.style.backgroundColor="red"
                })
            parent.addEventListener("mouseleave",function(){
                        console.log("my mouse  leave .....!");
                        parent.style.backgroundColor="green"
                })
                grandparent.addEventListener("mouseleave",function(){
                        console.log("my mouse  leave .....!");
                        grandparent.style.backgroundColor="blue"
                })

        // click   
             
            child.addEventListener("click",function(){
                console.log("click is on box-1.....!");
                child.style.backgroundColor="blue"
                })
                parent.addEventListener("click",function(){
                    console.log("click is on box-2.....!");
                    parent.style.backgroundColor="red"})
                    
            grandparent.addEventListener("click",function(){
                        console.log("click is on box-3.....!");
                        grandparent.style.backgroundColor="green"
                    })//here mouseover  apply in box3 , but it  work in both box-1 and box-2 
