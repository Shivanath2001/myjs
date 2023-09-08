// ............Document Object Model ( DOM ) ............

    // Use of  DOMs..

        // Select

        //   1. getElementById()
            // if Id is present , then it works
        
            const mainheading=document.getElementById("h2-headline")
            
            console.log(mainheading);

        // 2.querySelecter()


        const header = document.querySelector(".header")
        console.log(header);

         //Disadvantage:
            // QuerySelecter select only 1st class or Id if same class or id are repeated
            console.log(document.querySelector(".nav-item")); 


        // 3. querySelecterAll()
                 //it is select all item if same class or id is present
                 console.log(document.querySelectorAll(".nav-item"));

                 // it represent an array but it not an actual array it ia collection of object 

        // select text

                const text=document.querySelector(".header")
                console.log(text.textContent);// it gives all the text present in the header class
               // const headlineText=document.querySelector("#h2-headline")
                const headlineText=document.getElementById("h2-headline")
                console.log(headlineText.textContent);// HELLO is print but we want manage your taskes // it gives all text if hide or not

                

        // select innerText
            console.log(headlineText.innerText);

            // change  text

               headlineText.innerText="Learn  more about ..."// change just like add element in object
                console.log(headlineText.innerText);// changed text

        
    // change style of the element

            const section_todo_h3=document.querySelector("section.section-todo h3")
            console.log(section_todo_h3.innerText);
            section_todo_h3.style.color="green"
            //section_todo_h3.style.background-color="green"// background-color is not currect syntax 
            // currect syntax is  "background Color"
            section_todo_h3.style.backgroundColor="#D6E7DB"
            section_todo_h3.style.border=" 2px dotted lightgreen"
            const todosubmit=document.querySelector("section form input")
            todosubmit.style.border=" 2px solid lightgreen"


    //getAtribute()

        const link=document.querySelector(".navItems li.nav-item3 a")
        console.log(link.getAttribute("href"));
        link.href="set a link...??"
        console.log(link.getAttribute("href"));

    // get multiple items using by getElements by class name

        const navItem=document.getElementsByClassName("nav-item")
        console.log(navItem[0].innerText);
        
    // get multiple element items using querySelecterAll
            const navItemquery=document.querySelectorAll(".nav-item")//HTMLCollection
            console.log(navItemquery[1].innerText);

    // LOOP..

        // array like object --> use  >  indexing , length proprty 

        //Simple for loop
        // for of loop
        // forEach loop 

        // we can't forEach mathod to iterate through HTMLCollection

                const navItem_query_selecter=document.querySelectorAll(".nav-item")
                for( let i=0;i<navItem_query_selecter.length;i++){
                    console.log(navItem_query_selecter[i]);
                }
                const tag=document.getElementsByTagName(".navItems li a")
                console.log(tag);

                for(let navI of navItem_query_selecter){
                    console.log(navI);
                }
        // change HTMLCollection to array items

        const changeArray=Array.from(tag);
        console.log(Array.isArray(changeArray));// yes it is array         

    // innerHTML

           var innerHTML=document.querySelector(".header")     
            console.log(innerHTML); 
            // innerHTML.innerHTML+="<button class=\"btn\"> more<button>"
           
            innerHTML.innerHTML+="<div class=\"fedd\"><input  id=\"fed\"  type=\"text\"placeholder=\"feedback(innerHTML)\" ></div>"
            console.log(innerHTML); 

            var fedd=document.querySelector(".fedd ");
            var fed=document.querySelector("#fed ");
            console.log(fedd);
            // fed.style.backgroundColor="#012C02"
            fed.style.borderRadius="3px"
            fedd.style.position="absolute"
            fedd.style.overflow="hidden"
            fedd.style.top="95%"
            fedd.style.width="12%"
            fedd.style.minWidth="220px"
            // fedd.style.justifyContent="center"
            fedd.style.left="50%"
            fedd.style.border="2px solid none"
            fedd.style.backgroundColor=" none"
            // fedd.style.display="felx"
            fedd.style.transform="translate(-40%)"



    //i want to show how many classes are prsent in "section-todo"

    // .classList

        const noClass= document.querySelector(".section-todo")
        console.log(noClass.classList);

        //add class
                noClass.classList.add("bgBlack")
                const bgBlack=document.querySelector(".bgBlack")
                console.log(bgBlack);
                // bgBlack.style.backgroundColor="blue"
                console.log(noClass.classList);// 3 classes are present 

        // remove class
                noClass.classList.remove("abc")
                console.log(noClass.classList);// class-abc removed

        // Check class exist or not 
               const present= noClass.classList.contains("abc")
               console.log(present);// not exsit " abc " class
         
        //toggle
                
                //New class added , if class not  exist 
                //New class remove , if class already  exist 
               const togolePresent= noClass.classList.toggle("bgBlack")// remove "bgBlack", because this class already present in document object ..
               console.log(togolePresent);// faule means not exist
               console.log(noClass.classList);
               const togolePresent1= noClass.classList.toggle("bgBlack")// add "bgBlack", because this class not exit in document object 
               console.log(noClass.classList);

    //Add new inner HTMl

                const todolist= document.querySelector(".todolist")
                console.log(todolist);
                console.log(todolist.innerHTML);// inner HTNL
            // change inner HTML

            todolist.innerHTML="<li>inner HTML -1</li>"// it change previous inner HTML
            todolist.innerHTML=todolist.innerHTML+"<li>inner HTML -2</li>"
            //or
            todolist.innerHTML+="<li>inner HTML -3</li>"
            console.log(todolist.innerHTML);

           


        // when yiou should use it , when you should not
                 // Disadvantage if  above process 
                // it render old list then next then next... next..
                //so this process generate pergormance issues.

        //the batter way to add inner HTML compare to the   this process   ( todolist.innerHTML="<li>inner HTML -1</li>" )

                //document.createElement()

                const  newtodoitem= document.createElement("li")// it create <li></li> tag
                console.log(newtodoitem);
                const newtodoitemtext=document.createTextNode("new todo item text");// it not add text in <li></li>
                console.log(newtodoitemtext);

            //append
                // add item in last

                newtodoitem.append(newtodoitemtext)//add text like <li>new todo item text</li>
                console.log(newtodoitem);
                todolist.append(newtodoitem)//after add it show on the display

                //  or (sorthand mathod)
                 const newtodo=document.createElement("li")
                 newtodo.textContent="Append add text at last"
                 todolist.append(newtodo);
                 console.log(newtodo);

            // preapend
                // add item at  first
                const newtodolast=document.createElement("li")
                 newtodolast.textContent="Append add text at first"
                 todolist.prepend(newtodolast);
                 console.log(newtodo);

            //remove tag
              
                const removehtml2=document.querySelectorAll(".todolist li")
            
                console.log(removehtml2);
                const rem_html_2=removehtml2[2]
                console.log(rem_html_2);
                rem_html_2.remove()// remove Inner HTML-2 

        // insert after and before

             // before
                var li=document.createElement("li");
                li.textContent="before todo list"
                console.log(li);
                const beforetodolist=document.querySelector(".todolist")
                console.log(beforetodolist);
               // beforetodolist.before(li)// add before  class="todolist"

            //after

                beforetodolist.after(li)// add after class="todolist"

        //element.insertAdjacentHTML(where,html)
                
                //where-->beforebegin ,afterbegin,afterend,beforeend
                        
                const newlist= document.querySelector(".todolist")
                console.log(newlist);
                newlist.insertAdjacentHTML("afterbegin","<li>afterbegin</li>")
                console.log(todolist);

        
        // clone node

            const ul=document.querySelector(".todolist")
            const lie=document.createElement("li")
            lie.textContent="clone node.."
            // append or perpend are can't work togather, but we want it's work togather,after clone it then it owrk togather
            //syntax:- element.cloneNode(true,false) ,true:-clone with their child, false:- without child

            const lie2=lie.cloneNode(true)//deep clone 
            // const lie2=lie.cloneNode(false)

            ul.append(lie)
            ul.prepend(lie2)
            console.log(ul);

    //some old mathod to support poor IE(internet explorer)
                //appendChild()  // work like append
                    // ex: ul.appendChild(li)
                //insertBefore()  /like gefore
                    //ex:
                //replaceChild()
                //removeChild()

        // static list vs live list
                
                // querySelecterAll gives static list 
                // getElementBy(something) gives live list .

            // staticlist 
                // don't shoe in NodeList 

                const ul_=document.querySelectorAll(".todolist li")
                console.log(ul_);
                const  li10=document.createElement("li")
                li10.textContent="li-10"
                ul.append(li10)
                console.log(ul_);// after adding <li></li> it does't show in the NodeList on console screen

            //live list 
                // it show in NodeList 
                const li_11=ul.getElementsByTagName("li")
                const  li11=document.createElement("li")
                li11.textContent="li-11";
                ul.append(li11)
                console.log(li_11);// in live list after edding <li> Li-11</li> , it show in the HTMLcollection 

        //How to get the dimensions of the element

                // find Height and width

                const srctiontodo= document.querySelector(".section-todo")
                const info=srctiontodo.getBoundingClientRect()
                const height=srctiontodo.getBoundingClientRect().height;// Height gives only 
                console.log(info);
                console.log(height);



    // .... EVENT.....

            // we can use 3 different type to add event
                // 1. inline HTML

                      // ex:<button onclick="console.log('you clicked me ..!!)></button>

                 // 2. in js

                        //in this click event we can not press more than one 
                
             //click

                   
                    const btn=document.querySelector(".btn-headline")
                    console.dir(btn);
                    // btn.onclick=function(){
                    //     console.log("you clicked me...!!");
                    // }
                

                // 3. in js

                    // method --> addEventListener(event , action)
                    
                    btn.addEventListener("click",function (){
                        console.log("normal function  this keyword..!!! ");
                            console.log(this);// gives lexical object ( <button>..</button>)
                    })
                    btn.addEventListener("click", ()=>{
                        console.log("Arrow function  this keyword..! ")

                 // this keyword

                    console.log(this); // one levelup lexical  object( hrere window object)
                
                        }
                    )

                // this keyword

                        // in Arrow function this is represent one levelup lexical  object
                        // in normal function " this " can be represent lexical object 


               
                //buton press
                