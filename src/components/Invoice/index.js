import { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { Header } from './Header';
import { InvoiceHeader } from './InvoiceHeader';
import { LineInput } from './LineInput';

const Invoice = () => {
  const [lines, setLines] = useState([]);

  const addLine = (line) => {
    setLines([...lines, line])
  }

  return (
    <Form>
      <InvoiceHeader />
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
                  ${line.count * line.cost}
                </td>
                <td className="text-center">
                  <Button size="sm" variant="danger">X</Button>
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