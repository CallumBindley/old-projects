using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TreeHouseDefense
{
    class TreeHouseDefenseException : Exception
    {
        public TreeHouseDefenseException()
        {
        }

        public TreeHouseDefenseException(string message) : base(message)
        {
        }
    }

    class OutOfBoundsException : TreeHouseDefenseException
    {
        public OutOfBoundsException()
        {
        }

        public OutOfBoundsException(string message) : base(message)
        {
        }
    }
}
