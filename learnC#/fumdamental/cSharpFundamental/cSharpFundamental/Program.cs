using System;

namespace cSharpFundamental
{   
    

    class Program
    {
        static void Main(string[] args)
        {
            var dog = new Dog();
            dog.name = "chiquaqua";
            dog.age = 12;
            dog.plusAge();
            dog.printBase();
            var cat = new Cat();
            cat.name = "mememe";
            cat.printBase();
            cat.age = 1;
            cat.plusAge();
            cat.printBase();
   
        }
    }
}