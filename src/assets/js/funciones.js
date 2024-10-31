$(document).on("click", ".close", function() {
    $("#modal").modal('hide');
});

function mostrarMenu() {
    var body = document.body;
    body.classList.add("g-sidenav-pinned");
    body.classList.add("loco");
}

function ocultarMenu() {
    var body = document.body;
    body.classList.remove("g-sidenav-pinned");
    body.classList.remove("loco");
}

function menuEstatus() {
    var body = document.body;
    var hasClase2 = body.classList.contains('g-sidenav-pinned');
    var hasClase2 = body.classList.contains('loco');
    return hasClase2;
}

function modal(accion) {
    $("#modal").modal(accion);
}

function convertToCSV(objArray) {
    const array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
    let str = "";

    for (let i = 0; i < array.length; i++) {
        let line = "";
        for (let index in array[i]) {
            if (line != "") line += ",";

            line += array[i][index];
        }

        str += line + "\r\n";
    }

    return str;
}

function exportCSVFile(headers, items, fileName) {
    if (headers) {
        items.unshift(headers);
    }

    const jsonObject = JSON.stringify(items);

    const csv = convertToCSV(jsonObject);

    const exportName = fileName + ".csv" || "export.csv";

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, exportName);
    } else {
        const link = document.createElement("a");
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportName);
            link.style.visibility = "hidden";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

function base64(file) {
    var fr = new FileReader();
    fr.readAsDataURL(file);
    console.log(fr);
    fr.addEventListener("load", function(e) {
        localStorage.setItem("codificacion", e.target.result);
    });
}