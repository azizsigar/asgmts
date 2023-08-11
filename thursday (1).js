function titleCase(str) {
    return str
      .toLowerCase() 
      .split(' ') 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
      .join(' '); 
  }
  
  const input = "I'm a little tea pot";
  const result = titleCase(input);
  console.log(result); 
  