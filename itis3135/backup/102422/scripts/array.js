//notes to self

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript
contains vrey nice documentation of javascript
https://code-boxx.com/create-table-from-array-javascript/ helpo with table

.value  return text           https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
.push adds to end of array   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
//.indexof return index of specific value      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// go back and use innerhtml to fully javascript calculator assigment
*/
names = [];
salary = [];
function addSalary() {
    var name_input = document.getElementById("names_sel").value;
    var salary_input = document.getElementById("salary_sel").value;
    salary_input = parseInt(salary_input);
    if (salary_input == "") {
        alert("please entert a number to be used as a salary");
        salary_input = 0;
    }
        salary[names.indexOf(name_input)] = salary_input;
        names.push(name_input);
            salary.push(salary_input);
        document.getElementById("salary_sel").innerHTML = "";
        document.getElementById("names_sel");
    }
function displayResults() {
    var average=0;
    var runningCounter=0;
    var highest =Math.max(...salary);
    for (j = 0; j < salary.length; j++) {
        runningCounter += salary[j];
    }
     average = (runningCounter / salary.length);
    document.getElementById("results").innerHTML = "  <h2>"+"displayResults"+"</h2>"+"<br> <br>" +"<p>" +"Average salary: " + parseInt(average) +  "</p>" +"<br>" +"<p>"+" The largest salary was: " +highest + "</p>";
}
function displaySalary() {
//genral table set up headers and table
    var tableStart="";
//generate content
var tableContent="";
//close table
 var tablesFinal = "</table>";
  for (j = 0; j < salary.length; j++) {

                         // get name and its correspoinding sallary and index  write values based on index
        tableContent += "<tr>"+"<td>" + names[j] + "</td>"+"<td>" + salary[j] + " </td>"+"</tr>";
        tableStart+=tableContent;
    }
   
    document.getElementById("results_table").innerHTML = "<h2>Salary</h2>" + tableStart+tablesFinal;
 
}