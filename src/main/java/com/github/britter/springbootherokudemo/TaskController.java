
package com.github.britter.springbootherokudemo;


import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;




@Controller
public class TaskController {
   
    
 
    @RequestMapping(path = "/slideshow", method = RequestMethod.GET)
    public String testTask() {

        return "slideshow";
    }
    
    @RequestMapping(path = "/test", method = RequestMethod.GET)
    public String testTask2() {

        return "test";
    }
    
    @RequestMapping(path = "/text", method = RequestMethod.GET)
    public String testTask3() {

        return "text";
    }
    
    @RequestMapping(path = "/drag", method = RequestMethod.GET)
    public String testTask4() {

        return "drag_and_drop";
    }
    
    
}