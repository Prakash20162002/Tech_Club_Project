$(document).ready(function () {
    $('#infoForm').on('submit', function (event) {
        event.preventDefault();

        const info = $('#info').val();

        // Generate QR code
        $('#qrcode').empty();
        const qrcode = new QRCode(document.getElementById("qrcode"), {
            text: info,
            width: 128,
            height: 128,
        });

        // Generate PDF
        const generatePDF = () => {
            const pdf = new jsPDF();
            pdf.text(20, 20, 'Information:');
            pdf.text(20, 30, info);
            const qrCanvas = document.querySelector('#qrcode canvas');
            if (qrCanvas) {
                pdf.addImage(qrCanvas.toDataURL('image/png'), 'PNG', 20, 40, 50, 50);
            }
            pdf.save('info.pdf');
        };

        // Wait for QR code to be generated before creating PDF
        setTimeout(generatePDF, 1000);
    });
});
