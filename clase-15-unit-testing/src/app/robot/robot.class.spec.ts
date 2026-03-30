import { Robot } from "./robot.class";

//Agrupa casos de prueba
describe('Pruebas de la clase robot', () => {
    it("Robot debe asignar un piloto al instanciarse", () => {
        //Logica para evaluar que el expectation suceda
        const robot = new Robot("Martin");

        //Comprueba el resultado
        expect(robot.piloto).toBe('Martin');
    })

    it("Al instanciarse la energia debe ser igual 100", ()=>{
        const robot = new Robot("Lucas");
        expect(robot.energia).toBe(100);
    })

    it("Al saludar piloto debe mostrar un log en consola", ()=>{
        const robot = new Robot("Pedro");

        const spyOnConsole = spyOn(console, 'log');
        robot.saludar();
        expect(spyOnConsole).toHaveBeenCalled();
        //Console debe ser llamado dos veces
        //expect(spyOnConsole).toHaveBeenCalledTimes(2);
    });


    it('Al saludar debe mostra en consola "bienvenido {nombre}', () => {
        const robot = new Robot('Pedro');
        const spyOnSaludar = spyOn(console, 'log');
        robot.saludar();
        expect(spyOnSaludar).toHaveBeenCalledWith("Bienvenido Pedro");


    })


    it('Debe llamar a saludar al iniciarSistema', () => {
        const robot = new Robot('Pedro');
        const spyOnSaludar = spyOn(robot, 'saludar');
        robot.iniciarSistema();
        expect(spyOnSaludar).toHaveBeenCalled();
    });

    it('Debe tener los poderes de: "volar", "rayos laser", "super fuerza"', ()=> {
        const poderesEsperados = ['volar','rayos laser', 'super fuerza'];
        const robot = new Robot("Diego");

        expect(robot.poderes).toEqual(poderesEsperados);

    })


});