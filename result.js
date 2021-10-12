function publishResult(){
    const Maths = document.getElementById("Maths").value
    const Chemistry = document.getElementById("Chemistry").value
    const History = document.getElementById("History").value
    const English = document.getElementById("English").value
    const ComputerScience = document.getElementById("ComputerScience").value
    const Spanish = document.getElementById("Spanish").value
    const PE = document.getElementById("PE").value

    let total = parseFloat(Maths)+parseFloat(Chemistry)+parseFloat(History)+parseFloat(English)+parseFloat(ComputerScience)+parseFloat(Spanish)+parseFloat(PE)

    document.getElementById("sum").innerHTML = "The total marks is: " + total

    let percentage = (total*100)/700
    document.getElementById("percentage").innerHTML = "The Percentage is: " + percentage
}

