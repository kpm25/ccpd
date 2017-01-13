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
    for(var i=0; i < _("drop_zone2").children.length; i++){
        alert(_("drop_zone").children[i].id+" is in the drop zone1");
    }
    /* Run Ajax request to pass any data to your server */
}
function readDropZone2(){
    for(var i=0; i < _("drop_zone2").children.length; i++){
        alert(_("drop_zone2").children[i].id+" is in the drop zone2");
    }
    /* Run Ajax request to pass any data to your server */
}