"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Tutorial Case

   Author: Andres Avila
   Date:  11/23/2023

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/
//Set the dat displayed in the calender 
var thisDay = new Date();

//Write the calender to the element with the id "calender"
document.getElementById("calendar").innerHTML =
createCalendar(thisDay);

//Function to generate the calender table
function createCalendar(calDate){
   var calendarHTML = "<table id = 'calendar_table'>";
   calendarHTML += calCaption(calDate);
   calendarHTML += calWeekdayRow();
   calendarHTML += calDays(calDate);
   calendarHTML +="</table>";
   return calendarHTML;
}

//function to write the calender caption

function calCaption(calDate){
   //monthName array contains the list of month names
   var monthName = ["Janurary", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];

   var thisMonth = calDate.getMonth();

   var thisYear = calDate.getFullYear();

   return "<caption>" + monthName[thisMonth]+" "+ thisYear + "</caption>";

}
//function to write a table row of weekday abbreviations
function calWeekdayRow(){
   //Array of weekday abbreviations
   var dayName =["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
   var rowHTML = "<tr>";

   for(var i =0; i<dayName.length;i++){
      rowHTML +="<th class = 'calender_weekdays'>"+ dayName[i] + "</th>";
   }
   rowHTML += "</tr>";
   return rowHTML;
}
//function to calculate the number of days in the month
function daysInMonth(calDate){
   //Array of days in each month 
   var dayCount = [31,28,31,30,31,30,31,31,30,31,30,31];

   //extract the four digit year and month value
   var thisYear = calDate.getFullYear();
   var thisMonth = calDate.getMonth();

   //revising the days in February for leap years
   if(thisYear % 4===0){
      if((thisYear % 100 !==0) || (thisYear % 400 ===0)){
         dayCount[1] ==29;
      }
   }
   //return the number of days for the current month
   return dayCount[thisMonth];
}
//function the write table rows for each day of the month

function calDays(calDate){
   var day = new Date(calDate.getFullYear(), calDate.getMonth(),1);
   
   var weekDay = day.getDay();

   var htmlCode = "<tr>";
   
   for(var i =0; i<weekDay; i++){
      htmlCode +="<td></td>";
   }
   var totalDays = daysInMonth(calDate);

   var highlightDay = calDate.getDate();
   
   for (var i =1; i<=totalDays;i++){
      day.setDate(i);
      weekDay = day.getDay();

      if(weekDay === 0) htmlCode +="<tr>";
      if(i===highlightDay){
      htmlCode += "<td class = 'calendar_dates' id = 'clendar_today'>" + i + dayEvent[i] + "</td>";
   }
         else{
            htmlCode +="<td class = 'calendar_dates'>"+ i + dayEvent[i] +"</td>";
         }
      if(weekDay === 6) htmlCode+="</tr>";
   }
   return htmlCode;
}
