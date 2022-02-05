import React from "react";
import { render, fireEvent } from '@testing-library/react';

test("the passwords should match",()=>{
    const password=['ren']
    const confirmpassword=['ren']
    expect(password).toEqual(confirmpassword);
})