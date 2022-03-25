class Security{
    constructor()
    {
    }
    authenticated(constant,enteredCode){
  
      if(constant===parseInt(enteredCode) && enteredCode.indexOf(' ')>0===false){
         //this.button.hide();
         //gameState=3;
         return true;
      }else {
         return false;
    }
}

authentication(constf,code){
   if(constf === code.toUpperCase() && code.indexOf(' ') >= 0){
      return true;
   }else{
      return false;
   }
}
}
