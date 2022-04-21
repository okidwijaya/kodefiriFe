#question 1
variable a = interger 100;
FOR (variable i = interger 50; variable i <= less than equal to 100; THEN variable i += plus 5) {
  //   let b = 1;
  IF ( variable i modulus % 5 not equal != 0)variable i++ increment;
  IF (i <= 60) {
    display KURANG 
  } ELSE IF(i >= 60 && i <= 70) {
    display CUKUP 
  } ELSE IF (i >= 70 && i <= 80) {
    display BAIK 
  } ELSE IF (i >= 80) {
    display LUAR BIASA 
  }
}

#question 2
FUNCTION fibb = n as a parameter
  variable fib = array [];

  variable fib[index 0] = 0;
  variable fib[index 1] = 1;
  FOR (variable i = equal 2; variable i <= less than equal n; variable i++ increment) {
    fib[i] = fib[i - 2] + fib[i - 1];
    display variable fib index i (fib[i]);
  }
};
running function fibb and 20 is value for n parameter
fibb(20);

#question 3
FUNCTION pattern = (parameter stars) => {
  variable star = string "";
  FOR (variable i equal to = 1; variable i <= less than equal variable stars; variable i++ increment) {
    FOR (variable j = equal to 1; variable j <= less than variable i; vairbale j++ increment) {
     variable star plus += string * "*";
    }
    variable star += plus newline charater "\n";
  }
  display variable star;
};
run FUNCTION pattern( value 6);
// pattern(1);
// pattern(3);


#question 4

FUNCTION numerator(val) {
 parameter val = returns the absolute value for val, Math.abs(val);
  variable parceling = 0;
  variable numb = [
    "",
    "Satu",
    "Dua",
    "Tiga",
    "Empat",
    "Lima",
    "Enam",
    "Tujuh",
    "Delapan",
    "Sembilan",
    "Sepuluh",
    "Sebelas",
  ];
  variable temp = empty string "";

  IF (parameter val < 12) {
    temp = " " + numb[val];
  } ELSE IF(val < 20) {
    temp = numerator(val - 10) + " Belas";
  } ELSE IF(val < 100) {
    parceling = Math.floor(val / 10);
    temp = numerator(parceling) + " Puluh" + numerator(val % 10);
  } ELSE IF(val < 200) {
    temp = " Seratus" + numerator(val - 100);
  } ELSE IF(val < 1000) {
    parceling = Math.floor(val / 100);
    temp = numerator(parceling) + " Ratus" + numerator(val % 100);
  } ELSE IF(val < 2000) {
    temp = " Seribu" + numerator(val - 1000);
  } ELSE IF(val < 1000000) {
    parceling = Math.floor(val / 1000);
    temp = numerator(parceling) + " Ribu" + numerator(val % 1000);
  } ELSE IF(val < 1000000000) {
    parceling = Math.floor(val / 1000000);
    temp = numerator(parceling) + " Juta" + numerator(val % 1000000);
  } ELSE IF(val < 1000000000000) {
    parceling = Math.floor(val / 1000000000);
    temp =
      numerator(parceling) + " Miliar" + numerator(val % 1000000000);
  } ELSE IF(val < 1000000000000000) {
    parceling = Math.floor(val / 1000000000000);
    temp =
      numerator(val / 1000000000000) +
      " Triliun" +
      numerator(val % 1000000000000);
  }

  return value of variable temp;
}

run fucniotn numerator( with value 2435);
