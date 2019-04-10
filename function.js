function checkPrimes(n){

  let flag = true;    //biến cờ hiệu;
  if(n < 2){
    flag = false;
  }

  else {
    {
      for(i = 2;i < Math.sqrt(n) ; i++)
        if( n % i == 0) {
          flag = false;
          break;
        }
    }
  }

  if(flag == true){ //Kiểm tra biến cờ hiệu
    document.write(n +"là số nguyên tố" + "<br/>");
  }
  else {
    document.write(n +" không phải số nguyên tố" + "<br/>");
  }

}

// xây dựng hàm in ra  day số
function prinNumber() {
    let number = document.getElementById("number").value;
    let numbers = parseInt(number);// ép number sang kiểu number
    let html = "";
    for(i = 0; i< numbers;i++){
      html+= i + " ";
    }
  document.getElementById("result").innerText = html;
}



  
