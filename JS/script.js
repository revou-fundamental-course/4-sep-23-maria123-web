
    /* SCRIPT UNTUK LUAS PERSEGI */

        function square(number) {
        return number * number;
        }

        $(document).ready(function() {
        $("#calculate_luas").click(function() {
            var number = $("#inputLuas").val();
            var result = square(number);
            $("#result").html(result);
        });
        });
/* ------------------------------------------------------------------------- */

    /* SCRIPT UNTUK KELILING PERSEGI */

        function square2(number1) {
        return number1 * 4;
        }

        $(document).ready(function() {
        $("#calculate_keliling").click(function() {
            var number1 = $("#inputKel").val();
            var result_kel = square2(number1);
            $("#result_keliling").html(result_kel);
        });
        });
/* --------------------------------------------------------------- */

    /* SCRIPT UNTUK RESET ANGKA LUAS */

    // Ini adalah fungsi untuk reset input
    function resetInputLuas(input) {
        // Set nilai input ke kosong
        input.value = "";
        var emptyLuas = "0";
        $("#result").html(emptyLuas);
    }
/* ----------------------------------------------------------- */

    /* SCRIPT UNTUK RESET ANGKA KELILING */

    // Ini adalah fungsi untuk reset input
    function resetInputKel(input1) {
        // Set nilai input ke kosong
        input1.value = "";
        var emptyKel = "0";
        $("#result_keliling").html(emptyKel);
    }
/* ------------------------------------------------------------ */