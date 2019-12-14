import { Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { TransactionInformation, PdfTransactionInformation } from 'src/app/config/interfaces/user.interface';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }
  generatePdf() {
    const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    pdfMake.createPdf(documentDefinition).open();
    // pdfMake.createPdf(documentDefinition).open({}, window); same window
   }

   generatePdfForTransaction(transactions: PdfTransactionInformation[]) {
    const documentDefinition = this.getTransactionDocumentDefinition(transactions);
    pdfMake.createPdf(documentDefinition).download();

  }

  getTransactionDocumentDefinition(transactions: PdfTransactionInformation[]) {
      return {
        content: [
          {
            text: 'Transaction Report',
            bold: true,
            fontSize: 20,
            alignment: 'center',
            margin: [0, 0, 0, 20]
          },



          {
            text: 'Transaction',
            style: 'header'
          },
          this.getEducationObject(transactions),

        ],

          styles: {
            header: {
              fontSize: 18,
              bold: true,
              margin: [0, 20, 0, 10],
              decoration: 'underline'
            },
            tableHeader: {
              bold: true,
            }
          }
      };
    }

    getEducationObject(transactions: PdfTransactionInformation[]) {
        //  console.log(educations);

      return {
        table: {
          widths: ['*', '*', '*', '*', '*', '*'],
          body: [
            [{
              text: 'TransactionId',
              style: 'tableHeader'
            },
            {
              text: 'Type',
              style: 'tableHeader'
            },
            {
              text: 'Category',
              style: 'tableHeader'
            },
            {
              text: 'SubCategory',
              style: 'tableHeader'
            },
            {
              text: 'Amount',
              style: 'tableHeader'
            },
            {
              text: 'TranDate',
              style: 'tableHeader'
            },
            ],
            ...transactions.map(transaction => {
              // tslint:disable-next-line: max-line-length
              return [transaction.transactionId, transaction.transactionType, transaction.categoryName, transaction.subCategoryName, transaction.amount, transaction.dateOfTransactionStr];
            })
          ]
        }
      };
    }
}
