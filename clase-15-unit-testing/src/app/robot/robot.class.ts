export class Robot {
    piloto: string;
    energia: number = 100;

    poderes: string[] = ['volar', 'rayos laser', 'super fuerza'];

    constructor(piloto:string){
        this.piloto = piloto
    };

    iniciarSistema(){
        this.saludar();
    }

    saludar(){
        console.log("Bienvenido "+ this.piloto);
    }
}