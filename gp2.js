$(document).ready(function(){
    $('.icon').click(function(){
        $('.side').fadeIn();
        $('.closeside').click(function(){
            $('.side').fadeOut(); 
        })
    })
    // alert('the "get Gp" button has to be clicked before clicking the "get CGPA" button')
})





let container = (function (){

var scorearr =[]
var unitarr=[]
var totalpointArr=[]
var totalunitArr=[]
var gparr=[]




 return {
    
    grade: function(){
        for(let i=1; i<=8; i++){
            var InputScore= document.querySelector('#sc_' + i).value  
           
            if (InputScore >= 70){
                grade=5
            } else if (InputScore < 70 && InputScore >=60){
                grade = 4
            }else if (InputScore < 60 && InputScore >= 50){
                grade = 3
            }else if (InputScore < 50 && InputScore >=45){
                grade = 2
            }else if (InputScore < 45 && InputScore >=40){
                grade = 1
            }else if ( InputScore < 40){
                grade =0
            }
            scorearr.push(grade)
            
         }// for loop terminal
         console.log (scorearr)
    
    }, //grade object terminal

    unit: function (){
        for(let i=1; i<=8; i++){
            var InputUnit= document.querySelector('#unt_' + i).value 
           if (InputUnit!== ""){
            unitarr.push(parseFloat(InputUnit))
           }else{
               InputUnit=0
               unitarr.push(parseFloat(InputUnit))
           }
              
        } // for loop terminal
        console.log(unitarr);
        
    },
    SumUnitArray: function(){
        let totalUnit
        totalUnit=0
        for (let i=0; i<=unitarr.length-1; i++){
          totalUnit+=unitarr[i]  
        }
        console.log(totalUnit);
        
               

        return{
            TotalUnit: totalUnit
        }
        
        
    },

    UnitAndGradeProduct: function(){
       let total =0
        for (let n=0; n<=unitarr.length-1; n++){
           let product= unitarr[n]* scorearr[n]
           total+=product
        }
        
       //console.log(total);
       
    
  
    //    console.log(sumTP);
       

        return {
            totalpoint: total
        }
        
    },
    Division: function(){
       let TP, TU
        TP= this.UnitAndGradeProduct().totalpoint
        TU= this.SumUnitArray().TotalUnit
        gp=TP/TU
        
        
        gparr.push(gp)
        if (gp === 5 || gp ==4 || gp === 3 || gp === 2 || gp=== 1 || gp === 0 ){
            gp= gp + '.00'
       }else{
           gp= Math.floor(gp*100)/100
       }
       let comment;
         if(gp <= 5.0 && gp >=4.5){
             comment='YOU are on first class with an Excellent GP of ' + gp
         }else if(gp < 4.5 && gp >=3.5){
            comment='YOU are on Second class Upper with a sound GP of ' + gp
        }else if(gp < 3.5 && gp >=2.5){
            comment='YOU are on Second class Lower with a GP of ' + gp
         }else if(gp < 2.5 && gp >=1.5){
            comment='YOU are on Third class with a GP of ' + gp
        }else if(gp < 1.5 && gp >=1.0){
            comment='YOU are on pass with  poor GP of ' + gp
        }else if(gp <= 1.0 && gp >=0){
            comment='YOU are on probation with a GP of ' + gp + 'Failure to improve next semster will lead you to road 1 ' 
        }else{
            comment='please Enter reasonable values'
        }
    document.querySelector('.what').textContent=comment;
       console.log(gp);
        console.log(gparr);
       
    },


    pushing: function (){
        totalpointArr.push(this.UnitAndGradeProduct().totalpoint)
        console.log(totalpointArr)
        
        totalunitArr.push(this.SumUnitArray().TotalUnit)
         console.log(totalunitArr);
         
         let sumTP=0
         let sumTU=0
         for (let i=0; i<=totalpointArr.length-1; i++){
             sumTP+=totalpointArr[i]
             sumTU+=totalunitArr[i]
             
         }

         console.log(sumTP)
         console.log(sumTU)

         return{
             STP: sumTP,
             STU: sumTU,
             GPARR: gparr
         }
             
    },
   
    initialValues: function (){
        scorearr=[]
        unitarr=[]
    }

}// return terminal





})()





document.querySelector('.btnget').addEventListener('click', function (){
   
    container.grade()
    container.unit()
    container.SumUnitArray()
    container.UnitAndGradeProduct()
    container.Division()
    container.pushing()
    

    document.querySelector('.btnnext').addEventListener('click', function(){
        for (i=1; i<=8; i++){
           document.querySelector('#sc_'+ i).value =""
           document.querySelector('#unt_'+ i).value=""  
       } //for loop terminal
    }) //btn next terminal

  
  
    document.querySelector('.cgpa').addEventListener('click', function (){
        
     
     
        let cgpa
      cgpa = container.pushing().STP/container.pushing().STU
      if (cgpa === 5 || cgpa ===4 || cgpa === 3 || cgpa === 2 || cgpa=== 1 || cgpa === 0 ){
        cgpa= cgpa + '.00'
      }else{
      cgpa= Math.floor(cgpa*100)/100
     }
     console.log(cgpa);
   
     let CGPcomment;
     if(cgpa <= 5.0 && cgpa >=4.5){
        CGPcomment='YOU are on first class with an Excellent GPPA of ' + cgpa
     }else if(cgpa < 4.5 && cgpa >=3.5){
        CGPcomment='YOU are on Second class Upper with a sound GPPA of ' + cgpa
    }else if(cgpa < 3.5 && cgpa >=2.5){
        CGPcomment='YOU are on Second class Lower with a GPPA of ' + cgpa
     }else if(cgpa < 2.5 && cgpa >=1.5){
        CGPcomment='YOU are on Third class with a GPPA of ' + cgpa
    }else if(cgpa < 1.5 && cgpa >=1.0){
        CGPcomment='YOU are on pass with  poor GPPA of ' + cgpa
    }else if(cgpa <= 1.0 && cgpa >=0){
        CGPcomment='YOU are on probation with a GPPA of ' + cgpa + 'Failure to improve next semster will lead you to road 1 ' 
    }else{
        CGPcomment='please Enter reasonable values'
    }


    $('.resultB').fadeIn()

    document.querySelector('.resultB').textContent= CGPcomment  
    document.querySelector('.gplist').textContent= container.pushing().GPARR


   })// btn cgpa terminal

   container.initialValues()
   
})




//MISSION SUCCESSFUL