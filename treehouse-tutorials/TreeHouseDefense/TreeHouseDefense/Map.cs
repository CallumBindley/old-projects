using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TreeHouseDefense
{
    class Map
    {
        public readonly int Width;  // map object cant have size changed after creation "readonly" 
        public readonly int Height;

        public Map(int width, int height)  // map must have size specified when object created.
        {
            Width = width;
            Height = height;

        }

        public bool OnMap(Point point)
        {
            return point.X >= 0 && point.X < Width && 
                   point.Y >= 0 && point.Y < Height;

        }
        
    }
}
