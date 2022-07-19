
function generate(){
    const doc = new jsPDF({});
    doc.text("Hello world!");
    doc.save("two-by-four.pdf");
}
