function simpleCalendar() {
  $(document).ready(function () {
    let momentVar = moment().format('dddd, MMMM Do, YYYY h:mm a');
    let workHours = ["9 a.m.", "10 a.m.", "11 a.m.", "12 p.m.", "1 p.m.", "2 p.m.", "3 p.m.", "4 p.m.",
      "5 p.m."]

    function currentDay() {
      let currentDay = $("#currentDay").text(momentVar);
      return currentDay;
    }

    currentDay();
    let row;
    let timeCol;

    for (i = 0; i < workHours.length; i++) {
      let row = $("<div>").addClass("row");
      let timeCol = $("<text-area>").text(workHours[i]).addClass("hour");
      let inputCol = $("<input>").attr("placeholder", "Add Event Here").addClass("event-input time-display");
      saveBtn = $("<button>").addClass("btn btn-primary saveBtn").text("save");
      $(row).append(timeCol).append(inputCol).append(saveBtn);
      $("#calendar").append(row);
    }

    function addIdToInput() {
      let inputId = document.getElementsByClassName("event-input");
      let length = inputId.length;
      for (i = 0; i < length; i++) {
        inputId[i].id = "input-field-" + (i + 1);
      }
    };
    addIdToInput();

    function addIdToSaveBtn() {
      let saveBtnId = document.getElementsByClassName("saveBtn");
      let length = saveBtnId.length;
      for (i = 0; i < length; i++) {
        saveBtnId[i].id = "saveBtn-Id-" + (i + 1);
      }
    }
    addIdToSaveBtn();

    let saveBtnId1 = $("#saveBtn-Id-1");
    let saveBtnId2 = $("#saveBtn-Id-2");
    let saveBtnId3 = $("#saveBtn-Id-3");
    let saveBtnId4 = $("#saveBtn-Id-4");
    let saveBtnId5 = $("#saveBtn-Id-5");
    let saveBtnId6 = $("#saveBtn-Id-6");
    let saveBtnId7 = $("#saveBtn-Id-7");
    let saveBtnId8 = $("#saveBtn-Id-8");
    let saveBtnId9 = $("#saveBtn-Id-9");

    let eventInput1 = $("#input-field-1");
    let eventInput2 = $("#input-field-2");
    let eventInput3 = $("#input-field-3");
    let eventInput4 = $("#input-field-4");
    let eventInput5 = $("#input-field-5");
    let eventInput6 = $("#input-field-6");
    let eventInput7 = $("#input-field-7");
    let eventInput8 = $("#input-field-8");
    let eventInput9 = $("#input-field-9");

    let storedInput;

    $(saveBtnId1).on("click", function (event) {
      event.preventDefault();
      let toDoInput1 = $("#input-field-1").val().trim();
      localStorage.setItem("event1", (eventInput1));
    });
    let savedInput1 = (localStorage.getItem("event1"));
    eventInput1.val(savedInput1);

    $(saveBtnId2).on("click", function (event) {
      event.preventDefault();
      let toDoInput2 = $("#input-field-2").val().trim();
      localStorage.setItem("event2", (eventInput2));
    });
    let savedInput2 = (localStorage.getItem("event2"));
    eventInput2.val(savedInput2);

    $(saveBtnId3).on("click", function (event) {
      event.preventDefault();
      let toDoInput3 = $("#input-field-3").val().trim();
      localStorage.setItem("event3", (eventInput3));
    });
    let savedInput3 = (localStorage.getItem("event3"));
    eventInput1.val(savedInput3);

    $(saveBtnId4).on("click", function (event) {
      event.preventDefault();
      let toDoInput4 = $("#input-field-4").val().trim();
      localStorage.setItem("event4", (eventInput4));
    });
    let savedInput4 = (localStorage.getItem("event4"));
    eventInput4.val(savedInput4);

    $(saveBtnId5).on("click", function (event) {
      event.preventDefault();
      let toDoInput5 = $("#input-field-5").val().trim();
      localStorage.setItem("event5", (eventInput5));
    });
    let savedInput5 = (localStorage.getItem("event5"));
    eventInput5.val(savedInput5);

    $(saveBtnId6).on("click", function (event) {
      event.preventDefault();
      let toDoInput6 = $("#input-field-6").val().trim();
      localStorage.setItem("event6", (eventInput6));
    });
    let savedInput6 = (localStorage.getItem("event1"));
    eventInput6.val(savedInput1);

    $(saveBtnId7).on("click", function (event) {
      event.preventDefault();
      let toDoInput7 = $("#input-field-7").val().trim();
      localStorage.setItem("event7", (eventInput7));
    });
    let savedInput7 = (localStorage.getItem("event7"));
    eventInput7.val(savedInput7);

    $(saveBtnId8).on("click", function (event) {
      event.preventDefault();
      let toDoInput8 = $("#input-field-8").val().trim();
      localStorage.setItem("event8", (eventInput8));
    });
    let savedInput8 = (localStorage.getItem("event8"));
    eventInput8.val(savedInput8);

    $(saveBtnId9).on("click", function (event) {
      event.preventDefault();
      let toDoInput9 = $("#input-field-9").val().trim();
      localStorage.setItem("event1", (eventInput9));
    });
    let savedInput9 = (localStorage.getItem("event9"));
    eventInput9.val(savedInput9);

    let now = new Date().getHours();
    if (now > 8) {
      $("#input-field-0").addClass("past");
    } else if (now >= 8 && now < 9) {
      $("#input-field-0").addClass("present");
    } else if (now < 8) {
      $("#input-field-0").addClass("future");
    }

    if (now > 9) {
      $("#input-field-1").addClass("past");
    } else if (now >= 9 && now < 10) {
      $("#input-field-1").addClass("present");
    } else if (now < 9) {
      $("#input-field-1").addClass("future");
    }

    if (now > 10) {
      $("#input-field-2").addClass("past");
    } else if (now >= 10 && now < 11) {
      $("#input-field-2").addClass("present");
    } else if (now < 10) {
      $("#input-field-2").addClass("future");
    }

    if (now > 11) {
      $("#input-field-3").addClass("past");
    } else if (now >= 11 && now < 12) {
      $("#input-field-3").addClass("present");
    } else if (now < 11) {
      $("#input-field-3").addClass("future");
    }

    if (now > 12) {
      $("#input-field-4").addClass("past");
    } else if (now >= 12 && now < 13) {
      $("#input-field-4").addClass("present");
    } else if (now < 12) {
      $("#input-field-4").addClass("future");
    }

    if (now > 13) {
      $("#input-field-5").addClass("past");
    } else if (now >= 13 && now < 14) {
      $("#input-field-5").addClass("present");
    } else if (now < 13) {
      $("#input-field-5").addClass("future");
    }

    if (now > 14) {
      $("#input-field-6").addClass("past");
    } else if (now >= 14 && now < 15) {
      $("#input-field-6").addClass("present");
    } else if (now < 14) {
      $("#input-field-6").addClass("future");
    }

    if (now > 15) {
      $("#input-field-7").addClass("past");
    } else if (now >= 15 && now < 16) {
      $("#input-field-7").addClass("present");
    } else if (now < 15) {
      $("#input-field-7").addClass("future");
    }

    if (now > 16) {
      $("#input-field-8").addClass("past");
    } else if (now >= 16 && now < 17) {
      $("#input-field-8").addClass("present");
    } else if (now < 16) {
      $("#input-field-8").addClass("future");
    }

    if (now > 17) {
      $("#input-field-9").addClass("past");
    } else if (now >= 17 && now < 18) {
      $("#input-field-9").addClass("present");
    } else if (now < 17) {
      $("#input-field-9").addClass("future");
    }

  });

}
simpleCalendar();