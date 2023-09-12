const input = document.getElementById("decToBin")
const output = document.getElementById("binaryText")

function decimalToBinary(event) {
  // Write your code here
  let num = event.target.value
  let rem = ""
  while(num>0){
    rem = num%2 + rem
    num=Math.floor(num/2)
  }
  output.innerText = `${rem}`
}
input.addEventListener("change",decimalToBinary)

// window.decimalToBinary = decimalToBinary;