const Max_out_of_three = (A,B,C) => {
    if((A>B) && (A>C)){
    return A;
    }
    if((B>A) && (B>C)){
    return B;
    }
    if((C>A) && (C>B)){
    return C;
    }
    if((A==B)&& (B=C)){
      return -1;
    }
      
  
  };
  