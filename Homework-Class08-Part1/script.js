function generateAnimals() {
    let animalName = document.getElementById("animalName").value;
    let animalKind = document.getElementById("animalKind").value;

    function Animal(name, kind,) {
        this.name = name;
        this.kind = kind;
    
        this.speak = function() {
            return `Hello!!! My name is ${this.name}. I am a ${this.kind}.`;
        }
    }

    let animalInput = new Animal(animalName, animalKind);

    console.log(animalInput.speak());

    let speak = document.getElementById("sentence");
    speak.innerHTML = animalInput.speak();

}