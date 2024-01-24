


let input = prompt("enter 2 or 3 table");






if (input <= 5) {
document.write("This is table of ", input);



}
document.write("<br>")







if (input == 2) {
    for (let a = 1; a <= 10; a++) {
        document.write(` <br> 2 x ${a} = ${2 * a} `);


    }

}


if (input == 3) {
    for (let c = 1; c <= 10; c++) {
        document.write(` <br> 3 x ${c} = ${3 * c} `);


    }


}

if (input == 4) {
    for (let b = 1; b <= 10; b++) {
        document.write(` <br> 4 x ${b} = ${4 * b} `);


    }


}

if (input == 5) {
    for (let d = 1; d <= 10; d++) {
        document.write(` <br> 5 x ${d} = ${5 * d} `);


    }


}


if (input > 5) {

    alert("not available");
    document.write("Not above then table of 5 <br> Thanks!");


}




