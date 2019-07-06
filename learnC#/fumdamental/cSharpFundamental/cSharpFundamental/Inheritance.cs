using System;
using System.Collections.Generic;
using System.Text;

namespace cSharpFundamental
{
    public class Animals
    {
        public string name;
        public int age;
        public Animals()
        {
        }
        public void printBase()
        {
            Console.WriteLine("name : " + name);
            Console.WriteLine("age : " + age);
        }
    }

    public class Dog : Animals
    {
        public void bark()
        {
            Console.WriteLine("Dog says gau gau");
        }
        public void plusAge()
        {
            base.age += 1;
        }
    }

    public class Cat : Animals
    {
        public void meow()
        {
            Console.WriteLine("Cat says meow meow");
        }
        public void plusAge()
        {
            base.age += 1;
        }
    }

}
