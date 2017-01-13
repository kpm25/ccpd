function _(id){
   return document.getElementById(id);	
}
var droppedIn = false;
function drag_start(event) {
    _('app_status').innerHTML = "Dragging the "+event.target.getAttribute('id');
  //  event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData("text", event.target.getAttribute('id') );
}
function drag_enter(event) {
    _('app_status').innerHTML = "You are dragging over the "+event.target.getAttribute('id');
}
function drag_leave(event) {
    _('app_status').innerHTML = "You left the "+event.target.getAttribute('id');
}
function drag_drop(event) {
    event.preventDefault(); /* Prevent undesirable default behavior while dropping */
    var elem_id = event.dataTransfer.getData("text");
    event.target.appendChild( _(elem_id) );
    _('app_status').innerHTML = "Dropped "+elem_id+" into the "+event.target.getAttribute('id');
    _(elem_id).removeAttribute("draggable");
     _(elem_id).style.backgroundColor='blue';
    _(elem_id).style.cursor = "default";
    droppedIn = true;
}
function drag_end(event) {
    if(droppedIn == false){
        _('app_status').innerHTML = "You let the "+event.target.getAttribute('id')+" go.";
    }
//	droppedIn = false;
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
         str += _("drop_zone1").children[i].id+" are in drop_zone1.";
      //  
    }
    str = str.toUpperCase();
    //alert(str);
  _('app_status').style.color = 'purple';
 _('app_status').innerHTML = "<bold>"+str+ "</bold>";
    /* Run Ajax request to pass any data to your server */
}
function readDropZone2(){
     var str = "";
    for(var i=0; i < _("drop_zone2").children.length; i++){
     if(i!= (_("drop_zone2").children.length-1) )
     {
        if(i!= (_("drop_zone2").children.length-2) )
           str += _("drop_zone2").children[i].id +", ";
        else
          str += _("drop_zone2").children[i].id +" and ";
        }
      else
         str += _("drop_zone2").children[i].id+" are in drop_zone2.";
      //  
    }
   // alert(str);
   str = str.toUpperCase();
  _('app_status').style.color = 'red';
 _('app_status').innerHTML = "<bold>"+str+ "</bold>";
    /* Run Ajax request to pass any data to your server */
}