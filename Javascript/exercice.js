function getShortMessage(list){
   let newlist = [];

   for(i= 0; i < list.length; i++){
      let str = list[i];
      if(list[i].length < 50){
         newlist.push(list[i]);
      }
   }
   return newlist;
}