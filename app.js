const generatedPDF = async (name) =>{
    const {PDFDocument, rgb} = PDFLib;
    const exBytes = await fetch("./template.pdf").then((res) => {return res.arrayBuffer();});

};
