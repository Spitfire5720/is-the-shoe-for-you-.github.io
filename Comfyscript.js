function getNumber() {
    var minNumber = 0; // The minimum number you want
    var maxNumber = 100; // The maximum number you want
    var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // Generates random number
    $('#myNumber').html(randomnumber); // Sets content of <div> to number
    return false; // Returns false just to tidy everything up
}