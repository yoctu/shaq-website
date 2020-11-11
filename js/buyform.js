jQuery(document).ready(function($) {
  "use strict";

  //Contact
  $('#buy').on('click', function() {
      let ferror = false
      let emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
    [$('#name'), $('#email') ].forEach(function(i) {
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false;
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    if (ferror) return false;

    $("#buyform").addClass("d-none");
    $("#waitmessage").addClass("show");
    const env = $('#typeTms').val() === "DEMO" ? 'test' : 'prod'
    fetch("https://manage.shaq.us.yoctu.solutions//api/container?key=jaimelephp&code=SHAQ" + Math.round(new Date().getTime() / 1000) + "&env=" + env + "'&email=" + $('#email').val() + "&name=" + $('#name').val() + "&tms=" + $('#typeTms').val().toLowerCase() + "&sendmail=1", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
    })
    .then(function(res) {
      $("#waitmessage").removeClass("show");
      $("#sendmessage").addClass("show");
    })
    .catch(function(e){
      $("#errormessage").addClass("show");
    })
    return false;
  });

});
