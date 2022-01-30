import { Button, Form, Table } from 'react-bootstrap';
import { Header } from './Header';
import { InvoiceHeader } from './InvoiceHeader';
import { LineInput } from './LineInput';
import { formatter } from '../../../util/TableUtil';

const Invoice = ({ invoice, setInvoice }) => {
  const { lines } = invoice

  const addLine = (line) => {
    setInvoice({
      ...invoice,
      lines: [...lines, line]
    });
  };

  const removeItem = (index) => {
    lines.splice(index, 1)
    setInvoice({
      ...invoice,
      lines,
    });
  }

  return (
    <Form>
      <InvoiceHeader invoice={invoice} setInvoice={setInvoice} />
      <br />
      <Table striped={true} bordered={true} hover={true}>
        <Header />
        <tbody>
          {lines.map((line, index) => {
            return (
              <tr key={index}>
                <td className="align-middle">
                  {index + 1}
                </td>
                <td className="align-middle">
                  {line.desc}
                </td>
                <td className="text-center align-middle">
                  {line.count}
                </td>
                <td className="text-end align-middle">
                  ${line.cost}
                </td>
                <td className="text-end align-middle">
                  {formatter.format(line.count * line.cost)}
                </td>
                <td className="text-center">
                  <Button size="sm" variant="danger" onClick={() => removeItem(index)}>X</Button>
                </td>
              </tr>
            );
          })}
          <LineInput addLine={addLine} size={lines.length} />
        </tbody>
      </Table>
      <br />
    </Form>
  )
}

export default Invoice;
