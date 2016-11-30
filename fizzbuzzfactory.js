app.factory('Display', function() {
  var count = 0;
  var display = { display: 'Click Here to Start',
               incrament : incrament };

  function incrament() {
    count++;

    if(count % 3 === 0 && count % 5 === 0) {
      display.display = 'FIZZBUZZ';
    } else if (count % 3 === 0) {
      display.display = 'FIZZ';
    } else if (count % 5 === 0) {
      display.display = 'BUZZ';
    } else {
      display.display = count;
    }

  };

  return display;
});