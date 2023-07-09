var cover1 = document.getElementById("cover1");
var cover2 = document.getElementById("cover2");
var cover3 = document.getElementById("cover3");
var showturnx = document.getElementById("turnshift_X"); 
var showturno = document.getElementById("turnshift_O");
var playboard = document.querySelectorAll(".box");
var result_text = document.getElementById("result_text");
var mainmenubtn = document.getElementById("mainmenu");

var replaybtn = document.getElementById("replay");


var cover0 = document.getElementById("cover0");
var coverEMH = document.getElementById("coverEMH");
var win_result = document.getElementById("win_result");




//ye sb variable win count krengee ki kon kitta jita
 var matches_bot_won_count =0;
 var matches_user_won_count =0 ; 
 var matches_X_won_count =0; 
 var matches_O_won_count =0;


//ye variable bnaye hai qki hr baar jb result print hoajata tha fir bhi bot ka last move run hota tha to wha answer print  true krdia hu to jb answer pprint hone k baad return hogA FUNCTION ME WAPIS TO BOT CALL NHI KREGA QKI WHA IF CASE LGA DIA HU SIMILARLY REPLY ME JAKE ISKO WAPIS FALSE KIA HU TAKI NEXT MOVE ME YE SHI KAAM KRE
var answer_printed = false;


var turn = "l";
var initial_turn = "l";  //this variable is made so that to store initail player select by the user so that we can set things up when replay is clicked this variable is updatedb every time reply is clicked 
var cover2_initial_classes ; // initail playboard cover 2 ka jo bhi class hai usko wapis set krne k lie replay button click hone pe ye variabble bnaya hai


var user_choosed_sign = 'l';var bot_choosed_sign = 'l';




var bot_initial_turn= false;
var user_initial_turn= true;



function X_button() { 
	 cover2.classList.remove("hidden");
	 cover2.classList.add("show");
	 // cover1.classList.add("hidden");
     showturnx.classList.add("turn");
	 turn = "x";
     initial_turn = "x";
     cover2_initial_classes = cover2.classList.value;

     user_choosed_sign = "x";
     bot_choosed_sign = "o";

                          
  }                                                          
                                                  
  function O_button() {                                              
	cover2.classList.remove("hidden");
	cover2.classList.add("show");
    // cover1.classList.add("hidden");           
    showturno.classList.add("turn");
	turn = "o";
    initial_turn = "o";
     cover2_initial_classes = cover2.classList.value;

     user_choosed_sign = "o";
     bot_choosed_sign = "x";


  }

  for (var i = playboard.length - 1; i >= 0; i--) {
  	playboard[i].setAttribute("onclick", "checkedbox(this)")
  }












  function checkedbox(element) {



// ye neecehe normal click hoga sb usi ka if else hai ;

  	if (turn=="x") {
//yha neecehe maine para add kia h playboard ek box ke ander thats it;
  		const para = document.createElement("p");
        para.innerText = "X";
        para.setAttribute("class", "cross_on_box");
        element.appendChild(para);
  		// yha neeche mai slide krwa rha hu ki kiska turn hai in playboard top section
  		showturnx.classList.remove("turn");
  		showturno.classList.add("turn");
	    turn = "o";
        	    //yha main jo box click hogya uspE wapis click na ho islie usme onclick attribute htaya hai
 
        element.removeAttribute("onclick");
        element.classList.remove("hoveronbox");
       // identification k lie ye class dalra ki kisme x hai kisme o h
        element.classList.add("x");


  }
  	else {
  		//yha neecehe maine para add kia h playboard ek box ke ander thats it;

  		const para = document.createElement("p");
        para.innerText = "O";
        para.setAttribute("class", "circle_on_box");
        element.appendChild(para);
  		// yha neeche mai slide krwa rha hu ki kiska turn hai in playboard top section
  		showturno.classList.remove("turn");
  		showturnx.classList.add("turn");
	    turn = "x";

	    //yha main jo box click hogya uspE wapis click na ho islie usme onclick attribute htaya hai
	    element.removeAttribute("onclick");
	    element.classList.remove("hoveronbox");

	    // identification k lie ye class dalra ki kisme x hai kisme o h
        element.classList.add("o");

  	}
  	answerpattern();

    if (answer_printed==true){return;}

 
    
    if( cover2.classList.contains('easy')){
          const myTimeout = setTimeout(botclick_easy, 300);
      }
     else if( cover2.classList.contains('friendplay')){
        //frnds play k lie koi bot ki zrwt ni hai hojayega yhi s;
        // this basically helps ki if last me draw ho jata hai to vo function call hoga dn draw check krlega;
          //const myTimeout = setTimeout(botclick_fp, 300);
      }
     else if( cover2.classList.contains('medium')){
          const myTimeout = setTimeout(botclick_medium, 300);
      }
     else if( cover2.classList.contains('hard')){
          const myTimeout = setTimeout(botclick_hard, 300);
      }
      


      


  }















  	// bot function creating for easy  ...........



  	function botclick_easy() {
  		let array=[];
            
            
  		for (var i = playboard.length - 1; i >= 0; i--) {
  			if(playboard[i].childElementCount == 0){
  				array.push(i);
  			}

  		}
  		if (array.length==0) {
            	result_draw();
            	return;
            }
  		// console.log(array.length)

  		let x = Math.floor((Math.random() * array.length-1) + 1);

          i = array[x];

         if (turn=="x") {
//yha neecehe maine para add kia h playboard ek box ke ander thats it;
  		const para = document.createElement("p");
        para.innerText = "X";
        para.setAttribute("class", "cross_on_box");
        playboard[i].appendChild(para);
  		// yha neeche mai slide krwa rha hu ki kiska turn hai in playboard top section
  		showturnx.classList.remove("turn");
  		showturno.classList.add("turn");
	    turn = "o";
        	    //yha main jo box click hogya uspE wapis click na ho islie usme onclick attribute htaya hai
 
        playboard[i].removeAttribute("onclick");
        playboard[i].classList.remove("hoveronbox");

        // identification k lie ye class dalra ki kisme x hai kisme o h
        playboard[i].classList.add("x");


  }
  	else {
  		//yha neecehe maine para add kia h playboard ek box ke ander thats it;

  		const para = document.createElement("p");
        para.innerText = "O";
        para.setAttribute("class", "circle_on_box");
        playboard[i].appendChild(para);
  		// yha neeche mai slide krwa rha hu ki kiska turn hai in playboard top section
  		showturno.classList.remove("turn");
  		showturnx.classList.add("turn");
	    turn = "x";

	    //yha main jo box click hogya 
	     //wapis click na ho islie usme onclick attribute htaya hai
	    playboard[i].removeAttribute("onclick");
	    playboard[i].classList.remove("hoveronbox");

	    // identification k lie ye class dalra ki kisme x hai kisme o h
        playboard[i].classList.add("o");

  	}

    
       //isko lagay hu qki taki if last move bot ka ho nd vo jeete to atleast dikhaye ki bhai ki playboard m kha select kia h nhi to milisecond me result m bhg jara tha 
       const myTimeout = setTimeout(answerpattern, 500);
  
     	//answerpattern();   

  	}

//============== bot function close ;





    


  	// ---------results pattern answer check funvtion;


  	function answerpattern(){

  		// store kra lie konsa konsa wale box me cross hai nd konse box me circle 
          var cross_array=[];
          var circle_array=[];
  		for (var i = playboard.length - 1; i >= 0; i--) {
  			if( playboard[i].classList.contains('x')) {
  				cross_array.push(i);
  			}
  			if( playboard[i].classList.contains('o')) {
  				circle_array.push(i);
  			}

  		}
       
       // answer validate krlo   
        check_for_ans(cross_array,circle_array);
  		//console.log(cross_array);
  		//console.log(circle_array);


  	}

  	function check_for_ans(cross_array,circle_array){

  		// sare results store kr lia array of array me
  		let ans = [
             [0,1,2],
             [3,4,5],
             [6,7,8],
             [0,3,6],
             [1,4,7],
             [2,5,8],
             [0,4,8],
             [2,4,6]

          ];
  		

// map create krke sare cross and circle wale array k elements jo the unko store kra lia taki fir ans array me traverse krke check kr lunga ki kya pattern h available;
       let map_cross = new Map();
       let map_circle = new Map();

  		
  			for (var j = cross_array.length - 1; j >= 0; j--) {
  				map_cross.set(cross_array[j], 1);
  			}

  			for (var j = circle_array.length - 1; j >= 0; j--) {
  				map_circle.set(circle_array[j], 1);
  			}

  			// yha cross map ka check hora pattern h kya koi bhi anser k sath ;


  			for (var i = 8 - 1; i >= 0; i--) {
  				var flag=1;
  				for (var j = 3 - 1; j >= 0; j--) {
  					if (  map_cross.has(ans[i][j])==false  ) {
                            flag=0;
                            break;
  					}
  				}

  				if(flag==1){
  					cross_win();
  				}

  			}

  			// yha circle map ka check hora pattern h kya koi bhi anser k sath ;


  			for (var i = 8 - 1; i >= 0; i--) {
  				var flag=1;
  				for (var j = 3 - 1; j >= 0; j--) {
  					if (  map_circle.has(ans[i][j])==false  ) {
                            flag=0;
                            break;
  					}
  				}

  				if(flag==1){
  					circle_win();
  				}

  			}

            last_answer_draw();
  		



  	}

    // if draw hua last move me to check krega ye answer pattern me dal dia hu whi check krlega end me simple sorted...........



    function last_answer_draw() {


        // basically if draw hota hai to answerpattern wala function nhi check krta bot wala function check krta hai results draw ka
        let array=[];
            
            
        for (var i = playboard.length - 1; i >= 0; i--) {
            if(playboard[i].childElementCount == 0){
                array.push(i);
            }

        }


        if (array.length==0) {
                result_draw();
                return;
            }

    }

//---------------------------------------------------------
  	function cross_win() {
        answer_printed=true;
  		//botclick_easy = false;  botclick_fp= false;
  		cover2.classList.add("hidden");
	    cover3.classList.remove("hidden");
	    cover3.classList.add("show");
	    result_text.innerText = "Player CROSS won the match "

        matches_X_won_count++;

        if (user_choosed_sign == "x") {
            matches_user_won_count++;
            //console.log(matches_user_won_count + " x ");
        }
        else if(user_choosed_sign == "o") {
            matches_bot_won_count++;
        }

       // console.log( "b  "+matches_user_won_count);
  	}

  	function circle_win() {
        answer_printed=true;
  		//botclick_easy = false;  botclick_fp= false;
  		cover2.classList.add("hidden");
	    cover3.classList.remove("hidden");
	    cover3.classList.add("show");
	    result_text.innerText = "Player CIRCLE won the match "

        matches_O_won_count++;

        if (user_choosed_sign == "o") {
            matches_user_won_count++;
           // console.log(matches_user_won_count + " c ");
        }
        else if (user_choosed_sign == "x"){
            matches_bot_won_count++;
        }

        //console.log( "c  "+matches_user_won_count);
  	}

  	function result_draw() {
        answer_printed=true;
  		//botclick_easy = false;  botclick_fp= false;
  		cover2.classList.add("hidden");
	    cover3.classList.remove("hidden");
	    cover3.classList.add("show");
	    result_text.innerText = "Match has been DRAWN !"
  	}



mainmenubtn.onclick = () =>{
	 window.location.reload();
}


//----------------------------------------------replay button ------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------




replaybtn.onclick = () =>{


    for (var i = playboard.length - 1; i >= 0; i--) {
        if(playboard[i].children[0] != undefined){playboard[i].removeChild(playboard[i].children[0]);}

        playboard[i].setAttribute("onclick", "checkedbox(this)")
        playboard[i].className = "";
        playboard[i].classList.add("box");playboard[i].classList.add("hoveronbox");

        
         

  }



    //yha pehle cover2 me jo bhi classes initially tha vo set kr dia 
     cover2.className = '';
     //console.log(cover2_initial_classes);
     cover2.className =  cover2_initial_classes;
  // now cover3  ko hide kia and cover2 ko wapis show
     cover3.classList.remove("show");
     cover3.classList.add("hidden");






         
        // jb user win krta hai to bot ka turn bcha rehta hai reult print hone k baaad to vo fltu ka run hota tha to usko manage krne k lie ye variable bnaya hu isko ab yha false krra hu wapis taki reply kbaad wapis bot function run hopaye ye return kr deta hai if true rhe to onclick board function me ;
         answer_printed=false;


         // yha neeche wapis set krra hu turn kiska hoga next replay dbane k baad usko;
         //alternate turn chelenege dono iska dhyan dia hu

        showturno.classList.remove("turn");
        showturnx.classList.remove("turn");
       
        if(initial_turn == "x"){
            showturno.classList.add("turn");
            turn = "o";
            initial_turn = "o";
            
            
        }
        else {
             showturnx.classList.add("turn");
            turn = "x";
            initial_turn = "x";
            
        
        }



        // yha neeche wapis set krra hu turn kiska hoga next replay dbane k baad usko;
         //alternate turn chelenege dono iska dhyan dia hu


        if (user_initial_turn==true) {
            bot_initial_turn=true;
            user_initial_turn=false;
        }
        else {
            bot_initial_turn=false;
            user_initial_turn=true;
        }









       // winresult jo hai usko update krra hu neechee ;
        if (cover2.classList.contains('friendplay')) {

              win_result.children[1].innerText="X - " + (matches_X_won_count);
              win_result.children[2].innerText="O - " + (matches_O_won_count);


        }

        else {

            

              win_result.children[1].innerText="YOU - " + (matches_user_won_count);
              win_result.children[2].innerText="BOT - " + (matches_bot_won_count);
          }

















//--------------------------------------------------------------------------------------------------------------
//                                                    newly added
//--------------------------------------------------------------------------------------------------------------
//if initially bot ka turn hoga to vo run krega pehle bs thats it usi k lie ye if lagaya hai;
    if(bot_initial_turn==true){


    if( cover2.classList.contains('easy')){
        
          const myTimeout = setTimeout(botclick_easy, 300);
      }
     else if( cover2.classList.contains('friendplay')){
        // this basically helps ki if last me draw ho jata hai to vo function call hoga dn draw check krlega;
          //const myTimeout = setTimeout(botclick_fp, 300);
      }
     else if( cover2.classList.contains('medium')){
          const myTimeout = setTimeout(botclick_medium, 300);
      }
     else if( cover2.classList.contains('hard')){
          const myTimeout = setTimeout(botclick_hard, 300);
      }

      bot_initial_turn=false;
      
      

      
    }


//--------------------------------------------------------------------------------------------------------------
//                                                    newly added
//--------------------------------------------------------------------------------------------------------------

     

}





//----------------------------------------------replay button ------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------























//--------------------------------------------------------------------------------------------------------------------------------


//--------------------------yha  se new edits hai sb  , advance tick tack toe ki trf -----------------------------------------











// frnd play 1v1 match ka button dbane pe kya hoga  usak code h ye...

function friends_play() {                                              
    cover1.classList.remove("hidden");
    cover1.classList.add("show");
    cover2.classList.add("friendplay");
    // cover1.classList.add("hidden");           

  }

// bot play  match ka button dbane pe kya hoga  usak code h ye..


function bot_play() { 
     coverEMH.classList.remove("hidden");
     coverEMH.classList.add("show");
    cover0.classList.add("hidden");

     // cover1.classList.add("hidden");
                          
  }   

  function easybtn() {   

    cover1.classList.remove("hidden");
    cover1.classList.add("show");
    cover2.classList.add("easy");
    // cover1.classList.add("hidden");           

  } 
  function mediumbtn() {   

    cover1.classList.remove("hidden");
    cover1.classList.add("show");
    cover2.classList.add("medium");
    // cover1.classList.add("hidden");           

  } 
  function hardbtn() {   

    cover1.classList.remove("hidden");
    cover1.classList.add("show");
    cover2.classList.add("hard");
    // cover1.classList.add("hidden");           

  }                                                       
                                                  
  


//============== hard bot function  ;  ==============================================

var no_of_boxes_marked =0;
var first_move_of_user = "";
let relativepostion = new Map();

function botclick_hard() {
    
          var cross_array=[];
          var circle_array=[];
          var blank_box_array=[];

        for (var i = playboard.length - 1; i >= 0; i--) {
            if( playboard[i].classList.contains('x')) {
                cross_array.push(i);
            }
            else if( playboard[i].classList.contains('o')) {
                circle_array.push(i);
            }
            else {
                blank_box_array.push(i);
            }

        }

        no_of_boxes_marked = 9-blank_box_array.length;
         //console.log(blank_box_array);
        // console.log(cross_array);
        //console.log(no_of_boxes_marked);


            // kuch nhi bs userka konsa array hai x or o vo pta kia hu us array ko usermarkedarrayme store kra rha and same bot ka bhi botmarkedarray me store krraha
            let usermarkedarray=[];
            let botmarkedarray = [];

        if (user_choosed_sign=="x") {copyy(usermarkedarray,cross_array);copyy(botmarkedarray,circle_array);}
            else{
                copyy(usermarkedarray,circle_array);copyy(botmarkedarray,cross_array);
            }








          

            // if bot ka first trun hua to bot shuru me random click krke aage ki stratagy bnayega to uske first click k lie ye neeche ka code hai 
             if (no_of_boxes_marked==0) {
                var corner_box = [0,1,2,3,4,5,6,7,8];
                                        let x = Math.floor((Math.random() * corner_box.length-1) + 1);
                                          
                                          clicking_box_i(corner_box[x]);

                                          no_of_boxes_marked++;




                                           // yha mai first move of bot pehle khel rha hai to konsa chl rha hai vo store kra rha hu;

                                         // accha ha dhyan dena yha first_move_of_user wala variable hi use kr lera hu bot k liebhi taki easy ho

        if(no_of_boxes_marked==1 &&  (playboard[4].classList.contains('x') || playboard[4].classList.contains('o')) ){
            first_move_of_user = "middle";
        }
        else if (no_of_boxes_marked==1 && (playboard[0].classList.contains(bot_choosed_sign) || playboard[2].classList.contains(bot_choosed_sign) || playboard[6].classList.contains(bot_choosed_sign) || playboard[8].classList.contains(bot_choosed_sign))) {
            first_move_of_user = "corner";
        }
        else if (no_of_boxes_marked==1 && (playboard[1].classList.contains(bot_choosed_sign) || playboard[3].classList.contains(bot_choosed_sign) || playboard[5].classList.contains(bot_choosed_sign) || playboard[7].classList.contains(bot_choosed_sign))) {
            first_move_of_user = "sidemiddle";


        


        // ab mai map create krne jara taki aasani ho bot jb fist chalega to uske movesdecide krne me , isme D=down , DD = down down wla box , DL = down right , similarly , DDl,DDR,DR,R,L....aise honge 
     // map ko bahar declare kia hu taki baki function me use use krske
    

        
            if (playboard[1].classList.contains(bot_choosed_sign)) {
                relativepostion.set("L", 0);
                relativepostion.set("D", 4);
                relativepostion.set("R", 2);
                relativepostion.set("DR", 5);
                relativepostion.set("DL", 3);
                relativepostion.set("DDR", 8);
                relativepostion.set("DDL", 6);
            }
            else if (playboard[3].classList.contains(bot_choosed_sign)) {
                relativepostion.set("L", 6);
                relativepostion.set("D", 4);
                relativepostion.set("R", 0);
                relativepostion.set("DR", 1);
                relativepostion.set("DL", 7);
                relativepostion.set("DDR", 2);
                relativepostion.set("DDL", 8);
            }
            else if (playboard[7].classList.contains(bot_choosed_sign)) {
                relativepostion.set("L", 8);
                relativepostion.set("D", 4);
                relativepostion.set("R", 6);
                relativepostion.set("DR", 3);
                relativepostion.set("DL", 5);
                relativepostion.set("DDR", 0);
                relativepostion.set("DDL", 2);
            }
            else if (playboard[5].classList.contains(bot_choosed_sign)) {
                relativepostion.set("L", 2);
                relativepostion.set("D", 4);
                relativepostion.set("R", 8);
                relativepostion.set("DR", 7);
                relativepostion.set("DL", 1);
                relativepostion.set("DDR", 6);
                relativepostion.set("DDL", 0);
            }

        
               


        }

             return;


             }














        // yha mai first move if user pehle khel rha hai to konsa chl rha hai vo store kra rha hu;

        if(no_of_boxes_marked==1 &&  (playboard[4].classList.contains('x') || playboard[4].classList.contains('o')) ){
            first_move_of_user = "middle";
        }
        else if (no_of_boxes_marked==1 && (playboard[0].classList.contains(user_choosed_sign) || playboard[2].classList.contains(user_choosed_sign) || playboard[6].classList.contains(user_choosed_sign) || playboard[8].classList.contains(user_choosed_sign))) {
            first_move_of_user = "corner";
        }
        else if (no_of_boxes_marked==1 && (playboard[1].classList.contains(user_choosed_sign) || playboard[3].classList.contains(user_choosed_sign) || playboard[5].classList.contains(user_choosed_sign) || playboard[7].classList.contains(user_choosed_sign))) {
            first_move_of_user = "sidemiddle";


        }


        //yha alternate moves hai yani 1,3,5,7 jb user first move chle tab k lie hai and 2,4,6,8 jb bot pehla move chle to uske lie hai

        //yha vo sare code honge us case ke jb user pehle chla ho nd middle choose kia ho
        if(first_move_of_user == "middle"){

                       

                       switch(no_of_boxes_marked) {
                                case 1:
                                  {
                                        var corner_box = [0,2,6,8];
                                        let x = Math.floor((Math.random() * corner_box.length-1) + 1);
                                          
                                          clicking_box_i(corner_box[x]);
                                          
                                  }
                                  break;
                                case 2:
                                  {
                                        if (playboard[1].classList.contains(user_choosed_sign) || playboard[3].classList.contains(user_choosed_sign) || playboard[5].classList.contains(user_choosed_sign) || playboard[7].classList.contains(user_choosed_sign) ) {

                                            var corner_box = [0,2,6,8];
                                        let x = Math.floor((Math.random() * corner_box.length-1) + 1);
                                          
                                          clicking_box_i(corner_box[x]);
                                        }
                                        else{
                                            if (playboard[0].classList.contains(user_choosed_sign)) {clicking_box_i(8);}
                                            else if (playboard[2].classList.contains(user_choosed_sign)) {clicking_box_i(6);}
                                            else if (playboard[6].classList.contains(user_choosed_sign)) {clicking_box_i(2);}
                                            else {clicking_box_i(0);}
                                        }
                                          
                                  }
                                  break;
                                        
                                case 3:
                                  {                                          
                                       if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}

                                        else {var box =find_safe_box_against_tripletrap(circle_array,cross_array,blank_box_array,user_choosed_sign);
                                         clicking_box_i(box); }                                       
                                  }
                                  break;

                                  case 4:
                                  {                                          
                                       if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}

                                         //yato triple trap mile to vha click krdo nhi to random click krdo
                                        else {

                                                var box =find_tripletrap_index(circle_array,cross_array,blank_box_array,user_choosed_sign);

                                                  if (box[0]) {clicking_box_i(box[1]);}

                                                  else {
                                                           let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                                   
                                                           clicking_box_i(blank_box_array[x]);
                                                  } 
                                        }                                       
                                  }
                                  break;


                                  case 5:
                                  {      
                                          //checking for bot win pattern in next move
                                         var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 

                                         if (ans[0]) {clicking_box_i(ans[1]);break; } 

                                       else if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}

                                                                              
                                  }
                                  break;

                                  case 6:
                                  {      
                                          //checking for bot win pattern in next move
                                         var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 

                                         if (ans[0]) {clicking_box_i(ans[1]);break; } 

                                       else if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}
                                       else{
                                              let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);
                                       }

                                                                              
                                  }
                                  break;

                                 case 7:
                                  {      
                                    //checking for bot win pattern in next move
                                         var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 

                                         if (ans[0]) {clicking_box_i(ans[1]);break; } 

                                         if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}
                                         else {
                                            
                                            let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);
                                         }

                                                                              
                                  }
                                  break;
                                case 8:
                                  {      
                                    let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);

                                                                              
                                  }
                                  break;
                                
                                default:
                                  // code block
                            }   


                 }
                 else if(first_move_of_user == "corner"){

                       

                       switch(no_of_boxes_marked) {
                                case 1:
                                  {

                                          clicking_box_i(4);
                                          
                                  }
                                  break;

                                  case 2:
                                  {
                                        if (playboard[4].classList.contains(user_choosed_sign)) {
                                              
                                              if (playboard[0].classList.contains(bot_choosed_sign)) {clicking_box_i(8);}
                                            else if (playboard[2].classList.contains(bot_choosed_sign)) {clicking_box_i(6);}
                                            else if (playboard[6].classList.contains(bot_choosed_sign)) {clicking_box_i(2);}
                                            else {clicking_box_i(0);}


                                            
                                        }
                                        else{
                                        
                                          clicking_box_i(4);
                                        }
                                          
                                  }
                                  break;

                                case 3:
                                  {                                          
                                       if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}

                                        else {var box =find_safe_box_against_tripletrap(circle_array,cross_array,blank_box_array,user_choosed_sign);
                                         clicking_box_i(box); }                                       
                                  }
                                  break;
                                  case 4:
                                  {                                          
                                       //checking for bot win pattern in next move
                                         var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 

                                         if (ans[0]) {  clicking_box_i(ans[1]);break; } 

                                       else if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}
                                        //yato triple trap mile to vha click krdo nhi to random click krdo
                                        else {

                                                var box =find_tripletrap_index(circle_array,cross_array,blank_box_array,user_choosed_sign);

                                                  if (box[0]) {clicking_box_i(box[1]);}

                                                  else {
                                                           let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                                   
                                                           clicking_box_i(blank_box_array[x]);
                                                  } 
                                        }        
                                                                                                                    
                                  }
                                  break;

                                  case 5:
                                  {      
                                          //checking for bot win pattern in next move
                                         var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 

                                         if (ans[0]) {clicking_box_i(ans[1]);break; } 

                                       else if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}
                                       else{
                                                 var box =find_safe_box_against_tripletrap(circle_array,cross_array,blank_box_array,user_choosed_sign);
                                         clicking_box_i(box); 
                                       }

                                                                              
                                  }
                                  break;

                                  case 6:
                                  {      
                                          //checking for bot win pattern in next move
                                         var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 

                                         if (ans[0]) {clicking_box_i(ans[1]);break; } 

                                       else if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}
                                       else{
                                              let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);
                                       }

                                                                              
                                  }
                                  break;


                                 case 7:
                                  {      //checking for bot win pattern in next move
                                         var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 
                                       

                                         if (ans[0]) {clicking_box_i(ans[1]);break; } 

                                         else if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}
                                         else {
                                            
                                            let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);
                                         }

                                                                              
                                  }
                                  break;

                                  case 8:
                                  {      
                                    let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);

                                                                              
                                  }
                                  break;
                                  
                                
                                default:
                                  // code block
                            }   


                 }
                  else if(first_move_of_user == "sidemiddle"){

                        

                       switch(no_of_boxes_marked) {
                                case 1:
                                  {

                                          var firstmovebox = [];
                                          if (playboard[1].classList.contains(user_choosed_sign)) {
                                            firstmovebox.push(0,2,4,7);
                                          }
                                          else if (playboard[3].classList.contains(user_choosed_sign)) {
                                            firstmovebox.push(0,5,4,6);
                                          }
                                          else if (playboard[5].classList.contains(user_choosed_sign)) {
                                            firstmovebox.push(0,3,4,8);
                                          }
                                          else if (playboard[7].classList.contains(user_choosed_sign)) {
                                            firstmovebox.push(6,1,4,8);
                                          }

                                        let x = Math.floor((Math.random() * firstmovebox.length-1) + 1);
                                          
                                          clicking_box_i(firstmovebox[x]);
                                          
                                  }
                                  break;

                                  case 2:
                                  {                                          
                                       if (playboard[relativepostion.get("DR")].classList.contains(user_choosed_sign) ||  playboard[relativepostion.get("DL")].classList.contains(user_choosed_sign)) {
                                         clicking_box_i(4);break;
                                       } 
                                       else if (playboard[relativepostion.get("DDR")].classList.contains(user_choosed_sign) ) {
                                         clicking_box_i(relativepostion.get("R"));break;
                                       } 
                                       else if (playboard[relativepostion.get("DDL")].classList.contains(user_choosed_sign)) {
                                         clicking_box_i(relativepostion.get("L"));break;
                                       } 
                                       else if (playboard[relativepostion.get("L")].classList.contains(user_choosed_sign) ) {
                                         clicking_box_i(relativepostion.get("DL"));break;
                                       } 
                                       else if ( playboard[relativepostion.get("R")].classList.contains(user_choosed_sign) ) {
                                         clicking_box_i(relativepostion.get("DR"));break;
                                       } 
                                       else if (playboard[relativepostion.get("D")].classList.contains(user_choosed_sign) ) {
                                         clicking_box_i(relativepostion.get("DDL"));break;
                                       } 
                                       else if (playboard[relativepostion.get("DD")].classList.contains(user_choosed_sign)) {
                                         clicking_box_i(relativepostion.get("D"));break;
                                       } 
                                       

                                  }
                                  break;


                                case 3:
                                  {                                          
                                       if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}

                                        else {var box =find_safe_box_against_tripletrap(circle_array,cross_array,blank_box_array,user_choosed_sign);
                                         clicking_box_i(box); }                                       
                                  }
                                  break;

                                  case 4:
                                  {                                          
                                       //checking for bot win pattern in next move
                                         var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 

                                         if (ans[0]) {  clicking_box_i(ans[1]);break; } 

                                       else if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}
                                        //yato triple trap mile to vha click krdo nhi to random click krdo
                                        else {

                                                var box =find_tripletrap_index(circle_array,cross_array,blank_box_array,user_choosed_sign);

                                                  if (box[0]) {clicking_box_i(box[1]);console.log("ssssssssss") ; break;}

                                                  else {
                                                           let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                                         console.log(box) ;
                                                           clicking_box_i(blank_box_array[x]);
                                                  } 
                                        }        
                                                                                                                    
                                  }
                                  break;

                                  case 5:
                                  {      
                                          //checking for bot win pattern in next move
                                         var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 

                                         if (ans[0]) {clicking_box_i(ans[1]);break; } 

                                       else if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}
                                       else{
                                                 let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);
                                       }

                                                                              
                                  }
                                  break;

                                  case 6:
                                  {      
                                          //checking for bot win pattern in next move
                                         var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 

                                         if (ans[0]) {clicking_box_i(ans[1]);break; } 

                                       else if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}
                                       else{
                                              let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);
                                       }

                                                                              
                                  }
                                  break;

                                 case 7:
                                  {      //checking for bot win pattern in next move
                                         var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 
                                        

                                         if (ans[0]) {clicking_box_i(ans[1]);break; } 

                                         else if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}
                                         else {
                                            
                                            let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);
                                         }

                                                                              
                                  }
                                  break;

                                  case 8:
                                  {      
                                    let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);

                                                                              
                                  }
                                  break;
                                
                                default:
                                  // code block
                            }   


                 }

     }







                //------------------------------------------------------

       // ye use krra hu click krne k lie taki baar baar isko likhna na pde or sath me answer pattern bhi check kr lera hu
        function clicking_box_i(i) {
            if (turn=="x") {
//yha neecehe maine para add kia h playboard ek box ke ander thats it;
        const para = document.createElement("p");
        para.innerText = "X";
        para.setAttribute("class", "cross_on_box");
        playboard[i].appendChild(para);
        // yha neeche mai slide krwa rha hu ki kiska turn hai in playboard top section
        showturnx.classList.remove("turn");
        showturno.classList.add("turn");
        turn = "o";
                //yha main jo box click hogya uspE wapis click na ho islie usme onclick attribute htaya hai
 
        playboard[i].removeAttribute("onclick");
        playboard[i].classList.remove("hoveronbox");

        // identification k lie ye class dalra ki kisme x hai kisme o h
        playboard[i].classList.add("x");


  }
    else {
        //yha neecehe maine para add kia h playboard ek box ke ander thats it;

        const para = document.createElement("p");
        para.innerText = "O";
        para.setAttribute("class", "circle_on_box");
        playboard[i].appendChild(para);
        // yha neeche mai slide krwa rha hu ki kiska turn hai in playboard top section
        showturno.classList.remove("turn");
        showturnx.classList.add("turn");
        turn = "x";

        //yha main jo box click hogya 
         //wapis click na ho islie usme onclick attribute htaya hai
        playboard[i].removeAttribute("onclick");
        playboard[i].classList.remove("hoveronbox");

        // identification k lie ye class dalra ki kisme x hai kisme o h
        playboard[i].classList.add("o");

    }

    
       //isko lagay hu qki taki if last move bot ka ho nd vo jeete to atleast dikhaye ki bhai ki playboard m kha select kia h nhi to milisecond me result m bhg jara tha 
       const myTimeout = setTimeout(answerpattern, 500);
        }

        
        

        //---------------------------------------------------------------
        
        // ye function check krega ki user ka koi next step me pattern to nhi bnra hai n if bnra hai to usko block krega empty box pe click krke true return krega  else false if nhi hai to ;
        function user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign) {

            
        // kuch nhi bs userka konsa array hai x or o vo pta kia hu us array ko usermarkedarrayme store kra rha
        let usermarkedarray=[];

        if (user_choosed_sign=="x") {copyy(usermarkedarray,cross_array);}
            else{
                copyy(usermarkedarray,circle_array);
            }
             
             var ans = is_user_winning_in_next_move(blank_box_array,usermarkedarray);

             if (ans[0]) {
                     clicking_box_i(ans[1]);
                     return true;
             }
             else{
                return false;
             }


        }


         



        //-------------------------------------------------------
        //this function will give safe place to tick on next move so that user wont have any chance of creating triple trap in its next move or we can say it will return index which on clicking avoid triple traps to occur

        function find_safe_box_against_tripletrap(circle_array,cross_array,blank_box_array,user_choosed_sign) {
           

           // kuch nhi bs userka konsa array hai x or o vo pta kia hu us array ko usermarkedarrayme store kra rha and same bot ka bhi botmarkedarray me store krraha
            let usermarkedarray=[];
            let botmarkedarray = [];

        if (user_choosed_sign=="x") {copyy(usermarkedarray,cross_array);copyy(botmarkedarray,circle_array);}
            else{
                copyy(usermarkedarray,circle_array);copyy(botmarkedarray,cross_array);
            }

            


        //is loop me mai i jaise jaise aara hai vaise i ko man rha hu ki arr[i]index pe manlo bot click kia to kya ...fir aage yhi chiz assume krkre next case dekh rha hu
            for (var i = blank_box_array.length - 1; i >= 0; i--) {

                var it_creates_tripletrap =false;

               // ye new temp blank array bnana pda ek jgah aage kaam aaara hai to copy krke bna rha nhi to vo actual array m changes la dega
                var temp_blankarray =[];
                    
                    for (var j = blank_box_array.length - 1; j >= 0; j--) {
                        if(i!=j ){
                            temp_blankarray.push(blank_box_array[j]);
                        }
                    }
                    
                    //console.log(temp_blankarray);
                    var temp_botmarkedarray = [];
                     copyy(temp_botmarkedarray,botmarkedarray); temp_botmarkedarray.push(blank_box_array[i]);


              // yha fir again arr[j] index p assume krra  ki manlo next step me user yha click kia to kya ... ye asssume rkrke ak=ge ka algo cases check krra--
                for (var j = temp_blankarray.length - 1; j >= 0;  j--) {

                    var temp_userarray=[] ; copyy(temp_userarray,usermarkedarray); //temp_userarray me usermarked array copy krwa dia;
                    temp_userarray.push(temp_blankarray[j]);

                    var new_temp_blankarray=[];
                    for (var kk = temp_blankarray.length - 1; kk >= 0; kk--) {
                          if (temp_blankarray[kk]!=temp_blankarray[j]) {new_temp_blankarray.push(temp_blankarray[kk]);}
                    }

                    //console.log("  --  "+new_temp_blankarray+" | "+ temp_userarray);



                     //ab yha check krlera ki koi triple trap bn to nhi rha hai n agr ubot vo arr[i] meclick kre to if hai to break krke next i k lie check krra --
                     var x = is_user_winning_in_next_move(new_temp_blankarray,temp_userarray);

                     //console.log("  x ko print kra rha : - "+x);

                     if(x[2]==2){

                        //yha is neeche vale check for my pattern me mai check krra ki if triple trap hai nd if next move me bot ka pattern bn rha hai to bhad me jaye triple trap we can win on next move na to ye consider nhi hoga triple trap me bs usi ko check krne k lie ye lgaya hai 
                        var check_for_my_pattern = is_user_winning_in_next_move(new_temp_blankarray,temp_botmarkedarray);
                         if (check_for_my_pattern[0]) {continue;}

                         //else if triple trap hai and koi pattern b ni bnra hai bot ka next move me to break krdega ki bhai ye move to mt chaliyo i ko bdhao next checkkro ;

                        it_creates_tripletrap=true;break;
                    }

                }

                if(it_creates_tripletrap==false){
                    return blank_box_array[i];

                }



            }
        }


        //------------------------------------------------------
         

         function find_tripletrap_index(circle_array,cross_array,blank_box_array,user_choosed_sign) {
             let usermarkedarray=[];
            let botmarkedarray = [];
            let ans=[0,-1];

        if (user_choosed_sign=="x") {copyy(usermarkedarray,cross_array);copyy(botmarkedarray,circle_array);}
            else{
                copyy(usermarkedarray,circle_array);copyy(botmarkedarray,cross_array);
            }

              var temp_blankarray =[];
              copyy(temp_blankarray,blank_box_array);
                    
                    for (var i = temp_blankarray.length - 1; i >= 0; i--) {
                        var temp_botmarkedarray = [];
                     copyy(temp_botmarkedarray,botmarkedarray); temp_botmarkedarray.push(temp_blankarray[i]);


                         var temp2_blankarray =[];

                         for (var j = temp_blankarray.length - 1;  j>= 0; j--) {
                             if (i!=j) {temp2_blankarray.push(temp_blankarray[i]);}
                         }

                        var checkfortripletrap = is_user_winning_in_next_move(temp2_blankarray,temp_botmarkedarray);

                        if (checkfortripletrap[2]==2) { ans[0]=1; ans[1]= temp_blankarray[i];  return ans;}
                    }

                    return ans;

                



         }

        //-----------------------------------------------------------------


       

        // ye index return krega jha pattern bnrahoga user ka next step me vo taki jeet na jaye ; ans also count bhi return dega ki kitta answer pattern next move me bnra hai uska
        function is_user_winning_in_next_move(blank_box_array,usermarkedarray) {
            
            let ans = [
             [0,1,2],
             [3,4,5],
             [6,7,8],
             [0,3,6],
             [1,4,7],
             [2,5,8],
             [0,4,8],
             [2,4,6]

          ];
            
            //arr[0]= true/false if (index present or not)  ,  arr[1]= index jo blanked space jha pattern bnra hoga 
            // arr[2] = count of how many wins pattern are possible for user in next step;
            var answerreturn = [0 , -1 , 0] 

            var bot_click_index=0;
            var count_user_mark=0;
            var count_emptyspace=0;
            var count_totalanswer_in_next_step=0;

            // yha map me store kr lia user kha kha mark kia hai nd kha kha khali space hai
       let map_usermarked = new Map();
       let map_blankbox = new Map();

        
            for (var j = blank_box_array.length - 1; j >= 0; j--) {
                map_blankbox.set(blank_box_array[j], 1);
            }

            for (var j = usermarkedarray.length - 1; j >= 0; j--) {
                map_usermarked.set(usermarkedarray[j], 1);
            }

            // answer pattern me travel krke dekh lia ki kha pe count of user marked 2 and ek khali space bn ra hai to mtlb wha next timeuser click kr sakta hai to block kr dia wha us click krwwa ke
            for (var i = 8 - 1; i >= 0; i--) {
                count_user_mark=0;
                count_emptyspace=0;
                
                for (var j = 3 - 1; j >= 0; j--) {
                    if(map_usermarked.has(ans[i][j]))count_user_mark++;

                    if(map_blankbox.has(ans[i][j])){count_emptyspace++; bot_click_index=ans[i][j];}
                }

                if(count_emptyspace==1 && count_user_mark==2){
                    //console.log(ans[i]);
                     answerreturn[0]=1;
                     answerreturn[1]=bot_click_index;
                     count_totalanswer_in_next_step ++;
                     answerreturn[2]=count_totalanswer_in_next_step;
                }


                

             }

               return answerreturn;
   }


   //----------------------------------------













//============== hard bot function close ;====================================================














//============== MEDIUM bot function START ;====================================================




function botclick_medium() {
    
          var cross_array=[];
          var circle_array=[];
          var blank_box_array=[];

        for (var i = playboard.length - 1; i >= 0; i--) {
            if( playboard[i].classList.contains('x')) {
                cross_array.push(i);
            }
            else if( playboard[i].classList.contains('o')) {
                circle_array.push(i);
            }
            else {
                blank_box_array.push(i);
            }

        }

        no_of_boxes_marked = 9-blank_box_array.length;
         //console.log(blank_box_array);
        // console.log(cross_array);
        //console.log(no_of_boxes_marked);


            // kuch nhi bs userka konsa array hai x or o vo pta kia hu us array ko usermarkedarrayme store kra rha and same bot ka bhi botmarkedarray me store krraha
            let usermarkedarray=[];
            let botmarkedarray = [];

        if (user_choosed_sign=="x") {copyy(usermarkedarray,cross_array);copyy(botmarkedarray,circle_array);}
            else{
                copyy(usermarkedarray,circle_array);copyy(botmarkedarray,cross_array);
            }








          

            // if bot ka first trun hua to bot shuru me random click krke aage ki stratagy bnayega to uske first click k lie ye neeche ka code hai 
             if (no_of_boxes_marked==0) {
                var corner_box = [0,1,2,3,4,5,6,7,8];
                                        let x = Math.floor((Math.random() * corner_box.length-1) + 1);
                                          
                                          clicking_box_i(corner_box[x]);

                                          no_of_boxes_marked++;




                                           // yha mai first move of bot pehle khel rha hai to konsa chl rha hai vo store kra rha hu;

                                         // accha ha dhyan dena yha first_move_of_user wala variable hi use kr lera hu bot k liebhi taki easy ho

        if(no_of_boxes_marked==1 &&  (playboard[4].classList.contains('x') || playboard[4].classList.contains('o')) ){
            first_move_of_user = "middle";
        }
        else if (no_of_boxes_marked==1 && (playboard[0].classList.contains(bot_choosed_sign) || playboard[2].classList.contains(bot_choosed_sign) || playboard[6].classList.contains(bot_choosed_sign) || playboard[8].classList.contains(bot_choosed_sign))) {
            first_move_of_user = "corner";
        }
        else if (no_of_boxes_marked==1 && (playboard[1].classList.contains(bot_choosed_sign) || playboard[3].classList.contains(bot_choosed_sign) || playboard[5].classList.contains(bot_choosed_sign) || playboard[7].classList.contains(bot_choosed_sign))) {
            first_move_of_user = "sidemiddle";


        


        // ab mai map create krne jara taki aasani ho bot jb fist chalega to uske movesdecide krne me , isme D=down , DD = down down wla box , DL = down right , similarly , DDl,DDR,DR,R,L....aise honge 
     // map ko bahar declare kia hu taki baki function me use use krske
    

        
            if (playboard[1].classList.contains(bot_choosed_sign)) {
                relativepostion.set("L", 0);
                relativepostion.set("D", 4);
                relativepostion.set("R", 2);
                relativepostion.set("DR", 5);
                relativepostion.set("DL", 3);
                relativepostion.set("DDR", 8);
                relativepostion.set("DDL", 6);
            }
            else if (playboard[3].classList.contains(bot_choosed_sign)) {
                relativepostion.set("L", 6);
                relativepostion.set("D", 4);
                relativepostion.set("R", 0);
                relativepostion.set("DR", 1);
                relativepostion.set("DL", 7);
                relativepostion.set("DDR", 2);
                relativepostion.set("DDL", 8);
            }
            else if (playboard[7].classList.contains(bot_choosed_sign)) {
                relativepostion.set("L", 8);
                relativepostion.set("D", 4);
                relativepostion.set("R", 6);
                relativepostion.set("DR", 3);
                relativepostion.set("DL", 5);
                relativepostion.set("DDR", 0);
                relativepostion.set("DDL", 2);
            }
            else if (playboard[5].classList.contains(bot_choosed_sign)) {
                relativepostion.set("L", 2);
                relativepostion.set("D", 4);
                relativepostion.set("R", 8);
                relativepostion.set("DR", 7);
                relativepostion.set("DL", 1);
                relativepostion.set("DDR", 6);
                relativepostion.set("DDL", 0);
            }

        
               


        }

             return;


             }














        // yha mai first move if user pehle khel rha hai to konsa chl rha hai vo store kra rha hu;

        if(no_of_boxes_marked==1 &&  (playboard[4].classList.contains('x') || playboard[4].classList.contains('o')) ){
            first_move_of_user = "middle";
        }
        else if (no_of_boxes_marked==1 && (playboard[0].classList.contains(user_choosed_sign) || playboard[2].classList.contains(user_choosed_sign) || playboard[6].classList.contains(user_choosed_sign) || playboard[8].classList.contains(user_choosed_sign))) {
            first_move_of_user = "corner";
        }
        else if (no_of_boxes_marked==1 && (playboard[1].classList.contains(user_choosed_sign) || playboard[3].classList.contains(user_choosed_sign) || playboard[5].classList.contains(user_choosed_sign) || playboard[7].classList.contains(user_choosed_sign))) {
            first_move_of_user = "sidemiddle";


        }


        //yha alternate moves hai yani 1,3,5,7 jb user first move chle tab k lie hai and 2,4,6,8 jb bot pehla move chle to uske lie hai

        //yha vo sare code honge us case ke jb user pehle chla ho nd middle choose kia ho
        if(first_move_of_user == "middle"){

                       

                       switch(no_of_boxes_marked) {
                                case 1:
                                  {
                                        var corner_box = [0,2,6,8];
                                        let x = Math.floor((Math.random() * corner_box.length-1) + 1);
                                          
                                          clicking_box_i(corner_box[x]);
                                          
                                  }
                                  break;
                                case 2:
                                  {
                                        if (playboard[1].classList.contains(user_choosed_sign) || playboard[3].classList.contains(user_choosed_sign) || playboard[5].classList.contains(user_choosed_sign) || playboard[7].classList.contains(user_choosed_sign) ) {

                                            var corner_box = [0,2,6,8];
                                        let x = Math.floor((Math.random() * corner_box.length-1) + 1);
                                          
                                          clicking_box_i(corner_box[x]);
                                        }
                                        else{
                                            if (playboard[0].classList.contains(user_choosed_sign)) {clicking_box_i(8);}
                                            else if (playboard[2].classList.contains(user_choosed_sign)) {clicking_box_i(6);}
                                            else if (playboard[6].classList.contains(user_choosed_sign)) {clicking_box_i(2);}
                                            else {clicking_box_i(0);}
                                        }
                                          
                                  }
                                  break;
                                        
                                case 3:
                                  {                                          
                                      var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 
                                        

                                         if (ans[0]) {clicking_box_i(ans[1]);break; } 

                                         else if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}
                                         else {
                                            
                                            let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);
                                         }                                     
                                  }
                                  break;

                                  case 4:
                                  {                                          
                                       //checking for bot win pattern in next move
                                         var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 

                                         if (ans[0]) {clicking_box_i(ans[1]);break; } 

                                       else if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}
                                       else{
                                              let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);
                                       }                                     
                                  }
                                  break;


                                  case 5:
                                  {      
                                          //checking for bot win pattern in next move
                                         var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 

                                         if (ans[0]) {clicking_box_i(ans[1]);break; } 

                                       else if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}
                                       else{
                                              let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);
                                       }
                                                                              
                                  }
                                  break;

                                  case 6:
                                  {      
                                          //checking for bot win pattern in next move
                                         var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 

                                         if (ans[0]) {clicking_box_i(ans[1]);break; } 

                                       else if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}
                                       else{
                                              let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);
                                       }

                                                                              
                                  }
                                  break;

                                 case 7:
                                  {      
                                    //checking for bot win pattern in next move
                                         var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 

                                         if (ans[0]) {clicking_box_i(ans[1]);break; } 

                                         if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}
                                         else {
                                            
                                            let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);
                                         }

                                                                              
                                  }
                                  break;
                                case 8:
                                  {      
                                    let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);

                                                                              
                                  }
                                  break;
                                
                                default:
                                  // code block
                            }   


                 }
                 else if(first_move_of_user == "corner"){

                       

                       switch(no_of_boxes_marked) {
                                case 1:
                                  {

                                          clicking_box_i(4);
                                          
                                  }
                                  break;

                                  case 2:
                                  {
                                        if (playboard[4].classList.contains(user_choosed_sign)) {
                                              
                                              if (playboard[0].classList.contains(bot_choosed_sign)) {clicking_box_i(8);}
                                            else if (playboard[2].classList.contains(bot_choosed_sign)) {clicking_box_i(6);}
                                            else if (playboard[6].classList.contains(bot_choosed_sign)) {clicking_box_i(2);}
                                            else {clicking_box_i(0);}


                                            
                                        }
                                        else{
                                        
                                          clicking_box_i(4);
                                        }
                                          
                                  }
                                  break;

                                case 3:
                                  {                                          
                                       var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 
                                        

                                         if (ans[0]) {clicking_box_i(ans[1]);break; } 

                                         else if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}
                                         else {
                                            
                                            let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);
                                         }                                    
                                  }
                                  break;
                                  case 4:
                                  {                                          
                                       //checking for bot win pattern in next move
                                         var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 

                                         if (ans[0]) {clicking_box_i(ans[1]);break; } 

                                       else if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}
                                       else{
                                              let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);
                                       }      
                                                                                                                    
                                  }
                                  break;

                                  case 5:
                                  {      
                                          ///checking for bot win pattern in next move
                                         var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 

                                         if (ans[0]) {clicking_box_i(ans[1]);break; } 

                                       else if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}
                                       else{
                                              let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);
                                       }

                                                                              
                                  }
                                  break;

                                  case 6:
                                  {      
                                          //checking for bot win pattern in next move
                                         var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 

                                         if (ans[0]) {clicking_box_i(ans[1]);break; } 

                                       else if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}
                                       else{
                                              let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);
                                       }

                                                                              
                                  }
                                  break;


                                 case 7:
                                  {      //checking for bot win pattern in next move
                                         var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 
                                       

                                         if (ans[0]) {clicking_box_i(ans[1]);break; } 

                                         else if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}
                                         else {
                                            
                                            let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);
                                         }

                                                                              
                                  }
                                  break;

                                  case 8:
                                  {      
                                    let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);

                                                                              
                                  }
                                  break;
                                  
                                
                                default:
                                  // code block
                            }   


                 }
                  else if(first_move_of_user == "sidemiddle"){

                        

                       switch(no_of_boxes_marked) {
                                case 1:
                                  {

                                          var firstmovebox = [];
                                          if (playboard[1].classList.contains(user_choosed_sign)) {
                                            firstmovebox.push(0,2,4,7);
                                          }
                                          else if (playboard[3].classList.contains(user_choosed_sign)) {
                                            firstmovebox.push(0,5,4,6);
                                          }
                                          else if (playboard[5].classList.contains(user_choosed_sign)) {
                                            firstmovebox.push(0,3,4,8);
                                          }
                                          else if (playboard[7].classList.contains(user_choosed_sign)) {
                                            firstmovebox.push(6,1,4,8);
                                          }

                                        let x = Math.floor((Math.random() * firstmovebox.length-1) + 1);
                                          
                                          clicking_box_i(firstmovebox[x]);
                                          
                                  }
                                  break;

                                  case 2:
                                  {                                          
                                       if (playboard[relativepostion.get("DR")].classList.contains(user_choosed_sign) ||  playboard[relativepostion.get("DL")].classList.contains(user_choosed_sign)) {
                                         clicking_box_i(4);break;
                                       } 
                                       else if (playboard[relativepostion.get("DDR")].classList.contains(user_choosed_sign) ) {
                                         clicking_box_i(relativepostion.get("R"));break;
                                       } 
                                       else if (playboard[relativepostion.get("DDL")].classList.contains(user_choosed_sign)) {
                                         clicking_box_i(relativepostion.get("L"));break;
                                       } 
                                       else if (playboard[relativepostion.get("L")].classList.contains(user_choosed_sign) ) {
                                         clicking_box_i(relativepostion.get("R"));break;
                                       } 
                                       else if ( playboard[relativepostion.get("R")].classList.contains(user_choosed_sign) ) {
                                         clicking_box_i(relativepostion.get("L"));break;
                                       } 
                                       else if (playboard[relativepostion.get("D")].classList.contains(user_choosed_sign) ) {
                                         clicking_box_i(relativepostion.get("DDL"));break;
                                       } 
                                       else if (playboard[relativepostion.get("DD")].classList.contains(user_choosed_sign)) {
                                         clicking_box_i(relativepostion.get("D"));break;
                                       } 
                                       

                                  }
                                  break;


                                case 3:
                                  {                                          
                                       var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 
                                        

                                         if (ans[0]) {clicking_box_i(ans[1]);break; } 

                                         else if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}
                                         else {
                                            
                                            let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);
                                         }                                      
                                  }
                                  break;

                                  case 4:
                                  {                                          
                                      //checking for bot win pattern in next move
                                         var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 

                                         if (ans[0]) {clicking_box_i(ans[1]);break; } 

                                       else if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}
                                       else{
                                              let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);
                                       }    
                                                                                                                    
                                  }
                                  break;

                                  case 5:
                                  {      
                                          //checking for bot win pattern in next move
                                         var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 

                                         if (ans[0]) {clicking_box_i(ans[1]);break; } 

                                       else if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}
                                       else{
                                                 let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);
                                       }

                                                                              
                                  }
                                  break;

                                  case 6:
                                  {      
                                          //checking for bot win pattern in next move
                                         var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 

                                         if (ans[0]) {clicking_box_i(ans[1]);break; } 

                                       else if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}
                                       else{
                                              let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);
                                       }

                                                                              
                                  }
                                  break;

                                 case 7:
                                  {      //checking for bot win pattern in next move
                                         var ans = is_user_winning_in_next_move(blank_box_array,botmarkedarray); 
                                        

                                         if (ans[0]) {clicking_box_i(ans[1]);break; } 

                                         else if(user_pattern_block(circle_array,cross_array,blank_box_array,user_choosed_sign)){break;}
                                         else {
                                            
                                            let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);
                                         }

                                                                              
                                  }
                                  break;

                                  case 8:
                                  {      
                                    let x = Math.floor((Math.random() * blank_box_array.length-1) + 1);
                                          
                                          clicking_box_i(blank_box_array[x]);

                                                                              
                                  }
                                  break;
                                
                                default:
                                  // code block
                            }   


                 }

     }












//============== MEDIUM bot function close ;====================================================

















//=====================================================some random usefull function ===========================================

   function copyy(b,a) {
       for (var i = a.length - 1; i >= 0; i--) {
           b.push(a[i]);
       }
   }









// aaj maine boxes alg alg bna lie hai and button sare workk krre hai ab bs mko vo function jo call kia hu medium and hard wala bot ka vo bnanan h bs upr jha x and o sset krre hai wha pe if else lga k bot ko call kia hu wha tk hua h abhi , 
// so next work is to call bot medium and hard fun ko complete kro then replay button bnao result section me ;