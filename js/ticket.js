    let count=0;
      const seats = document.querySelectorAll('.kbd');
          seats.forEach(kbd =>{
           kbd.addEventListener('click',()=>{
               //   kbd.classList.add('bg-green-400');
                   
                 
               count = count+1;
              
                
                 
                
                  
                
                 if(count === 5)
                 {
                      disabledaledallseat ();
                 }
                 if(count<=4)
                 {
                    removebackgroundclorofseat(kbd);
                     decreasetheseatleft(); 
                     seatincrease();
                      rawpricecaluation();
                      grantotalprice();
                      checkpessangerphonenumber();
                      adddiv(kbd);
                      
                 }
                  if(count===4)
                  {
                      appbutton();
                  }
               
                     
                    //  console.log(count); 
           });
          });
            
  
    function removebackgroundclorofseat(kbd)
    {
     kbd.classList.add('bg-[#1DD100]');
      kbd.style.pointerEvents = 'none'; 
         
          
    }
    function disabledaledallseat()
    {  
     seats.forEach(kbd => {
          if (!kbd.classList.contains('bg-[#1DD100]')) {
            kbd.style.pointerEvents = 'none';  // Disable unselected seats
            kbd.style.opacity = '0.5';         // Optional: Dim the unselected seats
          }
        });
    }
            
    function decreasetheseatleft()
    {
        const leftseat = document.getElementById('leftseat');
         const leftseattext =leftseat.innerText;
         const leftseattextvalue = parseInt(leftseattext);
         const decreasenewvalue = leftseattextvalue -1;
         leftseat.innerText = decreasenewvalue;
    }
       
   function seatincrease(){
          const element = document.getElementById('seat-increase');
           const elementtext = element.innerText;
           const elementvalue = parseInt(elementtext);
           const enreaselementvalue = elementvalue +1;
           element.innerText = enreaselementvalue;
   }

  function rawpricecaluation(){
     const elementvalue = getdataofeleelementvalue('total-taka')
     
     const enreaselementvalue = elementvalue +550;
      setvalueasatext('total-taka',enreaselementvalue);
  }

  function getdataofeleelementvalue(elemenid)
  {
    const element = document.getElementById(elemenid);
    const elementtext = element.innerText;
    const value = parseInt(elementtext);
      return value;
  }

  function setvalueasatext (eleementid ,ivalue)
  {
       const seteleement = document.getElementById(eleementid)
       seteleement.innerText = ivalue;
  }
 
   function grantotalprice()
   {
      const grandtextvalue = getdataofeleelementvalue('grand-taka');
       const inreasegrandtala = grandtextvalue+550;
       setvalueasatext('grand-taka',inreasegrandtala);
        

   }

 // console.log('anik');
 function appbutton(){
     const Applybutton = document.getElementById('apply');
     Applybutton.disabled = false;
     Applybutton.classList.add('enabled');
      getdatatainputofapplybuuton();

 }


 function getdatatainputofapplybuuton()
 {
  document.getElementById('apply').addEventListener('click',()=>{
    const inputfield    =  document.getElementById('price-input');
const inputfiledvalue = inputfield.value; 
          if(inputfiledvalue === 'NEW15')
          {
             console.log("hello js");
              updategrandtotalwithnew15();
              replaceupdatevalue();
          }
          if(inputfiledvalue === 'Couple20')
            {
                
                updategrandtotalwithCouple20();
                replaceupdatevalue();
            }

   });

 }
  function updategrandtotalwithnew15()
  {
    const rawprice = getdataofeleelementvalue('total-taka');
    const updateprice = parseInt(rawprice-(rawprice*15)/100);
    return updateprice;
      

  }
   function updategrandtotalwithCouple20()
   {
    const rawprice = getdataofeleelementvalue('total-taka');
    const updateprice = parseInt(rawprice-(rawprice*20)/100);
    return updateprice;
      
   }

  function replaceupdatevalue()
  {
      // replacewith15
      const replace15 = updategrandtotalwithnew15();
      const getgrandtext = document.getElementById('grand-taka');
      getgrandtext.innerText = replace15;
    //  replacewith20
      
        const replace20 = updategrandtotalwithCouple20();
        const grandtext20 = document.getElementById('grand-taka');
        grandtext20.innerText = replace20;
  }
 
      function checkpessangerphonenumber()
     {
      document.getElementById('phone-number').addEventListener('input',()=>{
        const Applybutton = document.getElementById('next');
   Applybutton.disabled = false;
   Applybutton.classList.add('enabled');
       })
     }
     
     function adddiv(kbd)
     {
         const preesskey = kbd.innerText;
          
           
           const corediv = document.getElementById('add');
           const adddiv = document.createElement('div');
           const seat = document.createElement('p');
            const  classname = document.createElement('p');
            const price = document.createElement('p');
           seat.innerText = preesskey;
           classname.innerText = 'Economy';
           price.innerText = '550 tk';
           adddiv.classList.add('flex','justify-between','spaces-y-2');
           adddiv.append(seat,classname,price);
           corediv.append(adddiv);
           
         

     }
  