﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TreeHouseDefense
{
    class LongRangeTower : Tower
    {

        protected override int Range { get; } = 3;

        public LongRangeTower(MapLocation location) : base(location)
        { }


    }
}
