/*
    Task 1: 
    - Implement a Child class that extends the Parent.
    - Add a constructor to the Child class can calls super().
    - Implement a new function addNewAbilities(newAbility) where the new ability will be added to the Parent's #abilities array.     
*/
class Parent{
    abilities = []

    constructor(){
        this.abilities.push("Parenting");
        this.abilities.push("Role modeling");
    }

    showAbilities(){
        console.log("These are the abilities:")
        for(const a of this.abilities){
            console.log(a);
        }
    }
}

const p = new Parent();
p.showAbilities(); // Observe that this function prints "Parenting" and "Role modeling".

// Task 1: class Child{ 
               super = []
             constructor(super) {
    this.super = super;
  }

           class Parent{
             abilities = []

           constructor(){
              this.abilities.push("Parenting");
              this.abilities.push("Role modeling");
    }

           showAbilities(){
              console.log("These are the abilities:")
              for(const a of this.abilities){
                console.log(a);
        }
              Parent.addNewAbilities(this)
}
    static addNewAbilities(newAbility){
        newAbility.push(newAbility);
    }
    static getNewAbilities(){
        return newAbility;
    }
              

const c = new Child();
c.addNewAbility("Dancing");
c.showAbilities(); // This function should print "Parenting", "Role modeling" and "Dancing".