import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./index"

describe('Counter Tests', () => {
    let increaseBtn,decreaseBtn,count;
    beforeEach(()=>{
        render(<Counter />);
        increaseBtn = screen.getByText("Increase");
        decreaseBtn = screen.getByText("Decrease");
        count = screen.getByText("0");
    })

    beforeAll(()=>{
        console.log("once before all")
    })

    test("increase btn", () => {

        // render(<Counter />);
        // const count = screen.getByText("0");
        // const increaseBtn = screen.getByText("Increase");

        userEvent.click(increaseBtn);
        expect(count).toHaveTextContent("1");
    })
    test("decrease btn", () => {

        // render(<Counter />);
        // const count = screen.getByText("0");
        // const DecreaseBtn = screen.getByText("Decrease");

        userEvent.click(decreaseBtn);
        expect(count).toHaveTextContent("-1");
    })
})

