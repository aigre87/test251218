(function() {
  /*PAGE GLOBAL*/
  // window.bind_check800lay = function (that){
  //   if( $('.checkLay-lt800').is(':visible') ){
  //     that[0].lay800 = "lt800";
  //   }else{
  //     that[0].lay800 = "gt800";
  //   }

  //   that[0].isChangePageLayout800 = function isChangePageLayout800() {
  //     if( $('.checkLay-lt800').is(':visible') && that[0].lay800 == "gt800" ) {
  //       that[0].lay800 = "lt800";
  //       return true;
  //     } else if( !$('.checkLay-lt800').is(':visible') && that[0].lay800 == "lt800" ){
  //       that[0].lay800 = "gt800";
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  // }
  var myGlobalisMobileDevice = false;
  window.mobileAndTabletcheck = function() {
    myGlobalisMobileDevice = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) myGlobalisMobileDevice = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return myGlobalisMobileDevice;
  };
  mobileAndTabletcheck();
  if( myGlobalisMobileDevice ){
      $("html").addClass("mobile");
  }

  SmoothScroll({
    // Scrolling Core
    animationTime: 500, // [ms]
    stepSize: 80, // [px]

    // Acceleration
    accelerationDelta: 50, // 50
    accelerationMax: 3, // 3

    // Keyboard Settings
    keyboardSupport: true, // option
    arrowScroll: 50, // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Other
    touchpadSupport: false, // ignore touchpad by default
    fixedBackground: true,
    excluded: ''
  });

  /*ОТКЛЮЧЕНИЕ ВКЛЮЧЕНИЕ СКРОЛА*/
  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
      e.preventDefault();
    e.returnValue = false;
  };

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  };

  function disableScroll() {
    if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove = preventDefault; // mobile
    document.onkeydown = preventDefaultForScrollKeys;
  };

  function enableScroll() {
    if (window.removeEventListener)
      window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
  };

  /*ОТКЛЮЧЕНИЕ ВКЛЮЧЕНИЕ СКРОЛА END*/
  /*PAGE GLOBAL*/
  function linkscrollto() {
    $("*[data-scroll]").on("click", function(e) {
      var $this = $(this),
        dataScroll = $this.attr("data-scroll");

      if (typeof dataScroll == 'undefined') { return false; }
      e.preventDefault();
      disableScroll();
      if( $(e.target).closest(".menuBlock").length > 0 ){
        mobileMenu("close");
      }
      TweenLite.to(window, 0.8, {
        ease: Sine.easeInOut,
        scrollTo: $("" + dataScroll + "").offset().top - $("header").outerHeight(),
        onComplete: function() {
          enableScroll();
        }
      });
    });
  }


  function formsActions() {
    var $forms = $(".formBlock form"),
        $form1 = $("#bid");

    $forms.find("input[name='name']").one("focus", function() {
      $(this).click();
    }).inputmask("A{2,40}", {
      definitions: {
        "A": {
          validator: "[а-яА-ЯA-Za-z0-9 ]",
          cardinality: 1
        }
      },
      "onincomplete": function() {
        $(this).removeClass("complete");
        $(this).addClass("uncomplete");
        if ($(this).val().trim().length > 0) {
          $(this).addClass("active");
        } else {
          $(this).removeClass("active");
        }
      },
      "oncomplete": function() {
        $(this).addClass("complete active");
        $(this).removeClass("uncomplete");
      }
    });

    $forms.find("input[name='email']").one("focus", function() {
      $(this).click();
    }).inputmask("email", {
      "onincomplete": function() {
        $(this).removeClass("complete");
        $(this).addClass("uncomplete");
        if ($(this).val().trim().length > 0) {
          $(this).addClass("active");
        } else {
          $(this).removeClass("active");
        }
      },
      "oncomplete": function() {
        $(this).addClass("complete");
        $(this).removeClass("uncomplete");
      }
    });

    $forms.find("input[name='password']").on("focus change", function() {
        if ($(this).val().trim().length > 0) {
          $(this).addClass("active complete");
        } else {
          $(this).removeClass("active complete"); 
        }
    });


    $("#b1 input[type='checkbox'][name='rules']").on("change", function(){
      var $this = $(this);
      if ($this.prop('checked')) {
          $this.addClass("complete");
          $this.removeClass("uncomplete");
      } else {
          $this.addClass("uncomplete");
          $this.removeClass("complete");
      }
      $("input[type='checkbox'][name='rules']").prop( "checked",  $this.is(':checked') );
    });

    $("body").on("click", ".rulesBlock .desc_txt", function(){
      var $inpt = $(this).closest(".rulesBlock").find("input")
      $inpt.prop( "checked",  !$inpt.is(':checked') );
      $inpt.trigger("change");
    });

    $(".formToggleButton").on("click", function(){
      var $hiddenForm = $(".formBlock form.hidden"),
          $visibleForm = $forms.not($hiddenForm);
          $block = $(".formBlock");
          startH = $block.outerHeight();

        $visibleForm.addClass("hidden");
        $hiddenForm.removeClass("hidden");
        var endH = $block.outerHeight();
        TweenMax.set($block, { height: startH });
        TweenMax.to($block, 0.2, {
            height: endH,
            onComplete: function() {
                TweenMax.set($block, { clearProps: "all" });
            }
        });
    });


    $forms.on('submit', function(event) {
      var $thisForm = $(this),
          submit = $thisForm.find("input[type='submit']");
      if (submit.hasClass("loading")) { return false; }

      if (
        $thisForm.find("input.ajax:not(.complete)").length > 0 ||
        $thisForm.find("input[name='rules']:not(.complete)").length > 0
      ) {
        $.magnificPopup.open({
          items: {
            src: "<div class='defaultPopupContent mfp-with-anim'>Заполните необходимые поля</div>",
            type: 'inline'
          },
          removalDelay: 500, //delay removal by X to allow out-animation
          closeBtnInside: true,
          mainClass: 'mfp-with-zoom',
          callbacks: {
            beforeOpen: function() {
              this.st.mainClass = "mfp-zoom-in defaultPopup";
            },
            beforeClose: function() {

            },
          },
          midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        });
        $thisForm.find("input.ajax.need").each(function() {
          var $this = $(this);
          if (!$this.inputmask("isComplete") ) {
            $this.addClass("uncomplete");
          }
        });
        if (!$forms.find("input[name='rules']").prop('checked')) {
            $forms.find("input[name='rules']").addClass("uncomplete");
        }

        return false;
      }

      event.preventDefault();
      submit.addClass('loading');

      var data = {};
      $thisForm.find("input.ajax").each(function(index, one) {
        var value = decodeURIComponent(this.value);
        data[this.name] = isJSON(value) ? JSON.parse(value) : value;
      });


      $.ajax({
        type: 'POST',
        url: $thisForm.attr("action"),
        data: data,
        dataType: 'json',
        success: function(response) {
          submit.removeClass('loading');
          if (response.status != 'ok') {
            $.magnificPopup.open({
              items: {
                src: "<div class='defaultPopupContent mfp-with-anim'>Ошибка сервера, попробуйте отправить еще раз или позвоните по телефону +7 (495) 120-32-30</div>",
                type: 'inline'
              },
              removalDelay: 500, //delay removal by X to allow out-animation
              closeBtnInside: true,
              mainClass: 'mfp-with-zoom',
              callbacks: {
                beforeOpen: function() {
                  this.st.mainClass = "mfp-zoom-in defaultPopup";
                },
                beforeClose: function() {

                },
              },
              midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
            });
          } else {
            $.magnificPopup.open({
              items: {
                src: "<div class='defaultPopupContent mfp-with-anim'>Заявка принята, спасибо. В ближайшее время мы свяжемся с вами<br/><br/>Если у вас есть вопросы - звоните, будем рады:<br/>+7 (495) 120-32-30</div>",
                type: 'inline'
              },
              removalDelay: 500, //delay removal by X to allow out-animation
              closeBtnInside: true,
              mainClass: 'mfp-with-zoom',
              callbacks: {
                beforeOpen: function() {
                  this.st.mainClass = "mfp-zoom-in defaultPopup";
                },
                beforeClose: function() {

                },
              },
              midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
            });
            submit.prop('disabled', true);
          }


        },
        error: function() {
          $.magnificPopup.open({
            items: {
              src: "<div class='defaultPopupContent mfp-with-anim'>При отправке произошла ошибка</div>",
              type: 'inline'
            },
            removalDelay: 500, //delay removal by X to allow out-animation
            closeBtnInside: true,
            mainClass: 'mfp-with-zoom',
            callbacks: {
              beforeOpen: function() {
                this.st.mainClass = "mfp-zoom-in defaultPopup";
              },
              beforeClose: function() {

              },
            },
            midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
          });
        }
      });

    });
  }

  function getScriptForm() {

      $("*[data-action='getScript_Js']").on("click", function(e) {
          var $this = $(this),
              initTarifValue = $this.attr("data-select");

          e.preventDefault();

          var $form = $(".getScriptForm");

          $.magnificPopup.open({
              items: {
                  src: "<div class='defaultPopupContent mfp-with-anim'>" + $form[0].outerHTML + "<div class='response'></div></div>",
                  type: 'inline'
              },
              removalDelay: 500, //delay removal by X to allow out-animation
              closeBtnInside: true,
              mainClass: 'getScript_Js-popup mfp-with-zoom',
              callbacks: {
                  beforeOpen: function() {
                      this.st.mainClass = "getScript_Js-popup mfp-zoom-in defaultPopup";
                  },
                  open: function() {

                      var $form = $(".mfp-content .getScriptForm");
                      var $select = $form.find("*[name='tarif']");
                      if( initTarifValue ){
                        $select.val(initTarifValue);
                      }
                      if( !myGlobalisMobileDevice ){
                        $select.select2({
                          minimumResultsForSearch: -1
                        });
                      }
                      
                      

                      $form.find("input[name='name']").one("focus", function(){
                          $(this).click();
                      }).inputmask("A{2,40}",{ 
                          definitions: {
                              "A": {
                                validator: "[а-яА-ЯA-Za-z0-9 ]",
                                cardinality: 1
                              }
                          },
                          "onincomplete": function(){ 
                              $(this).removeClass("complete"); 
                              $(this).addClass("uncomplete");
                          },
                          "oncomplete": function(){ 
                              $(this).addClass("complete");
                              $(this).removeClass("uncomplete");
                          }
                      });
                      $form.find("input[name='email']").one("focus", function(){
                          $(this).click();
                      }).inputmask("email", {
                          "onincomplete": function() {
                              $(this).removeClass("complete");
                              $(this).addClass("uncomplete");
                          },
                          "oncomplete": function() {
                              $(this).addClass("complete");
                              $(this).removeClass("uncomplete");
                          }
                      });
                      $form.find("input[name='phone']").one("focus", function(){
                          $(this).click();
                      }).inputmask("+7(999)999-99-99", {

                      });

                      var submit = $form.find("input[type='submit']");
                      $form.on('submit', function(event) {
                          if( submit.hasClass("loading") ){ return false; }
                          if ( $form.find("input.ajax:not(.complete)").length > 0 ||
                                $form.find("input[name='rules']:not(.complete)").length > 0
                           ) {
                              $(".mfp-content .response").removeClass("error good").html("Заполните необходимые поля").addClass("error");

                              $form.find("input.ajax.need").each(function() {
                                  var $this = $(this);
                                  if ( !$this.inputmask("isComplete") ) {
                                      $this.addClass("uncomplete");
                                  }
                              });

                              if (!$form.find("input[name='rules']").prop('checked')) {
                                  $form.find("input[name='rules']").addClass("uncomplete");
                              }

                              return false;
                          }

                          event.preventDefault();
                          submit.addClass('loading');

                          var data = {};
                          $form.find(".ajax").each(function(index, one) {
                              var value = decodeURIComponent(this.value);
                              data[this.name] = isJSON(value) ? JSON.parse(value) : value;
                          });


                          $.ajax({
                              type: 'POST',
                              url: $form.attr("action"),
                              data: data,
                              dataType: 'json',
                              success: function(response) {
                                  submit.removeClass('loading');
                                  if (response.status != 'ok') {
                                      $(".mfp-content .response").removeClass("error good").html("Ошибка сервера, попробуйте отправить еще раз или позвоните по телефону +7 (495) 120-32-30").addClass("error");
                                  } else {
                                      $(".mfp-content .response").removeClass("error good").html("Заявка принята, спасибо. В ближайшее время мы свяжемся с вами<br/><br/>Если у вас есть вопросы - звоните, будем рады:<br/>+7 (495) 120-32-30").addClass("good");
                                      submit.prop('disabled', true);
                                  }


                              },
                              error: function() {
                                  $(".mfp-content .response").removeClass("error good").html("При отправке произошла ошибка").addClass("error");
                              }
                          });

                      });

                  },
                  beforeClose: function() {

                  },
              },
              midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
          });

      });
  }



  function mobileMenu(trigger) {
    var $button = $("header .mobileButton"),
      $header = $("header"),
      $menu = $("header .menu"),
      $shadow = $("header .shadow"),
      $collection = $button.add($menu).add($shadow).add($header);

    if( trigger == "init" ){
        $button.on("click", function() {
          $collection.toggleClass("active");
        });
        $shadow.on("click", function() {
          $collection.removeClass("active");
        });
        function checkTop(){
          if ($(window).scrollTop() > 0) {
            $header.addClass("scroll");
          } else {
            $header.removeClass("scroll");
          }
        }
        $(window).scroll(function () {
            checkTop();
            setTimeout(function(){ checkTop(); }, 500);
        });

    }else if( trigger == "close" ){
        $collection.removeClass("active");
    }

  }



  $(document).ready(function() {
    svg4everybody({});
    mobileMenu("init");
    linkscrollto();
    formsActions();
    getScriptForm();
  });

  // $(window).on("debouncedresize", function(event) {

  // });

})();