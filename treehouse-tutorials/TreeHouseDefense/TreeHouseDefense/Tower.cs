using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TreeHouseDefense
{
    class Tower
    {

        protected virtual int Range { get; } = 1;
        protected virtual int Power { get; } = 1;
        protected virtual double Accuracy { get; } = 0.75;

        private readonly MapLocation _location;

        public Tower(MapLocation location)
        {
            _location = location;
        }

        public bool IsSuccessfulShot()
        {
            return Random.NextDouble() < Accuracy;
        }

        public void FireOnInvaders(IInvader[] invaders)
        {
            foreach (IInvader invader in invaders)
            {
                if(invader.IsActive && _location.InRangeOf(invader.Location, Range))
                {
                    if (IsSuccessfulShot())
                    {
                        invader.DecreaseHealth(Power);
                        

                        if (invader.IsNeutralized)
                        {
                            Console.WriteLine("Shot at and neutralized "+ invader.GetType().Name +" at " + invader.Location + " !");
                        }

                    }
                    else
                    {
                        Console.WriteLine("Shot at and missed an invader");

                    }
                    break;
                }
            }
        }
    }
}