import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles'
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => { 
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleAddNumber = (number) => {
    console.log(number);
    console.log(currentNumber);
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      setCurrentNumber(String(Number(firstNumber) + Number(currentNumber)));
      setOperation('');
    }
  }

  const handleSubNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      setCurrentNumber(String(Number(firstNumber) - Number(currentNumber)));
    }
  }

  const handleMultNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    } else {
      setCurrentNumber(String(Number(firstNumber) * Number(currentNumber)));
    }
  }

  const handleDivNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      setCurrentNumber(String(Number(firstNumber) / Number(currentNumber)));
    }
  }

  const calculate = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleSubNumbers();
          break;
        case '*':
          handleMultNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        default: break;
      }
      setOperation('');
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="7" onClick={()=>handleAddNumber('7')} />
          <Button label="8" onClick={()=>handleAddNumber('8')} />
          <Button label="9" onClick={()=>handleAddNumber('9')} />
          <Button primary label="/" onClick={handleDivNumbers} variant="primary"/>
        </Row>
        <Row>
          <Button label="4" onClick={()=>handleAddNumber('4')} />
          <Button label="5" onClick={()=>handleAddNumber('5')} />
          <Button label="6" onClick={()=>handleAddNumber('6')} />
          <Button primary label="*" onClick={handleMultNumbers} variant="primary"/>
        </Row>
        <Row>
          <Button label="1" onClick={()=>handleAddNumber('1')} />
          <Button label="2" onClick={()=>handleAddNumber('2')} />
          <Button label="3" onClick={()=>handleAddNumber('3')} />
          <Button primary label="-" onClick={handleSubNumbers} variant="primary"/>
        </Row>
        <Row>
          <Button label="C" onClick={handleOnClear} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="=" onClick={calculate} />
          <Button label="+" onClick={handleSumNumbers} variant="primary"/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
