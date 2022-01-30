import React from 'react';

import { Alert, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { formatter } from '../../../util/TableUtil';

const MONEY_REGEX = /[0-9]*\.?[0-9]?[0-9]?/;

export const LineInput = ({ addLine, size }) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState([]);

  const setValue = (e, field) => {
    setErrors([]);

    let value = e.target.value;

    if (field === 'count' || field === 'cost') {
      const regVal = value.trim().match(MONEY_REGEX);

      if (regVal === null || regVal[0] === '') {
        value = values[field];
      } else {
        value = regVal[0];
      }
    }
    setValues({
      ...values,
      [field]: value,
    });
  };

  const add = () => {
    const currentVals = Object.values(values);
    const needsValues = currentVals.some(val => val.trim() === '');
    if (currentVals.length < 3 || needsValues) {
      setErrors(['All values are required']);
      return;
    }
    addLine(values);
    setValues({});
  }

  const total = formatter.format(values.count * values.cost);

  return (
    <React.Fragment>
      {errors.length !== 0 &&
        <tr>
          <td colSpan={6}>
              {errors.map((error, index) => <Alert variant="warning" key={index}>{error}</Alert>)}
          </td>
        </tr>
      }
      <tr>
        <td className="align-middle" style={{ width: '5%' }}>{size + 1}</td>
        <td style={{ width: '50%' }}>
          <Form.Control type="text"
                        onChange={(e) => { setValue(e, 'desc')}}
                        value={values.desc || ''} />
        </td>
        <td style={{ width: '10%' }}>
          <Form.Control type="text"
                        onChange={(e) => { setValue(e, 'count')}}
                        value={values.count || ''} />
        </td>
        <td style={{ width: '10%' }}>
          <Form.Control type="text"
                        onChange={(e) => { setValue(e, 'cost')}}
                        value={values.cost || ''} />
        </td>
        <td className="text-end" style={{ width: '10%' }}>
          {total === '$NaN' ? '$0.00' : total}
        </td>
        <td className="text-center" style={{ width: '10%' }}>
          <Button size="sm" onClick={add}>+</Button>
        </td>
      </tr>
    </React.Fragment>
  );
};
