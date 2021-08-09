



@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');



@media screen and (min-width: 801px){
    .facilities{
        height: 90% ;
        margin: 0.5%;
      /* margin-right: 20px;
        margin-left: 12px; */
        justify-content: center;
        width: 90vw;
     }

.facilityText{
    margin-top: 1.5%;
    margin-bottom: -2%;
}
/* .video{
   width: 300px;
   height: 400px;
   
} */
.line1{
   display: flex;
   margin-top: -5%;
   margin-left: 25px;
   margin-right: 30px;
   justify-content: center;
}

.line2{
   display: flex;
   margin-top: -5%;
}
.caption{
  margin-top: -19%;
}

}

@media screen and (min-width: 1000px) {
.facilities{
   justify-content: center;
   margin: 2%;
      /* margin-right: 20px;
        margin-left: -25px; */
}
.facilityText{
    margin-bottom: 0.5%;
}
/* .video{
   width: 350px;
   margin: 5px;
} */
.caption{
   margin-top: -12%;
}
.line1{
   display: flex;
   margin-top: -3%;
   width: 80%;
}
.line2{
   display: flex;
   margin-top: -3%;
   width: 80%;
}
}

@media screen and (min-width: 1299px) {
   body{
      height: 100vh;
      width: 100vw;
      
  }
    
.facilityText{
   margin-top: 1%;
   margin-bottom: 1%;
   font-size: 1.4rem;
}
.facilities{
   overflow-y: hidden;
   padding-bottom: 0;
   justify-content: center;
   /* padding-left: 20px; */
   overflow-x: hidden;
   overflow-y: hidden;
   margin-right: 10%;
}
.line1{
   display: flex;
   margin-bottom: 4%;
   justify-content: center;
   margin-left: 5px; 
}
.line2{
   display: flex;
   justify-content: center;
   margin-left: 5px; 
   margin-top: -4%;
}

/* .video{
   width: 440px;
   height: 00px;
   margin: 5px;
} */


.caption{
   color: rgba(0, 0, 0, 0.6);
   text-align: center;
   font-family: 'Raleway', sans-serif;
   font-weight: bold;
   margin-top: -1.5%;
  
}

.backDiv{
   margin-top: 5px;
   /* margin-bottom: -10%;   */
   text-align: center;
   margin-bottom: 0;
}
.back{
    opacity: 0.5;
}

.back:hover{
    font-weight: 600;
   color: blue;
   transform: scale(1.3);
   transition: 1s ease-in-out;
}

}