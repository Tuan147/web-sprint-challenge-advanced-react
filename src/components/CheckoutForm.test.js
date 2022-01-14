import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", () => {
    render( <CheckoutForm />);

    const firstName = screen.getByLabelText(/First Name:/i);
    userEvent.type(firstName, "Tuan");

    const lastName = screen.getByLabelText(/Last Name:/i);
    userEvent.type(lastName, "Nguyen");

    const address = screen.getByLabelText(/Address:/i);
    userEvent.type(address, "3182 Nemo Drive");

    const city = screen.getByLabelText(/City:/i);
    userEvent.type(city, "Orlando");

    const state = screen.getByLabelText(/State:/i);
    userEvent.type(state, "Florida");

    const zip = screen.getByLabelText(/Zip:/i);
    userEvent.type(zip, "32402");

    const button = screen.getByRole("button");
    userEvent.click(button);

    const successMessage = screen.getAllByTestId('successMessage');
        expect(successMessage);

    waitFor(() => {
        const firstNameInput = screen.queryByTestId('Tuan')
        expect(firstNameInput).toBeVisible();

        const lastNameInput = screen.queryByTestId('Nguyen')
        expect(lastNameInput).toBeVisible();

        const addressInput = screen.queryByTestId('3182 Nemo Drive')
        expect(addressInput).toBeVisible();

        const cityInput = screen.queryByTestId('Orlando')
        expect(cityInput).toBeVisible();

        const stateInput = screen.queryByTestId('Florida')
        expect(stateInput).toBeVisible();

        const zipInput = screen.queryByTestId('32402')
        expect(zipInput).toBeVisible();

        const showSuccessMessage = screen.queryByTestId('successMessage');
            expect(showSuccessMessage).toBeVisible();
    })
    
});
