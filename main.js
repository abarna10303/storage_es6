// local storage
localStorage.setItem('person','Abarna');
localStorage.setItem('Degree',JSON.stringify('DCE'));
localStorage.setItem('phoneno',JSON.stringify(9384994254));

localStorage.getItem('person');
localStorage.removeItem('Degree');
localStorage.clear();

//session storage
sessionStorage.setItem('person1','Abarna');
sessionStorage.getItem('person1');
sessionStorage.removeItem('person1');
sessionStorage.clear();
