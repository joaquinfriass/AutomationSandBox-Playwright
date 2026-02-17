import {test, Browser, Page, expect} from '@playwright/test';
import { AutomationSandboxPage } from '../pages/AutomationSandboxPage';

(async () => {
let browser: Browser;
let page: Page;


test.describe('Pruebas de Automatización de la página de Automation Sandbox FRT', () => {

    
    
        //Prueba de Navegación a la página de Automation Sandbox FRT
        test('Navegar a la página de Automation Sandbox FRT', async ({page}) => {
        await test.step('Navegar a la página de Automation Sandbox FRT', async () => {
        await  page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
    })
     //Verificar que la página se ha cargado correctamente
    await test.step('Verificar que la página se ha cargado correctamente', async () => {
        await expect(page.getByRole('heading', {name: 'Free Range Testers Sandbox 🤖'})).toBeVisible();
    })
    });
        //Verificar que el link www.freerangetester.com abra una pestaña a la página de Free Range Tester
        test('Verificar que el link www.freerangetester.com abra una pestaña a la página de Free Range Tester', async ({page}) => {

            //Navegar a la página de Automation Sandbox FRT
            await  page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');

            await test.step('Verifico que el link www.freerangetester.com sea visible', async () => {
            await expect(page.getByRole('link', { name: 'www.freerangetesters.com' })).toBeVisible();
            });

            await test.step('Hago click en el link www.freerangetester.com', async () => {
            const automationSandboxPage = new AutomationSandboxPage(page);
            const [newPage] = await Promise.all([
                page.waitForEvent('popup'),
                automationSandboxPage.FRTLink.click()
            ]);

            await newPage.waitForLoadState();
            await expect(newPage).toHaveURL('https://www.freerangetesters.com/');
            await expect(newPage).toHaveTitle('Free Range Testers');
        });

    });
        //Verificar el botón con ID dinámico y su elemento oculto
        test('Verificar el botón con ID dinámico y su elemento oculto', async ({page}) => {
        await  page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        const automationSandboxPage = new AutomationSandboxPage(page);
        await test.step('Hacer click en el botón con ID dinámico', async () => {
        await automationSandboxPage.botonDinamico.click();
        await expect(page.getByText("OMG, aparezco después de 3 segundos de haber hecho click en el botón 👻.")).toBeVisible();
        });
    });
        //Ingresar texto
        test('Ingresar texto en el campo de texto y verificar su valor', async ({page}) => {
        await  page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        const automationSandboxPage = new AutomationSandboxPage(page);    
        await test.step('Ingresar texto en el campo de texto', async () => {
        await automationSandboxPage.textboxAburrido.fill('¡Estoy aprendiendo a automatizar pruebas con Playwright!');
        await expect(automationSandboxPage.textboxAburrido).toHaveValue('¡Estoy aprendiendo a automatizar pruebas con Playwright!');
        });
    });
        //Verificar los Checkboxs
        test('Verificar el funcionamiento de los checkboxs', async ({page}) => {
        await  page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        const automationSandboxPage = new AutomationSandboxPage(page);

        await test.step('Seleccionar el checkbox de Pizza 🍕', async () => {
        await automationSandboxPage.checkboxPizza.check();
        await expect(automationSandboxPage.checkboxPizza).toBeChecked();
        });

        await test.step('Seleccionar el checkbox de Hamburguesa 🍔', async () => {
        await automationSandboxPage.checkboxHamburguesa.check();
        await expect(automationSandboxPage.checkboxHamburguesa).toBeChecked();
        });

        await test.step('Seleccionar el checkbox de Pasta 🍝', async () => {
        await automationSandboxPage.checkboxPasta.check();
        await expect(automationSandboxPage.checkboxPasta).toBeChecked();
        });

        await test.step('Seleccionar el checkbox de Helado 🍧', async () => {
        await automationSandboxPage.checkboxHelado.check();
        await expect(automationSandboxPage.checkboxHelado).toBeChecked();
        });

        await test.step('Seleccionar el checkbox de Torta 🍰', async () => {
        await automationSandboxPage.checkboxTorta.check();
        await expect(automationSandboxPage.checkboxTorta).toBeChecked();
        });

    });
        //Verificar los Radio Buttons
        test('Verificar el funcionamiento de los radio buttons', async ({page}) => {
        await  page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        const automationSandboxPage = new AutomationSandboxPage(page);

        //Verificar que al seleccionar un radio button, el otro se deseleccione automáticamente
        await test.step('Seleccionar el radio button "Si"', async () => {
        await automationSandboxPage.radioButtonSi.check();
        await expect(automationSandboxPage.radioButtonSi).toBeChecked();
        await expect(automationSandboxPage.radioButtonNo).not.toBeChecked();
        });

        //Verificar que al seleccionar el otro radio button, el primero se deseleccione automáticamente
        await test.step('Seleccionar el radio button "No"', async () => {
        await automationSandboxPage.radioButtonNo.check();
        await expect(automationSandboxPage.radioButtonNo).toBeChecked();
        await expect(automationSandboxPage.radioButtonSi).not.toBeChecked();
        });

    });
        //Verificar los Dropdowns de deportes
        test('Verificar el funcionamiento de los dropdowns de deportes', async ({page}) => {
        await  page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        const automationSandboxPage = new AutomationSandboxPage(page);

        await test.step('Seleccionar la opción "Tennis" del dropdown de deportes', async () => {
        await automationSandboxPage.dropdownSeleccionaUnDeporte.selectOption('Tennis');
        await expect(automationSandboxPage.dropdownSeleccionaUnDeporte).toHaveValue('Tennis');

        await test.step('Seleccionar la opción "Fútbol" del dropdown de deportes', async () => {
        await automationSandboxPage.dropdownSeleccionaUnDeporte.selectOption('Fútbol');
        await expect(automationSandboxPage.dropdownSeleccionaUnDeporte).toHaveValue('Fútbol');

        await test.step('Seleccionar la opción "Básquet" del dropdown de deportes', async () => {
        await automationSandboxPage.dropdownSeleccionaUnDeporte.selectOption('Basketball');
        await expect(automationSandboxPage.dropdownSeleccionaUnDeporte).toHaveValue('Basketball');
        });
        

});
});
    });
        //Verificar los Dopdowns deportes iterando
        test('Los items del dropdown son los esperados', async ({ page }) => {
            await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            })
            await test.step('Valido que la lista del dropdown contiene los deportes esperados', async () => {
                const deportes = ['Fútbol', 'Tennis', 'Basketball']

                for (let opcion of deportes) {
                    const element = await page.$(`select#formBasicSelect > option:is(:text("${opcion}"))`);
                    if (element) {
                        console.log(`La opción '${opcion}' está presente.`);
                    } else {
                        throw new Error(`La opción '${opcion}' no está presente.`);
                    }
                }

            })


        })
        //Verificar los Dropdowns de días de la semana
        test('Verificar el funcionamiento de los dropdowns de días de la semana', async ({page}) => {
        await  page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        const automationSandboxPage = new AutomationSandboxPage(page);

        await page.getByRole('button', { name: 'Día de la semana' }).click();
        await page.getByRole('link', { name: 'Lunes' }).click();
        await expect.soft(page).toHaveURL('https://thefreerangetester.github.io/sandbox-automation-testing/#/action-1', { timeout: 5000 });
        await page.getByRole('button', { name: 'Día de la semana' }).click();
        await page.getByRole('link', { name: 'Martes' }).click();
        await expect.soft(page).toHaveURL('https://thefreerangetester.github.io/sandbox-automation-testing/#/action-2', { timeout: 5000 });
        await page.getByRole('button', { name: 'Día de la semana' }).click();
        await page.getByRole('link', { name: 'Miércoles' }).click();
        await expect.soft(page).toHaveURL('https://thefreerangetester.github.io/sandbox-automation-testing/#/action-3', { timeout: 5000 });
        await page.getByRole('button', { name: 'Día de la semana' }).click();
        await page.getByRole('link', { name: 'Jueves' }).click();
        await expect.soft(page).toHaveURL('https://thefreerangetester.github.io/sandbox-automation-testing/#/action-1', { timeout: 5000 });
        await page.getByRole('button', { name: 'Día de la semana' }).click();
        await page.getByRole('link', { name: 'Viernes' }).click();
        await expect.soft(page).toHaveURL('https://thefreerangetester.github.io/sandbox-automation-testing/#/action-2', { timeout: 5000 });
        await page.getByRole('button', { name: 'Día de la semana' }).click();
        await page.getByRole('link', { name: 'Sábado' }).click();
        await expect.soft(page).toHaveURL('https://thefreerangetester.github.io/sandbox-automation-testing/#/action-3', { timeout: 5000 });
        await page.getByRole('button', { name: 'Día de la semana' }).click();
        await page.getByRole('link', { name: 'Domingo' }).click();
        await expect.soft(page).toHaveURL('https://thefreerangetester.github.io/sandbox-automation-testing/#/action-3', { timeout: 5000 });

    });
        //Verificar el Popup
        test('Verificar el funcionamiento del popup', async ({page}) => {
        await  page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');

        await test.step('Hacer click en el botón "Mostrar Popup"', async () => {
        await page.getByRole('button', { name: 'Mostrar Popup' }).click();
        await expect(page.getByText('¿Viste? ¡Apareció un Pop-up!')).toBeVisible();

        await test.step('Cerrar el popup', async () => {
        await page.getByRole('button', { name: 'Cerrar' }).click();
        await expect(page.getByText('Popup de ejemplo')).not.toBeVisible();
        });

        });
    });
        //Validar la tabla Estática
        test('Valido la columna Nombres de la tabla estática', async ({ page }) => {
            await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            })

            await test.step('Puedo validar los elementos para la columna Nombre de la tabla estática', async () => {
                const valoresColumnaNombres = await page.$$eval('h2:has-text("Tabla estática") + table tbody tr td:nth-child(2)', elements => elements.map(element => element.textContent));
                const nombresEsperados = ['Messi', 'Ronaldo', 'Mbappe'];
                //Saca una screen y la adjunta aunque el caso pase.
                await test.info().attach('screenshot', {
                    body: await page.screenshot(),
                    contentType: 'image/png',
                })
                expect(valoresColumnaNombres).toEqual(nombresEsperados);
            })

        })

    //Validar la tabla Dinámica
    test('Valido que todos los valores cambian en la tabla dinámica luego de un reload', async ({ page }) => {
            await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            })

            await test.step('Valido que los valores cambiaron al hacer un reload a la web', async () => {
                //Creamos un arreglo con todos los valores de la tabla dinámica
                const valoresTablaDinamica = await page.$$eval('h2:has-text("Tabla dinámica") + table tbody tr td', elements => elements.map(element => element.textContent));
                console.log(valoresTablaDinamica);

                //Hacemos una recarga para que cambien los valores
                await page.reload();

                //Creamos un segundo arreglo con los valores luego de la recarga
                const valoresPostReload = await page.$$eval('h2:has-text("Tabla dinámica") + table tbody tr td', elements => elements.map(element => element.textContent));
                console.log(valoresPostReload);

                //Validamos que todos los valores cambiaron para cada celda.
                expect(valoresTablaDinamica).not.toEqual(valoresPostReload);

            })


        })    
});

})();