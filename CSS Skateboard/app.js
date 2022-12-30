document.onclick=function() {
    document.getElementById('skateboard').className='trick';
    setTimeout(function() {
      document.getElementById('skateboard').className='';
    },400);
  }