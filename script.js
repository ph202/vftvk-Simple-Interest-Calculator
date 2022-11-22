function compute()
{
    var principal = document.getElementById("principal").value;

    if(principal < 0 || principal==0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else{
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        var res_text = `If you deposit <mark>${principal}</mark><br> at an interestrate <mark>${rate}%</mark>. <br>You will recieve an amount of <mark>${interest}</mark>, <br>in the year <mark>${year}</mark>`;

        document.getElementById("result").innerHTML=res_text;
    }

    
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=`${rateval}%`;
}
  