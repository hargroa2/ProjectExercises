const reverseString = (str) => {
  console.log(str.split("").reduce((stri, char) => char + stri));
};

reverseString("My name is Amanda Hargrove");
