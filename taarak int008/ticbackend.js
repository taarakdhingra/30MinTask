function postingdetails()
{
var player1name=document.getElementById('player1details').value;

var PostingData={
    "Name":player1name,
    "Points":50
}


    $.ajax({
        type: 'POST',
        url: 'http://localhost:65257/api/Users',
        data:PostingData,  
            success: function(data) 
            {
        alert("ENTERED DEATILS");
        $.ajax({
    type: 'GET',
        url: 'http://localhost:65257/api/Users/' + player1name,
    
            success: function(data) 
            {
                 console.log(data);
        document.getElementById("player1points").value=data.Points;
        alert("wohoooo!! you receive50 bonus points");
        
      }
    });
        
      }
    });
}


function postingdetailsplayer(){
var player2name=document.getElementById('player2details').value;
console.log("good till now2");


var PostingPlayer={
    "Name":player2name,
    "Points":50
}

    $.ajax({
        type: 'POST',
        url: 'http://localhost:65257/api/Users',
        data:PostingPlayer,  
            success: function(data) 
            {
        alert("ENTERED DEATILS");

        $.ajax({
    type: 'GET',
        url: 'http://localhost:65257/api/Users/' + player2name,
    
            success: function(data) 
            {
                 console.log(data);
        document.getElementById("player2points").value=data.Points;
        alert("WOHOO!!!YOU RECEIVED 50 BONUS POINTS..");
        
      }
    });
        
      }
    });
}

function xwins()
{   
    var pointsone=document.getElementById('player1points').value;
    var playeronename=document.getElementById('player1details').value;
    console.log(pointsone);
    var updatepointsone={
        "Points": Number(pointsone) +10,
        "Name":playeronename

    }
    document.getElementById("player1points").value = updatepointsone.Points;

    console.log(updatepointsone);

     $.ajax({
    url: 'http://localhost:65257/api/Users/'+ playeronename,
    type: 'PUT',
    data:updatepointsone,
    success: function(data) {
        alert("HUURAH!WINNER GETS 10 POINTS");}
       /* $.ajax({
    type: 'GET',
        url: 'http://localhost:65257/api/Users/' + player1name,
    
            success: function(data) 
            {
                 console.log(data);
        document.getElementById("player1points").value=data.Points;
        
        
      }
    });
        
    }*/
});
 }

 function oloss()
 {var pointstwo=document.getElementById('player2points').value;
 var playertwoname=document.getElementById('player2details').value
    var updatepointstwo={
        "Points":pointstwo-5,
        "Name":playertwoname

    }
    document.getElementById("player2points").value = updatepointstwo.Points;


     $.ajax({
    url: 'http://localhost:65257/api/Users/'+ playertwoname,
    type: 'PUT',
    data:updatepointstwo,
    success: function(data) {
        alert("MINUS 5 POINTS ");
        
    }
});


 }





 function xloss()
{   
    var pointsone=document.getElementById('player1points').value;
    var playeronename=document.getElementById('player1details').value;
    console.log(pointsone);
    var updatepointsone={
        "Points": Number(pointsone) -5,
        "Name":playeronename

    }
    document.getElementById("player1points").value = updatepointsone.Points;

    console.log(updatepointsone);

     $.ajax({
    url: 'http://localhost:65257/api/Users/'+ playeronename,
    type: 'PUT',
    data:updatepointsone,
    success: function(data) {
        alert("HUURAH!WINNER GETS 10 POINTS");}
       /* $.ajax({
    type: 'GET',
        url: 'http://localhost:65257/api/Users/' + player1name,
    
            success: function(data) 
            {
                 console.log(data);
        document.getElementById("player1points").value=data.Points;
        
        
      }
    });
        
    }*/
});
 }

 function owins()
 {var pointstwo=document.getElementById('player2points').value;
 var playertwoname=document.getElementById('player2details').value
    var updatepointstwo={
        "Points":Number(pointstwo) +10,
        "Name":playertwoname

    }
    document.getElementById("player2points").value = updatepointstwo.Points;


     $.ajax({
    url: 'http://localhost:65257/api/Users/'+ playertwoname,
    type: 'PUT',
    data:updatepointstwo,
    success: function(data) {
        alert("MINUS 5 POINTS ");
        
    }
});


 }

