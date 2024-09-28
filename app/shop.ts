function () {
      var request = new XMLHttpRequest();

      // The node server that responds to the 
      // create-payment request is implemented in Step 2
      request.open('GET', 'create-payment', true); 
      request.onload = function () {
        const data = JSON.parse(this.response);        // If parse error, check output 
        if (!data.paymentId) {                         // from create-payment.php
          console.error('Error: Check output from create-payment');
          return;
        }
        console.log(this.response);

        // checkout.html is implemented in Step 3
        window.location = 'checkout.html?paymentId=' + data.paymentId;
      }
      request.onerror = function () { console.error('connection error'); }
      request.send();
    };