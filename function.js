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
    //Kiểm tra biến cờ hiệu
  if(flag == true){
    document.write(n +"là số nguyên tố" + "<br/>");
  }
  else {
    document.write(n +" không phải số nguyên tố" + "<br/>");
  }

}


  
