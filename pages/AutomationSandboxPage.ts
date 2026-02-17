//Se modela la página de Automation Sandbox FRT con el patrón Page Object Model (POM) para facilitar la interacción con los elementos de la página y mejorar la mantenibilidad del código de pruebas.
import {type Locator, type Page } from '@playwright/test';

export class AutomationSandboxPage {
    readonly page: Page
    readonly FRTLink : Locator;
    readonly botonDinamico: Locator;
    readonly textboxAburrido: Locator;
    readonly checkboxPizza: Locator;
    readonly checkboxHamburguesa: Locator
    readonly checkboxPasta: Locator
    readonly checkboxHelado: Locator
    readonly checkboxTorta: Locator
    readonly radioButtonSi: Locator
    readonly radioButtonNo: Locator
    readonly dropdownSeleccionaUnDeporte: Locator

    constructor(page: Page) {
        this.page = page;
        this.FRTLink = page.getByRole('link', { name: 'www.freerangetesters.com' });
        this.botonDinamico = page.getByRole('button', { name: 'Hacé click para generar un ID' })
        this.textboxAburrido = page.getByRole('textbox', { name: 'Un aburrido texto' })
        this.checkboxPizza = page.getByRole('checkbox', { name: 'Pizza 🍕' })
        this.checkboxHamburguesa = page.getByRole('checkbox', { name: 'Hamburguesa 🍔' });
        this.checkboxPasta = page.getByRole('checkbox', { name: 'Pasta 🍝' });
        this.checkboxHelado = page.getByRole('checkbox', { name: 'Helado 🍧' });
        this.checkboxTorta = page.getByRole('checkbox', { name: 'Torta 🍰' });
        this.radioButtonSi = page.getByRole('radio', { name: 'Si' })
        this.radioButtonNo = page.getByRole('radio', { name: 'No' });
        this.dropdownSeleccionaUnDeporte = page.getByLabel('Dropdown');
    }
}