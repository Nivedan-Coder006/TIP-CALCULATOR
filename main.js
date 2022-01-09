var cost, percentage, people
document.getElementById("submit").onclick = function(){
    cost = document.getElementById("amount").value; 
    percentage = document.getElementById("Percentage").value; 
    people = document.getElementById("People").value;
    
    percentage = 1+percentage/100
    
    document.getElementById("result").textContent = "Tip for each person: "+Math.round(cost/people*percentage)
    
}