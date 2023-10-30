
function calcTip(bill) {
    let tip;
  
    if (bill >= 90 && bill <= 500) {
      tip = bill * 0.15;
    } else if (bill > 500) {
      tip = bill * 0.2;
    }
  
    return tip;
  }
  
  let bill = 680;
  let tip = calcTip(bill);
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);
  
