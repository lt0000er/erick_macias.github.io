/// ORDENACIÓN DE TRES NÚMEROS
//Construir un programa que pida por pantalla 3 números y luego
//diga cuál es el mayor, el del medio y el menor de los números
//ingresados.


var n1,n2,n3,e,mayor;
n1 = parseInt(prompt("Numero 1")); 
n2 = parseInt(prompt("Numero 2")); 
n3 = parseInt(prompt("Numero 3")); 

if (n1 > n2) {
    e = n1;
}else {
   e = n2; 
}

if (e > n3) {
      mayor = e;
}else{
    mayor = n3;
}

if (e  <>= n1,n2,n3) {
    medio = e;
}else{
  medio = n3;
}

if (e < n3) {
    menor = e;
}else{
  menor = n3;
}
 
document.write("el mayor es "+mayor);
document.write("el del medio  es "+-medio);
document.write("el mayor es "-menor);


//2 AÑO BICIESTO
//Construir un programa que pida un año y luego determine si el
//año es bisiesto o no. Tenga en cuenta que los años bisiestos son
//los números múltiplos de 4, pero que no son múltiplos de 100 y si
//son múltiplos de 100 y múltiplos de 400 sí son bisiestos.

year = 1970 #el year que queremos comprobar

if year % 4 != 0: #no divisible entre 4
	print("No es bisiesto");
elif year % 4 == 0 and year % 100 != 0: #divisible entre 4 y no entre 100 o 400
	print("Es bisiesto");
elif year % 4 == 0 and year % 100 == 0 and year % 400 != 0: #divisible entre 4 y 10 y no entre 400
	print("No es bisiesto");
elif year % 4 == 0 and year % 100 == 0 and year % 400 == 0: #divisible entre 4, 100 y 400
	print("Es bisiesto");

    document.write("el year biciesto  es "biciesto);

    ///intente hacerlo asi tambien no se si este bien 


    year = 1996 el year que queremos comprobar

if not year % 4:
	if not year % 100:     # divisible entre 4 y 100
		if not year % 400:  # divisible entre 4, 100 y 400
			print("Es bisiesto");
		else:              # divisible entre 4 y 100 y no entre 400
			print("No es bisiesto");
	else:                 # divisible  entre 4 y no entre 100
		print("Es bisiesto");
else:                    # no divisible entre 4
	print("No es bisiesto");


    year = 2000

if year % 4 == 0 and (year % 100 != 0 or year % 400 == 0):
	print("Es bisiesto")
else:
	print("No es bisiesto");


   // 3 DESCUENTOS
//Un almacén de escritorios hace los siguientes descuentos: si el
//cliente compramenos de 5 unidadesse le da un descuento del 10%
//sobre la compra;si el número de unidades es mayor o igual a cinco,
//pero menos de 10 se le otorga un
//20% y, si son 10 o más se le da un 40%.

int unidades;
float total;

/// pedimos el numero de unidades
cout << "Ingrese el numero de unidades: ";
cin >> unidades;

/// Calculamos el total a pagar sin descuento
total = unidades*800000;

/// validamos que la cantidad de unidades sea mayor que cero
if( unidades > 0 )
{
    if( unidades < 5 )
    {
        cout << "El total a pagar es de: " << total - ( total * 10% );
    }
    if( unidades>=5 && unidades<10 )
    {
        cout << "El total a pagar es de: " << total - ( total * 0.2 );
    }
    if( unidades >= 10 )
    {
        cout << "El total a pagar es de: " << total - ( total * 40% );
    }
}else{
    cout << "Ingrese un numero valido de unidades.";
}
return 0;
}
