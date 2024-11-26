window.onload = function () {
  //基本运算
  document.getElementById("btn_calculator").onclick = function () {
    var arr = document.getElementById("calculator").value;
    try {
      var result = eval(arr);
      document.getElementById("calculator_result").textContent =
        "答案：" + result;
    } catch (e) {
      document.getElementById("calculator_result").textContent = "请重新输入！";
    }
  };
  //三角函数
  document.getElementById("btn_trig").onclick = function () {
    var arr = document.getElementById("trig").value;
    const str = /^(sin|cos|tan)\((-?\d+(\.\d+)?)\)$/i;
    const match = arr.match(str);
    if (match) {
      const name = match[1];
      const angle = parseFloat(match[2]);
      const radians = angle * (Math.PI / 180);
      var result;
      switch (name) {
        case "sin":
          result = Math.sin(radians);
          break;
        case "cos":
          result = Math.cos(radians);
          break;
        case "tan":
          result = Math.tan(radians);
          break;
        default:
          result = "未知函数";
          break;
      }
      document.getElementById("trig_result").textContent = "答案：" + result;
    } else {
      document.getElementById("calculator_result").textContent = "请重新输入！";
    }
  };
  //换算成km
  document.getElementById("btn_unit_km").onclick = function () {
    const strUnit1 = /^(\d+(\.\d+)?)(km|m|cm|dm|mm)$/i;
    const arrUnit1 = document.getElementById("unit").value;
    console.log(arrUnit1);
    const match1 = arrUnit1.match(strUnit1);
    console.log(match1);
    if (match1) {
      const value = parseFloat(match1[1]);
      const unit = match1[3];
      var result;
      switch (unit) {
        case "km":
          result = value;
          document.getElementById("unit_result").textContent =
            "答案：" + result + "km";
          break;
        case "m":
          result = value / 1000;
          document.getElementById("unit_result").textContent =
            "答案：" + result + "km";
          break;
        case "dm":
          result = value / 10000;
          document.getElementById("unit_result").textContent =
            "答案：" + result + "km";
          break;
        case "cm":
          result = value / 10000;
          document.getElementById("unit_result").textContent =
            "答案：" + result + "km";
          break;
        case "mm":
          result = value / 1000000;
          document.getElementById("unit_result").textContent =
            "答案：" + result + "km";
          break;
      }
    } else {
      document.getElementById("calculator_result").textContent = "请重新输入！";
    }
    //换算成m
    document.getElementById("btn_unit_m").onclick = function () {
      const strUnit2 = /^(\d+(\.\d+)?)(km|m|cm|dm|mm)$/i;
      const arrUnit2 = document.getElementById("unit").value;
      console.log(arrUnit2);
      const match2 = arrUnit2.match(strUnit2);
      console.log(match2);
      if (match2) {
        const value = parseFloat(match2[1]);
        const unit = match2[3];
        var result;
        switch (unit) {
          case "km":
            result = value * 1000;
            document.getElementById("unit_result").textContent =
              "答案：" + result + "m";
            break;
          case "m":
            result = value;
            document.getElementById("unit_result").textContent =
              "答案：" + result + "m";
            break;
          case "dm":
            result = value / 10;
            document.getElementById("unit_result").textContent =
              "答案：" + result + "m";
            break;
          case "cm":
            result = value / 100;
            document.getElementById("unit_result").textContent =
              "答案：" + result + "m";
            break;
          case "mm":
            result = value / 1000;
            document.getElementById("unit_result").textContent =
              "答案：" + result + "m";
            break;
        }
      } else {
        document.getElementById("calculator_result").textContent =
          "请重新输入！";
      }
    };
    //换算成cm
    document.getElementById("btn_unit_cm").onclick = function () {
      const strUnit3 = /^(\d+(\.\d+)?)(km|m|cm|dm|mm)$/i;
      const arrUnit3 = document.getElementById("unit").value;
      console.log(arrUnit3);
      const match3 = arrUnit3.match(strUnit3);
      console.log(match3);
      if (match3) {
        const value = parseFloat(match3[1]);
        const unit = match3[3];
        var result;
        switch (unit) {
          case "km":
            result = value * 1000;
            document.getElementById("unit_result").textContent =
              "答案：" + result + "cm";
            break;
          case "m":
            result = value;
            document.getElementById("unit_result").textContent =
              "答案：" + result + "cm";
            break;
          case "dm":
            result = value / 10;
            document.getElementById("unit_result").textContent =
              "答案：" + result + "cm";
            break;
          case "cm":
            result = value / 100;
            document.getElementById("unit_result").textContent =
              "答案：" + result + "cm";
            break;
          case "mm":
            result = value / 1000;
            document.getElementById("unit_result").textContent =
              "答案：" + result + "cm";
            break;
        }
      } else {
        document.getElementById("calculator_result").textContent =
          "请重新输入！";
      }
    };
    //换算成dm
    document.getElementById("btn_unit_dm").onclick = function () {
      const strUnit4 = /^(\d+(\.\d+)?)(km|m|cm|dm|mm)$/i;
      const arrUnit4 = document.getElementById("unit").value;
      console.log(arrUnit4);
      const match4 = arrUnit.match(strUnit4);
      console.log(match4);
      if (match4) {
        const value = parseFloat(match4[1]);
        const unit = match4[3];
        var result;
        switch (unit) {
          case "km":
            result = value * 10000;
            document.getElementById("unit_result").textContent =
              "答案：" + result + "dm";
            break;
          case "m":
            result = value * 10;
            document.getElementById("unit_result").textContent =
              "答案：" + result + "dm";
            break;
          case "dm":
            result = value;
            document.getElementById("unit_result").textContent =
              "答案：" + result + "dm";
            break;
          case "cm":
            result = value / 10;
            document.getElementById("unit_result").textContent =
              "答案：" + result + "dm";
            break;
          case "mm":
            result = value / 100;
            document.getElementById("unit_result").textContent =
              "答案：" + result + "dm";
            break;
        }
      } else {
        document.getElementById("calculator_result").textContent =
          "请重新输入！";
      }
    };
    //换算成mm
    document.getElementById("btn_unit_mm").onclick = function () {
      const strUnit5 = /^(\d+(\.\d+)?)(km|m|cm|dm|mm)$/i;
      const arrUnit5 = document.getElementById("unit").value;
      console.log(arrUnit5);
      const match5 = arrUnit5.match(strUnit5);
      console.log(match5);
      if (match5) {
        const value = parseFloat(match5[1]);
        const unit = match5[3];
        var result;
        switch (unit) {
          case "km":
            result = value * 1000000;
            document.getElementById("unit_result").textContent =
              "答案：" + result + "mm";
            break;
          case "m":
            result = value * 1000;
            document.getElementById("unit_result").textContent =
              "答案：" + result + "mm";
            break;
          case "dm":
            result = value * 100;
            document.getElementById("unit_result").textContent =
              "答案：" + result + "mm";
            break;
          case "cm":
            result = value * 10;
            document.getElementById("unit_result").textContent =
              "答案：" + result + "mm";
            break;
          case "mm":
            result = value;
            document.getElementById("unit_result").textContent =
              "答案：" + result + "mm";
            break;
        }
      } else {
        document.getElementById("calculator_result").textContent =
          "请重新输入！";
      }
    };
  };
};
