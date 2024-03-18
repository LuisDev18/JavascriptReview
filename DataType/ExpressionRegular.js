//Para buscar un caracter o palabra de una cadena usamos: /cadena/

//Para representar cualquier caracter incluido caracteres especiales y espacios se ua el ".":    /./

//Para buscar todos las palabras que tengan una "e" o "i" luego de la letra P: /P[ei]/ Ejemplo: Pelicano, Piano


//Para buscar palabras que no tengan un "e" o "i" luego de la letra P: /P[^ei]/

//Para buscar rango de letras:  /[a-z]/  Para rango de numeros: /[0-9]/

//Repeticiones operadores: *,+,?
//Para indicar que un caracter no coincide o puede coincidir muchas veces: "*" : /Pe*r/  Ejemplo: Per Pzr Pxr Plr

//Para indicar que un caracter puede ocurrir una o mas veces se usa : "+" al final: /be+r/ Ejemplo: beer ber beeeeeeeer

//Para indicar que un caracter es opcional usamos: "?": Ejemplo /beru?n/ : Ejemplo: berun berzn berln

//Para indicar el numero de repeticiones que queremos de un caracter : usamos {caracter}: /b{e}r/ Ejemplo: ber correcto- beer incorrecto

//Para indicar repeticiones de un rango de veces: /be{2,3}r/ indica q la letra e puede ocurrir 2 a 3 veces.


//Agrupamiento
//Para agrupar una expresion: /(ha)/
//Para referenciar un grupo: \1 1 representa el orden de agrupamiento

//Caracter Escape \ : Para seleccionar uno de estos caracteres { } [ ] / \ + * . $^ | ?   Ejemplo: /(\*|\,)/
