---
layout: page
title: State Reports
image: duotone3.png
---
This page will give you a dropdown menu to select a state and see all of the data and forecasts for that state.
<form name="change">
<SELECT NAME="options" ONCHANGE="document.getElementById('youriframe').src = this.options[this.selectedIndex].value">
    <option value="0">Select State</option>
    <option value="/data">movie 2</option>
    <option value="/methodology">movie 3</option>
    <option value="/us_overview.html">movie 4</option>
</select>
</form>
<div>
    <iframe 
    src="about:blank"
    id="youriframe"
    width="100%" 
    height="100%" 
    marginheight="0" 
    frameborder="0" 
    border="0" 
    scrolling="auto" 
    onload="autoResize(this);"></iframe>
</div>