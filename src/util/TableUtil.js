export const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

export const getHeaderData = (invoice) => {
  const headerData = [];
  const project = invoice.customerInfo.project;
  const email = invoice.customerInfo.email;

  if (project && project.trim().length !== 0) {
    headerData.push(['Project Name', project]);
  }

  headerData.push(['Customer Name', invoice.customerInfo.name || '']);
  headerData.push(['Phone #', invoice.customerInfo.phoneNum || '' ]);

  if (email && email.trim().length !== 0) {
    headerData.push(['E-Mail Address', email]);
  }

  headerData.push(['Address', invoice.customerInfo.address || '' ]);
  headerData.push(['Date', getFormattedDate()]);

  return headerData;
}

export const getFormattedDate = (fileName = false) => {
  const now = new Date();

  if (fileName) {
    return `${now.getMonth() + 1}-${now.getDate()}-${now.getFullYear()}`
  } else {
    return `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`
  }
}

export const getInvoiceBody = (lines) => {
  const body = [];
  let total = 0;
  lines.forEach((line, index) => {
    total += line.count * line.cost;
    body.push([
      { content: index + 1, styles: { halign: 'left' } },
      line.desc,
      { content: line.count, styles: { halign: 'center' } },
      { content: formatter.format(line.cost), styles: { halign: 'right' } },
      { content: formatter.format(line.count * line.cost), styles: { halign: 'right' } },
    ]);
  });

  body.push([
    { content: 'TOTAL', colSpan: 4, styles: { halign: 'center', fontStyle: 'bold' }},
    { content: formatter.format(total), styles: { halign: 'right' } }
  ]);

  return body;
}
