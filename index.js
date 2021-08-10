// Typing Effect
    var typed = new Typed('.element', {
        strings: ["My name is Oliver Queen", "I'm The Arrow,", "Star City's Hero!"],
        smartBackspace: true,
        typeSpeed: 70,
        backSpeed: 20,
        loop: true,
        loopCount: Infinity,
        startDelay: 500
      });

      // Emergency Alert

      $(document).ready(function() {

        $(".btn-emergency").click( function () {
          $(".modal-body").html("<h2>Stay put. The ARROW is on the way!</h2>")

        })
    


      })