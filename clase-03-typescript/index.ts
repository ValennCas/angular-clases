//TypeScript es un superset de JS que extiende su sintaxis.
//Transpilacion = traducir un codigo de un lenguaje a otro

/*
Ventajas
-> Extiende a Superset de JS
-> Tipado estricto y flexible
-> Mejora legibilidad de codigo
-> Nuevas caracteristicas */

console.log("Hello word desde TypeScript, actualizar!");

let edad = 22;
let nombre = "Matias";


let isDarkMode = true;
let algunaCosa;

function saludar(nombre:String):string{
    const saludo = `Hola ${nombre}`;
    console.log(saludar);
    return saludo;
}

saludar("Valentina");

let frutas = ['manzana', 'naranja','banana'];
let numeros = [1, 2,3];
let numeros_y_letras:(string | number)[] = ["Jose", "Veronica", 30, 10, "R"];

//Enum tipo de dato 

enum Roles{
    Administrador = 'admin',
    Usuario = 'user',
    Operador = 'operator'
}

// El enum puede ser usado como tipo de dato en cambio el Objeto no 

const RolesObj = {
    Administrador: 'admin',
    Usuario: 'user',
}

interface IUsuario{
    nombre: string;
    edad:number | undefined;
    //role: RolesObj; No es valido
    role: Roles | undefined;
    iniciarSesion: ()=> void;
}


class Usuario{
    nombre:string;
    private edad:number | undefined;
    role: Roles | undefined;

    // signo de pregunta define que puede ser undefined
    // las opcionales van al final (las que tienen ?)
    constructor(nombre:string, edad?:number, role?:Roles){
        this.nombre = nombre;
        this.edad = edad;
        this.role = role || Roles.Usuario;

    }

    get getNombre(){
        return this.nombre;
    };

    // se puede lanzar con juan.setNombre = "Juan cruz";
    set setNombre(nombre:string){
        this.nombre = nombre;
    }

    iniciarSesion(){
        console.log(`Sesion iniciada, edad = ${this.edad}`);
    }
}

let usuarios: IUsuario[] = [
    {
        nombre: "Pedro", 
        edad: 20, 
        role: Roles.Administrador, 
        iniciarSesion: ()=>{
        //alguna logica
        }
    }, 
    {
        nombre: "Nico", 
        edad:21, 
        role: Roles.Usuario, 
        iniciarSesion: ()=> {
        //alguna logica
        }
    }, 
]; // {nombre: string;}[];


// usuarios se puede mejorar con Objetos
const juan = new Usuario("Juan", 30, Roles.Administrador);
const pedro = new Usuario("Pedro", 20, Roles.Usuario);
const Maria = new Usuario("Maria", 20);
let usuarios_objetos:Usuario[] = [juan, pedro, Maria];

usuarios_objetos.forEach(usuario => {
    console.log(usuario.nombre);
});

// ? -> es por si no existe el usuario en la pos 0, si existe muestra el nombre
// sino undefined
console.log(usuarios_objetos[0]?.nombre);


function validarIsAdmin(role:string){
    return role === Roles.Administrador;
}
const user = {
    role: "user",
};

validarIsAdmin(user.role);


// TUPLAS
//Parecida a Python solo que aca son mutables en su contenido 
// pero no en su largo
let nombre_edad:[string, number] = ['Juan', 32]; 
nombre_edad[1] = 20;


// Se vuelve inmutable con el readonly
let nombre_edad_inmutable: readonly [string, number] = ['Juan', 32]; 
//nombre_edad[1] = 20;

console.log(nombre_edad);

interface PaginacionUsuarios {
    data: Usuario[];
    pagina: number;
    total: number;
    tieneSiguiente: boolean;
    tieneAnterios: boolean;
}

interface Producto{
    precio: number;
}

// generico
interface Paginacion<TipoData>{
    data: TipoData[];
    pagina: number;
    total: number;
    tieneSiguiente: boolean;
    tieneAnterior: boolean;
}

const myUserPagination: Paginacion<Usuario> = {
    pagina: 1,
    data: [juan, Maria, pedro],
    total: 10,
    tieneAnterior: false,
    tieneSiguiente: true,
}

const ProductosPagination: Paginacion<Producto> ={
    pagina: 1,
    data: [{precio: 1000}, {precio: 250}],
    total: 10,
    tieneAnterior: false,
    tieneSiguiente: true,
}

// interface PaginacionProductos{
//     data: Producto[]
//     pagina: number;
//     total: number;
//     tieneSiguiente: boolean;
//     tieneAnterios: boolean;
// }