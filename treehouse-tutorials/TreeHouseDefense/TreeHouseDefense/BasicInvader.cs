﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TreeHouseDefense
{
    class BasicInvader : Invader
    {

        public override int Health { get; protected set; } = 2;

        public BasicInvader(Path path) : base(path)
        { }
    }
}
