function sum() {
  let toanEl = document.getElementById("toan").value;
  let lyEl = document.getElementById("ly").value;
  let hoaEl = document.getElementById("hoa").value;
  let khuvucEl = document.getElementById("khuvuc").value;
  let doiTuongEl = document.getElementById("doituong").value;
  if (toanEl === "0" || hoaEl === "0" || lyEl === "0") {
    document.getElementById("result").innerText = "Fall";
    return;
  }
  let bonusKhuVuc = 0;
  if (khuvucEl === "A") {
    bonusKhuVuc = 2;
  } else if (khuvucEl === "B") {
    bonusKhuVuc = 1;
  } else if (khuvucEl === "C") {
    bonusKhuVuc = 0.5;
  }

  let bonusDoiTung = 0;
  if (doiTuongEl === "1") {
    bonusDoiTung = 2.5;
  } else if (doiTuongEl === "2") {
    bonusDoiTung = 1.5;
  } else if (doiTuongEl === "3") {
    bonusDoiTung = 0.5;
  }
  let total =
    parseFloat(toanEl) +
    parseFloat(lyEl) +
    parseFloat(hoaEl) +
    bonusKhuVuc +
    bonusDoiTung;

  document.getElementById("result").innerText = total / 3;
}

function cashForPrice(kw, pricePerKw) {
  return kw * pricePerKw;
}

function tinhtien(kw) {
  switch (true) {
    case kw <= 50: {
      return cashForPrice(kw, 500);
    }
    case kw <= 100: {
      return cashForPrice(50, 500) + cashForPrice(kw - 50, 650);
    }
    case kw <= 200: {
      return (
        cashForPrice(50, 500) +
        cashForPrice(50, 650) +
        cashForPrice(kw - 100, 850)
      );
    }
    case kw <= 350: {
      return (
        cashForPrice(50, 500) +
        cashForPrice(50, 650) +
        cashForPrice(100, 850) +
        cashForPrice(kw - 200, 1100)
      );
    }
    case kw > 350: {
      return (
        cashForPrice(50, 500) +
        cashForPrice(50, 650) +
        cashForPrice(100, 850) +
        cashForPrice(150, 1100) +
        cashForPrice(kw - 350, 1300)
      );
    }
  }
}
function totalcash() {
  let kwEl = document.getElementById("kwdien").value; // kwEl string
  let total = tinhtien(+kwEl);
  document.getElementById("result2").innerText = total;
}
