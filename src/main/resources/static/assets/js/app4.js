function _(id){
   return document.getElementById(id);	
}
var droppedIn = false;


function drag_start(event) {
    _('app_status').innerHTML = "Dragging the "+event.target.getAttribute('id');
  //  event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData("text", event.target.getAttribute('id') );
    
  //  _(event.target.getAttribute('id')).style.backgroundColor = "orange";
     
     
   
   
  //   var s = '<h1>text</h1>'; // HTML string

  //  var div = document.createElement('div');
   // div.innerHTML = s;
 //    var elements = div.childNodes;
     
    // event.dataTransfer.setDragImage(img, 0, 0);
}
function drag_enter(event) {
    _('app_status').innerHTML = "You are dragging over the "+event.target.getAttribute('id');
}
function drag_leave(event) {
    _('app_status').innerHTML = "You left the "+event.target.getAttribute('id');
}
function drag_drop(event) {
    event.preventDefault(); /* Prevent undesirable default behavior while dropping */
   
 //try to get a div to stay in place...another goes to dropbox:
    var elem_id = event.dataTransfer.getData("text");
  /*
    var clone = elem_id.cloneNode(true); // "deep" clone
     var i = 0;
     clone.id = _("text").id + ++i;
     //clone.id = ""; if the divs don't need an ID
    elem_id.parentNode.appendChild(clone);
   */
   

 

   if( ( event.target.getAttribute('id') =='drop_zone1' ) ||  ( event.target.getAttribute('id') =='drop_zone2' ) )
   {
    
		     event.target.appendChild( _(elem_id) );
		    _('app_status').innerHTML = "Dropped "+elem_id+" into the "+event.target.getAttribute('id');
		    _(elem_id).removeAttribute("draggable");
		     
		      var elem = document.getElementById(elem_id)
		
		     
		    if( elem.parentNode.getAttribute('id') =='drop_zone1')
		    {
		       elem.style.backgroundColor = 'blue'
		    }
		    else if(elem.parentNode.getAttribute('id')=='drop_zone2')
		    {
		       elem.style.backgroundColor = 'skyblue'
		    }
		    
		    
		      _(elem_id).style.cursor = "default";
		       droppedIn = true;
	}	     
     
     
  
    
        

    
    
   
    
    
    
    
    
}
function drag_end(event) {
    if(droppedIn == false){
        _('app_status').innerHTML = "You let the "+event.target.getAttribute('id')+" go.";
    }
    
    if(droppedIn == true)
    {
	               //add ghost element
	     var app = document.getElementById('objects');
	     var div2 = document.createElement('div');
	       div2.setAttribute("class","objects-set");     //display tick:
	       div2.innerHTML = _(event.target.getAttribute('id')).innerHTML+"<b><font color='green'>&#x2714;</font></b>";
	    //   app.appendChild(div2);
	   
	    
	     
	      
	  //    var element = document.getElementById(event.target.getAttribute('id'));
	    //   var i = Array.prototype.indexOf.call(app.childNodes, element);
	    
	     //     app.insertBefore(div2, app.childNodes[i]);
	    
	        var divs = app.getElementsByTagName('div');
	    
	      //   app.insertBefore(div2, app.childNodes[0]);
              app.insertBefore(div2, app.childNodes[divs.length-1]);
	    
	    
	    //   app.insertBefore(div2, element);
	    
	 }//if   
           
     
	droppedIn = false;
}
function readDropZone(){

     var str = "";
    for(var i=0; i < _("drop_zone1").children.length; i++){
     if(i!= (_("drop_zone1").children.length-1) )
     {
        if(i!= (_("drop_zone1").children.length-2) )
           str += _("drop_zone1").children[i].id +", ";
        else
          str += _("drop_zone1").children[i].id +" and ";
        }
      else
       {
         if( _("drop_zone1").children.length == 1)
           str += _("drop_zone1").children[i].id+" is in drop_zone1.";
         else
           str += _("drop_zone1").children[i].id+" are in drop_zone1.";
       }    
      //  
    }
    if(  str === "")
       var str = "drop_zone1 is empty!";
    
    str = str.toUpperCase();
    //alert(str);
  _('app_status').style.color = 'purple';
 _('app_status').innerHTML = "<bold>"+str+ "</bold>";
    /* Run Ajax request to pass any data to your server */
}
function readDropZone2(){
        str = "";
          
    for(var i=0; i < _("drop_zone2").children.length; i++){
   
    if(i!= (_("drop_zone2").children.length-1) )
     {
        
        if(i!= (_("drop_zone2").children.length-2) )
           str += _("drop_zone2").children[i].id +", ";
        else
          str += _("drop_zone2").children[i].id +" and ";
        }
      else
       {
         if( _("drop_zone2").children.length == 1)
           str += _("drop_zone2").children[i].id+" is in drop_zone2.";
         else
           str += _("drop_zone2").children[i].id+" are in drop_zone2.";
        }
      //  
    }//for
   // alert(str);
  
  if(  str === "")
       var str = "drop_zone2 is empty!";
    
   str = str.toUpperCase();
  _('app_status').style.color = 'red';
 _('app_status').innerHTML = "<bold>"+str+ "</bold>";
    /* Run Ajax request to pass any data to your server */
}