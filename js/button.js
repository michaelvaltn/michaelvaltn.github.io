function buttonconsultant(){
  //Find the consultantresume element
    if (document.getElementById('cresume-open')){
      return;
    }else{
      x=document.getElementById('cresume-close').id=('cresume-open')
      x=document.getElementById('sresume-open').id=('sresume-close')
      
      x=document.getElementById('desccon-close').id=('desccon-open')
      x=document.getElementById('descstyle-open').id=('descstyle-close')
    }
}

function buttonstyled(){
  if (document.getElementById('sresume-open')){
    return;
  }else{
    x=document.getElementById('sresume-close').id=('sresume-open');
    x=document.getElementById('cresume-open').id=('cresume-close');

    x=document.getElementById('descstyle-close').id=('descstyle-open')
    x=document.getElementById('desccon-open').id=('desccon-close')
  }
}
