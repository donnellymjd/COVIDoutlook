---
layout: page
title: State Reports
banner: duotone3.png
---
To see a state report, please select one from dropdown menu. 

<form name="change">
<SELECT NAME="options" ONCHANGE="document.getElementById('youriframe').src = this.options[this.selectedIndex].value">
    <option value="0">Select State</option>
    <option value="/forecasts/US">United States</option>
    <option value="/forecasts/AL">Alabama</option>
    <option value="/forecasts/AK">Alaska</option>
    <option value="/forecasts/AZ">Arizona</option>
    <option value="/forecasts/AR">Arkansas</option>
    <option value="/forecasts/CA">California</option>
    <option value="/forecasts/CO">Colorado</option>
    <option value="/forecasts/CT">Connecticut</option>
    <option value="/forecasts/DE">Delaware</option>
    <option value="/forecasts/DC">District of Columbia</option>
    <option value="/forecasts/FL">Florida</option>
    <option value="/forecasts/GA">Georgia</option>
    <option value="/forecasts/HI">Hawaii</option>
    <option value="/forecasts/ID">Idaho</option>
    <option value="/forecasts/IL">Illinois</option>
    <option value="/forecasts/IN">Indiana</option>
    <option value="/forecasts/IA">Iowa</option>
    <option value="/forecasts/KS">Kansas</option>
    <option value="/forecasts/KY">Kentucky</option>
    <option value="/forecasts/LA">Louisiana</option>
    <option value="/forecasts/ME">Maine</option>
    <option value="/forecasts/MD">Maryland</option>
    <option value="/forecasts/MA">Massachusetts</option>
    <option value="/forecasts/MI">Michigan</option>
    <option value="/forecasts/MN">Minnesota</option>
    <option value="/forecasts/MS">Mississippi</option>
    <option value="/forecasts/MO">Missouri</option>
    <option value="/forecasts/MT">Montana</option>
    <option value="/forecasts/NE">Nebraska</option>
    <option value="/forecasts/NV">Nevada</option>
    <option value="/forecasts/NH">New Hampshire</option>
    <option value="/forecasts/NJ">New Jersey</option>
    <option value="/forecasts/NM">New Mexico</option>
    <option value="/forecasts/NY">New York</option>
    <option value="/forecasts/NC">North Carolina</option>
    <option value="/forecasts/ND">North Dakota</option>
    <option value="/forecasts/OH">Ohio</option>
    <option value="/forecasts/OK">Oklahoma</option>
    <option value="/forecasts/OR">Oregon</option>
    <option value="/forecasts/PA">Pennsylvania</option>
    <option value="/forecasts/RI">Rhode Island</option>
    <option value="/forecasts/SC">South Carolina</option>
    <option value="/forecasts/SD">South Dakota</option>
    <option value="/forecasts/TN">Tennessee</option>
    <option value="/forecasts/TX">Texas</option>
    <option value="/forecasts/UT">Utah</option>
    <option value="/forecasts/VT">Vermont</option>
    <option value="/forecasts/VA">Virginia</option>
    <option value="/forecasts/WA">Washington</option>
    <option value="/forecasts/WV">West Virginia</option>
    <option value="/forecasts/WI">Wisconsin</option>
    <option value="/forecasts/WY">Wyoming</option>
</select>
</form>
<div>
    <iframe 
    src="/forecasts/US"
    id="youriframe"
    style="margin:0; width:100%; height:150px; border:none; overflow:hidden;" scrolling="no" 
    onload="AdjustIframeHeightOnLoad()"></iframe>
</div>


<p><span style="text-align:center; font-size:0.8rem; font-style: italic; line-height: 1;">Currently our state reports are not interactive in order to improve website loading speed. Please check back in the future for interactive reports.</span></p>