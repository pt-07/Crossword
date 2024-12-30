import React from 'react';
import { Formik, Form, Field } from 'formik';
import './App.css';

function App() {
  const handleSubmit = (values) => {
    console.log('Form values:', values);
    // You can add your API call here
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Customizable Crossword</h1>
        <Formik
          initialValues={{ theme: '', difficulty: '', size: '' }}
          onSubmit={handleSubmit}
        >
          <Form>
            <div>
              <label htmlFor="theme">Theme:</label>
              <Field id="theme" name="theme" type="text" />
            </div>
            <div>
              <label htmlFor="difficulty">Difficulty:</label>
              <Field id="difficulty" name="difficulty" type="text" />
            </div>
            <div>
              <label htmlFor="size">Size:</label>
              <Field id="size" name="size" type="text" />
            </div>
            <button type="submit">Generate Crossword</button>
          </Form>
        </Formik>
      </header>
    </div>
  );
}

export default App;