function myTest(){
    //declar local o variabila
    var masina;
    masina = 'Ferrari';
    console.log('Masina mea noua este: '+masina);
}
console.log('Masina ta este: '+masina);
{
    //declar global o variabila chiar daca se afla intre { }
    var culoare = 'rosie';
    console.log('Masina mea noua este: '+culoare);

}
console.log('Masina ta este: '+culoare);
{
    //declar local o variabila  intre { }
    let model = '125 s';
    console.log('Modelul masinei mele este: '+model);

}
console.log('Modelul masinei tale este: '+model);