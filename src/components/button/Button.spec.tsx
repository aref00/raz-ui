import React from "react";
import '@testing-library/jest-dom'
import {render, screen } from '@testing-library/react'

import Button from "./Button";

describe("Running Test for Tayeh Button", () => {

  test("Check Button Disabled", () => {
    render(<Button disabled>Tayeh button</Button>)
    expect(screen.getByRole('button',{name:"Tayeh button"})).toBeDisabled();
  });

});