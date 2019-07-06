using System;
using System.Collections.Generic;
using System.Text;

namespace cSharpFundamental
{
    public abstract class DataAccess
    {   
        public virtual string getConnectionString()
        {
            Console.WriteLine("getting the connection string");
            return "getting the connection string";
        }

        public abstract void saveData();
        public abstract void loadData();
    }

    public class Mysql : DataAccess
    {
        public override string getConnectionString()
        {
            return base.getConnectionString();
        }
        public override void loadData()
        {
            throw new NotImplementedException();
        }

        public override void saveData()
        {
            throw new NotImplementedException();
        }
    }
}
