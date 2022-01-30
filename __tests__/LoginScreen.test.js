import React from "react";
import { render, fireEvent } from '@testing-library/react';


const validateInput=(str="")=> str.includes("@")
describe("Login", ()=>{

  test('validate function should pass on corrrect input', () => {
    const text ="test@gmail.com";
    expect(validateInput(text)).toBe(true);
   
  }); 

  test('validate function should pass on corrrect input', () => {
  const text = "mikasa@gmail.com";
  expect(validateInput(text)).toBe(true);
  })

  
})