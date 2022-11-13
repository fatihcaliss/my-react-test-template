import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./index"

describe("Todo testleri",()=> {
    let button,input
    beforeEach(()=>{
        render(<Todo/>);

        button = screen.getByText("Add");
        input = screen.getByLabelText("Text")

    });

    test("default item render test",()=>{
        const items = screen.getAllByText(/Item/i);
        expect(items.length).toEqual(3);
    });
    test("input and button should be in document",()=>{
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        
    });
    test("input string should add to array test",()=>{
        const name = "Fatih"
        userEvent.type(input,name);

        userEvent.click(button);

        expect(screen.getByText(name)).toBeInTheDocument()
    })
})